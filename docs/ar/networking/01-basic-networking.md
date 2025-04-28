---
sidebar_position: 1
title: أساسيات الشبكات
description: تعلم مفاهيم وأوامر الشبكات الأساسية في لينكس
---

# أساسيات الشبكات في لينكس

<div dir="rtl">

## تكوين الشبكة

### 1. واجهات الشبكة
```bash
# عرض واجهات الشبكة
ip link show
ifconfig -a

# تفعيل/تعطيل الواجهة
ip link set eth0 up
ip link set eth0 down
```

### 2. تكوين IP
```bash
# عرض عناوين IP
ip addr show
hostname -I

# تعيين IP ثابت
ip addr add 192.168.1.100/24 dev eth0
```

### 3. تكوين DNS
```bash
# عرض خوادم DNS
cat /etc/resolv.conf

# إضافة خادم DNS
echo "nameserver 8.8.8.8" >> /etc/resolv.conf
```

## اتصال الشبكة

### 1. الاختبار الأساسي
```bash
# اختبار الاتصال
ping -c 4 google.com

# تتبع المسار
traceroute google.com

# بحث DNS
nslookup google.com
dig google.com
```

### 2. إحصائيات الشبكة
```bash
# عرض إحصائيات الشبكة
netstat -tuln
ss -tuln

# عرض جدول التوجيه
ip route show
route -n
```

### 3. مراقبة الشبكة
```bash
# مراقبة حركة الشبكة
iftop
nethogs
```

## خدمات الشبكة

### 1. SSH (الشل الآمن)
```bash
# تشغيل خادم SSH
systemctl start sshd

# اتصال SSH
ssh username@remote_host

# نسخ آمن
scp file.txt username@remote_host:/path/
```

### 2. أنظمة ملفات الشبكة
```bash
# تحميل مشاركة NFS
mount -t nfs server:/share /mnt/nfs

# عرض مشاركات NFS
showmount -e server
```

### 3. خادم الويب
```bash
# تثبيت Apache
apt install apache2  # لـ Debian/Ubuntu
dnf install httpd    # لـ RHEL/CentOS

# تشغيل خادم الويب
systemctl start apache2
```

## أمان الشبكة

### 1. تكوين جدار الحماية
```bash
# UFW (جدار الحماية غير المعقد)
ufw enable
ufw allow ssh
ufw status

# firewalld
firewall-cmd --add-service=http
firewall-cmd --list-all
```

### 2. إدارة المنافذ
```bash
# التحقق من المنافذ المفتوحة
lsof -i
netstat -tulpn

# فحص المنافذ
nmap localhost
```

### 3. أدوات أمان الشبكة
```bash
# التقاط الحزم
tcpdump -i eth0

# ماسح الشبكة
nmap -sV 192.168.1.0/24
```

## استكشاف أخطاء الشبكة

### 1. مشاكل الاتصال
```bash
# التحقق من حالة الشبكة
systemctl status NetworkManager

# اختبار حل DNS
host google.com
dig +short google.com
```

### 2. مشاكل الأداء
```bash
# مراقبة عرض النطاق
iftop -i eth0

# التحقق من أخطاء الشبكة
ethtool -S eth0
```

### 3. الأدوات الشائعة
```bash
# تشخيص الشبكة
mtr google.com
nc -zv host port
```

## ملفات تكوين الشبكة

### 1. تكوين الواجهة
```bash
# لـ Debian/Ubuntu
/etc/network/interfaces

# لـ RHEL/CentOS
/etc/sysconfig/network-scripts/ifcfg-eth0
```

### 2. تكوين DNS
```bash
/etc/resolv.conf
/etc/hosts
```

### 3. خدمات الشبكة
```bash
/etc/services
/etc/protocols
```

## أفضل الممارسات

1. **أمان الشبكة**
   - تدقيق أمني منتظم
   - قواعد جدار حماية قوية
   - تحديثات أمنية محدثة

2. **التوثيق**
   - طوبولوجيا الشبكة
   - تعيينات عناوين IP
   - تكوينات الخدمة

3. **المراقبة**
   - أنماط حركة المرور
   - توفر الخدمة
   - أحداث الأمان

## الخطوات التالية

- [الشبكات المتقدمة](/ar/networking/02-advanced-networking)
- [أمان الشبكة](/ar/networking/03-network-security)
- [استكشاف أخطاء الشبكة](/ar/networking/04-network-troubleshooting)

</div>
