# أوامر الأمان 🔒

<div dir="rtl">

## إدارة المستخدمين

### 1. عمليات المستخدم 👤

| الأمر | الوصف | مثال |
|-------|--------|-------|
| `useradd` | إنشاء مستخدم جديد | `sudo useradd username` |
| `usermod` | تعديل حساب المستخدم | `sudo usermod -aG group username` |
| `userdel` | حذف مستخدم | `sudo userdel username` |
| `passwd` | تغيير كلمة المرور | `sudo passwd username` |
| `chage` | تغيير صلاحية كلمة المرور | `sudo chage -M 90 username` |

### 2. إدارة المجموعات 👥

| الأمر | الوصف | مثال |
|-------|--------|-------|
| `groupadd` | إنشاء مجموعة جديدة | `sudo groupadd groupname` |
| `groupmod` | تعديل مجموعة | `sudo groupmod -n newname oldname` |
| `groupdel` | حذف مجموعة | `sudo groupdel groupname` |
| `gpasswd` | إدارة المجموعات | `sudo gpasswd -a user group` |
| `groups` | عرض مجموعات المستخدم | `groups username` |

## صلاحيات الملفات

### 1. الصلاحيات الأساسية 📄

| الأمر | الوصف | مثال |
|-------|--------|-------|
| `chmod` | تغيير وضع الملف | `chmod 755 file` |
| `chown` | تغيير مالك الملف | `sudo chown user:group file` |
| `umask` | تعيين الصلاحيات الافتراضية | `umask 022` |
| `getfacl` | عرض قائمة التحكم بالوصول | `getfacl file` |
| `setfacl` | تعيين قائمة التحكم بالوصول | `setfacl -m u:user:rw file` |

### 2. الصلاحيات الخاصة 🔐

| الأمر | الوصف | مثال |
|-------|--------|-------|
| `chmod +s` | تعيين SUID/SGID | `chmod u+s file` |
| `chmod +t` | تعيين البت اللاصق | `chmod +t directory` |
| `chattr` | تغيير سمات الملف | `sudo chattr +i file` |
| `lsattr` | عرض سمات الملف | `lsattr file` |
| `find` | البحث عن ملفات حسب الصلاحيات | `find / -perm -4000` |

## أمان النظام

### 1. تدقيق النظام 🔍

| الأمر | الوصف | مثال |
|-------|--------|-------|
| `auditctl` | التحكم في نظام التدقيق | `sudo auditctl -w /etc/passwd -p wa` |
| `ausearch` | البحث في سجلات التدقيق | `sudo ausearch -f /etc/passwd` |
| `aureport` | إنشاء تقارير التدقيق | `sudo aureport --failed` |
| `last` | عرض سجل الدخول | `last -n 10` |
| `lastb` | عرض محاولات الدخول الفاشلة | `sudo lastb` |

### 2. مراقبة النظام 📊

| الأمر | الوصف | مثال |
|-------|--------|-------|
| `who` | عرض المستخدمين المتصلين | `who` |
| `w` | عرض نشاط المستخدم | `w` |
| `ps` | عرض العمليات | `ps aux` |
| `lsof` | عرض الملفات المفتوحة | `lsof -u username` |
| `netstat` | إحصائيات الشبكة | `netstat -tuln` |

## أمان الشبكة

### 1. إدارة جدار الحماية 🛡️

| الأمر | الوصف | مثال |
|-------|--------|-------|
| `ufw` | جدار الحماية البسيط | `sudo ufw enable` |
| `iptables` | إعداد جدار الحماية | `sudo iptables -L` |
| `nftables` | جدار الحماية الجيل التالي | `sudo nft list ruleset` |
| `firewall-cmd` | واجهة FirewallD | `sudo firewall-cmd --list-all` |
| `fail2ban` | حظر المحاولات الفاشلة | `sudo fail2ban-client status` |

### 2. مراقبة الشبكة 🌐

