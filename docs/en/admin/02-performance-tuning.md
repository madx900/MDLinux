---
sidebar_position: 2
title: Performance Tuning
description: Learn how to optimize Linux system performance
---

# Linux Performance Tuning

## Overview

Performance tuning is essential for maintaining optimal system performance. This guide covers various aspects of Linux performance optimization.

## CPU Optimization

### 1. CPU Governor
```bash
# View current CPU governor
cat /sys/devices/system/cpu/cpu*/cpufreq/scaling_governor

# Set performance governor
echo performance | sudo tee /sys/devices/system/cpu/cpu*/cpufreq/scaling_governor
```

### 2. Process Priority
```bash
# Set process priority (nice)
nice -n 10 command
renice 10 -p PID

# Real-time priority
chrt -f 99 command
```

## Memory Management

### 1. Swap Configuration
```bash
# View swap usage
swapon --show
free -h

# Adjust swappiness
sysctl vm.swappiness=60
```

### 2. Memory Limits
```bash
# View current limits
ulimit -a

# Set memory limits
ulimit -m SIZE
```

## Disk I/O Optimization

### 1. I/O Scheduler
```bash
# View current scheduler
cat /sys/block/sda/queue/scheduler

# Change scheduler
echo deadline > /sys/block/sda/queue/scheduler
```

### 2. File System Tuning
```bash
# Mount options
mount -o noatime,nodiratime /dev/sda1 /mount/point

# Tune ext4 filesystem
tune2fs -o journal_data_writeback /dev/sda1
```

## Network Performance

### 1. Network Stack Tuning
```bash
# TCP settings
sysctl net.ipv4.tcp_window_scaling=1
sysctl net.core.rmem_max=16777216
```

### 2. Network Interface
```bash
# Set MTU
ip link set dev eth0 mtu 9000

# Set queue length
ethtool -G eth0 rx 4096
```

## System Services

### 1. Service Management
```bash
# Disable unnecessary services
systemctl disable service-name

# Optimize service settings
systemctl edit service-name
```

### 2. Boot Time Optimization
```bash
# Analyze boot time
systemd-analyze blame
systemd-analyze critical-chain
```

## Performance Monitoring Tools

### 1. System Load
```bash
# Monitor system load
uptime
sar -q 1 10
```

### 2. Resource Usage
```bash
# Process monitoring
top -b -n 1
pidstat 1 10
```

## Best Practices

1. **Baseline Performance**
   - Document normal performance
   - Set performance targets
   - Regular monitoring

2. **Systematic Approach**
   - Identify bottlenecks
   - Test changes individually
   - Document modifications

3. **Regular Maintenance**
   - Clean temporary files
   - Update system packages
   - Review system logs

## Performance Testing

### 1. CPU Testing
```bash
# Stress test CPU
stress-ng --cpu 8 --timeout 60s
```

### 2. Memory Testing
```bash
# Test memory performance
memtester 1G 1
```

### 3. Disk Testing
```bash
# Test disk I/O
fio --name=test --filename=test --size=1G
```

## Next Steps

- [Log Management](/en/admin/03-log-management)
- [Backup Strategies](/en/admin/04-backup-strategies)
- [Advanced Security](/en/security/02-advanced-security)
