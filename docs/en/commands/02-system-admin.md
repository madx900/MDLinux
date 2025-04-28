# System Administration Commands 🛠️

## User Management

### 1. User Account Commands 👥

| Command | Description | Example |
|---------|-------------|---------|
| `useradd` | Create new user | `useradd -m username` |
| `usermod` | Modify user account | `usermod -aG sudo user` |
| `userdel` | Delete user account | `userdel -r username` |
| `passwd` | Change password | `passwd username` |
| `chage` | Change user password expiry | `chage -l username` |

### 2. Group Management 👥

| Command | Description | Example |
|---------|-------------|---------|
| `groupadd` | Create new group | `groupadd groupname` |
| `groupmod` | Modify group | `groupmod -n newname oldname` |
| `groupdel` | Delete group | `groupdel groupname` |
| `gpasswd` | Administer groups | `gpasswd -a user group` |
| `newgrp` | Change primary group | `newgrp groupname` |

## System Services

### 1. Service Management 🔄

| Command | Description | Example |
|---------|-------------|---------|
| `systemctl` | Control system services | `systemctl start service` |
| `service` | Legacy service control | `service nginx restart` |
| `update-rc.d` | Manage init scripts | `update-rc.d service defaults` |
| `chkconfig` | System services | `chkconfig service on` |

### 2. Process Management 📊

| Command | Description | Example |
|---------|-------------|---------|
| `ps` | Show processes | `ps aux` |
| `top` | Dynamic process view | `top` |
| `kill` | Terminate process | `kill -9 PID` |
| `nice` | Run with priority | `nice -n 10 command` |
| `renice` | Change priority | `renice -n 10 -p PID` |

## System Maintenance

### 1. System Updates 🔄

| Command | Description | Example |
|---------|-------------|---------|
| `apt update` | Update package list | `sudo apt update` |
| `apt upgrade` | Upgrade packages | `sudo apt upgrade` |
| `apt autoremove` | Remove unused packages | `sudo apt autoremove` |
| `dpkg` | Package manager | `dpkg -i package.deb` |
| `snap` | Snap package manager | `snap install package` |

### 2. System Information 📋

| Command | Description | Example |
|---------|-------------|---------|
| `uname` | System information | `uname -a` |
| `lsb_release` | Distribution info | `lsb_release -a` |
| `dmidecode` | Hardware info | `sudo dmidecode` |
| `lshw` | Hardware configuration | `sudo lshw` |
| `lscpu` | CPU information | `lscpu` |

## Storage Management

### 1. Disk Operations 💽

| Command | Description | Example |
|---------|-------------|---------|
| `fdisk` | Partition manager | `fdisk -l` |
| `parted` | Partition manager | `parted /dev/sda print` |
| `mkfs` | Create filesystem | `mkfs.ext4 /dev/sda1` |
| `mount` | Mount filesystem | `mount /dev/sda1 /mnt` |
| `umount` | Unmount filesystem | `umount /mnt` |

### 2. Storage Monitoring 📊

| Command | Description | Example |
|---------|-------------|---------|
| `df` | Disk space usage | `df -h` |
| `du` | Directory usage | `du -sh /home` |
| `ncdu` | Interactive disk usage | `ncdu /` |
| `iostat` | I/O statistics | `iostat -x 1` |
| `lsblk` | List block devices | `lsblk` |

## System Security

### 1. Access Control 🔒

| Command | Description | Example |
|---------|-------------|---------|
| `chmod` | Change permissions | `chmod 755 file` |
| `chown` | Change ownership | `chown user:group file` |
| `sudo` | Execute as superuser | `sudo command` |
| `su` | Switch user | `su - username` |
| `visudo` | Edit sudoers file | `visudo` |

### 2. Security Tools 🛡️

| Command | Description | Example |
|---------|-------------|---------|
| `ufw` | Firewall | `ufw enable` |
| `fail2ban` | Ban IP addresses | `fail2ban-client status` |
| `chroot` | Change root directory | `chroot /mnt` |
| `apparmor` | Application armor | `aa-status` |
| `selinux` | Security policy | `sestatus` |

## System Backup

### 1. Backup Commands 💾

| Command | Description | Example |
|---------|-------------|---------|
| `tar` | Archive files | `tar -czf backup.tar.gz /home` |
| `rsync` | Sync files/directories | `rsync -av source/ dest/` |
| `dd` | Convert and copy | `dd if=/dev/sda of=backup.img` |
| `dump` | Filesystem backup | `dump -0aj -f backup.dump /` |
| `restore` | Restore from backup | `restore -rf backup.dump` |

## Practice Examples 🎯

### 1. User Management
```bash
# Create new user with home directory
sudo useradd -m -s /bin/bash newuser
sudo passwd newuser
sudo usermod -aG sudo newuser

# List user information
id newuser
groups newuser
```

### 2. Service Management
```bash
# Check service status
systemctl status ssh
systemctl is-enabled ssh

# Enable and start service
sudo systemctl enable ssh
sudo systemctl start ssh
```

### 3. Disk Management
```bash
# Check disk space
df -h
du -sh /*

# Mount new drive
sudo fdisk -l
sudo mount /dev/sdb1 /mnt
```

## Common Tasks 📋

1. **System Update**
   ```bash
   sudo apt update
   sudo apt upgrade
   sudo apt autoremove
   ```

2. **User Administration**
   ```bash
   # Add user to group
   sudo usermod -aG docker username
   
   # Lock/unlock account
   sudo passwd -l username
   sudo passwd -u username
   ```

3. **Service Control**
   ```bash
   # Restart service
   sudo systemctl restart service
   
   # Check logs
   journalctl -u service
   ```

## Troubleshooting 🔧

### 1. System Issues
```bash
# Check system logs
tail -f /var/log/syslog
dmesg | tail

# Check system resources
top
free -h
```

### 2. Service Issues
```bash
# Check service status
systemctl status service
journalctl -xe

# Check ports
netstat -tulpn
lsof -i :80
```

## Best Practices 📚

1. **Regular Maintenance**
   - Update system regularly
   - Monitor disk space
   - Check system logs
   - Backup important data

2. **Security**
   - Use strong passwords
   - Keep firewall enabled
   - Monitor auth logs
   - Regular security updates

3. **Documentation**
   - Document system changes
   - Keep configuration backups
   - Maintain user list
   - Record custom procedures

## Next Steps 🚀

- [Network Commands](03-network.md)
- [Process Management](04-process.md)
- [Security Administration](05-security.md)
- [Performance Tuning](06-performance.md)
