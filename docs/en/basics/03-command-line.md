# Command Line Basics 💻

## Introduction

The command line interface (CLI) is a powerful way to interact with your Linux system. While it might seem intimidating at first, mastering the command line will significantly improve your productivity.

## Basic Navigation

### 1. Essential Navigation Commands 🗺️

```bash
pwd     # Print Working Directory - shows current location
ls      # List files and directories
cd      # Change Directory
```

**Examples:**
```bash
pwd                 # Shows current directory path
ls                 # List contents of current directory
ls -l              # Detailed list
ls -a              # Show hidden files
cd Documents       # Go to Documents folder
cd ..              # Go up one directory
cd ~               # Go to home directory
cd /               # Go to root directory
```

### 2. File and Directory Operations 📁

```bash
mkdir    # Create directory
touch    # Create empty file
cp      # Copy files/directories
mv      # Move/rename files/directories
rm      # Remove files
rmdir   # Remove empty directories
```

**Examples:**
```bash
mkdir projects             # Create 'projects' directory
touch file.txt            # Create empty file
cp file.txt backup.txt    # Copy file
mv file.txt newname.txt   # Rename file
rm file.txt              # Delete file
rmdir empty_folder       # Delete empty directory
```

## File Viewing and Editing

### 1. Viewing File Contents 👀

```bash
cat     # Display file contents
less    # View file with pagination
head    # View first 10 lines
tail    # View last 10 lines
```

**Examples:**
```bash
cat file.txt             # Show entire file
less large_file.txt     # View large file
head -n 5 file.txt      # View first 5 lines
tail -f log.txt         # Watch file in real-time
```

### 2. Text Editors 📝

1. **nano** (Beginner-friendly)
   ```bash
   nano file.txt    # Open/create file in nano
   ```
   - Ctrl + O: Save
   - Ctrl + X: Exit
   - Ctrl + K: Cut line

2. **vim** (Advanced)
   ```bash
   vim file.txt     # Open/create file in vim
   ```
   - i: Enter insert mode
   - Esc: Exit insert mode
   - :w: Save
   - :q: Quit
   - :wq: Save and quit

## System Information

### 1. System Commands 🖥️

```bash
uname -a    # System information
df -h       # Disk usage
free -h     # Memory usage
top         # Process viewer
htop        # Enhanced process viewer
```

### 2. User Commands 👤

```bash
whoami      # Current user
id          # User ID information
su          # Switch user
sudo        # Run as superuser
```

## File Permissions

### 1. Understanding Permissions 🔒

```
rwx rwx rwx    # Read, Write, Execute for Owner/Group/Others
```

### 2. Changing Permissions

```bash
chmod    # Change file permissions
chown    # Change file owner
```

**Examples:**
```bash
chmod 755 file.txt    # rwxr-xr-x
chmod +x script.sh    # Add execute permission
chown user:group file.txt
```

## Package Management

### 1. APT (Ubuntu/Debian) 📦

```bash
sudo apt update             # Update package list
sudo apt upgrade           # Upgrade packages
sudo apt install package   # Install package
sudo apt remove package   # Remove package
```

### 2. DNF (Fedora) 📦

```bash
sudo dnf update           # Update packages
sudo dnf install package # Install package
sudo dnf remove package # Remove package
```

## Useful Tips

### 1. Keyboard Shortcuts ⌨️

- `Ctrl + C`: Cancel current command
- `Ctrl + L`: Clear screen
- `Ctrl + R`: Search command history
- `Tab`: Auto-complete
- `↑/↓`: Navigate command history

### 2. Command Help

```bash
man command    # Manual pages
command --help # Brief help
info command   # Detailed documentation
```

## Practice Exercises 🎯

1. **Navigation Practice**
   ```bash
   mkdir ~/practice
   cd ~/practice
   touch file1.txt file2.txt
   mkdir dir1 dir2
   ls -l
   ```

2. **File Operations**
   ```bash
   echo "Hello" > file1.txt
   cat file1.txt
   cp file1.txt dir1/
   mv file2.txt dir2/
   ```

3. **Permissions**
   ```bash
   chmod 755 file1.txt
   ls -l file1.txt
   ```

## Next Steps

- [File System Navigation](04-file-system.md)
- [Text Processing](05-text-processing.md)
- [Shell Scripting](../shell-scripting/01-bash-basics.md)

## Additional Resources

- [Linux Command Library](https://linuxcommandlibrary.com/)
- [ExplainShell](https://explainshell.com/)
- [Command Line Challenge](https://cmdchallenge.com/)
