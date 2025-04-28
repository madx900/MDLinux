# برمجة Bash المتقدمة 🚀

<div dir="rtl">

## عمليات المتغيرات المتقدمة

### 1. توسيع المعلمات 🔄

```bash
# القيم الافتراضية
${var:-default}     # استخدم default إذا كان var غير معرف
${var:=default}     # عين default إذا كان var غير معرف
${var:+value}       # استخدم value إذا كان var معرف
${var:?error}       # اعرض خطأ إذا كان var غير معرف

# عمليات النصوص
${var:offset}       # نص جزئي من offset
${var:offset:length}# نص جزئي بطول محدد
${#var}            # طول النص
${var#pattern}      # إزالة أقصر تطابق من البداية
${var##pattern}     # إزالة أطول تطابق من البداية
${var%pattern}      # إزالة أقصر تطابق من النهاية
${var%%pattern}     # إزالة أطول تطابق من النهاية
```

### 2. المصفوفات والمصفوفات الترابطية 📦

```bash
# إعلان المصفوفات
declare -a numeric_array
declare -A associative_array

# عمليات المصفوفات
array=([0]="أول" [1]="ثاني" [2]="ثالث")
associative_array=([مفتاح1]="قيمة1" [مفتاح2]="قيمة2")

# معالجة المصفوفات
echo "${array[@]}"           # جميع العناصر
echo "${!array[@]}"          # جميع الفهارس
echo "${#array[@]}"          # طول المصفوفة
array+=("رابع")             # إضافة عنصر
unset 'array[1]'            # إزالة عنصر
```

## هياكل التحكم المتقدمة

### 1. تراكيب الحلقات المتقدمة 🔁

```bash
# حلقة select
select option in "خيار 1" "خيار 2" "خروج"; do
    case $option in
        "خيار 1") echo "تم اختيار 1" ;;
        "خيار 2") echo "تم اختيار 2" ;;
        "خروج") break ;;
    esac
done

# استخدام continue وbreak مع المستويات
for ((i=1; i<=3; i++)); do
    for ((j=1; j<=3; j++)); do
        [ $i -eq 2 ] && continue 2
        echo "$i,$j"
    done
done
```

### 2. مطابقة الأنماط المتقدمة 🎯

```bash
# تمكين مطابقة الأنماط الموسعة
shopt -s extglob

# الأنماط
?(pattern)    # صفر أو مرة واحدة
*(pattern)    # صفر أو أكثر من المرات
+(pattern)    # مرة واحدة أو أكثر
@(pattern)    # مرة واحدة بالضبط
!(pattern)    # ليس النمط

# مثال
case $file in
    *.@(jpg|jpeg|png)) echo "ملف صورة" ;;
    *.!(txt|doc|pdf))  echo "ليس مستنداً" ;;
esac
```

## إدارة العمليات

### 1. التحكم في المهام 🔄

```bash
# العمليات الخلفية
command &
jobs                # قائمة المهام
fg %1              # جلب للمقدمة
bg %1              # إرسال للخلفية
wait %1            # انتظار المهمة

# استبدال العملية
diff <(ls dir1) <(ls dir2)
while read line; do
    echo "$line"
done < <(command)
```

### 2. الإشارات والمصائد 🚦

```bash
# معالجة الإشارات
trap 'تنظيف' EXIT
trap 'معالجة_sigint' SIGINT
trap 'معالجة_sigusr1' SIGUSR1

تنظيف() {
    # كود التنظيف
    rm -f "$tempfile"
}

# إرسال إشارات
kill -SIGUSR1 $pid
killall -SIGTERM process_name
```

## عمليات الإدخال/الإخراج المتقدمة

### 1. واصفات الملفات 📂

```bash
# إعادة توجيه واصفات الملفات
exec 3> output.log    # فتح للكتابة
exec 4< input.txt     # فتح للقراءة
echo "سجل" >&3        # الكتابة إلى FD 3
read line <&4         # القراءة من FD 4
exec 3>&-             # إغلاق FD 3

# مستندات here
cat <<EOF > file.txt
سطر 1
سطر 2
EOF

# نصوص here
grep "نمط" <<< "$string"
```

### 2. استبدال العملية 🔄

```bash
# مقارنة المخرجات
diff <(sort file1) <(sort file2)

# مدخلات متعددة
while IFS= read -r line1 && IFS= read -r line2 <&3; do
    echo "$line1 - $line2"
done < file1 3< file2
```

