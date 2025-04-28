---
sidebar_position: 1
title: System Monitoring
description: Learn how to monitor system resources and performance in Linux
---

# System Monitoring in Linux

## Overview

System monitoring is crucial for maintaining the health and performance of Linux systems. This guide covers essential monitoring tools and techniques.

## Basic Monitoring Commands

### 1. top - Process Monitor
```bash
top
```
The `top` command provides real-time system statistics:
- CPU usage
- Memory usage
- Running processes
- Load averages

### 2. htop - Enhanced Process Monitor
```bash
htop
```
An improved version of top with:
- Color-coded output
- Mouse support
- Vertical and horizontal scrolling
- Tree view

### 3. System Memory Status
```bash
free -h
```
Shows:
- Total memory
- Used memory
- Free memory
- Swap usage

### 4. Disk Usage
```bash
df -h
```
Displays:
- Mounted filesystems
- Total space
- Used space
- Available space

## Advanced Monitoring Tools

### 1. sar (System Activity Reporter)
```bash
sar -u 1 5  # CPU usage every 1 second for 5 times
sar -r 1 5  # Memory usage
sar -b 1 5  # I/O statistics
```

### 2. vmstat (Virtual Memory Statistics)
```bash
vmstat 1 5  # Report every 1 second for 5 times
```
Shows:
- Memory usage
- Swap usage
- I/O statistics
- System activity

### 3. iostat (Input/Output Statistics)
```bash
iostat -x 1 5  # Extended stats every 1 second for 5 times
```
Monitors:
- CPU utilization
- Device I/O statistics
- NFS statistics

## Monitoring Best Practices

1. **Regular Monitoring**
   - Set up scheduled monitoring
   - Keep historical data
   - Establish baselines

2. **Alert Configuration**
   - Set appropriate thresholds
   - Configure notification methods
   - Avoid alert fatigue

3. **Resource Planning**
   - Monitor trends
   - Plan capacity
   - Predict future needs

## Automated Monitoring

### 1. Prometheus
- Open-source monitoring system
- Time-series database
- Powerful querying language
- Extensive alerting capabilities

### 2. Grafana
- Visualization platform
- Dashboard creation
- Alert management
- Data source integration

## Troubleshooting Common Issues

1. **High CPU Usage**
   ```bash
   ps aux --sort=-%cpu | head -n 10
   ```

2. **Memory Problems**
   ```bash
   ps aux --sort=-%mem | head -n 10
   ```

3. **Disk Space Issues**
   ```bash
   du -sh /* | sort -hr
   ```

## Next Steps

- [Performance Tuning](/en/admin/02-performance-tuning)
- [Log Management](/en/admin/03-log-management)
- [Backup Strategies](/en/admin/04-backup-strategies)
