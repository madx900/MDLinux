# Network Commands Guide 🌐

## Basic Network Tools

### 1. Network Information 📡

| Command | Description | Example |
|---------|-------------|---------|
| `ifconfig` | Network interface config | `ifconfig eth0` |
| `ip` | Modern network tool | `ip addr show` |
| `iwconfig` | Wireless interface info | `iwconfig wlan0` |
| `hostname` | System hostname | `hostname -f` |
| `nmcli` | NetworkManager CLI | `nmcli dev status` |

### 2. Network Testing 🔍

| Command | Description | Example |
|---------|-------------|---------|
| `ping` | Test connectivity | `ping -c 4 google.com` |
| `traceroute` | Trace packet route | `traceroute google.com` |
| `mtr` | Network diagnostic | `mtr google.com` |
| `nslookup` | DNS query tool | `nslookup google.com` |
| `dig` | Advanced DNS tool | `dig google.com` |

## Network Configuration

### 1. Interface Management 🔌

| Command | Description | Example |
|---------|-------------|---------|
| `ip link` | Manage network interfaces | `ip link set eth0 up` |
| `ip addr` | Configure IP addresses | `ip addr add 192.168.1.10/24 dev eth0` |
| `ip route` | Manage routing table | `ip route add default via 192.168.1.1` |
| `dhclient` | DHCP client | `dhclient eth0` |
| `ethtool` | Ethernet settings | `ethtool eth0` |

### 2. Network Configuration Files 📄

```bash
/etc/network/interfaces    # Interface configuration
/etc/netplan/*.yaml       # Netplan configuration
/etc/resolv.conf          # DNS resolver configuration
/etc/hosts               # Static host entries
/etc/hostname            # System hostname
```

## Network Monitoring

### 1. Traffic Monitoring 📊

| Command | Description | Example |
|---------|-------------|---------|
| `netstat` | Network statistics | `netstat -tuln` |
| `ss` | Socket statistics | `ss -tuln` |
| `iftop` | Interface traffic | `iftop -i eth0` |
| `tcpdump` | Packet analyzer | `tcpdump -i eth0` |
| `wireshark` | GUI packet analyzer | `wireshark` |

### 2. Network Statistics 📈

| Command | Description | Example |
|---------|-------------|---------|
| `vnstat` | Network traffic monitor | `vnstat -h` |
| `bmon` | Bandwidth monitor | `bmon` |
| `iptraf` | IP traffic monitor | `iptraf-ng` |
| `nethogs` | Per-process bandwidth | `nethogs eth0` |
| `nload` | Network load monitor | `nload eth0` |

## Remote Access

### 1. SSH Commands 🔐

| Command | Description | Example |
|---------|-------------|---------|
| `ssh` | Secure shell | `ssh user@host` |
| `scp` | Secure copy | `scp file user@host:/path` |
| `sftp` | Secure FTP | `sftp user@host` |
| `ssh-keygen` | Generate SSH keys | `ssh-keygen -t rsa` |
| `ssh-copy-id` | Copy SSH key to host | `ssh-copy-id user@host` |

### 2. Remote Management 🖥️

| Command | Description | Example |
|---------|-------------|---------|
| `telnet` | Telnet client | `telnet host port` |
| `rdesktop` | Remote Desktop client | `rdesktop host` |
| `vnc` | VNC client | `vncviewer host` |
| `screen` | Terminal multiplexer | `screen -S name` |
| `tmux` | Terminal multiplexer | `tmux new -s name` |

## Firewall Management

### 1. UFW (Uncomplicated Firewall) 🛡️

| Command | Description | Example |
|---------|-------------|---------|
| `ufw enable` | Enable firewall | `sudo ufw enable` |
| `ufw allow` | Allow port/service | `sudo ufw allow 22` |
| `ufw deny` | Deny port/service | `sudo ufw deny 23` |
| `ufw status` | Show firewall status | `sudo ufw status verbose` |
| `ufw reset` | Reset firewall | `sudo ufw reset` |

### 2. iptables 🔒

| Command | Description | Example |
|---------|-------------|---------|
| `iptables -L` | List rules | `sudo iptables -L` |
| `iptables -A` | Append rule | `sudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT` |
| `iptables -D` | Delete rule | `sudo iptables -D INPUT 1` |
| `iptables-save` | Save rules | `sudo iptables-save > rules.v4` |
| `iptables-restore` | Restore rules | `sudo iptables-restore < rules.v4` |

## Practice Examples 🎯

### 1. Network Configuration
```bash
# Configure static IP
sudo ip addr add 192.168.1.100/24 dev eth0
sudo ip link set eth0 up
sudo ip route add default via 192.168.1.1

# Test connectivity
ping -c 4 8.8.8.8
traceroute google.com
```

### 2. Firewall Setup
```bash
# Basic UFW configuration
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow ssh
sudo ufw allow http
sudo ufw enable
```

### 3. Remote Access
```bash
# Generate and setup SSH keys
ssh-keygen -t rsa -b 4096
ssh-copy-id user@remote-host
ssh user@remote-host
```

## Network Troubleshooting 🔧

### 1. Common Issues
```bash
# Check interface status
ip link show
ethtool eth0

# DNS issues
dig +short google.com
cat /etc/resolv.conf

# Route issues
ip route show
traceroute problematic-host
```

### 2. Performance Issues
```bash
# Monitor bandwidth
iftop -i eth0
nethogs eth0

# Check connections
netstat -tuln
ss -s
```

## Best Practices 📚

1. **Security**
   - Always use SSH keys instead of passwords
   - Keep firewall rules minimal and specific
   - Regularly monitor network traffic
   - Use secure protocols (HTTPS, SFTP, etc.)

2. **Monitoring**
   - Set up regular network monitoring
   - Keep logs of network activity
   - Monitor bandwidth usage
   - Track connection statistics

3. **Documentation**
   - Document network configuration
   - Keep firewall rules documented
   - Maintain IP address inventory
   - Document troubleshooting procedures

## Next Steps 🚀

- [Process Management](04-process.md)
- [Security Commands](05-security.md)
- [System Monitoring](06-monitoring.md)
- [Advanced Networking](07-advanced-network.md)
