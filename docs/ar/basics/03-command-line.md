# أساسيات سطر الأوامر 💻

<div dir="rtl">

## مقدمة

واجهة سطر الأوامر (CLI) هي طريقة قوية للتفاعل مع نظام لينكس. على الرغم من أنها قد تبدو مخيفة في البداية، إلا أن إتقان سطر الأوامر سيحسن إنتاجيتك بشكل كبير.

## التنقل الأساسي

### 1. أوامر التنقل الأساسية 🗺️

```bash
pwd     # طباعة مسار العمل الحالي
ls      # عرض الملفات والمجلدات
cd      # تغيير المجلد
```

**أمثلة:**
```bash
pwd                 # يعرض مسار المجلد الحالي
ls                 # عرض محتويات المجلد الحالي
ls -l              # عرض تفصيلي
ls -a              # عرض الملفات المخفية
cd Documents       # الانتقال إلى مجلد المستندات
cd ..              # الرجوع للمجلد الأعلى
cd ~               # الذهاب إلى المجلد الرئيسي
cd /               # الذهاب إلى مجلد الجذر
```

### 2. عمليات الملفات والمجلدات 📁

```bash
mkdir    # إنشاء مجلد
touch    # إنشاء ملف فارغ
cp      # نسخ ملفات/مجلدات
mv      # نقل/إعادة تسمية ملفات/مجلدات
rm      # حذف ملفات
rmdir   # حذف المجلدات الفارغة
```

**أمثلة:**
```bash
mkdir projects             # إنشاء مجلد 'projects'
touch file.txt            # إنشاء ملف فارغ
cp file.txt backup.txt    # نسخ ملف
mv file.txt newname.txt   # إعادة تسمية ملف
rm file.txt              # حذف ملف
rmdir empty_folder       # حذف مجلد فارغ
```

## عرض وتحرير الملفات

### 1. عرض محتويات الملفات 👀

```bash
cat     # عرض محتويات الملف
less    # عرض الملف مع التصفح
head    # عرض أول 10 أسطر
tail    # عرض آخر 10 أسطر
```

**أمثلة:**
```bash
cat file.txt             # عرض الملف بالكامل
less large_file.txt     # عرض ملف كبير
head -n 5 file.txt      # عرض أول 5 أسطر
tail -f log.txt         # مراقبة الملف في الوقت الفعلي
```

### 2. محررات النصوص 📝

1. **nano** (مناسب للمبتدئين)
   ```bash
   nano file.txt    # فتح/إنشاء ملف في nano
   ```
   - Ctrl + O: حفظ
   - Ctrl + X: خروج
   - Ctrl + K: قص سطر

2. **vim** (متقدم)
   ```bash
   vim file.txt     # فتح/إنشاء ملف في vim
   ```
   - i: الدخول في وضع الإدخال
   - Esc: الخروج من وضع الإدخال
   - :w: حفظ
   - :q: خروج
   - :wq: حفظ وخروج

## معلومات النظام

### 1. أوامر النظام 🖥️

```bash
uname -a    # معلومات النظام
df -h       # استخدام القرص
free -h     # استخدام الذاكرة
top         # عارض العمليات
htop        # عارض العمليات المحسن
```

### 2. أوامر المستخدم 👤

```bash
whoami      # المستخدم الحالي
id          # معلومات معرف المستخدم
su          # تبديل المستخدم
sudo        # تشغيل كمستخدم فائق
```

## صلاحيات الملفات

### 1. فهم الصلاحيات 🔒

```
rwx rwx rwx    # قراءة، كتابة، تنفيذ للمالك/المجموعة/الآخرين
```

### 2. تغيير الصلاحيات

```bash
chmod    # تغيير صلاحيات الملف
chown    # تغيير مالك الملف
```

**أمثلة:**
```bash
chmod 755 file.txt    # rwxr-xr-x
chmod +x script.sh    # إضافة صلاحية التنفيذ
chown user:group file.txt
```

## إدارة الحزم

### 1. APT (أوبونتو/ديبيان) 📦

```bash
sudo apt update             # تحديث قائمة الحزم
sudo apt upgrade           # ترقية الحزم
sudo apt install package   # تثبيت حزمة
sudo apt remove package   # إزالة حزمة
```

### 2. DNF (فيدورا) 📦

```bash
sudo dnf update           # تحديث الحزم
sudo dnf install package # تثبيت حزمة
sudo dnf remove package # إزالة حزمة
```

## نصائح مفيدة

### 1. اختصارات لوحة المفاتيح ⌨️

- `Ctrl + C`: إلغاء الأمر الحالي
- `Ctrl + L`: مسح الشاشة
- `Ctrl + R`: البحث في سجل الأوامر
- `Tab`: إكمال تلقائي
- `↑/↓`: التنقل في سجل الأوامر

### 2. المساعدة في الأوامر

```bash
man command    # صفحات الدليل
command --help # مساعدة مختصرة
info command   # توثيق مفصل
```

## تمارين عملية 🎯

1. **تمرين التنقل**
   ```bash
   mkdir ~/practice
   cd ~/practice
   touch file1.txt file2.txt
   mkdir dir1 dir2
   ls -l
   ```

2. **عمليات الملفات**
   ```bash
   echo "مرحباً" > file1.txt
   cat file1.txt
   cp file1.txt dir1/
   mv file2.txt dir2/
   ```

3. **الصلاحيات**
   ```bash
   chmod 755 file1.txt
   ls -l file1.txt
   ```

## الخطوات التالية

- [التنقل في نظام الملفات](04-file-system.md)
- [معالجة النصوص](05-text-processing.md)
- [البرمجة النصية](../shell-scripting/01-bash-basics.md)

## مصادر إضافية

- [مكتبة أوامر لينكس](https://linuxcommandlibrary.com/)
- [شرح الأوامر](https://explainshell.com/)
- [تحدي سطر الأوامر](https://cmdchallenge.com/)

</div>
