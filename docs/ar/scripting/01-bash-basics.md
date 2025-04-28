# أساسيات برمجة Bash 📝

<div dir="rtl">

## هيكل النص البرمجي

### 1. العناصر الأساسية للنص البرمجي ✍️

```bash
#!/bin/bash                 # Shebang - يحدد مفسر النص البرمجي
# هذا تعليق                # التعليقات تبدأ بـ #
name="World"               # تعيين متغير
echo "Hello, $name!"       # استخدام المتغير
```

### 2. صلاحيات النص البرمجي 🔐

| الأمر | الوصف | مثال |
|-------|--------|-------|
| `chmod +x` | جعله قابل للتنفيذ | `chmod +x script.sh` |
| `chmod 755` | تعيين الصلاحيات القياسية | `chmod 755 script.sh` |
| `./script.sh` | تشغيل النص البرمجي | `./script.sh` |
| `bash script.sh` | التشغيل باستخدام bash | `bash script.sh` |
| `source script.sh` | تضمين النص البرمجي | `source script.sh` |

## المتغيرات وأنواع البيانات

### 1. إعلان المتغيرات 📦

```bash
# متغيرات نصية
name="John"
greeting="Hello"

# متغيرات رقمية
age=25
count=0

# المصفوفات
colors=("red" "green" "blue")
numbers=(1 2 3 4 5)

# الثوابت
readonly MAX_COUNT=100
declare -r PI=3.14159
```

### 2. عمليات المتغيرات 🔄

```bash
# دمج النصوص
full_greeting="$greeting, $name!"

# العمليات الحسابية
total=$((age + 5))
squared=$((count * count))

# عمليات المصفوفات
echo "${colors[0]}"          # الوصول للعنصر الأول
echo "${colors[@]}"          # الوصول لجميع العناصر
echo "${#colors[@]}"         # طول المصفوفة
```

## هياكل التحكم

### 1. العبارات الشرطية 🔀

```bash
# عبارة if
if [ "$age" -ge 18 ]; then
    echo "بالغ"
elif [ "$age" -ge 13 ]; then
    echo "مراهق"
else
    echo "طفل"
fi

# عبارة case
case "$fruit" in
    "apple")
        echo "اخترت التفاح"
        ;;
    "banana"|"orange")
        echo "اخترت فاكهة استوائية"
        ;;
    *)
        echo "فاكهة غير معروفة"
        ;;
esac
```

### 2. الحلقات التكرارية 🔁

```bash
# حلقة for
for i in {1..5}; do
    echo "العدد: $i"
done

# حلقة while
while [ "$count" -lt 10 ]; do
    echo "العدد: $count"
    ((count++))
done

# حلقة until
until [ "$count" -eq 0 ]; do
    echo "العد التنازلي: $count"
    ((count--))
done
```

## الدوال

### 1. إعلان الدوال 🎯

```bash
# دالة بسيطة
greet() {
    echo "مرحباً، $1!"
}

# دالة مع قيمة إرجاع
calculate_sum() {
    local num1=$1
    local num2=$2
    echo $((num1 + num2))
}

# دالة مع متغيرات محلية
process_data() {
    local result=0
    # معالجة البيانات
    return $result
}
```

### 2. استخدام الدوال 🔧

```bash
# استدعاء الدوال
greet "أحمد"

# تخزين مخرجات الدالة
sum=$(calculate_sum 5 3)

# استخدام قيمة الإرجاع
process_data
echo "حالة الخروج: $?"
```

## الإدخال والإخراج

### 1. إدخال المستخدم 📥

```bash
# أمر read
read -p "أدخل اسمك: " user_name

# القراءة مع قيمة افتراضية
read -p "أدخل العمر [18]: " age
age=${age:-18}

# قراءة سرية
read -s -p "كلمة المرور: " password

# قراءة مصفوفة
read -a colors -p "أدخل الألوان: "
```

### 2. طرق الإخراج 📤

```bash
# عبارات echo
echo "مخرجات عادية"
echo -e "مع تسلسلات الهروب\n"

# تنسيق printf
printf "الاسم: %s, العمر: %d\n" "$name" "$age"

# مخرجات الخطأ
echo "رسالة خطأ" >&2

# إعادة توجيه المخرجات
echo "إدخال السجل" >> log.txt
```

## معالجة الأخطاء

### 1. رموز الخروج ⚠️

```bash
# نجاح
exit 0

# خطأ
exit 1

# التحقق من حالة الأمر الأخير
if [ $? -eq 0 ]; then
    echo "نجاح"
else
    echo "فشل"
fi
```

### 2. التقاط الأخطاء 🚨

```bash
# معالجة الأخطاء
set -e          # الخروج عند حدوث خطأ
set -u          # الخروج عند استخدام متغير غير معرف
set -o pipefail # الخروج عند فشل الأنابيب

# أوامر trap
trap 'echo "خطأ في السطر $LINENO"' ERR
trap 'التنظيف' EXIT
```

## أمثلة تطبيقية 🎯

### 1. نص برمجي بسيط
```bash
#!/bin/bash

# آلة حاسبة بسيطة
calculate() {
    local num1=$1
    local operator=$2
    local num2=$3

    case $operator in
        "+") echo $((num1 + num2)) ;;
        "-") echo $((num1 - num2)) ;;
        "*") echo $((num1 * num2)) ;;
        "/") echo $((num1 / num2)) ;;
        *) echo "عامل غير صالح" ;;
    esac
}

# الحصول على المدخلات
read -p "أدخل العملية الحسابية (مثال: 5 + 3): " num1 op num2

# إجراء الحساب
result=$(calculate $num1 "$op" $num2)
echo "النتيجة: $result"
```

### 2. معالجة الملفات
```bash
#!/bin/bash

# معالجة الملفات في المجلد
process_files() {
    local dir=$1
    local count=0

    for file in "$dir"/*; do
        if [ -f "$file" ]; then
            echo "جاري المعالجة: $(basename "$file")"
            ((count++))
        fi
    done

    echo "تمت معالجة $count ملفات"
}

# الحصول على مسار المجلد
read -p "أدخل مسار المجلد: " directory

# التحقق من وجود المجلد
if [ -d "$directory" ]; then
    process_files "$directory"
else
    echo "المجلد غير موجود"
    exit 1
fi
```

## أفضل الممارسات 📚

1. **هيكل النص البرمجي**
   - استخدام shebang واضح
   - إضافة تعليقات وصفية
   - اتباع تنسيق متناسق
   - استخدام أسماء متغيرات ذات معنى

2. **معالجة الأخطاء**
   - التحقق من قيم الإرجاع
   - معالجة الحالات الحدية
   - توفير رسائل الخطأ
   - التنظيف عند الخروج

3. **المتغيرات**
   - تحديد المتغيرات بين علامتي اقتباس
   - استخدام متغيرات محلية في الدوال
   - تهيئة المتغيرات
   - استخدام أسماء ذات معنى

4. **التوثيق**
   - إضافة معلومات الاستخدام
   - توثيق الدوال
   - شرح المنطق المعقد
   - تضمين الأمثلة

## الخطوات التالية 🚀

- [برمجة Bash المتقدمة](02-advanced-bash.md)
- [تصحيح أخطاء النصوص البرمجية](03-debugging.md)
- [التعبيرات النمطية](04-regex.md)
- [أمثلة النصوص البرمجية](05-script-examples.md)

</div>
