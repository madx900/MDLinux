---
sidebar_position: 7
title: التحديات المتقدمة واستكشاف الأخطاء
description: تحديات لينكس المتقدمة، دروس الفيديو، وسيناريوهات استكشاف الأخطاء في العالم الحقيقي
---

# التحديات المتقدمة واستكشاف الأخطاء

<div dir="rtl">

## دروس الفيديو

### أوامر لينكس الأساسية
- [مقدمة في سطر أوامر لينكس](https://www.youtube.com/watch?v=example1)
- [التنقل في نظام الملفات](https://www.youtube.com/watch?v=example2)
- [معالجة النصوص باستخدام grep و sed و awk](https://www.youtube.com/watch?v=example3)

### إدارة النظام
- [إدارة المستخدمين في لينكس](https://www.youtube.com/watch?v=example4)
- [تكوين الشبكة](https://www.youtube.com/watch?v=example5)
- [تعزيز الأمان](https://www.youtube.com/watch?v=example6)

## التحديات المتقدمة

### التحدي 1: مراقب النظام
إنشاء نص برمجي لمراقبة النظام يقوم بـ:
1. مراقبة استخدام المعالج والذاكرة والقرص
2. إرسال تنبيهات عند تجاوز الحدود
3. تسجيل البيانات التاريخية

```bash
#!/bin/bash

# التكوين
CPU_THRESHOLD=80
MEM_THRESHOLD=90
DISK_THRESHOLD=85
LOG_FILE="/var/log/system_monitor.log"

# دالة للتحقق من استخدام المعالج
check_cpu() {
    cpu_usage=$(top -bn1 | grep "Cpu(s)" | awk '{print $2}' | cut -d. -f1)
    if [ $cpu_usage -gt $CPU_THRESHOLD ]; then
        echo "$(date): استخدام عالي للمعالج: $cpu_usage%" >> $LOG_FILE
        notify-send "تحذير: استخدام عالي للمعالج" "الحالي: $cpu_usage%"
    fi
}

# دالة للتحقق من استخدام الذاكرة
check_memory() {
    mem_usage=$(free | grep Mem | awk '{print $3/$2 * 100.0}' | cut -d. -f1)
    if [ $mem_usage -gt $MEM_THRESHOLD ]; then
        echo "$(date): استخدام عالي للذاكرة: $mem_usage%" >> $LOG_FILE
        notify-send "تحذير: استخدام عالي للذاكرة" "الحالي: $mem_usage%"
    fi
}

# دالة للتحقق من استخدام القرص
check_disk() {
    disk_usage=$(df -h / | tail -1 | awk '{print $5}' | cut -d% -f1)
    if [ $disk_usage -gt $DISK_THRESHOLD ]; then
        echo "$(date): استخدام عالي للقرص: $disk_usage%" >> $LOG_FILE
        notify-send "تحذير: استخدام عالي للقرص" "الحالي: $disk_usage%"
    fi
}

# الحلقة الرئيسية
while true; do
    check_cpu
    check_memory
    check_disk
    sleep 300  # التحقق كل 5 دقائق
done
```

### التحدي 2: محلل السجلات
إنشاء نص برمجي لتحليل ملفات السجل وإنشاء التقارير:

```bash
#!/bin/bash

# التكوين
LOG_DIR="/var/log"
REPORT_DIR="/root/reports"
DATE=$(date +%Y%m%d)

# إنشاء مجلد التقارير
mkdir -p $REPORT_DIR

# دالة لتحليل محاولات المصادقة
analyze_auth() {
    echo "=== تقرير المصادقة ===" > $REPORT_DIR/auth_report_$DATE.txt
    echo "محاولات تسجيل الدخول الفاشلة:" >> $REPORT_DIR/auth_report_$DATE.txt
    grep "Failed password" /var/log/auth.log | awk '{print $11}' | sort | uniq -c | sort -nr >> $REPORT_DIR/auth_report_$DATE.txt
    
    echo -e "\nتسجيلات الدخول الناجحة:" >> $REPORT_DIR/auth_report_$DATE.txt
    grep "session opened" /var/log/auth.log | awk '{print $11}' | sort | uniq -c >> $REPORT_DIR/auth_report_$DATE.txt
}

# دالة لتحليل موارد النظام
analyze_resources() {
    echo "=== تقرير استخدام الموارد ===" > $REPORT_DIR/resource_report_$DATE.txt
    echo "العمليات الأكثر استهلاكاً للمعالج:" >> $REPORT_DIR/resource_report_$DATE.txt
    ps aux --sort=-%cpu | head -11 >> $REPORT_DIR/resource_report_$DATE.txt
    
    echo -e "\nاستخدام الذاكرة حسب العملية:" >> $REPORT_DIR/resource_report_$DATE.txt
    ps aux --sort=-%mem | head -11 >> $REPORT_DIR/resource_report_$DATE.txt
}

# إنشاء التقارير
analyze_auth
analyze_resources
```

### التحدي 3: نظام النسخ الاحتياطي
إنشاء حل شامل للنسخ الاحتياطي:

```bash
#!/bin/bash

# التكوين
SOURCE_DIR="/home"
BACKUP_DIR="/backup"
REMOTE_HOST="backup-server"
REMOTE_DIR="/remote-backup"
DATE=$(date +%Y%m%d_%H%M%S)

# دالة لإنشاء نسخة احتياطية محلية
create_local_backup() {
    tar -czf $BACKUP_DIR/backup_$DATE.tar.gz $SOURCE_DIR
    
    # الاحتفاظ بآخر 5 نسخ احتياطية فقط
    ls -t $BACKUP_DIR/backup_*.tar.gz | tail -n +6 | xargs -r rm
}

# دالة للمزامنة مع الخادم البعيد
sync_remote() {
    rsync -avz $BACKUP_DIR/ $REMOTE_HOST:$REMOTE_DIR/
}

# دالة للتحقق من النسخ الاحتياطي
verify_backup() {
    # مقارنة المجاميع الاختبارية للمصدر والنسخة الاحتياطية
    find $SOURCE_DIR -type f -exec md5sum {} \; > /tmp/source_checksums
    cd $BACKUP_DIR
    tar -xzf backup_$DATE.tar.gz -C /tmp
    find /tmp/home -type f -exec md5sum {} \; > /tmp/backup_checksums
    
    # تقرير الاختلافات
    diff /tmp/source_checksums /tmp/backup_checksums
}

# تنفيذ عملية النسخ الاحتياطي
create_local_backup
verify_backup
sync_remote
```

## سيناريوهات استكشاف الأخطاء

### السيناريو 1: النظام لا يقلع
المشاكل الشائعة والحلول:

```bash
# 1. التحقق من سجلات النظام
journalctl -xb

# 2. التحقق من حالة القرص
fsck /dev/sda1

# 3. الإقلاع في وضع الاسترداد
# في قائمة GRUB، اختر وضع الاسترداد
mount -o remount,rw /    # جعل نظام الملفات قابل للكتابة
```

### السيناريو 2: مشاكل اتصال الشبكة
خطوات تشخيص وإصلاح مشاكل الشبكة:

```bash
# 1. التحقق من حالة الواجهة
ip link show
ip addr show

# 2. اختبار حل DNS
dig google.com
cat /etc/resolv.conf

# 3. التحقق من التوجيه
ip route show
traceroute google.com

# 4. اختبار الشبكة المحلية
ping gateway_ip
```

### السيناريو 3: حمل النظام المرتفع
التحقيق في مشاكل الأداء:

```bash
# 1. التحقق من الحمل الحالي
uptime
top

# 2. البحث عن العمليات كثيفة الموارد
ps aux --sort=-%cpu | head -10
ps aux --sort=-%mem | head -10

# 3. التحقق من إدخال/إخراج القرص
iostat -x 1
iotop

# 4. التحقق من مشاكل الذاكرة
free -h
vmstat 1
```

### السيناريو 4: خرق أمني
خطوات التحقيق في المشاكل الأمنية المحتملة:

```bash
# 1. التحقق من الوصول غير المصرح به
last
grep "Failed password" /var/log/auth.log

# 2. التحقق من العمليات المشبوهة
ps aux | grep -v "^$(whoami)"
lsof -i

# 3. التحقق من ملفات النظام المعدلة
find /bin /usr/bin -mtime -1

# 4. البحث عن اتصالات شبكة غير عادية
netstat -tupan
```

## أفضل الممارسات

### الأمان
1. تحديثات النظام المنتظمة
2. سياسات كلمات المرور القوية
3. الحد الأدنى من الصلاحيات الضرورية
4. التدقيق الأمني المنتظم

### الأداء
1. مراقبة الموارد
2. تدوير السجلات
3. إدارة مساحة القرص
4. تحسين الخدمات

### النسخ الاحتياطي
1. نسخ احتياطي منتظم
2. مواقع نسخ احتياطي متعددة
3. اختبار النسخ الاحتياطي
4. إجراءات الاسترداد

## الخطوات التالية

- [إدارة النظام المتقدمة](/ar/admin/02-performance-tuning)
- [تعزيز الأمان](/ar/security/02-advanced-security)
- [استكشاف أخطاء الشبكة](/ar/networking/04-network-troubleshooting)

</div>
