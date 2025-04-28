# Linux File System Navigation 📂

## Linux File System Structure

### Root Directory (/) 🌳

The Linux file system starts at the root directory (/). Here's the standard layout:

```
/
├── bin/     # Essential user commands
├── boot/    # Boot loader files
├── dev/     # Device files
├── etc/     # System configuration
├── home/    # User home directories
├── lib/     # System libraries
├── media/   # Removable media
├── mnt/     # Mount point
├── opt/     # Optional software
├── proc/    # Process information
├── root/    # Root user's home
├── sbin/    # System commands
├── tmp/     # Temporary files
├── usr/     # User programs
└── var/     # Variable files
```

## Important Directories

### 1. System Directories 🔧

- **/bin**: Essential user command binaries
  ```bash
  ls /bin    # View essential commands
  ```

- **/etc**: System configuration files
  ```bash
  ls /etc/network    # Network configuration
  ls /etc/ssh       # SSH configuration
  ```

- **/lib**: Essential shared libraries
  ```bash
  ls /lib    # View system libraries
  ```

### 2. User Directories 👤

- **/home**: User home directories
  ```bash
  ls /home           # List user directories
  echo $HOME        # Show your home directory
  ```

- **/root**: Root user's home directory
  ```bash
  sudo ls /root    # View root's directory
  ```

### 3. Variable Data Directories 📊

- **/var**: Variable data files
  ```bash
  ls /var/log     # System logs
  ls /var/cache   # Application cache
  ```

## Navigation Commands

### 1. Basic Navigation 🗺️

```bash
pwd                 # Print working directory
cd /path/to/dir     # Change directory
cd ..               # Go up one level
cd ~                # Go to home directory
cd -                # Go to previous directory
```

### 2. Listing Contents 📋

```bash
ls                  # List files and directories
ls -l               # Long listing format
ls -a               # Show hidden files
ls -h               # Human-readable sizes
ls -R               # Recursive listing
```

### 3. Finding Files 🔍

```bash
find / -name file.txt           # Find file by name
locate filename                 # Quick file search
which command                   # Find command location
whereis program                # Find program files
```

## File Operations

### 1. Creating Files and Directories 📝

```bash
touch file.txt                 # Create empty file
mkdir directory                # Create directory
mkdir -p path/to/directory    # Create nested directories
```

### 2. Copying and Moving 📦

```bash
cp source destination         # Copy file
cp -r source_dir dest_dir    # Copy directory
mv source destination        # Move/rename file
```

### 3. Removing Files 🗑️

```bash
rm file.txt                  # Remove file
rm -i file.txt              # Remove with confirmation
rm -r directory             # Remove directory
rm -rf directory           # Force remove directory
```

## File Permissions

### 1. Viewing Permissions 🔒

```bash
ls -l file.txt              # View file permissions
getfacl file.txt           # View detailed ACL
```

### 2. Changing Permissions

```bash
chmod 755 file.txt          # Change permissions
chown user:group file.txt   # Change ownership
```

## Special Navigation Features

### 1. Wildcards 🎯

```bash
ls *.txt                    # List all .txt files
ls document?.doc           # ? matches single character
ls [abc]*                  # Matches a, b, or c
```

### 2. Path Shortcuts ⚡

```bash
.                          # Current directory
..                         # Parent directory
~                          # Home directory
/                          # Root directory
```

## Practice Exercises 🎯

1. **Directory Navigation**
   ```bash
   cd ~
   mkdir -p projects/linux/test
   cd projects/linux/test
   pwd
   cd ../..
   pwd
   ```

2. **File Operations**
   ```bash
   touch file1.txt
   cp file1.txt file2.txt
   mkdir backup
   mv file2.txt backup/
   ls -R
   ```

3. **Permission Practice**
   ```bash
   touch script.sh
   chmod +x script.sh
   ls -l script.sh
   ```

## Common Issues and Solutions 🔧

1. **Permission Denied**
   ```bash
   sudo command    # Run with elevated privileges
   ```

2. **Directory Not Empty**
   ```bash
   rm -rf directory    # Force remove
   ```

3. **File Not Found**
   ```bash
   find / -name file 2>/dev/null    # Search without errors
   ```

## Additional Resources 📚

- [Linux Filesystem Hierarchy Standard](https://refspecs.linuxfoundation.org/FHS_3.0/fhs/index.html)
- [Linux Directory Structure Explained](https://www.howtogeek.com/117435/htg-explains-the-linux-directory-structure-explained/)
- [File System Navigation Tutorial](https://linuxjourney.com/lesson/filesystem-hierarchy)
