# Performance Monitoring Commands 📊

## System Resources

### 1. CPU Monitoring 💻

| Command | Description | Example |
|---------|-------------|---------|
| `top` | Real-time process viewer | `top` |
| `htop` | Interactive process viewer | `htop` |
| `mpstat` | CPU statistics | `mpstat 1` |
| `uptime` | Load average | `uptime` |
| `stress` | CPU stress testing | `stress --cpu 4` |

### 2. Memory Monitoring 🧠

| Command | Description | Example |
|---------|-------------|---------|
| `free` | Memory usage | `free -h` |
| `vmstat` | Virtual memory stats | `vmstat 1` |
| `pmap` | Process memory map | `pmap -x PID` |
| `smem` | Memory reporting | `smem -t` |
| `slabtop` | Kernel slab cache | `slabtop` |

## Disk Performance

### 1. Disk Usage 💽

| Command | Description | Example |
|---------|-------------|---------|
| `df` | Filesystem usage | `df -h` |
| `du` | Directory space usage | `du -sh *` |
| `iostat` | I/O statistics | `iostat -x 1` |
| `iotop` | I/O monitoring | `iotop` |
| `fio` | I/O benchmarking | `fio --name=test` |

### 2. Disk Management 🔧

| Command | Description | Example |
|---------|-------------|---------|
| `hdparm` | Disk parameters | `sudo hdparm -tT /dev/sda` |
| `smartctl` | SMART monitoring | `sudo smartctl -a /dev/sda` |
| `badblocks` | Check for bad blocks | `sudo badblocks -v /dev/sda` |
| `fsck` | Filesystem check | `sudo fsck /dev/sda1` |
| `tune2fs` | Filesystem tuning | `sudo tune2fs -l /dev/sda1` |

## Network Performance

### 1. Network Monitoring 🌐

| Command | Description | Example |
|---------|-------------|---------|
| `iftop` | Network bandwidth | `sudo iftop -i eth0` |
| `nethogs` | Per-process bandwidth | `sudo nethogs eth0` |
| `iperf3` | Network speed test | `iperf3 -s` |
| `nload` | Network load | `nload eth0` |
| `bmon` | Bandwidth monitor | `bmon` |

### 2. Network Statistics 📈

| Command | Description | Example |
|---------|-------------|---------|
| `netstat` | Network statistics | `netstat -tuln` |
| `ss` | Socket statistics | `ss -s` |
| `tcpdump` | Packet analyzer | `sudo tcpdump -i eth0` |
| `nmap` | Network scanner | `nmap localhost` |
| `mtr` | Network diagnostics | `mtr google.com` |

## Process Management

### 1. Process Monitoring 🔄

| Command | Description | Example |
|---------|-------------|---------|
| `ps` | Process status | `ps aux` |
| `pstree` | Process tree | `pstree -p` |
| `lsof` | List open files | `lsof -p PID` |
| `strace` | Trace system calls | `strace command` |
| `ltrace` | Library call tracer | `ltrace command` |

### 2. Process Control ⚙️

| Command | Description | Example |
|---------|-------------|---------|
| `nice` | Set process priority | `nice -n 10 command` |
| `renice` | Modify priority | `renice -n 10 -p PID` |
| `kill` | Terminate process | `kill -15 PID` |
| `pkill` | Kill by pattern | `pkill process_name` |
| `killall` | Kill by name | `killall process_name` |

## System Monitoring Tools

### 1. System Statistics 📊

| Command | Description | Example |
|---------|-------------|---------|
| `sar` | System activity | `sar -u 1 5` |
| `dstat` | System resources | `dstat` |
| `collectl` | Performance data | `collectl` |
| `nmon` | Performance monitor | `nmon` |
| `atop` | System & process monitor | `atop` |

### 2. Log Monitoring 📝

| Command | Description | Example |
|---------|-------------|---------|
| `tail` | Watch log files | `tail -f /var/log/syslog` |
| `journalctl` | System journal | `journalctl -f` |
| `dmesg` | Kernel messages | `dmesg -w` |
| `logwatch` | Log analyzer | `logwatch` |
| `multitail` | Multiple log viewer | `multitail /var/log/*` |

## Practice Examples 🎯

### 1. System Performance Check
```bash
# Monitor CPU and memory
htop

# Check disk I/O
iostat -x 1

# Monitor network
iftop -i eth0

# View system load
uptime
```

### 2. Resource Usage Analysis
```bash
# Memory usage details
free -h
vmstat 1

# Disk space usage
df -h
du -sh /* | sort -hr

# Process resource usage
ps aux --sort=-%cpu | head
ps aux --sort=-%mem | head
```

### 3. Performance Testing
```bash
# CPU stress test
stress --cpu 4 --timeout 60s

# Disk I/O test
sudo fio --name=test --ioengine=libaio --direct=1 \
    --rw=randwrite --bs=4k --size=1G

# Network speed test
iperf3 -c server_ip
```

## Performance Tuning 🔧

### 1. System Optimization
```bash
# Adjust swappiness
sudo sysctl vm.swappiness=10

# Set I/O scheduler
echo deadline > /sys/block/sda/queue/scheduler

# Optimize network
sudo sysctl -w net.ipv4.tcp_congestion_control=bbr
```

### 2. Process Priority
```bash
# Run with lower priority
nice -n 19 command

# Change running process priority
renice -n 19 -p PID
```

## Best Practices 📚

1. **Resource Monitoring**
   - Monitor regularly
   - Set up alerts
   - Keep historical data
   - Identify trends

2. **Performance Optimization**
   - Regular maintenance
   - System tuning
   - Resource allocation
   - Load balancing

3. **Troubleshooting**
   - Baseline metrics
   - Systematic approach
   - Root cause analysis
   - Document solutions

4. **Capacity Planning**
   - Monitor growth
   - Predict needs
   - Plan upgrades
   - Test changes

## Next Steps 🚀

- [Shell Scripting](../scripting/01-bash-basics.md)
- [System Administration](../admin/01-system-admin.md)
- [Advanced Performance](../performance/01-advanced-tuning.md)
- [Automation](../automation/01-automation-basics.md)