## الدوال المتقدمة

### 1. مكتبات الدوال 📚

```bash
# تضمين مكتبة الدوال
source lib.sh
. lib.sh

# مثال مكتبة
lib_function() {
    local arg=$1
    # كود الدالة
}

# تصدير الدوال
export -f function_name
```

### 2. الدوال التكرارية 🔄

```bash
factorial() {
    local n=$1
    if ((n <= 1)); then
        echo 1
    else
        echo $((n * $(factorial $((n-1)))))
    fi
}

# اجتياز الدليل
traverse() {
    for item in "$1"/*; do
        if [ -d "$item" ]; then
            traverse "$item"
        else
            process_file "$item"
        fi
    done
}
```

## معالجة الأخطاء المتقدمة

### 1. تقنيات التصحيح 🐛

```bash
# وضع التصحيح
set -x              # تمكين وضع التصحيح
set +x              # تعطيل وضع التصحيح

# الوضع المفصل
set -v              # تمكين الوضع المفصل
set +v              # تعطيل الوضع المفصل

# فحص الأخطاء
set -e              # الخروج عند حدوث خطأ
set -u              # الخروج عند استخدام متغير غير معرف
set -o pipefail     # الخروج عند فشل الأنبوب
```

### 2. معالجة الأخطاء المتقدمة 🚨

```bash
# دالة الخطأ
error() {
    local line=$1
    local msg=$2
    echo "خطأ في السطر $line: $msg" >&2
}

# التقاط الأخطاء
trap 'error ${LINENO} "$BASH_COMMAND"' ERR

# معالجة خطأ مخصصة
if ! command; then
    handle_error
    exit 1
fi
```

## أمثلة تطبيقية 🎯

### 1. معالجة الملفات المتقدمة
```bash
#!/bin/bash

# معالجة ملفات متعددة مع معالجة الأخطاء
process_files() {
    local dir=$1
    local -a errors=()
    
    while IFS= read -r -d '' file; do
        if ! process_single_file "$file"; then
            errors+=("$file")
        fi
    done < <(find "$dir" -type f -print0)
    
    if ((${#errors[@]} > 0)); then
        echo "الملفات الفاشلة: ${errors[*]}" >&2
        return 1
    fi
}

# التنفيذ الرئيسي مع التنظيف
main() {
    local tempdir=$(mktemp -d)
    trap 'rm -rf "$tempdir"' EXIT
    
    if ! process_files "$1"; then
        echo "فشلت المعالجة" >&2
        exit 1
    fi
}

main "$@"
```

### 2. مراقب الشبكة
```bash
#!/bin/bash

# مراقبة اتصالات الشبكة
monitor_network() {
    local -A connections
    local interval=${1:-5}
    
    while true; do
        while read -r line; do
            local ip=$(echo "$line" | awk '{print $5}')
            ((connections[$ip]++))
        done < <(netstat -tn 2>/dev/null)
        
        printf "\033c"  # مسح الشاشة
        printf "الاتصالات النشطة:\n"
        for ip in "${!connections[@]}"; do
            printf "%s: %d\n" "$ip" "${connections[$ip]}"
        done
        
        sleep "$interval"
        unset connections
        declare -A connections
    done
}

# بدء المراقبة
monitor_network "$@"
```

## أفضل الممارسات 📚

1. **تنظيم الكود**
   - استخدام الدوال
   - تصميم نمطي
   - توثيق واضح
   - أسلوب متناسق

2. **الأمان**
   - التحقق من المدخلات
   - صلاحيات مناسبة
   - ملفات مؤقتة آمنة
   - تحديد المتغيرات بين علامتي اقتباس

3. **الأداء**
   - تقليل العمليات الفرعية
   - استخدام الأوامر المدمجة
   - حلقات فعالة
   - تحليل الأداء

4. **قابلية الصيانة**
   - التحكم في الإصدارات
   - تعليقات واضحة
   - معالجة الأخطاء
   - الاختبار

## الخطوات التالية 🚀

- [تصحيح أخطاء النصوص البرمجية](03-debugging.md)
- [التعبيرات النمطية](04-regex.md)
- [أمثلة النصوص البرمجية](05-script-examples.md)
- [إدارة النظام](../admin/01-system-admin.md)

</div>
