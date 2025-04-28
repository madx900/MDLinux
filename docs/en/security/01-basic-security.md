---
sidebar_position: 1
title: Basic Linux Security
description: Learn essential Linux security practices and tools
---

# Basic Linux Security

## Overview

Security is a critical aspect of Linux system administration. This guide covers fundamental security practices and tools to protect your Linux systems.

## User Management

### 1. Password Security
```bash
passwd  # Change your password
passwd username  # Change another user's password (root only)
```

Best practices:
- Use strong passwords
- Regular password changes
- Password complexity requirements

### 2. User Permissions
```bash
chmod  # Change file permissions
chown  # Change file ownership
```

Understanding permissions:
- Read (4)
- Write (2)
- Execute (1)

### 3. Sudo Configuration
```bash
visudo  # Edit sudo configuration
```

Best practices:
- Principle of least privilege
- Specific command permissions
- Logging sudo usage

## System Hardening

### 1. Update Management
```bash
# For Debian/Ubuntu
apt update
apt upgrade

# For RHEL/CentOS
dnf update
```

Best practices:
- Regular updates
- Security patches
- Automated updates

### 2. Service Management
```bash
systemctl status service-name  # Check service status
systemctl stop service-name    # Stop a service
systemctl disable service-name # Prevent service from starting
```

Best practices:
- Disable unnecessary services
- Monitor active services
- Regular service audits

### 3. Firewall Configuration
```bash
# UFW (Uncomplicated Firewall)
ufw status
ufw enable
ufw allow ssh

# firewalld
firewall-cmd --list-all
firewall-cmd --add-service=ssh
```

## Network Security

### 1. SSH Hardening
```bash
# Edit SSH configuration
vim /etc/ssh/sshd_config
```

Recommendations:
- Disable root login
- Use key-based authentication
- Change default port

### 2. Port Management
```bash
# Check open ports
ss -tulpn
netstat -tulpn
```

Best practices:
- Close unnecessary ports
- Regular port audits
- Port monitoring

### 3. Network Monitoring
```bash
# Monitor network connections
tcpdump -i any
wireshark  # GUI network analyzer
```

## Security Tools

### 1. Antivirus
```bash
# ClamAV
clamscan -r /  # Scan entire system
freshclam     # Update virus definitions
```

### 2. Intrusion Detection
```bash
# AIDE (Advanced Intrusion Detection Environment)
aide --init   # Initialize database
aide --check  # Check for changes
```

### 3. Log Monitoring
```bash
# View system logs
journalctl
tail -f /var/log/auth.log
```

## Security Best Practices

1. **Regular Backups**
   - System state
   - Configuration files
   - User data

2. **Access Control**
   - Role-based access
   - Regular access reviews
   - Account monitoring

3. **Monitoring**
   - System logs
   - User activity
   - Network traffic

## Security Policies

1. **Password Policy**
   - Minimum length
   - Complexity requirements
   - Change frequency

2. **Access Policy**
   - Login restrictions
   - Remote access rules
   - Resource usage limits

3. **Update Policy**
   - Update schedule
   - Testing procedures
   - Rollback plans

## Next Steps

- [Advanced Security](/en/security/02-advanced-security)
- [Security Auditing](/en/security/03-security-auditing)
- [Incident Response](/en/security/04-incident-response)
