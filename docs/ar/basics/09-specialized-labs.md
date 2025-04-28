---
sidebar_position: 9
title: المختبرات المتخصصة والشهادات
description: سيناريوهات متخصصة، مواد تحضير الشهادات، ومختبرات عملية لإتقان لينكس
---

# المختبرات المتخصصة وتحضير الشهادات

<div dir="rtl">

## تحضير شهادات لينكس

### RHCSA (مدير نظام Red Hat المعتمد)
المواضيع الرئيسية وتمارين التدريب لشهادة RHCSA:

#### 1. الأوامر الأساسية
```bash
# تدريب على إدارة الملفات والمجلدات
find /etc -type f -mtime -7    # الملفات المعدلة في آخر 7 أيام
tar -czvf backup.tar.gz /etc/* # إنشاء أرشيف مضغوط
stat /etc/passwd               # عرض بيانات الملف التعريفية

# تمارين إدارة المستخدمين
useradd -m -s /bin/bash newuser
usermod -aG wheel newuser
passwd newuser
```

#### 2. إدارة الخدمات
```bash
# التدريب مع systemd
systemctl list-dependencies sshd
systemctl list-units --type=service
systemctl edit --full nginx

# إنشاء خدمة مخصصة
cat > /etc/systemd/system/myapp.service << EOF
[Unit]
Description=تطبيقي المخصص
After=network.target

[Service]
ExecStart=/usr/local/bin/myapp
Restart=always
User=myapp

[Install]
WantedBy=multi-user.target
EOF
```

#### 3. إدارة التخزين
```bash
# تدريب LVM
pvcreate /dev/sdb1
vgcreate vg_data /dev/sdb1
lvcreate -L 10G -n lv_data vg_data
mkfs.xfs /dev/vg_data/lv_data
```

### تحضير LPIC-1
المواضيع الأساسية لشهادة LPIC-1:

#### 1. بنية النظام
```bash
# معلومات الأجهزة
lspci -v
lsusb -v
dmidecode
uname -a

# عملية الإقلاع
journalctl -b
dmesg | grep -i error
```

#### 2. إدارة الحزم
```bash
# تمارين APT
apt-cache search ^nginx
apt-cache policy nginx
apt-get build-dep nginx

# تمارين RPM
rpm -qa | grep kernel
rpm -qf /usr/bin/python3
rpm -ql bash
```

## سيناريوهات متخصصة

### السيناريو 9: مشاكل مجموعة Kubernetes
استكشاف وإصلاح مشاكل مجموعة Kubernetes:

```bash
# 1. التحقق من حالة العقد
kubectl get nodes
kubectl describe node problematic-node

# 2. مشاكل Pod
kubectl get pods --all-namespaces
kubectl logs failing-pod -n namespace
kubectl describe pod failing-pod -n namespace

# 3. سياسات الشبكة
kubectl get networkpolicies --all-namespaces
kubectl describe networkpolicy restrictive-policy

# 4. مشاكل التخزين
kubectl get pv,pvc --all-namespaces
kubectl describe pv persistent-volume
```

### السيناريو 10: تكوين موازن الحمل
إعداد واستكشاف أخطاء HAProxy:

```bash
# 1. تكوين HAProxy
cat > /etc/haproxy/haproxy.cfg << EOF
global
    log /dev/log local0
    maxconn 4096
    user haproxy
    group haproxy

defaults
    log     global
    mode    http
    option  httplog
    timeout connect 5000
    timeout client  50000
    timeout server  50000

frontend http_front
    bind *:80
    stats uri /haproxy?stats
    default_backend http_back

backend http_back
    balance roundrobin
    server web1 10.0.0.1:80 check
    server web2 10.0.0.2:80 check
EOF

# 2. التحقق من التكوين
haproxy -c -f /etc/haproxy/haproxy.cfg

# 3. مراقبة الإحصائيات
watch 'echo "show stat" | socat unix-connect:/var/run/haproxy.sock stdio'
```

### السيناريو 11: تكرار قاعدة البيانات
إعداد تكرار MySQL الرئيسي-التابع:

```bash
# 1. تكوين الخادم الرئيسي
cat >> /etc/mysql/mysql.conf.d/mysqld.cnf << EOF
server-id = 1
log_bin = /var/log/mysql/mysql-bin.log
binlog_do_db = myapp_db
EOF

# 2. إنشاء مستخدم التكرار
mysql -e "
CREATE USER 'repl'@'%' IDENTIFIED BY 'password';
GRANT REPLICATION SLAVE ON *.* TO 'repl'@'%';
FLUSH PRIVILEGES;
"

# 3. الحصول على حالة الخادم الرئيسي
mysql -e "SHOW MASTER STATUS\G"

# 4. تكوين الخادم التابع
mysql -e "
CHANGE MASTER TO
    MASTER_HOST='master_ip',
    MASTER_USER='repl',
    MASTER_PASSWORD='password',
    MASTER_LOG_FILE='mysql-bin.000001',
    MASTER_LOG_POS=123;
START SLAVE;
"

# 5. مراقبة التكرار
mysql -e "SHOW SLAVE STATUS\G"
```

