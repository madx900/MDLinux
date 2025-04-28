---
sidebar_position: 9
title: Specialized Labs & Certification
description: Specialized scenarios, certification preparation materials, and hands-on labs for Linux mastery
---

# Specialized Labs & Certification Prep

## Linux Certification Preparation

### RHCSA (Red Hat Certified System Administrator)
Key topics and practice exercises for RHCSA certification:

#### 1. Essential Commands
```bash
# Practice managing files and directories
find /etc -type f -mtime -7    # Files modified in last 7 days
tar -czvf backup.tar.gz /etc/* # Create compressed archive
stat /etc/passwd               # View file metadata

# User management exercises
useradd -m -s /bin/bash newuser
usermod -aG wheel newuser
passwd newuser
```

#### 2. Service Management
```bash
# Practice with systemd
systemctl list-dependencies sshd
systemctl list-units --type=service
systemctl edit --full nginx

# Create custom service
cat > /etc/systemd/system/myapp.service << EOF
[Unit]
Description=My Custom Application
After=network.target

[Service]
ExecStart=/usr/local/bin/myapp
Restart=always
User=myapp

[Install]
WantedBy=multi-user.target
EOF
```

#### 3. Storage Management
```bash
# LVM practice
pvcreate /dev/sdb1
vgcreate vg_data /dev/sdb1
lvcreate -L 10G -n lv_data vg_data
mkfs.xfs /dev/vg_data/lv_data
```

### LPIC-1 Preparation
Essential topics for LPIC-1 certification:

#### 1. System Architecture
```bash
# Hardware information
lspci -v
lsusb -v
dmidecode
uname -a

# Boot process
journalctl -b
dmesg | grep -i error
```

#### 2. Package Management
```bash
# APT exercises
apt-cache search ^nginx
apt-cache policy nginx
apt-get build-dep nginx

# RPM exercises
rpm -qa | grep kernel
rpm -qf /usr/bin/python3
rpm -ql bash
```

## Specialized Scenarios

### Scenario 9: Kubernetes Cluster Issues
Troubleshooting Kubernetes cluster problems:

```bash
# 1. Check node status
kubectl get nodes
kubectl describe node problematic-node

# 2. Pod issues
kubectl get pods --all-namespaces
kubectl logs failing-pod -n namespace
kubectl describe pod failing-pod -n namespace

# 3. Network policies
kubectl get networkpolicies --all-namespaces
kubectl describe networkpolicy restrictive-policy

# 4. Storage problems
kubectl get pv,pvc --all-namespaces
kubectl describe pv persistent-volume
```

### Scenario 10: Load Balancer Configuration
Setting up and troubleshooting HAProxy:

```bash
# 1. HAProxy configuration
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

# 2. Verify configuration
haproxy -c -f /etc/haproxy/haproxy.cfg

# 3. Monitor statistics
watch 'echo "show stat" | socat unix-connect:/var/run/haproxy.sock stdio'
```

### Scenario 11: Database Replication
Setting up MySQL master-slave replication:

```bash
# 1. Master configuration
cat >> /etc/mysql/mysql.conf.d/mysqld.cnf << EOF
server-id = 1
log_bin = /var/log/mysql/mysql-bin.log
binlog_do_db = myapp_db
EOF

# 2. Create replication user
mysql -e "
CREATE USER 'repl'@'%' IDENTIFIED BY 'password';
GRANT REPLICATION SLAVE ON *.* TO 'repl'@'%';
FLUSH PRIVILEGES;
"

# 3. Get master status
mysql -e "SHOW MASTER STATUS\G"

# 4. Slave configuration
mysql -e "
CHANGE MASTER TO
    MASTER_HOST='master_ip',
    MASTER_USER='repl',
    MASTER_PASSWORD='password',
    MASTER_LOG_FILE='mysql-bin.000001',
    MASTER_LOG_POS=123;
START SLAVE;
"

# 5. Monitor replication
mysql -e "SHOW SLAVE STATUS\G"
```

## Hands-on Labs

### Lab 1: High Availability Setup
Create a highly available web service using Keepalived and Nginx:

```bash
# 1. Install required packages
apt install -y keepalived nginx

# 2. Configure Keepalived
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

# 3. Configure Nginx
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

# 4. Test configuration
nginx -t
systemctl restart nginx keepalived
```

### Lab 2: Security Hardening
Implement system security measures:

```bash
# 1. Configure SSH hardening
cat >> /etc/ssh/sshd_config << EOF
PermitRootLogin no
PasswordAuthentication no
MaxAuthTries 3
Protocol 2
X11Forwarding no
AllowUsers admin maintainer
EOF

# 2. Set up fail2ban
cat > /etc/fail2ban/jail.local << EOF
[sshd]
enabled = true
port = ssh
filter = sshd
logpath = /var/log/auth.log
maxretry = 3
bantime = 3600
EOF

# 3. Configure system limits
cat >> /etc/security/limits.conf << EOF
* soft nofile 65535
* hard nofile 65535
* soft nproc 4096
* hard nproc 4096
EOF

# 4. Set up auditd rules
cat > /etc/audit/rules.d/audit.rules << EOF
-w /etc/passwd -p wa -k identity
-w /etc/group -p wa -k identity
-w /etc/shadow -p wa -k identity
-w /var/log/auth.log -p wa -k auth_log
EOF
```

### Lab 3: Performance Optimization
Optimize system performance:

```bash
# 1. Configure system parameters
cat > /etc/sysctl.d/99-performance.conf << EOF
# Increase file descriptors
fs.file-max = 2097152

# Optimize network
net.core.somaxconn = 65535
net.ipv4.tcp_max_syn_backlog = 65535
net.core.netdev_max_backlog = 65535

# VM settings
vm.swappiness = 10
vm.dirty_ratio = 60
vm.dirty_background_ratio = 2
EOF

# 2. Set up resource monitoring
cat > /usr/local/bin/monitor.sh << EOF
#!/bin/bash
while true; do
    date >> /var/log/performance.log
    echo "CPU Usage:" >> /var/log/performance.log
    mpstat 1 1 >> /var/log/performance.log
    echo "Memory Usage:" >> /var/log/performance.log
    free -m >> /var/log/performance.log
    echo "Disk I/O:" >> /var/log/performance.log
    iostat -x 1 1 >> /var/log/performance.log
    sleep 300
done
EOF
chmod +x /usr/local/bin/monitor.sh

# 3. Create systemd service for monitoring
cat > /etc/systemd/system/performance-monitor.service << EOF
[Unit]
Description=Performance Monitoring Service
After=network.target

[Service]
ExecStart=/usr/local/bin/monitor.sh
Restart=always

[Install]
WantedBy=multi-user.target
EOF
```

## Next Steps

- [Advanced Security Hardening](/en/security/02-advanced-security)
- [Performance Tuning Deep Dive](/en/admin/02-performance-tuning)
- [High Availability Setup](/en/admin/03-log-management)
