# Basic Linux Commands 🖥️

## File and Directory Commands

### 1. Directory Operations 📁

| Command | Description | Example |
|---------|-------------|---------|
| `ls` | List directory contents | `ls -la` |
| `pwd` | Print working directory | `pwd` |
| `cd` | Change directory | `cd /home/user` |
| `mkdir` | Create directory | `mkdir newdir` |
| `rmdir` | Remove empty directory | `rmdir olddir` |
| `tree` | Display directory tree | `tree -L 2` |

### 2. File Operations 📄

| Command | Description | Example |
|---------|-------------|---------|
| `touch` | Create empty file | `touch newfile.txt` |
| `cp` | Copy files/directories | `cp file1 file2` |
| `mv` | Move/rename files | `mv old.txt new.txt` |
| `rm` | Remove files | `rm file.txt` |
| `file` | Determine file type | `file document.pdf` |
| `find` | Search for files | `find . -name "*.txt"` |

### 3. File Content 📝

| Command | Description | Example |
|---------|-------------|---------|
| `cat` | Display file content | `cat file.txt` |
| `less` | View file with pagination | `less large_file.log` |
| `head` | Show first lines | `head -n 5 file.txt` |
| `tail` | Show last lines | `tail -f log.txt` |
| `grep` | Search text in files | `grep "pattern" file.txt` |
| `wc` | Count words/lines | `wc -l file.txt` |

## Text Processing

### 1. Text Editors ✏️

| Command | Description | Example |
|---------|-------------|---------|
| `nano` | Simple text editor | `nano file.txt` |
| `vim` | Advanced text editor | `vim script.sh` |
| `gedit` | GUI text editor | `gedit document.txt` |

### 2. Text Manipulation 🔄

| Command | Description | Example |
|---------|-------------|---------|
| `sort` | Sort text lines | `sort names.txt` |
| `uniq` | Remove duplicates | `uniq -c list.txt` |
| `cut` | Extract text sections | `cut -d"," -f1 data.csv` |
| `sed` | Stream editor | `sed 's/old/new/g' file.txt` |
| `awk` | Text processing tool | `awk '{print $1}' data.txt` |

## File Permissions

### 1. Permission Management 🔒

| Command | Description | Example |
|---------|-------------|---------|
| `chmod` | Change permissions | `chmod 755 script.sh` |
| `chown` | Change owner | `chown user:group file` |
| `umask` | Set default permissions | `umask 022` |
| `getfacl` | Display ACL | `getfacl file.txt` |
| `setfacl` | Modify ACL | `setfacl -m u:user:rx file` |

### 2. User Management 👥

| Command | Description | Example |
|---------|-------------|---------|
| `whoami` | Show current user | `whoami` |
| `id` | Show user/group IDs | `id username` |
| `groups` | Show group membership | `groups username` |
| `sudo` | Execute as superuser | `sudo command` |
| `su` | Switch user | `su - username` |

## System Information

### 1. System Status 📊

| Command | Description | Example |
|---------|-------------|---------|
| `uname` | System information | `uname -a` |
| `hostname` | Show/set hostname | `hostname` |
| `date` | Show/set date | `date "+%Y-%m-%d"` |
| `uptime` | System uptime | `uptime` |
| `who` | Show logged in users | `who` |

### 2. Resource Usage 📈

| Command | Description | Example |
|---------|-------------|---------|
| `df` | Disk space usage | `df -h` |
| `du` | Directory space usage | `du -sh *` |
| `free` | Memory usage | `free -h` |
| `top` | Process activity | `top` |
| `htop` | Interactive process viewer | `htop` |

## Practice Examples 🎯

### 1. File Management
```bash
# Create and manipulate files
mkdir ~/practice
cd ~/practice
touch file{1..5}.txt
echo "Hello" > file1.txt
cp file1.txt file2.txt
mv file2.txt renamed.txt
rm file5.txt
```

### 2. Text Processing
```bash
# Create a sample file
echo -e "apple\nbanana\napple\ncherry" > fruits.txt
sort fruits.txt | uniq -c
grep "apple" fruits.txt
wc -l fruits.txt
```

### 3. Permissions
```bash
# Create and secure a script
touch script.sh
chmod +x script.sh
ls -l script.sh
sudo chown root:root script.sh
```

## Common Use Cases 💡

1. **Finding Files**
   ```bash
   # Find all .txt files modified in last 24 hours
   find /home -name "*.txt" -mtime -1
   ```

2. **Monitoring Logs**
   ```bash
   # Watch log file in real-time
   tail -f /var/log/syslog
   ```

3. **Disk Usage**
   ```bash
   # Find largest directories
   du -h /home | sort -rh | head -n 5
   ```

## Tips and Tricks 🌟

1. **Command History**
   - Use `history` to view command history
   - Press `Ctrl + R` for reverse search
   - Use `!!` to repeat last command

2. **Tab Completion**
   - Press Tab once to complete commands/files
   - Press Tab twice to show all possibilities

3. **Keyboard Shortcuts**
   - `Ctrl + C`: Cancel current command
   - `Ctrl + L`: Clear screen
   - `Ctrl + A`: Move to start of line
   - `Ctrl + E`: Move to end of line

## Additional Resources 📚

1. **Man Pages**
   ```bash
   man command_name
   ```

2. **Info Pages**
   ```bash
   info command_name
   ```

3. **Command Help**
   ```bash
   command_name --help
   ```

## Next Steps 🚀

- [System Administration Commands](02-system-admin.md)
- [Network Commands](03-network.md)
- [Process Management](04-process.md)
- [Advanced Text Processing](05-text-processing.md)
