---
sidebar_position: 7
title: Advanced Challenges & Troubleshooting
description: Advanced Linux challenges, video tutorials, and real-world troubleshooting scenarios
---

# Advanced Challenges & Troubleshooting

## Video Tutorials

### Essential Linux Commands
- [Introduction to Linux Command Line](https://www.youtube.com/watch?v=example1)
- [File System Navigation](https://www.youtube.com/watch?v=example2)
- [Text Processing with grep, sed, and awk](https://www.youtube.com/watch?v=example3)

### System Administration
- [User Management in Linux](https://www.youtube.com/watch?v=example4)
- [Network Configuration](https://www.youtube.com/watch?v=example5)
- [Security Hardening](https://www.youtube.com/watch?v=example6)

## Advanced Challenges

### Challenge 1: System Monitor
Create a system monitoring script that:
1. Monitors CPU, Memory, and Disk usage
2. Sends alerts when thresholds are exceeded
3. Logs historical data

```bash
#!/bin/bash

# Configuration
CPU_THRESHOLD=80
MEM_THRESHOLD=90
DISK_THRESHOLD=85
LOG_FILE="/var/log/system_monitor.log"

# Function to check CPU usage
check_cpu() {
    cpu_usage=$(top -bn1 | grep "Cpu(s)" | awk '{print $2}' | cut -d. -f1)
    if [ $cpu_usage -gt $CPU_THRESHOLD ]; then
        echo "$(date): High CPU usage: $cpu_usage%" >> $LOG_FILE
        notify-send "Warning: High CPU Usage" "Current: $cpu_usage%"
    fi
}

# Function to check memory usage
check_memory() {
    mem_usage=$(free | grep Mem | awk '{print $3/$2 * 100.0}' | cut -d. -f1)
    if [ $mem_usage -gt $MEM_THRESHOLD ]; then
        echo "$(date): High memory usage: $mem_usage%" >> $LOG_FILE
        notify-send "Warning: High Memory Usage" "Current: $mem_usage%"
    fi
}

# Function to check disk usage
check_disk() {
    disk_usage=$(df -h / | tail -1 | awk '{print $5}' | cut -d% -f1)
    if [ $disk_usage -gt $DISK_THRESHOLD ]; then
        echo "$(date): High disk usage: $disk_usage%" >> $LOG_FILE
        notify-send "Warning: High Disk Usage" "Current: $disk_usage%"
    fi
}

# Main loop
while true; do
    check_cpu
    check_memory
    check_disk
    sleep 300  # Check every 5 minutes
done
```

### Challenge 2: Log Analyzer
Create a script that analyzes log files and generates reports:

```bash
#!/bin/bash

# Configuration
LOG_DIR="/var/log"
REPORT_DIR="/root/reports"
DATE=$(date +%Y%m%d)

# Create report directory
mkdir -p $REPORT_DIR

# Function to analyze authentication attempts
analyze_auth() {
    echo "=== Authentication Report ===" > $REPORT_DIR/auth_report_$DATE.txt
    echo "Failed login attempts:" >> $REPORT_DIR/auth_report_$DATE.txt
    grep "Failed password" /var/log/auth.log | awk '{print $11}' | sort | uniq -c | sort -nr >> $REPORT_DIR/auth_report_$DATE.txt
    
    echo -e "\nSuccessful logins:" >> $REPORT_DIR/auth_report_$DATE.txt
    grep "session opened" /var/log/auth.log | awk '{print $11}' | sort | uniq -c >> $REPORT_DIR/auth_report_$DATE.txt
}

# Function to analyze system resources
analyze_resources() {
    echo "=== Resource Usage Report ===" > $REPORT_DIR/resource_report_$DATE.txt
    echo "Top CPU consuming processes:" >> $REPORT_DIR/resource_report_$DATE.txt
    ps aux --sort=-%cpu | head -11 >> $REPORT_DIR/resource_report_$DATE.txt
    
    echo -e "\nMemory usage by process:" >> $REPORT_DIR/resource_report_$DATE.txt
    ps aux --sort=-%mem | head -11 >> $REPORT_DIR/resource_report_$DATE.txt
}

# Generate reports
analyze_auth
analyze_resources
```

### Challenge 3: Backup System
Create a comprehensive backup solution:

```bash
#!/bin/bash

# Configuration
SOURCE_DIR="/home"
BACKUP_DIR="/backup"
REMOTE_HOST="backup-server"
REMOTE_DIR="/remote-backup"
DATE=$(date +%Y%m%d_%H%M%S)

# Function to create local backup
create_local_backup() {
    tar -czf $BACKUP_DIR/backup_$DATE.tar.gz $SOURCE_DIR
    
    # Keep only last 5 backups
    ls -t $BACKUP_DIR/backup_*.tar.gz | tail -n +6 | xargs -r rm
}

# Function to sync to remote server
sync_remote() {
    rsync -avz $BACKUP_DIR/ $REMOTE_HOST:$REMOTE_DIR/
}

# Function to verify backup
verify_backup() {
    # Compare source and backup checksums
    find $SOURCE_DIR -type f -exec md5sum {} \; > /tmp/source_checksums
    cd $BACKUP_DIR
    tar -xzf backup_$DATE.tar.gz -C /tmp
    find /tmp/home -type f -exec md5sum {} \; > /tmp/backup_checksums
    
    # Report differences
    diff /tmp/source_checksums /tmp/backup_checksums
}

# Execute backup process
create_local_backup
verify_backup
sync_remote
```

## Troubleshooting Scenarios

### Scenario 1: System Won't Boot
Common issues and solutions:

```bash
# 1. Check system logs
journalctl -xb

# 2. Check disk status
fsck /dev/sda1

# 3. Boot in recovery mode
# At GRUB menu, select recovery mode
mount -o remount,rw /    # Make filesystem writable
```

### Scenario 2: Network Connection Issues
Steps to diagnose and fix network problems:

```bash
# 1. Check interface status
ip link show
ip addr show

# 2. Test DNS resolution
dig google.com
cat /etc/resolv.conf

# 3. Check routing
ip route show
traceroute google.com

# 4. Test local network
ping gateway_ip
```

### Scenario 3: High System Load
Investigate performance issues:

```bash
# 1. Check current load
uptime
top

# 2. Find resource-heavy processes
ps aux --sort=-%cpu | head -10
ps aux --sort=-%mem | head -10

# 3. Check disk I/O
iostat -x 1
iotop

# 4. Check for memory issues
free -h
vmstat 1
```

### Scenario 4: Security Breach
Steps to investigate potential security issues:

```bash
# 1. Check for unauthorized access
last
grep "Failed password" /var/log/auth.log

# 2. Check for suspicious processes
ps aux | grep -v "^$(whoami)"
lsof -i

# 3. Check for modified system files
find /bin /usr/bin -mtime -1

# 4. Look for unusual network connections
netstat -tupan
```

## Best Practices

### Security
1. Regular system updates
2. Strong password policies
3. Minimal necessary permissions
4. Regular security audits

### Performance
1. Resource monitoring
2. Log rotation
3. Disk space management
4. Service optimization

### Backup
1. Regular backups
2. Multiple backup locations
3. Backup testing
4. Recovery procedures

## Next Steps

- [Advanced System Administration](/en/admin/02-performance-tuning)
- [Security Hardening](/en/security/02-advanced-security)
- [Network Troubleshooting](/en/networking/04-network-troubleshooting)
