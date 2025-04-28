---
sidebar_position: 8
title: استكشاف الأخطاء والاختبارات
description: سيناريوهات تفصيلية لاستكشاف الأخطاء، اختبارات تفاعلية، ودروس فيديو شاملة
---

# استكشاف الأخطاء المتقدم والتعلم التفاعلي

<div dir="rtl">

## دروس الفيديو الموسعة

### إدارة النظام
1. [تسلسل نظام ملفات لينكس](https://www.youtube.com/watch?v=example7)
   - فهم `/etc`، `/var`، `/usr`
   - تنظيم نظام الملفات
   - نقاط التحميل والأقسام

2. [تعمق في إدارة العمليات](https://www.youtube.com/watch?v=example8)
   - فهم حالات العملية
   - قيم الأولوية والـ nice
   - حدود الموارد

3. [إدارة الحزم المتقدمة](https://www.youtube.com/watch?v=example9)
   - إدارة المستودعات
   - اعتماديات الحزم
   - إنشاء حزم مخصصة

### الأمان
1. [تكوين SELinux](https://www.youtube.com/watch?v=example10)
   - أوضاع وسياقات SELinux
   - إدارة السياسات
   - استكشاف أخطاء SELinux

2. [إدارة جدار الحماية](https://www.youtube.com/watch?v=example11)
   - تعمق في iptables
   - تكوين nftables
   - جدران الحماية المستندة إلى المناطق

### تحسين الأداء
1. [تحليل أداء النظام](https://www.youtube.com/watch?v=example12)
   - أدوات مراقبة الأداء
   - تحديد اختناقات الموارد
   - تقنيات تحسين النظام

## سيناريوهات استكشاف الأخطاء المتقدمة

### السيناريو 5: مشاكل خادم قواعد البيانات
تشخيص وإصلاح مشاكل أداء قواعد البيانات:

```bash
# 1. التحقق من سجلات MySQL/PostgreSQL
tail -f /var/log/mysql/error.log
journalctl -u postgresql

# 2. مراقبة اتصالات قاعدة البيانات
netstat -an | grep :3306 | wc -l
pg_stat_activity

# 3. التحقق من الاستعلامات البطيئة
mysqldumpslow /var/log/mysql/slow-query.log
pg_stat_statements

# 4. تحليل إحصائيات الجداول
mysqlcheck -A
vacuumdb --analyze --verbose
```

### السيناريو 6: مشاكل خادم الويب
استكشاف أخطاء Apache/Nginx:

```bash
# 1. التحقق من حالة خادم الويب
systemctl status nginx
apache2ctl -S

# 2. اختبار التكوين
nginx -t
apachectl configtest

# 3. مراقبة أنماط الوصول
tail -f /var/log/nginx/access.log | grep -v "200 OK"
goaccess /var/log/apache2/access.log

# 4. التحقق من شهادات SSL
openssl x509 -text -noout -in /etc/ssl/certs/website.crt
certbot certificates
```

### السيناريو 7: مشاكل الحاويات
استكشاف أخطاء Docker/Podman:

```bash
# 1. التحقق من صحة الحاوية
docker stats
docker ps -a --filter status=exited

# 2. تحليل سجلات الحاوية
docker logs --tail 100 container_name
podman logs --since 10m container_name

# 3. فحص الشبكة
docker network inspect bridge
podman network ls

# 4. التحقق من قيود الموارد
docker inspect container_name | grep -A 10 "HostConfig"
```

### السيناريو 8: تلف نظام الملفات
استرداد نظام الملفات المتقدم:

```bash
# 1. التحقق من حالة السجل
tune2fs -l /dev/sda1 | grep "Filesystem state"
xfs_db -r /dev/sda2 -c "state"

# 2. نسخ احتياطي للسوبر بلوك
dd if=/dev/sda1 of=/root/sb-backup bs=4096 count=1

# 3. فرض fsck في وضع القراءة فقط
fsck.ext4 -n /dev/sda1
xfs_repair -n /dev/sda2

# 4. استرداد الملفات المحذوفة
extundelete /dev/sda1 --restore-all
debugfs -w /dev/sda1
```

## اختبارات تفاعلية

### الاختبار 1: إدارة النظام
<details>
<summary>ما هو الأمر الذي يعرض معلومات العمليات في الوقت الفعلي؟</summary>

- [ ] ps aux
- [x] top
- [ ] ls -l
- [ ] df -h

**التوضيح**: يوفر `top` إحصائيات النظام ومعلومات العمليات في الوقت الفعلي، مع التحديث بانتظام افتراضياً.
</details>

<details>
<summary>أي مجلد يحتوي على ملفات تكوين النظام؟</summary>

- [x] /etc
- [ ] /var
- [ ] /usr
- [ ] /bin

**التوضيح**: `/etc` هو المجلد القياسي لملفات تكوين النظام في لينكس.
</details>

### الاختبار 2: الشبكات
<details>
<summary>أي أداة تتتبع مسار الحزم إلى المضيف؟</summary>

- [ ] ping
- [ ] netstat
- [x] traceroute
- [ ] nslookup

**التوضيح**: يظهر `traceroute` المسار الذي تسلكه الحزم للوصول إلى الوجهة، بما في ذلك جميع القفزات الوسيطة.
</details>

<details>
<summary>ما هو الأمر الذي يظهر المنافذ المفتوحة؟</summary>

- [ ] ifconfig
- [x] netstat -tuln
- [ ] route
- [ ] arp

**التوضيح**: يظهر `netstat -tuln` جميع منافذ TCP وUDP المفتوحة بتنسيق رقمي.
</details>

### الاختبار 3: الأمان
<details>
<summary>أي ملف يخزن تجزئات كلمات المرور للمستخدمين؟</summary>

- [ ] /etc/passwd
- [x] /etc/shadow
- [ ] /etc/group
- [ ] /etc/users

**التوضيح**: يخزن `/etc/shadow` تجزئات كلمات المرور المشفرة ويمكن قراءته فقط من قبل root.
</details>

<details>
<summary>ما هو الأمر الذي يغير صلاحيات الملفات؟</summary>

- [ ] chown
- [x] chmod
- [ ] chgrp
- [ ] umask

**التوضيح**: يقوم `chmod` بتعديل صلاحيات الملفات (قراءة، كتابة، تنفيذ) للمالك، المجموعة، والآخرين.
</details>

## تمارين عملية

### التمرين 1: تحليل النظام
إنشاء نص برمجي يولد تقريراً شاملاً عن النظام:

```bash
#!/bin/bash

echo "=== تقرير تحليل النظام ==="
date

# معلومات النظام
echo -e "\n1. معلومات النظام:"
uname -a
lsb_release -a 2>/dev/null

# معلومات المعالج
echo -e "\n2. تفاصيل المعالج:"
lscpu | grep -E "Model name|Socket|Core|Thread"

# استخدام الذاكرة
echo -e "\n3. حالة الذاكرة:"
free -h
vmstat 1 5

# استخدام القرص
echo -e "\n4. استخدام القرص:"
df -h
iostat -x 2 3

# حالة الشبكة
echo -e "\n5. اتصالات الشبكة:"
ss -tuln
ip -s link

# ملخص العمليات
echo -e "\n6. أعلى العمليات:"
ps aux --sort=-%cpu | head -6
```

### التمرين 2: تدقيق الأمان
إنشاء نص برمجي للتدقيق الأمني الأساسي:

```bash
#!/bin/bash

echo "=== تقرير التدقيق الأمني ==="
date

# التحقق من محاولات تسجيل الدخول الفاشلة
echo -e "\n1. محاولات تسجيل الدخول الفاشلة:"
grep "Failed password" /var/log/auth.log | tail -5

# قائمة المستخدمين مع UID 0
echo -e "\n2. المستخدمون مع صلاحيات الجذر:"
awk -F: '$3 == 0 {print $1}' /etc/passwd

# التحقق من المنافذ المفتوحة
echo -e "\n3. المنافذ المفتوحة:"
netstat -tuln | grep LISTEN

# قائمة ملفات SUID
echo -e "\n4. ملفات SUID:"
find / -perm -4000 -type f 2>/dev/null

# التحقق من سياسات كلمات المرور
echo -e "\n5. سياسات كلمات المرور:"
grep -E "PASS_MAX_DAYS|PASS_MIN_DAYS" /etc/login.defs
```

## الخطوات التالية

- [مراقبة النظام المتقدمة](/ar/admin/03-log-management)
- [أمن الشبكات](/ar/networking/03-network-security)
- [تحسين الأداء](/ar/admin/02-performance-tuning)

</div>
