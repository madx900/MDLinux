# Security Commands 🔒

## User Management

### 1. User Operations 👤

| Command | Description | Example |
|---------|-------------|---------|
| `useradd` | Create new user | `sudo useradd username` |
| `usermod` | Modify user account | `sudo usermod -aG group username` |
| `userdel` | Delete user | `sudo userdel username` |
| `passwd` | Change password | `sudo passwd username` |
| `chage` | Change user password expiry | `sudo chage -M 90 username` |

### 2. Group Management 👥

| Command | Description | Example |
|---------|-------------|---------|
| `groupadd` | Create new group | `sudo groupadd groupname` |
| `groupmod` | Modify group | `sudo groupmod -n newname oldname` |
| `groupdel` | Delete group | `sudo groupdel groupname` |
| `gpasswd` | Administer groups | `sudo gpasswd -a user group` |
| `groups` | Show user groups | `groups username` |

## File Permissions

### 1. Basic Permissions 📄

| Command | Description | Example |
|---------|-------------|---------|
| `chmod` | Change file mode | `chmod 755 file` |
| `chown` | Change file owner | `sudo chown user:group file` |
| `umask` | Set default permissions | `umask 022` |
| `getfacl` | Display file ACL | `getfacl file` |
| `setfacl` | Set file ACL | `setfacl -m u:user:rw file` |

### 2. Special Permissions 🔐

| Command | Description | Example |
|---------|-------------|---------|
| `chmod +s` | Set SUID/SGID | `chmod u+s file` |
| `chmod +t` | Set sticky bit | `chmod +t directory` |
| `chattr` | Change file attributes | `sudo chattr +i file` |
| `lsattr` | List file attributes | `lsattr file` |
| `find` | Find files by permission | `find / -perm -4000` |

## System Security

### 1. System Auditing 🔍

| Command | Description | Example |
|---------|-------------|---------|
| `auditctl` | Control audit system | `sudo auditctl -w /etc/passwd -p wa` |
| `ausearch` | Search audit logs | `sudo ausearch -f /etc/passwd` |
| `aureport` | Generate audit reports | `sudo aureport --failed` |
| `last` | Show login history | `last -n 10` |
| `lastb` | Show failed logins | `sudo lastb` |

### 2. System Monitoring 📊

| Command | Description | Example |
|---------|-------------|---------|
| `who` | Show logged in users | `who` |
| `w` | Show user activity | `w` |
| `ps` | Show processes | `ps aux` |
| `lsof` | List open files | `lsof -u username` |
| `netstat` | Network statistics | `netstat -tuln` |

## Network Security

### 1. Firewall Management 🛡️

| Command | Description | Example |
|---------|-------------|---------|
| `ufw` | Uncomplicated firewall | `sudo ufw enable` |
| `iptables` | Configure firewall | `sudo iptables -L` |
| `nftables` | Next-gen firewall | `sudo nft list ruleset` |
| `firewall-cmd` | FirewallD interface | `sudo firewall-cmd --list-all` |
| `fail2ban` | Ban failed attempts | `sudo fail2ban-client status` |

### 2. Network Monitoring 🌐

| Command | Description | Example |
|---------|-------------|---------|
| `tcpdump` | Capture network traffic | `sudo tcpdump -i eth0` |
| `nmap` | Network scanner | `sudo nmap -sS localhost` |
| `ss` | Socket statistics | `ss -tuln` |
| `iftop` | Network usage | `sudo iftop -i eth0` |
| `nethogs` | Per-process bandwidth | `sudo nethogs eth0` |

## Encryption and Security Tools

### 1. File Encryption 🔐

| Command | Description | Example |
|---------|-------------|---------|
| `gpg` | GNU Privacy Guard | `gpg -c file` |
| `openssl` | OpenSSL toolkit | `openssl enc -aes-256-cbc -in file` |
| `ccrypt` | File encryption | `ccrypt file` |
| `cryptsetup` | Disk encryption | `sudo cryptsetup luksFormat /dev/sdb1` |
| `veracrypt` | Volume encryption | `veracrypt --create volume` |

### 2. Security Tools 🛠️

| Command | Description | Example |
|---------|-------------|---------|
| `ssh-keygen` | Generate SSH keys | `ssh-keygen -t rsa -b 4096` |
| `chroot` | Change root directory | `sudo chroot /mnt/newroot` |
| `sudo` | Execute as superuser | `sudo command` |
| `su` | Switch user | `su - username` |
| `lynis` | Security auditing | `sudo lynis audit system` |

## Practice Examples 🎯

### 1. User Security
```bash
# Create new user with home directory
sudo useradd -m -s /bin/bash username

# Set password policy
sudo chage -M 90 -m 7 -W 7 username

# Add user to sudo group
sudo usermod -aG sudo username
```

### 2. File Security
```bash
# Set secure permissions
chmod 750 script.sh
chown root:admin script.sh

# Add ACL permissions
setfacl -m u:user:rx file
setfacl -m g:group:rx file
```

### 3. System Security
```bash
# Enable firewall
sudo ufw default deny incoming
sudo ufw allow ssh
sudo ufw enable

# Monitor failed login attempts
sudo tail -f /var/log/auth.log
```

## Advanced Security 🚀

### 1. SSH Hardening
```bash
# Generate strong SSH key
ssh-keygen -t ed25519 -a 100

# Configure SSH server
sudo nano /etc/ssh/sshd_config
# Set: PermitRootLogin no
# Set: PasswordAuthentication no
```

### 2. System Auditing
```bash
# Monitor file changes
sudo auditctl -w /etc/passwd -p wa -k passwd_changes
sudo auditctl -w /etc/shadow -p wa -k shadow_changes

# Review audit logs
sudo ausearch -k passwd_changes
```

## Best Practices 📚

1. **User Management**
   - Use strong passwords
   - Implement password policies
   - Regular account audits
   - Principle of least privilege

2. **System Security**
   - Regular security updates
   - Monitor system logs
   - Enable firewall
   - Use intrusion detection

3. **Network Security**
   - Secure network services
   - Monitor network traffic
   - Implement access controls
   - Use encryption

4. **File Security**
   - Set appropriate permissions
   - Use access control lists
   - Encrypt sensitive data
   - Regular backups

## Next Steps 🚀

- [Performance Monitoring](08-performance.md)
- [Shell Scripting](../scripting/01-bash-basics.md)
- [System Administration](../admin/01-system-admin.md)
- [Advanced Security](../security/01-advanced-security.md)