| الأمر | الوصف | مثال |
|-------|--------|-------|
| `tcpdump` | التقاط حركة الشبكة | `sudo tcpdump -i eth0` |
| `nmap` | ماسح الشبكة | `sudo nmap -sS localhost` |
| `ss` | إحصائيات المقابس | `ss -tuln` |
| `iftop` | استخدام الشبكة | `sudo iftop -i eth0` |
| `nethogs` | عرض النطاق الترددي لكل عملية | `sudo nethogs eth0` |

## التشفير وأدوات الأمان

### 1. تشفير الملفات 🔐

| الأمر | الوصف | مثال |
|-------|--------|-------|
| `gpg` | حارس الخصوصية GNU | `gpg -c file` |
| `openssl` | مجموعة أدوات OpenSSL | `openssl enc -aes-256-cbc -in file` |
| `ccrypt` | تشفير الملفات | `ccrypt file` |
| `cryptsetup` | تشفير القرص | `sudo cryptsetup luksFormat /dev/sdb1` |
| `veracrypt` | تشفير المجلدات | `veracrypt --create volume` |

### 2. أدوات الأمان 🛠️

| الأمر | الوصف | مثال |
|-------|--------|-------|
| `ssh-keygen` | توليد مفاتيح SSH | `ssh-keygen -t rsa -b 4096` |
| `chroot` | تغيير الدليل الجذر | `sudo chroot /mnt/newroot` |
| `sudo` | تنفيذ كمستخدم متميز | `sudo command` |
| `su` | تبديل المستخدم | `su - username` |
| `lynis` | تدقيق الأمان | `sudo lynis audit system` |

## أمثلة تطبيقية 🎯

### 1. أمان المستخدم
```bash
# إنشاء مستخدم جديد مع دليل رئيسي
sudo useradd -m -s /bin/bash username

# تعيين سياسة كلمة المرور
sudo chage -M 90 -m 7 -W 7 username

# إضافة مستخدم إلى مجموعة sudo
sudo usermod -aG sudo username
```

### 2. أمان الملفات
```bash
# تعيين صلاحيات آمنة
chmod 750 script.sh
chown root:admin script.sh

# إضافة صلاحيات ACL
setfacl -m u:user:rx file
setfacl -m g:group:rx file
```

### 3. أمان النظام
```bash
# تفعيل جدار الحماية
sudo ufw default deny incoming
sudo ufw allow ssh
sudo ufw enable

# مراقبة محاولات الدخول الفاشلة
sudo tail -f /var/log/auth.log
```

## الأمان المتقدم 🚀

### 1. تقوية SSH
```bash
# توليد مفتاح SSH قوي
ssh-keygen -t ed25519 -a 100

# إعداد خادم SSH
sudo nano /etc/ssh/sshd_config
# تعيين: PermitRootLogin no
# تعيين: PasswordAuthentication no
```

### 2. تدقيق النظام
```bash
# مراقبة تغييرات الملفات
sudo auditctl -w /etc/passwd -p wa -k passwd_changes
sudo auditctl -w /etc/shadow -p wa -k shadow_changes

# مراجعة سجلات التدقيق
sudo ausearch -k passwd_changes
```

## أفضل الممارسات 📚

1. **إدارة المستخدمين**
   - استخدام كلمات مرور قوية
   - تطبيق سياسات كلمات المرور
   - تدقيق الحسابات بانتظام
   - مبدأ أقل امتياز

2. **أمان النظام**
   - تحديثات الأمان المنتظمة
   - مراقبة سجلات النظام
   - تفعيل جدار الحماية
   - استخدام كشف التسلل

3. **أمان الشبكة**
   - تأمين خدمات الشبكة
   - مراقبة حركة الشبكة
   - تنفيذ ضوابط الوصول
   - استخدام التشفير

4. **أمان الملفات**
   - تعيين الصلاحيات المناسبة
   - استخدام قوائم التحكم بالوصول
   - تشفير البيانات الحساسة
   - النسخ الاحتياطي المنتظم

## الخطوات التالية 🚀

- [مراقبة الأداء](08-performance.md)
- [برمجة الصدفة](../scripting/01-bash-basics.md)
- [إدارة النظام](../admin/01-system-admin.md)
- [الأمان المتقدم](../security/01-advanced-security.md)

</div>
