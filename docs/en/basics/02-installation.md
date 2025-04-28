# Linux Installation Guide 💿

## Installation Methods

### 1. Virtual Machine Installation 🖥️

This is the safest method for beginners.

1. **Download VirtualBox**
   - Go to [VirtualBox.org](https://www.virtualbox.org/)
   - Download for your operating system
   - Install VirtualBox

2. **Download Linux ISO**
   - Ubuntu: [ubuntu.com/download](https://ubuntu.com/download)
   - Linux Mint: [linuxmint.com](https://linuxmint.com/)
   - Fedora: [getfedora.org](https://getfedora.org/)

3. **Create Virtual Machine**
   ```
   1. Open VirtualBox
   2. Click "New"
   3. Name: Ubuntu (or your distro)
   4. Type: Linux
   5. Version: Ubuntu (64-bit)
   6. Memory: 4096 MB (recommended)
   7. Create virtual hard disk
   8. Choose VDI format
   9. Select Dynamically allocated
   10. Size: 20 GB minimum
   ```

4. **Install Linux**
   ```
   1. Start the VM
   2. Select your ISO file
   3. Choose "Install Linux"
   4. Select language
   5. Choose installation type
   6. Select timezone
   7. Create user account
   8. Wait for installation
   ```

### 2. Dual Boot Installation 💽

**Warning**: Back up your data before proceeding!

1. **Prepare Windows**
   - Backup important data
   - Defragment hard drive
   - Create free partition space

2. **Create Installation Media**
   - Download ISO file
   - Create bootable USB using:
     - Rufus (Windows)
     - Etcher (Cross-platform)

3. **Installation Steps**
   ```
   1. Boot from USB
   2. Choose "Install alongside Windows"
   3. Select partition size
   4. Choose location/language
   5. Create user account
   6. Wait for installation
   7. Restart computer
   ```

### 3. WSL (Windows Subsystem for Linux) 🪟

For Windows 10/11 users:

1. **Enable WSL**
   ```powershell
   dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
   ```

2. **Enable Virtual Machine Platform**
   ```powershell
   dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
   ```

3. **Install Linux**
   - Open Microsoft Store
   - Search for "Ubuntu" or preferred distro
   - Click Install

## Post-Installation Steps

1. **Update System**
   ```bash
   sudo apt update
   sudo apt upgrade
   ```

2. **Install Essential Software**
   ```bash
   sudo apt install build-essential
   sudo apt install git
   sudo apt install curl
   ```

3. **Setup Development Environment**
   - Choose text editor/IDE
   - Install programming languages
   - Configure shell

## Troubleshooting

### Common Issues

1. **Boot Problems**
   - Check BIOS settings
   - Verify boot order
   - Disable Secure Boot

2. **Driver Issues**
   - Update system
   - Install additional drivers
   - Check hardware compatibility

3. **Network Problems**
   - Check network manager
   - Install drivers if needed
   - Configure wireless settings

## Next Steps

- [Command Line Basics](03-command-line.md)
- [File System Navigation](04-file-system.md)
- [Basic Commands](05-basic-commands.md)

## Additional Resources

- [Ubuntu Documentation](https://help.ubuntu.com/)
- [Linux Mint Installation Guide](https://linuxmint-installation-guide.readthedocs.io/)
- [Arch Linux Installation Guide](https://wiki.archlinux.org/title/Installation_guide)
