---
sidebar_position: 8
title: Troubleshooting & Quizzes
description: Detailed troubleshooting scenarios, interactive quizzes, and comprehensive video tutorials
---

# Advanced Troubleshooting & Interactive Learning

## Extended Video Tutorials

### System Administration
1. [Linux File System Hierarchy](https://www.youtube.com/watch?v=example7)
   - Understanding `/etc`, `/var`, `/usr`
   - File system organization
   - Mount points and partitions

2. [Process Management Deep Dive](https://www.youtube.com/watch?v=example8)
   - Understanding process states
   - Priority and nice values
   - Resource limits

3. [Advanced Package Management](https://www.youtube.com/watch?v=example9)
   - Repository management
   - Package dependencies
   - Custom package creation

### Security
1. [SELinux Configuration](https://www.youtube.com/watch?v=example10)
   - SELinux modes and contexts
   - Policy management
   - Troubleshooting SELinux issues

2. [Firewall Management](https://www.youtube.com/watch?v=example11)
   - iptables deep dive
   - nftables configuration
   - Zone-based firewalls

### Performance Tuning
1. [System Performance Analysis](https://www.youtube.com/watch?v=example12)
   - Performance monitoring tools
   - Resource bottleneck identification
   - System optimization techniques

## Advanced Troubleshooting Scenarios

### Scenario 5: Database Server Issues
Diagnosing and fixing database performance problems:

```bash
# 1. Check MySQL/PostgreSQL logs
tail -f /var/log/mysql/error.log
journalctl -u postgresql

# 2. Monitor database connections
netstat -an | grep :3306 | wc -l
pg_stat_activity

# 3. Check slow queries
mysqldumpslow /var/log/mysql/slow-query.log
pg_stat_statements

# 4. Analyze table statistics
mysqlcheck -A
vacuumdb --analyze --verbose
```

### Scenario 6: Web Server Problems
Apache/Nginx troubleshooting:

```bash
# 1. Check web server status
systemctl status nginx
apache2ctl -S

# 2. Test configuration
nginx -t
apachectl configtest

# 3. Monitor access patterns
tail -f /var/log/nginx/access.log | grep -v "200 OK"
goaccess /var/log/apache2/access.log

# 4. Check SSL certificates
openssl x509 -text -noout -in /etc/ssl/certs/website.crt
certbot certificates
```

### Scenario 7: Container Issues
Docker/Podman troubleshooting:

```bash
# 1. Check container health
docker stats
docker ps -a --filter status=exited

# 2. Analyze container logs
docker logs --tail 100 container_name
podman logs --since 10m container_name

# 3. Inspect networking
docker network inspect bridge
podman network ls

# 4. Check resource constraints
docker inspect container_name | grep -A 10 "HostConfig"
```

### Scenario 8: File System Corruption
Advanced file system recovery:

```bash
# 1. Check journal status
tune2fs -l /dev/sda1 | grep "Filesystem state"
xfs_db -r /dev/sda2 -c "state"

# 2. Backup superblock
dd if=/dev/sda1 of=/root/sb-backup bs=4096 count=1

# 3. Force fsck in read-only mode
fsck.ext4 -n /dev/sda1
xfs_repair -n /dev/sda2

# 4. Recover deleted files
extundelete /dev/sda1 --restore-all
debugfs -w /dev/sda1
```

## Interactive Quizzes

### Quiz 1: System Administration
<details>
<summary>What command shows real-time process information?</summary>

- [ ] ps aux
- [x] top
- [ ] ls -l
- [ ] df -h

**Explanation**: `top` provides real-time system statistics and process information, updating regularly by default.
</details>

<details>
<summary>Which directory contains system configuration files?</summary>

- [x] /etc
- [ ] /var
- [ ] /usr
- [ ] /bin

**Explanation**: `/etc` is the standard directory for system configuration files in Linux.
</details>

### Quiz 2: Networking
<details>
<summary>Which tool traces the route packets take to a host?</summary>

- [ ] ping
- [ ] netstat
- [x] traceroute
- [ ] nslookup

**Explanation**: `traceroute` shows the path packets take to reach a destination, including all intermediate hops.
</details>

<details>
<summary>What command shows listening ports?</summary>

- [ ] ifconfig
- [x] netstat -tuln
- [ ] route
- [ ] arp

**Explanation**: `netstat -tuln` shows all TCP and UDP listening ports in numeric format.
</details>

### Quiz 3: Security
<details>
<summary>Which file stores user password hashes?</summary>

- [ ] /etc/passwd
- [x] /etc/shadow
- [ ] /etc/group
- [ ] /etc/users

**Explanation**: `/etc/shadow` stores encrypted password hashes and is only readable by root.
</details>

<details>
<summary>What command changes file permissions?</summary>

- [ ] chown
- [x] chmod
- [ ] chgrp
- [ ] umask

**Explanation**: `chmod` modifies file permissions (read, write, execute) for owner, group, and others.
</details>

## Practical Exercises

### Exercise 1: System Analysis
Create a script that generates a comprehensive system report:

```bash
#!/bin/bash

echo "=== System Analysis Report ==="
date

# System Information
echo -e "\n1. System Information:"
uname -a
lsb_release -a 2>/dev/null

# CPU Information
echo -e "\n2. CPU Details:"
lscpu | grep -E "Model name|Socket|Core|Thread"

# Memory Usage
echo -e "\n3. Memory Status:"
free -h
vmstat 1 5

# Disk Usage
echo -e "\n4. Disk Usage:"
df -h
iostat -x 2 3

# Network Status
echo -e "\n5. Network Connections:"
ss -tuln
ip -s link

# Process Summary
echo -e "\n6. Top Processes:"
ps aux --sort=-%cpu | head -6
```

### Exercise 2: Security Audit
Create a basic security audit script:

```bash
#!/bin/bash

echo "=== Security Audit Report ==="
date

# Check for failed login attempts
echo -e "\n1. Failed Login Attempts:"
grep "Failed password" /var/log/auth.log | tail -5

# List users with UID 0
echo -e "\n2. Users with Root Privileges:"
awk -F: '$3 == 0 {print $1}' /etc/passwd

# Check listening ports
echo -e "\n3. Open Ports:"
netstat -tuln | grep LISTEN

# List SUID files
echo -e "\n4. SUID Files:"
find / -perm -4000 -type f 2>/dev/null

# Check password policies
echo -e "\n5. Password Policies:"
grep -E "PASS_MAX_DAYS|PASS_MIN_DAYS" /etc/login.defs
```

## Next Steps

- [Advanced System Monitoring](/en/admin/03-log-management)
- [Network Security](/en/networking/03-network-security)
- [Performance Optimization](/en/admin/02-performance-tuning)
