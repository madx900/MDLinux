# Package Management Commands 📦

## APT (Debian/Ubuntu)

### 1. Basic Package Operations 🔄

| Command | Description | Example |
|---------|-------------|---------|
| `apt update` | Update package list | `sudo apt update` |
| `apt upgrade` | Upgrade packages | `sudo apt upgrade` |
| `apt install` | Install package | `sudo apt install package_name` |
| `apt remove` | Remove package | `sudo apt remove package_name` |
| `apt purge` | Remove package with config | `sudo apt purge package_name` |

### 2. Package Information 📋

| Command | Description | Example |
|---------|-------------|---------|
| `apt search` | Search packages | `apt search keyword` |
| `apt show` | Show package details | `apt show package_name` |
| `apt list` | List packages | `apt list --installed` |
| `apt policy` | Show package policy | `apt policy package_name` |
| `apt depends` | Show dependencies | `apt depends package_name` |

## DNF/YUM (Fedora/RHEL)

### 1. Basic Operations 🔄

| Command | Description | Example |
|---------|-------------|---------|
| `dnf check-update` | Check for updates | `sudo dnf check-update` |
| `dnf upgrade` | Upgrade packages | `sudo dnf upgrade` |
| `dnf install` | Install package | `sudo dnf install package_name` |
| `dnf remove` | Remove package | `sudo dnf remove package_name` |
| `dnf autoremove` | Remove unused deps | `sudo dnf autoremove` |

### 2. Package Information 📋

| Command | Description | Example |
|---------|-------------|---------|
| `dnf search` | Search packages | `dnf search keyword` |
| `dnf info` | Show package info | `dnf info package_name` |
| `dnf list` | List packages | `dnf list installed` |
| `dnf provides` | Find package providing file | `dnf provides /path/to/file` |
| `dnf repolist` | List repositories | `dnf repolist all` |

## Pacman (Arch Linux)

### 1. Basic Operations 🔄

| Command | Description | Example |
|---------|-------------|---------|
| `pacman -Sy` | Sync databases | `sudo pacman -Sy` |
| `pacman -Syu` | System upgrade | `sudo pacman -Syu` |
| `pacman -S` | Install package | `sudo pacman -S package_name` |
| `pacman -R` | Remove package | `sudo pacman -R package_name` |
| `pacman -Rs` | Remove with unused deps | `sudo pacman -Rs package_name` |

### 2. Package Information 📋

| Command | Description | Example |
|---------|-------------|---------|
| `pacman -Ss` | Search packages | `pacman -Ss keyword` |
| `pacman -Si` | Show package info | `pacman -Si package_name` |
| `pacman -Q` | Query installed | `pacman -Q` |
| `pacman -Qdt` | List orphan packages | `pacman -Qdt` |
| `pacman -Ql` | List package files | `pacman -Ql package_name` |

## Snap Package Manager

### 1. Basic Operations 🔄

| Command | Description | Example |
|---------|-------------|---------|
| `snap install` | Install package | `sudo snap install package_name` |
| `snap remove` | Remove package | `sudo snap remove package_name` |
| `snap refresh` | Update packages | `sudo snap refresh` |
| `snap revert` | Revert to previous version | `sudo snap revert package_name` |
| `snap list` | List installed snaps | `snap list` |

### 2. Package Information 📋

| Command | Description | Example |
|---------|-------------|---------|
| `snap find` | Search packages | `snap find keyword` |
| `snap info` | Show package info | `snap info package_name` |
| `snap services` | List running services | `snap services` |
| `snap connections` | Show interfaces | `snap connections` |
| `snap changes` | Show recent changes | `snap changes` |

## Flatpak

### 1. Basic Operations 🔄

| Command | Description | Example |
|---------|-------------|---------|
| `flatpak install` | Install package | `flatpak install app_id` |
| `flatpak update` | Update packages | `flatpak update` |
| `flatpak uninstall` | Remove package | `flatpak uninstall app_id` |
| `flatpak run` | Run application | `flatpak run app_id` |
| `flatpak repair` | Repair installation | `flatpak repair` |

### 2. Package Information 📋

| Command | Description | Example |
|---------|-------------|---------|
| `flatpak search` | Search packages | `flatpak search keyword` |
| `flatpak list` | List installed apps | `flatpak list` |
| `flatpak info` | Show app info | `flatpak info app_id` |
| `flatpak remote-list` | List repositories | `flatpak remote-list` |
| `flatpak history` | Show install history | `flatpak history` |

## Practice Examples 🎯

### 1. System Update
```bash
# Debian/Ubuntu
sudo apt update
sudo apt upgrade -y

# Fedora
sudo dnf upgrade -y

# Arch Linux
sudo pacman -Syu
```

### 2. Package Installation
```bash
# Install with dependencies
sudo apt install package_name

# Install from specific repo
sudo dnf --enablerepo=repo_name install package_name

# Install package group
sudo pacman -S base-devel
```

### 3. Package Cleanup
```bash
# Remove unused packages
sudo apt autoremove

# Clean package cache
sudo dnf clean all

# Remove orphaned packages
sudo pacman -Rns $(pacman -Qtdq)
```

## Advanced Usage 🚀

### 1. Repository Management
```bash
# Add repository (Ubuntu)
sudo add-apt-repository ppa:user/repo

# Add repository (Fedora)
sudo dnf config-manager --add-repo repo_url

# Add repository (Arch)
sudo nano /etc/pacman.conf
```

### 2. Package Building
```bash
# Build from source (Debian)
apt source --compile package_name

# Build RPM package
rpmbuild -ba package.spec

# Build AUR package
makepkg -si
```

## Best Practices 📚

1. **System Updates**
   - Update package lists regularly
   - Perform system upgrades periodically
   - Review changes before applying
   - Keep backups before major upgrades

2. **Package Management**
   - Use official repositories when possible
   - Verify package signatures
   - Clean package cache periodically
   - Remove unused packages

3. **Security**
   - Keep system up to date
   - Use secure repositories
   - Verify package authenticity
   - Monitor security advisories

## Next Steps 🚀

- [Security Commands](07-security.md)
- [Performance Monitoring](08-performance.md)
- [Shell Scripting](../scripting/01-bash-basics.md)
- [System Administration](../admin/01-system-admin.md)
