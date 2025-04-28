---
sidebar_position: 1
title: أساسيات إدارة التخزين
description: تعلم المفاهيم والأوامر الأساسية لإدارة التخزين في لينكس
---

# إدارة التخزين في لينكس

<div dir="rtl">

## مفاهيم التخزين

### 1. أنواع التخزين
- الأقراص الفيزيائية (HDD، SSD)
- الأحجام المنطقية (LVM)
- مصفوفات RAID
- التخزين الشبكي (NAS، SAN)

### 2. أنظمة الملفات
- ext4
- XFS
- Btrfs
- ZFS

## إدارة الأقراص

### 1. معلومات القرص
```bash
# عرض أجهزة الكتل
lsblk
fdisk -l

# عرض استخدام القرص
df -h
du -sh /path
```

### 2. التقسيم
```bash
# إنشاء أقسام
fdisk /dev/sda
parted /dev/sda

# تهيئة الأقسام
mkfs.ext4 /dev/sda1
mkfs.xfs /dev/sda2
```

### 3. إدارة التحميل
```bash
# تحميل نظام الملفات
mount /dev/sda1 /mnt/data

# التحميل التلقائي (fstab)
echo "/dev/sda1 /mnt/data ext4 defaults 0 2" >> /etc/fstab
```

## إدارة الأحجام المنطقية (LVM)

### 1. الأحجام الفيزيائية
```bash
# إنشاء حجم فيزيائي
pvcreate /dev/sdb
pvdisplay

# مسح الأحجام الفيزيائية
pvscan
```

### 2. مجموعات الأحجام
```bash
# إنشاء مجموعة أحجام
vgcreate vg_name /dev/sdb
vgdisplay

# توسيع مجموعة الأحجام
vgextend vg_name /dev/sdc
```

### 3. الأحجام المنطقية
```bash
# إنشاء حجم منطقي
lvcreate -L 10G -n lv_name vg_name
lvdisplay

# توسيع الحجم المنطقي
lvextend -L +5G /dev/vg_name/lv_name
```

## تكوين RAID

### 1. RAID البرمجي
```bash
# إنشاء مصفوفة RAID
mdadm --create /dev/md0 --level=1 --raid-devices=2 /dev/sdb1 /dev/sdc1

# مراقبة RAID
cat /proc/mdstat
mdadm --detail /dev/md0
```

### 2. إدارة RAID
```bash
# إضافة قرص احتياطي
mdadm --add /dev/md0 /dev/sdd1

# إزالة قرص
mdadm --remove /dev/md0 /dev/sdb1
```

## أداء التخزين

### 1. مراقبة الإدخال/الإخراج
```bash
# مراقبة عمليات الإدخال/الإخراج
iostat -x 1
iotop
```

### 2. تحسين الأداء
```bash
# تعيين جدولة الإدخال/الإخراج
echo deadline > /sys/block/sda/queue/scheduler

# تعيين القراءة المسبقة
blockdev --setra 4096 /dev/sda
```

## النسخ الاحتياطي والاستعادة

### 1. أدوات النسخ الاحتياطي
```bash
# إنشاء نسخة احتياطية
rsync -av /source /destination
tar -czf backup.tar.gz /source

# نسخ احتياطي تزايدي
rdiff-backup /source /backup
```

### 2. أدوات الاستعادة
```bash
# استعادة الملفات المحذوفة
extundelete /dev/sda1 --restore-file /path/to/file

# فحص نظام الملفات
fsck /dev/sda1
xfs_repair /dev/sda2
```

## تشفير التخزين

### 1. تشفير LUKS
```bash
# إنشاء حجم مشفر
cryptsetup luksFormat /dev/sda1

# فتح حجم مشفر
cryptsetup luksOpen /dev/sda1 secret
```

### 2. تشفير نظام الملفات
```bash
# إنشاء دليل مشفر
encfs ~/.encrypted ~/visible

# تحميل نظام ملفات مشفر
mount -t ecryptfs /source /destination
```

## التخزين الشبكي

### 1. تكوين NFS
```bash
# تحميل مشاركة NFS
mount -t nfs server:/share /mnt/nfs

# التحميل التلقائي لـ NFS
echo "server:/share /mnt/nfs nfs defaults 0 0" >> /etc/fstab
```

### 2. تكوين Samba
```bash
# تحميل مشاركة SMB
mount -t cifs //server/share /mnt/smb -o username=user

# إنشاء مشاركة SMB
[share]
  path = /path/to/share
  public = yes
  writable = yes
```

## أفضل الممارسات

1. **الصيانة المنتظمة**
   - فحوصات نظام الملفات
   - مراقبة صحة القرص
   - تحسين الأداء

2. **استراتيجية النسخ الاحتياطي**
   - نسخ احتياطي منتظم
   - مواقع نسخ احتياطي متعددة
   - اختبار النسخ الاحتياطي

3. **التوثيق**
   - تخطيط التخزين
   - نقاط التحميل
   - إجراءات النسخ الاحتياطي

## الخطوات التالية

- [إدارة التخزين المتقدمة](/ar/storage/02-advanced-storage)
- [تحسين أداء التخزين](/ar/storage/03-storage-performance)
- [أمان التخزين](/ar/storage/04-storage-security)

</div>
