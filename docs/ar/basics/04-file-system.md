# التنقل في نظام ملفات لينكس 📂

<div dir="rtl">

## هيكل نظام ملفات لينكس

### المجلد الجذر (/) 🌳

يبدأ نظام ملفات لينكس من المجلد الجذر (/). إليك التخطيط القياسي:

```
/
├── bin/     # الأوامر الأساسية للمستخدم
├── boot/    # ملفات الإقلاع
├── dev/     # ملفات الأجهزة
├── etc/     # إعدادات النظام
├── home/    # المجلدات الرئيسية للمستخدمين
├── lib/     # مكتبات النظام
├── media/   # الوسائط القابلة للإزالة
├── mnt/     # نقطة التحميل
├── opt/     # البرامج الاختيارية
├── proc/    # معلومات العمليات
├── root/    # المجلد الرئيسي للمستخدم root
├── sbin/    # أوامر النظام
├── tmp/     # الملفات المؤقتة
├── usr/     # برامج المستخدم
└── var/     # الملفات المتغيرة
```

## المجلدات المهمة

### 1. مجلدات النظام 🔧

- **/bin**: الملفات التنفيذية الأساسية للمستخدم
  ```bash
  ls /bin    # عرض الأوامر الأساسية
  ```

- **/etc**: ملفات إعدادات النظام
  ```bash
  ls /etc/network    # إعدادات الشبكة
  ls /etc/ssh       # إعدادات SSH
  ```

- **/lib**: المكتبات المشتركة الأساسية
  ```bash
  ls /lib    # عرض مكتبات النظام
  ```

### 2. مجلدات المستخدم 👤

- **/home**: المجلدات الرئيسية للمستخدمين
  ```bash
  ls /home           # عرض مجلدات المستخدمين
  echo $HOME        # عرض مجلدك الرئيسي
  ```

- **/root**: المجلد الرئيسي للمستخدم root
  ```bash
  sudo ls /root    # عرض مجلد root
  ```

### 3. مجلدات البيانات المتغيرة 📊

- **/var**: ملفات البيانات المتغيرة
  ```bash
  ls /var/log     # سجلات النظام
  ls /var/cache   # ذاكرة التخزين المؤقت للتطبيقات
  ```

## أوامر التنقل

### 1. التنقل الأساسي 🗺️

```bash
pwd                 # طباعة مسار العمل الحالي
cd /path/to/dir     # تغيير المجلد
cd ..               # الانتقال لمستوى أعلى
cd ~                # الذهاب للمجلد الرئيسي
cd -                # العودة للمجلد السابق
```

### 2. عرض المحتويات 📋

```bash
ls                  # عرض الملفات والمجلدات
ls -l               # تنسيق عرض مفصل
ls -a               # عرض الملفات المخفية
ls -h               # أحجام مقروءة للإنسان
ls -R               # عرض متكرر
```

### 3. البحث عن الملفات 🔍

```bash
find / -name file.txt           # البحث عن ملف باسمه
locate filename                 # بحث سريع عن ملف
which command                   # إيجاد موقع الأمر
whereis program                # إيجاد ملفات البرنامج
```

## عمليات الملفات

### 1. إنشاء الملفات والمجلدات 📝

```bash
touch file.txt                 # إنشاء ملف فارغ
mkdir directory                # إنشاء مجلد
mkdir -p path/to/directory    # إنشاء مجلدات متداخلة
```

### 2. النسخ والنقل 📦

```bash
cp source destination         # نسخ ملف
cp -r source_dir dest_dir    # نسخ مجلد
mv source destination        # نقل/إعادة تسمية ملف
```

### 3. حذف الملفات 🗑️

```bash
rm file.txt                  # حذف ملف
rm -i file.txt              # حذف مع تأكيد
rm -r directory             # حذف مجلد
rm -rf directory           # حذف مجلد بالقوة
```

## صلاحيات الملفات

### 1. عرض الصلاحيات 🔒

```bash
ls -l file.txt              # عرض صلاحيات الملف
getfacl file.txt           # عرض ACL مفصل
```

### 2. تغيير الصلاحيات

```bash
chmod 755 file.txt          # تغيير الصلاحيات
chown user:group file.txt   # تغيير الملكية
```

## ميزات التنقل الخاصة

### 1. العلامات البديلة 🎯

```bash
ls *.txt                    # عرض جميع ملفات .txt
ls document?.doc           # ? تطابق حرف واحد
ls [abc]*                  # يطابق a أو b أو c
```

### 2. اختصارات المسارات ⚡

```bash
.                          # المجلد الحالي
..                         # المجلد الأب
~                          # المجلد الرئيسي
/                          # المجلد الجذر
```

## تمارين عملية 🎯

1. **التنقل بين المجلدات**
   ```bash
   cd ~
   mkdir -p projects/linux/test
   cd projects/linux/test
   pwd
   cd ../..
   pwd
   ```

2. **عمليات الملفات**
   ```bash
   touch file1.txt
   cp file1.txt file2.txt
   mkdir backup
   mv file2.txt backup/
   ls -R
   ```

3. **تمرين الصلاحيات**
   ```bash
   touch script.sh
   chmod +x script.sh
   ls -l script.sh
   ```

## المشاكل الشائعة والحلول 🔧

1. **تم رفض الإذن**
   ```bash
   sudo command    # تشغيل بصلاحيات مرتفعة
   ```

2. **المجلد غير فارغ**
   ```bash
   rm -rf directory    # حذف بالقوة
   ```

3. **الملف غير موجود**
   ```bash
   find / -name file 2>/dev/null    # بحث بدون أخطاء
   ```

## مصادر إضافية 📚

- [معيار التسلسل الهرمي لنظام ملفات لينكس](https://refspecs.linuxfoundation.org/FHS_3.0/fhs/index.html)
- [شرح هيكل مجلدات لينكس](https://www.howtogeek.com/117435/htg-explains-the-linux-directory-structure-explained/)
- [دروس التنقل في نظام الملفات](https://linuxjourney.com/lesson/filesystem-hierarchy)

</div>
