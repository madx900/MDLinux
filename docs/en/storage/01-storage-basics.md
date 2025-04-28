---
sidebar_position: 1
title: Storage Management Basics
description: Learn fundamental concepts and commands for managing storage in Linux
---

# Linux Storage Management

## Storage Concepts

### 1. Storage Types
- Physical disks (HDDs, SSDs)
- Logical volumes (LVM)
- RAID arrays
- Network storage (NAS, SAN)

### 2. File Systems
- ext4
- XFS
- Btrfs
- ZFS

## Disk Management

### 1. Disk Information
```bash
# List block devices
lsblk
fdisk -l

# Show disk usage
df -h
du -sh /path
```

### 2. Partitioning
```bash
# Create partitions
fdisk /dev/sda
parted /dev/sda

# Format partitions
mkfs.ext4 /dev/sda1
mkfs.xfs /dev/sda2
```

### 3. Mount Management
```bash
# Mount filesystem
mount /dev/sda1 /mnt/data

# Auto-mount (fstab)
echo "/dev/sda1 /mnt/data ext4 defaults 0 2" >> /etc/fstab
```

## Logical Volume Management (LVM)

### 1. Physical Volumes
```bash
# Create PV
pvcreate /dev/sdb
pvdisplay

# Scan for PVs
pvscan
```

### 2. Volume Groups
```bash
# Create VG
vgcreate vg_name /dev/sdb
vgdisplay

# Extend VG
vgextend vg_name /dev/sdc
```

### 3. Logical Volumes
```bash
# Create LV
lvcreate -L 10G -n lv_name vg_name
lvdisplay

# Extend LV
lvextend -L +5G /dev/vg_name/lv_name
```

## RAID Configuration

### 1. Software RAID
```bash
# Create RAID array
mdadm --create /dev/md0 --level=1 --raid-devices=2 /dev/sdb1 /dev/sdc1

# Monitor RAID
cat /proc/mdstat
mdadm --detail /dev/md0
```

### 2. RAID Management
```bash
# Add spare disk
mdadm --add /dev/md0 /dev/sdd1

# Remove disk
mdadm --remove /dev/md0 /dev/sdb1
```

## Storage Performance

### 1. I/O Monitoring
```bash
# Monitor I/O operations
iostat -x 1
iotop
```

### 2. Performance Tuning
```bash
# Set I/O scheduler
echo deadline > /sys/block/sda/queue/scheduler

# Set read-ahead
blockdev --setra 4096 /dev/sda
```

## Backup and Recovery

### 1. Backup Tools
```bash
# Create backup
rsync -av /source /destination
tar -czf backup.tar.gz /source

# Incremental backup
rdiff-backup /source /backup
```

### 2. Recovery Tools
```bash
# Recover deleted files
extundelete /dev/sda1 --restore-file /path/to/file

# File system check
fsck /dev/sda1
xfs_repair /dev/sda2
```

## Storage Encryption

### 1. LUKS Encryption
```bash
# Create encrypted volume
cryptsetup luksFormat /dev/sda1

# Open encrypted volume
cryptsetup luksOpen /dev/sda1 secret
```

### 2. File System Encryption
```bash
# Create encrypted directory
encfs ~/.encrypted ~/visible

# Mount encrypted filesystem
mount -t ecryptfs /source /destination
```

## Network Storage

### 1. NFS Configuration
```bash
# Mount NFS share
mount -t nfs server:/share /mnt/nfs

# Auto-mount NFS
echo "server:/share /mnt/nfs nfs defaults 0 0" >> /etc/fstab
```

### 2. Samba Configuration
```bash
# Mount SMB share
mount -t cifs //server/share /mnt/smb -o username=user

# Create SMB share
[share]
  path = /path/to/share
  public = yes
  writable = yes
```

## Best Practices

1. **Regular Maintenance**
   - File system checks
   - Disk health monitoring
   - Performance optimization

2. **Backup Strategy**
   - Regular backups
   - Multiple backup locations
   - Backup testing

3. **Documentation**
   - Storage layout
   - Mount points
   - Backup procedures

## Next Steps

- [Advanced Storage Management](/en/storage/02-advanced-storage)
- [Storage Performance Tuning](/en/storage/03-storage-performance)
- [Storage Security](/en/storage/04-storage-security)
