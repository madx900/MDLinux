---
sidebar_position: 2
title: تحسين الأداء
description: تعلم كيفية تحسين أداء نظام لينكس
---

# تحسين أداء لينكس

<div dir="rtl">

## نظرة عامة

تحسين الأداء ضروري للحفاظ على الأداء الأمثل للنظام. يغطي هذا الدليل جوانب مختلفة من تحسين أداء لينكس.

## تحسين المعالج

### 1. حاكم المعالج
```bash
# عرض حاكم المعالج الحالي
cat /sys/devices/system/cpu/cpu*/cpufreq/scaling_governor

# تعيين حاكم الأداء
echo performance | sudo tee /sys/devices/system/cpu/cpu*/cpufreq/scaling_governor
```

### 2. أولوية العمليات
```bash
# تعيين أولوية العملية (nice)
nice -n 10 command
renice 10 -p PID

# أولوية الوقت الفعلي
chrt -f 99 command
```

## إدارة الذاكرة

### 1. تكوين التبديل
```bash
# عرض استخدام التبديل
swapon --show
free -h

# ضبط قابلية التبديل
sysctl vm.swappiness=60
```

### 2. حدود الذاكرة
```bash
# عرض الحدود الحالية
ulimit -a

# تعيين حدود الذاكرة
ulimit -m SIZE
```

## تحسين الإدخال/الإخراج للقرص

### 1. جدولة الإدخال/الإخراج
```bash
# عرض الجدولة الحالية
cat /sys/block/sda/queue/scheduler

# تغيير الجدولة
echo deadline > /sys/block/sda/queue/scheduler
```

### 2. ضبط نظام الملفات
```bash
# خيارات التحميل
mount -o noatime,nodiratime /dev/sda1 /mount/point

# ضبط نظام الملفات ext4
tune2fs -o journal_data_writeback /dev/sda1
```

## أداء الشبكة

### 1. ضبط مكدس الشبكة
```bash
# إعدادات TCP
sysctl net.ipv4.tcp_window_scaling=1
sysctl net.core.rmem_max=16777216
```

### 2. واجهة الشبكة
```bash
# تعيين MTU
ip link set dev eth0 mtu 9000

# تعيين طول الصف
ethtool -G eth0 rx 4096
```

## خدمات النظام

### 1. إدارة الخدمات
```bash
# تعطيل الخدمات غير الضرورية
systemctl disable service-name

# تحسين إعدادات الخدمة
systemctl edit service-name
```

### 2. تحسين وقت التمهيد
```bash
# تحليل وقت التمهيد
systemd-analyze blame
systemd-analyze critical-chain
```

## أدوات مراقبة الأداء

### 1. حمل النظام
```bash
# مراقبة حمل النظام
uptime
sar -q 1 10
```

### 2. استخدام الموارد
```bash
# مراقبة العمليات
top -b -n 1
pidstat 1 10
```

## أفضل الممارسات

1. **الأداء الأساسي**
   - توثيق الأداء الطبيعي
   - تحديد أهداف الأداء
   - المراقبة المنتظمة

2. **نهج منهجي**
   - تحديد نقاط الاختناق
   - اختبار التغييرات بشكل فردي
   - توثيق التعديلات

3. **الصيانة المنتظمة**
   - تنظيف الملفات المؤقتة
   - تحديث حزم النظام
   - مراجعة سجلات النظام

## اختبار الأداء

### 1. اختبار المعالج
```bash
# اختبار إجهاد المعالج
stress-ng --cpu 8 --timeout 60s
```

### 2. اختبار الذاكرة
```bash
# اختبار أداء الذاكرة
memtester 1G 1
```

### 3. اختبار القرص
```bash
# اختبار الإدخال/الإخراج للقرص
fio --name=test --filename=test --size=1G
```

## الخطوات التالية

- [إدارة السجلات](/ar/admin/03-log-management)
- [استراتيجيات النسخ الاحتياطي](/ar/admin/04-backup-strategies)
- [الأمان المتقدم](/ar/security/02-advanced-security)

</div>
