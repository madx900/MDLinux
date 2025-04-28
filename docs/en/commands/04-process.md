# Process Management Commands 🔄

## Process Monitoring

### 1. Basic Process Commands 📊

| Command | Description | Example |
|---------|-------------|---------|
| `ps` | Show processes | `ps aux` |
| `top` | Dynamic process viewer | `top` |
| `htop` | Interactive process viewer | `htop` |
| `pgrep` | Find processes by name | `pgrep firefox` |
| `pidof` | Find process ID | `pidof nginx` |

### 2. Process Information 📋

| Command | Description | Example |
|---------|-------------|---------|
| `ps aux` | Detailed process list | `ps aux \| grep nginx` |
| `pstree` | Process tree | `pstree -p` |
| `lsof` | List open files | `lsof -p PID` |
| `strace` | Trace system calls | `strace command` |
| `ltrace` | Library call tracer | `ltrace command` |

## Process Control

### 1. Process Management 🎮

| Command | Description | Example |
|---------|-------------|---------|
| `kill` | Terminate process | `kill -9 PID` |
| `killall` | Kill by name | `killall firefox` |
| `pkill` | Kill by pattern | `pkill -f pattern` |
| `renice` | Change priority | `renice -n 10 -p PID` |
| `nohup` | Run immune to hangups | `nohup command &` |

### 2. Signal Handling 🚦

| Command | Description | Example |
|---------|-------------|---------|
| `kill -l` | List signals | `kill -l` |
| `kill -SIGTERM` | Graceful termination | `kill -SIGTERM PID` |
| `kill -SIGKILL` | Force termination | `kill -SIGKILL PID` |
| `kill -SIGHUP` | Reload configuration | `kill -SIGHUP PID` |
| `kill -SIGSTOP` | Pause process | `kill -SIGSTOP PID` |

## Resource Management

### 1. CPU Management 💻

| Command | Description | Example |
|---------|-------------|---------|
| `nice` | Run with priority | `nice -n 10 command` |
| `cpulimit` | Limit CPU usage | `cpulimit -p PID -l 50` |
| `taskset` | Set CPU affinity | `taskset -c 0 command` |
| `chrt` | Set scheduling policy | `chrt -f -p 99 PID` |
| `stress` | CPU stress test | `stress --cpu 4` |

### 2. Memory Management 🧠

| Command | Description | Example |
|---------|-------------|---------|
| `free` | Show memory usage | `free -h` |
| `vmstat` | Virtual memory stats | `vmstat 1` |
| `swapon` | Enable swap | `swapon /dev/sdb1` |
| `swapoff` | Disable swap | `swapoff /dev/sdb1` |
| `sync` | Sync disk buffers | `sync` |

## Job Scheduling

### 1. Cron Jobs ⏰

| Command | Description | Example |
|---------|-------------|---------|
| `crontab` | Schedule tasks | `crontab -e` |
| `at` | Schedule one-time task | `at now + 1 hour` |
| `batch` | Schedule for low load | `batch` |
| `anacron` | Periodic command scheduler | `anacron` |
| `systemd-run` | Run as systemd service | `systemd-run --on-calendar="*-*-* 02:00:00" command` |

### 2. Job Control 🎯

| Command | Description | Example |
|---------|-------------|---------|
| `bg` | Background job | `bg %1` |
| `fg` | Foreground job | `fg %1` |
| `jobs` | List jobs | `jobs -l` |
| `disown` | Detach job | `disown %1` |
| `wait` | Wait for job | `wait PID` |

## System Services

### 1. Service Management 🔧

| Command | Description | Example |
|---------|-------------|---------|
| `systemctl` | Control services | `systemctl start nginx` |
| `service` | Legacy service control | `service apache2 restart` |
| `chkconfig` | Update service config | `chkconfig nginx on` |
| `update-rc.d` | Manage init scripts | `update-rc.d nginx defaults` |
| `rc-update` | OpenRC service manager | `rc-update add nginx default` |

### 2. Service Monitoring 📊

| Command | Description | Example |
|---------|-------------|---------|
| `systemctl status` | Service status | `systemctl status nginx` |
| `journalctl` | View service logs | `journalctl -u nginx` |
| `dmesg` | Kernel messages | `dmesg \| tail` |
| `uptime` | System uptime | `uptime` |
| `w` | Who is logged in | `w` |

## Practice Examples 🎯

### 1. Process Management
```bash
# Find and kill a process
pgrep firefox
kill -15 $(pgrep firefox)

# Monitor system processes
top
htop
```

### 2. Job Scheduling
```bash
# Schedule a daily backup
crontab -e
# Add: 0 2 * * * /path/to/backup.sh

# Schedule a one-time task
at now + 1 hour
> /path/to/script.sh
```

### 3. Service Control
```bash
# Manage system service
sudo systemctl start nginx
sudo systemctl enable nginx
sudo systemctl status nginx
```

## Troubleshooting 🔧

### 1. High CPU Usage
```bash
# Find CPU-intensive processes
top -o %CPU
ps aux --sort=-%cpu | head

# Limit CPU usage
cpulimit -p PID -l 50
```

### 2. Memory Issues
```bash
# Check memory usage
free -h
vmstat 1

# Clear cache
sync; echo 3 > /proc/sys/vm/drop_caches
```

### 3. Hung Processes
```bash
# Find hung processes
ps aux | grep D

# Force kill if necessary
kill -9 PID
```

## Best Practices 📚

1. **Process Management**
   - Use SIGTERM before SIGKILL
   - Monitor system resources regularly
   - Set appropriate process priorities
   - Use job scheduling for routine tasks

2. **Service Management**
   - Keep services updated
   - Monitor service logs
   - Enable only necessary services
   - Use systemd for modern systems

3. **Resource Control**
   - Set resource limits
   - Monitor system load
   - Use appropriate scheduling
   - Maintain swap space

## Next Steps 🚀

- [Text Processing](05-text-processing.md)
- [Package Management](06-package.md)
- [Security Commands](07-security.md)
- [Performance Monitoring](08-performance.md)
