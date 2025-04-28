# أوامر إدارة النظام 🛠️

<div dir="rtl">

## إدارة المستخدمين

### 1. أوامر حساب المستخدم 👥

| الأمر | الوصف | مثال |
|-------|--------|-------|
| `useradd` | إنشاء مستخدم جديد | `useradd -m username` |
| `usermod` | تعديل حساب المستخدم | `usermod -aG sudo user` |
| `userdel` | حذف حساب المستخدم | `userdel -r username` |
| `passwd` | تغيير كلمة المرور | `passwd username` |
| `chage` | تغيير انتهاء صلاحية كلمة المرور | `chage -l username` |

### 2. إدارة المجموعات 👥

| الأمر | الوصف | مثال |
|-------|--------|-------|
| `groupadd` | إنشاء مجموعة جديدة | `groupadd groupname` |
| `groupmod` | تعديل مجموعة | `groupmod -n newname oldname` |
| `groupdel` | حذف مجموعة | `groupdel groupname` |
| `gpasswd` | إدارة المجموعات | `gpasswd -a user group` |
| `newgrp` | تغيير المجموعة الأساسية | `newgrp groupname` |

## خدمات النظام

### 1. إدارة الخدمات 🔄

| الأمر | الوصف | مثال |
|-------|--------|-------|
| `systemctl` | التحكم في خدمات النظام | `systemctl start service` |
| `service` | تحكم الخدمة القديم | `service nginx restart` |
| `update-rc.d` | إدارة نصوص التشغيل | `update-rc.d service defaults` |
| `chkconfig` | خدمات النظام | `chkconfig service on` |

### 2. إدارة العمليات 📊

| الأمر | الوصف | مثال |
|-------|--------|-------|
| `ps` | عرض العمليات | `ps aux` |
| `top` | عرض العمليات المتحرك | `top` |
| `kill` | إنهاء عملية | `kill -9 PID` |
| `nice` | تشغيل بأولوية | `nice -n 10 command` |
| `renice` | تغيير الأولوية | `renice -n 10 -p PID` |

## صيانة النظام

### 1. تحديثات النظام 🔄

| الأمر | الوصف | مثال |
|-------|--------|-------|
| `apt update` | تحديث قائمة الحزم | `sudo apt update` |
| `apt upgrade` | ترقية الحزم | `sudo apt upgrade` |
| `apt autoremove` | إزالة الحزم غير المستخدمة | `sudo apt autoremove` |
| `dpkg` | مدير الحزم | `dpkg -i package.deb` |
| `snap` | مدير حزم سناب | `snap install package` |

### 2. معلومات النظام 📋

| الأمر | الوصف | مثال |
|-------|--------|-------|
| `uname` | معلومات النظام | `uname -a` |
| `lsb_release` | معلومات التوزيعة | `lsb_release -a` |
| `dmidecode` | معلومات العتاد | `sudo dmidecode` |
| `lshw` | تكوين العتاد | `sudo lshw` |
| `lscpu` | معلومات المعالج | `lscpu` |

## إدارة التخزين

### 1. عمليات القرص 💽

| الأمر | الوصف | مثال |
|-------|--------|-------|
| `fdisk` | مدير الأقسام | `fdisk -l` |
| `parted` | مدير الأقسام | `parted /dev/sda print` |
| `mkfs` | إنشاء نظام ملفات | `mkfs.ext4 /dev/sda1` |
| `mount` | تحميل نظام الملفات | `mount /dev/sda1 /mnt` |
| `umount` | فك تحميل نظام الملفات | `umount /mnt` |

### 2. مراقبة التخزين 📊

| الأمر | الوصف | مثال |
|-------|--------|-------|
| `df` | استخدام مساحة القرص | `df -h` |
| `du` | استخدام المجلد | `du -sh /home` |
| `ncdu` | استخدام القرص التفاعلي | `ncdu /` |
| `iostat` | إحصائيات الإدخال/الإخراج | `iostat -x 1` |
| `lsblk` | عرض أجهزة الكتل | `lsblk` |

## أمن النظام

### 1. التحكم في الوصول 🔒

