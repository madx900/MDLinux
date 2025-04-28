---
sidebar_position: 6
title: Interactive Tutorials
description: Learn Linux commands through hands-on examples and interactive tutorials
---

# Interactive Tutorials

## File Management Examples

### Basic File Operations
Try these commands in sequence to understand file management:

```bash
# 1. Create a practice directory
mkdir ~/practice

# 2. Navigate to it
cd ~/practice

# 3. Create some test files
touch file1.txt file2.txt
echo "Hello Linux" > file1.txt
echo "Learning commands" > file2.txt

# 4. View file contents
cat file1.txt
cat file2.txt

# 5. Copy and move files
cp file1.txt file1_backup.txt
mv file2.txt notes.txt

# 6. Check the results
ls -l
```

### File Permissions Tutorial
Practice changing file permissions:

```bash
# 1. Create a script file
echo '#!/bin/bash
echo "Hello from my script"' > script.sh

# 2. Try to execute (will fail)
./script.sh

# 3. Check current permissions
ls -l script.sh

# 4. Make it executable
chmod +x script.sh

# 5. Try executing again
./script.sh
```

## Text Processing Workshop

### grep Tutorial
Learn to search through files:

```bash
# 1. Create sample log file
echo "2024-04-28 Error: System crash
2024-04-28 Info: Normal startup
2024-04-28 Warning: Low memory
2024-04-28 Error: Network timeout
2024-04-28 Info: Backup complete" > system.log

# 2. Find all errors
grep "Error" system.log

# 3. Count warnings
grep -c "Warning" system.log

# 4. Show lines with context
grep -A 1 "Error" system.log
```

### sed Examples
Practice text substitution:

```bash
# 1. Create a config file
echo "PORT=8080
HOST=localhost
DEBUG=false" > config.txt

# 2. Change port number
sed -i 's/PORT=8080/PORT=3000/' config.txt

# 3. Enable debug
sed -i 's/DEBUG=false/DEBUG=true/' config.txt

# 4. View changes
cat config.txt
```

## Process Management Tutorial

### Process Control
Practice managing processes:

```bash
# 1. Start a background process
sleep 100 &

# 2. List processes
ps aux | grep sleep

# 3. Find its PID
pgrep sleep

# 4. Send signals
kill -STOP $(pgrep sleep)  # Pause
kill -CONT $(pgrep sleep)  # Resume
kill $(pgrep sleep)        # Terminate
```

## Network Commands Workshop

### Network Diagnostics
Practice network troubleshooting:

```bash
# 1. Check network interface
ip addr show

# 2. Test connectivity
ping -c 4 8.8.8.8

# 3. Trace route
traceroute google.com

# 4. Check open ports
sudo netstat -tuln
```

## System Information Tutorial

### System Monitoring
Practice checking system status:

```bash
# 1. Check disk space
df -h

# 2. Monitor memory
free -h

# 3. View CPU info
lscpu

# 4. Check system load
uptime
```

## Interactive Exercises

### Exercise 1: File Search
Find all text files in your home directory:

```bash
# 1. Create test files
touch ~/file1.txt ~/file2.txt ~/doc1.pdf

# 2. Find all .txt files
find ~/ -name "*.txt"

# 3. Count them
find ~/ -name "*.txt" | wc -l
```

### Exercise 2: Log Analysis
Analyze a sample log file:

```bash
# 1. Generate sample log
for i in {1..5}; do
  echo "$(date) INFO: User login successful" >> app.log
  echo "$(date) ERROR: Database connection failed" >> app.log
done

# 2. Find all errors
grep "ERROR" app.log

# 3. Count by type
grep -c "INFO" app.log
grep -c "ERROR" app.log
```

### Exercise 3: Service Management
Practice with system services:

```bash
# 1. Check service status
systemctl status sshd

# 2. Stop service
sudo systemctl stop sshd

# 3. Start service
sudo systemctl start sshd

# 4. Enable at boot
sudo systemctl enable sshd
```

## Challenge Exercises

### Challenge 1: File Processing
Create a script that:
1. Creates 10 numbered files
2. Adds random content to each
3. Finds files containing specific text

```bash
# Solution
for i in {1..10}; do
  echo "File $i content: $RANDOM" > "file$i.txt"
done

grep -l "500" file*.txt
```

### Challenge 2: System Report
Create a script that generates a system report:

```bash
#!/bin/bash
echo "System Report - $(date)"
echo "----------------"
echo "Disk Usage:"
df -h
echo "----------------"
echo "Memory Usage:"
free -h
echo "----------------"
echo "Top 5 CPU Processes:"
ps aux --sort=-%cpu | head -n 6
```

## Next Steps

- [Advanced Command Usage](/en/commands/02-system-admin)
- [Shell Scripting Basics](/en/scripting/01-bash-basics)
- [System Administration](/en/admin/01-system-monitoring)