## المختبرات العملية

### المختبر 1: إعداد التوافر العالي
إنشاء خدمة ويب عالية التوافر باستخدام Keepalived وNginx:

```bash
# 1. تثبيت الحزم المطلوبة
apt install -y keepalived nginx

# 2. تكوين Keepalived
cat > /etc/keepalived/keepalived.conf << EOF
vrrp_script check_nginx {
    script "killall -0 nginx"
    interval 2
    weight 2
}

vrrp_instance VI_1 {
    state MASTER
    interface eth0
    virtual_router_id 51
    priority 101
    authentication {
        auth_type PASS
        auth_pass secret123
    }
    virtual_ipaddress {
        192.168.1.100
    }
    track_script {
        check_nginx
    }
}
EOF

# 3. تكوين Nginx
cat > /etc/nginx/conf.d/ha.conf << EOF
upstream backend {
    server 192.168.1.101:80;
    server 192.168.1.102:80;
}

server {
    listen 80;
    server_name example.com;

    location / {
        proxy_pass http://backend;
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
    }
}
EOF

# 4. اختبار التكوين
nginx -t
systemctl restart nginx keepalived
```

### المختبر 2: تعزيز الأمان
تنفيذ إجراءات أمان النظام:

```bash
# 1. تكوين تقوية SSH
cat >> /etc/ssh/sshd_config << EOF
PermitRootLogin no
PasswordAuthentication no
MaxAuthTries 3
Protocol 2
X11Forwarding no
AllowUsers admin maintainer
EOF

# 2. إعداد fail2ban
cat > /etc/fail2ban/jail.local << EOF
[sshd]
enabled = true
port = ssh
filter = sshd
logpath = /var/log/auth.log
maxretry = 3
bantime = 3600
EOF

# 3. تكوين حدود النظام
cat >> /etc/security/limits.conf << EOF
* soft nofile 65535
* hard nofile 65535
* soft nproc 4096
* hard nproc 4096
EOF

# 4. إعداد قواعد auditd
cat > /etc/audit/rules.d/audit.rules << EOF
-w /etc/passwd -p wa -k identity
-w /etc/group -p wa -k identity
-w /etc/shadow -p wa -k identity
-w /var/log/auth.log -p wa -k auth_log
EOF
```

### المختبر 3: تحسين الأداء
تحسين أداء النظام:

```bash
# 1. تكوين معلمات النظام
cat > /etc/sysctl.d/99-performance.conf << EOF
# زيادة واصفات الملفات
fs.file-max = 2097152

# تحسين الشبكة
net.core.somaxconn = 65535
net.ipv4.tcp_max_syn_backlog = 65535
net.core.netdev_max_backlog = 65535

# إعدادات الذاكرة الافتراضية
vm.swappiness = 10
vm.dirty_ratio = 60
vm.dirty_background_ratio = 2
EOF

# 2. إعداد مراقبة الموارد
cat > /usr/local/bin/monitor.sh << EOF
#!/bin/bash
while true; do
    date >> /var/log/performance.log
    echo "استخدام المعالج:" >> /var/log/performance.log
    mpstat 1 1 >> /var/log/performance.log
    echo "استخدام الذاكرة:" >> /var/log/performance.log
    free -m >> /var/log/performance.log
    echo "إدخال/إخراج القرص:" >> /var/log/performance.log
    iostat -x 1 1 >> /var/log/performance.log
    sleep 300
done
EOF
chmod +x /usr/local/bin/monitor.sh

# 3. إنشاء خدمة systemd للمراقبة
cat > /etc/systemd/system/performance-monitor.service << EOF
[Unit]
Description=خدمة مراقبة الأداء
After=network.target

[Service]
ExecStart=/usr/local/bin/monitor.sh
Restart=always

[Install]
WantedBy=multi-user.target
EOF
```

## الخطوات التالية

- [تقوية الأمان المتقدم](/ar/security/02-advanced-security)
- [تعمق في ضبط الأداء](/ar/admin/02-performance-tuning)
- [إعداد التوافر العالي](/ar/admin/03-log-management)

</div>