| الأمر | الوصف | مثال |
|-------|--------|-------|
| `chmod` | تغيير الصلاحيات | `chmod 755 file` |
| `chown` | تغيير الملكية | `chown user:group file` |
| `sudo` | تنفيذ كمستخدم فائق | `sudo command` |
| `su` | تبديل المستخدم | `su - username` |
| `visudo` | تحرير ملف sudoers | `visudo` |

### 2. أدوات الأمان 🛡️

| الأمر | الوصف | مثال |
|-------|--------|-------|
| `ufw` | جدار الحماية | `ufw enable` |
| `fail2ban` | حظر عناوين IP | `fail2ban-client status` |
| `chroot` | تغيير الجذر | `chroot /mnt` |
| `apparmor` | درع التطبيقات | `aa-status` |
| `selinux` | سياسة الأمان | `sestatus` |

## نسخ النظام احتياطياً

### 1. أوامر النسخ الاحتياطي 💾

| الأمر | الوصف | مثال |
|-------|--------|-------|
| `tar` | أرشفة الملفات | `tar -czf backup.tar.gz /home` |
| `rsync` | مزامنة الملفات/المجلدات | `rsync -av source/ dest/` |
| `dd` | تحويل ونسخ | `dd if=/dev/sda of=backup.img` |
| `dump` | نسخ نظام الملفات | `dump -0aj -f backup.dump /` |
| `restore` | استعادة من النسخ | `restore -rf backup.dump` |

## أمثلة تطبيقية 🎯

### 1. إدارة المستخدمين
```bash
# إنشاء مستخدم جديد مع مجلد رئيسي
sudo useradd -m -s /bin/bash newuser
sudo passwd newuser
sudo usermod -aG sudo newuser

# عرض معلومات المستخدم
id newuser
groups newuser
```

### 2. إدارة الخدمات
```bash
# التحقق من حالة الخدمة
systemctl status ssh
systemctl is-enabled ssh

# تمكين وتشغيل الخدمة
sudo systemctl enable ssh
sudo systemctl start ssh
```

### 3. إدارة القرص
```bash
# التحقق من مساحة القرص
df -h
du -sh /*

# تحميل قرص جديد
sudo fdisk -l
sudo mount /dev/sdb1 /mnt
```

## المهام الشائعة 📋

1. **تحديث النظام**
   ```bash
   sudo apt update
   sudo apt upgrade
   sudo apt autoremove
   ```

2. **إدارة المستخدمين**
   ```bash
   # إضافة مستخدم إلى مجموعة
   sudo usermod -aG docker username
   
   # قفل/فتح الحساب
   sudo passwd -l username
   sudo passwd -u username
   ```

3. **التحكم في الخدمات**
   ```bash
   # إعادة تشغيل الخدمة
   sudo systemctl restart service
   
   # التحقق من السجلات
   journalctl -u service
   ```

## استكشاف الأخطاء وإصلاحها 🔧

### 1. مشاكل النظام
```bash
# التحقق من سجلات النظام
tail -f /var/log/syslog
dmesg | tail

# التحقق من موارد النظام
top
free -h
```

### 2. مشاكل الخدمات
```bash
# التحقق من حالة الخدمة
systemctl status service
journalctl -xe

# التحقق من المنافذ
netstat -tulpn
lsof -i :80
```

## أفضل الممارسات 📚

1. **الصيانة المنتظمة**
   - تحديث النظام بانتظام
   - مراقبة مساحة القرص
   - التحقق من سجلات النظام
   - النسخ الاحتياطي للبيانات المهمة

2. **الأمان**
   - استخدام كلمات مرور قوية
   - تفعيل جدار الحماية
   - مراقبة سجلات المصادقة
   - تحديثات الأمان المنتظمة

3. **التوثيق**
   - توثيق تغييرات النظام
   - الاحتفاظ بنسخ الإعدادات
   - الاحتفاظ بقائمة المستخدمين
   - تسجيل الإجراءات المخصصة

## الخطوات التالية 🚀

- [أوامر الشبكة](03-network.md)
- [إدارة العمليات](04-process.md)
- [إدارة الأمان](05-security.md)
- [تحسين الأداء](06-performance.md)

</div>
