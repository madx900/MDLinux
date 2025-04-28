---
sidebar_position: 1
title: Basic Networking
description: Learn fundamental Linux networking concepts and commands
---

# Linux Networking Basics

## Network Configuration

### 1. Network Interfaces
```bash
# List network interfaces
ip link show
ifconfig -a

# Enable/disable interface
ip link set eth0 up
ip link set eth0 down
```

### 2. IP Configuration
```bash
# View IP addresses
ip addr show
hostname -I

# Set static IP
ip addr add 192.168.1.100/24 dev eth0
```

### 3. DNS Configuration
```bash
# View DNS servers
cat /etc/resolv.conf

# Add DNS server
echo "nameserver 8.8.8.8" >> /etc/resolv.conf
```

## Network Connectivity

### 1. Basic Testing
```bash
# Test connectivity
ping -c 4 google.com

# Trace route
traceroute google.com

# DNS lookup
nslookup google.com
dig google.com
```

### 2. Network Statistics
```bash
# View network statistics
netstat -tuln
ss -tuln

# View routing table
ip route show
route -n
```

### 3. Network Monitoring
```bash
# Monitor network traffic
iftop
nethogs
```

## Network Services

### 1. SSH (Secure Shell)
```bash
# Start SSH server
systemctl start sshd

# SSH connection
ssh username@remote_host

# Secure copy
scp file.txt username@remote_host:/path/
```

### 2. Network File Systems
```bash
# Mount NFS share
mount -t nfs server:/share /mnt/nfs

# Show NFS shares
showmount -e server
```

### 3. Web Server
```bash
# Install Apache
apt install apache2  # Debian/Ubuntu
dnf install httpd    # RHEL/CentOS

# Start web server
systemctl start apache2
```

## Network Security

### 1. Firewall Configuration
```bash
# UFW (Uncomplicated Firewall)
ufw enable
ufw allow ssh
ufw status

# firewalld
firewall-cmd --add-service=http
firewall-cmd --list-all
```

### 2. Port Management
```bash
# Check open ports
lsof -i
netstat -tulpn

# Scan ports
nmap localhost
```

### 3. Network Security Tools
```bash
# Packet capture
tcpdump -i eth0

# Network scanner
nmap -sV 192.168.1.0/24
```

## Network Troubleshooting

### 1. Connection Issues
```bash
# Check network status
systemctl status NetworkManager

# Test DNS resolution
host google.com
dig +short google.com
```

### 2. Performance Issues
```bash
# Monitor bandwidth
iftop -i eth0

# Check network errors
ethtool -S eth0
```

### 3. Common Tools
```bash
# Network diagnostics
mtr google.com
nc -zv host port
```

## Network Configuration Files

### 1. Interface Configuration
```bash
# Debian/Ubuntu
/etc/network/interfaces

# RHEL/CentOS
/etc/sysconfig/network-scripts/ifcfg-eth0
```

### 2. DNS Configuration
```bash
/etc/resolv.conf
/etc/hosts
```

### 3. Network Services
```bash
/etc/services
/etc/protocols
```

## Best Practices

1. **Network Security**
   - Regular security audits
   - Strong firewall rules
   - Updated security patches

2. **Documentation**
   - Network topology
   - IP address assignments
   - Service configurations

3. **Monitoring**
   - Traffic patterns
   - Service availability
   - Security events

## Next Steps

- [Advanced Networking](/en/networking/02-advanced-networking)
- [Network Security](/en/networking/03-network-security)
- [Network Troubleshooting](/en/networking/04-network-troubleshooting)
