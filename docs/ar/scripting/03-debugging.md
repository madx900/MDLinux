# تصحيح أخطاء النصوص البرمجية 🐛

<div dir="rtl">

## أدوات التصحيح الأساسية

### 1. خيارات التصحيح المدمجة 🔍

| الخيار | الوصف | مثال |
|--------|--------|-------|
| `set -x` | طباعة الأوامر قبل التنفيذ | `set -x` |
| `set -v` | طباعة أسطر النص البرمجي عند قراءتها | `set -v` |
| `set -e` | الخروج عند حدوث خطأ | `set -e` |
| `set -u` | الخروج عند استخدام متغير غير معرف | `set -u` |
| `set -n` | فحص بناء الجملة دون تنفيذ | `set -n` |

### 2. استخدام وضع التصحيح 🚀

```bash
#!/bin/bash -x          # تصحيح النص البرمجي بأكمله
set -x                  # بدء التصحيح
command1
command2
set +x                  # إيقاف التصحيح

# تصحيح قسم محدد
{
    set -x
    command1
    command2
    set +x
} 2> debug.log         # إعادة توجيه مخرجات التصحيح
```

## تقنيات التصحيح المتقدمة

### 1. التتبع والتسجيل 📝

```bash
# تتبع الدوال
function debug() {
    echo "تصحيح: $*" >&2
}

# تتبع المكدس
function stack_trace() {
    local frame=0
    while caller $frame; do
        ((frame++))
    done
}

# تتبع رقم السطر
echo "خطأ في السطر $LINENO"

# تتبع التنفيذ مع الطابع الزمني
PS4='+ $(date "+%Y-%m-%d %H:%M:%S") ${BASH_SOURCE}:${LINENO}: '
set -x
```

### 2. معالجة الأخطاء 🚨

```bash
# دالة الخطأ
error() {
    local parent_lineno="$1"
    local message="$2"
    local code="${3:-1}"
    if [[ -n "$message" ]] ; then
        echo "خطأ في أو بالقرب من السطر ${parent_lineno}: ${message}"
    else
        echo "خطأ في أو بالقرب من السطر ${parent_lineno}"
    fi
    exit "${code}"
}

# التقاط الأخطاء
trap 'error ${LINENO}' ERR

# تصحيح شرطي
DEBUG=${DEBUG:-0}
debug() {
    if [ "$DEBUG" -eq 1 ]; then
        echo "تصحيح: $*" >&2
    fi
}
```

## التصحيح التفاعلي

### 1. استخدام bashdb 🔧

```bash
# تثبيت bashdb
sudo apt-get install bashdb    # Debian/Ubuntu
sudo yum install bashdb        # RHEL/CentOS

# تشغيل النص البرمجي في المصحح
bashdb script.sh

# أوامر bashdb الشائعة
break 10          # تعيين نقطة توقف عند السطر 10
info break        # قائمة نقاط التوقف
step             # الخطوة إلى الداخل
next             # الخطوة التالية
continue         # متابعة التنفيذ
print variable   # طباعة قيمة المتغير
quit             # الخروج من المصحح
```

### 2. التصحيح اليدوي 🔍

```bash
# التصحيح التفاعلي
read -p "اضغط enter للمتابعة..."

# فحص قيم المتغيرات
echo "تصحيح: var=$var"

# فحص الشرط
if [ "$DEBUG" = true ]; then
    echo "تصحيح: تم استيفاء الشرط"
fi

# فحص مخرجات الأمر
command 2>&1 | tee debug.log
```

## سيناريوهات التصحيح الشائعة

### 1. مشاكل المتغيرات 📦

```bash
# المتغيرات غير المعرفة
set -u
: "${VARIABLE:?يجب تعيينه}"

# تصحيح المصفوفات
declare -p array_name

# مشاكل نطاق المتغيرات
local var="محلي"
echo "داخل الدالة: $var"
```

### 2. مشاكل المسار والملفات 📂

```bash
# التحقق من وجود الملف
[ -f "$file" ] || { echo "الملف غير موجود: $file"; exit 1; }

# التحقق من الصلاحيات
[ -r "$file" ] && [ -w "$file" ] || echo "تم رفض الإذن"

# تصحيح مشاكل المسار
echo "PATH=$PATH"
which command || echo "الأمر غير موجود"
```

## أفضل ممارسات التصحيح

### 1. تنظيم الكود 📋

```bash
# استخدام الدوال للتنظيم الأفضل
main() {
    local result
    result=$(step1) || return
    step2 "$result" || return
}

# تمكين وضع التصحيح انتقائياً
debug_mode() {
    if [ "${DEBUG:-0}" -eq 1 ]; then
        set -x
    fi
}
```

### 2. إطار التسجيل 📝

```bash
# مستويات التسجيل
LOG_LEVEL=${LOG_LEVEL:-INFO}

log() {
    local level=$1
    shift
    local message="$*"
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    
    case $LOG_LEVEL in
        DEBUG) [[ $level =~ ^(DEBUG|INFO|WARN|ERROR)$ ]] && echo "[$timestamp] $level: $message" ;;
        INFO)  [[ $level =~ ^(INFO|WARN|ERROR)$ ]] && echo "[$timestamp] $level: $message" ;;
        WARN)  [[ $level =~ ^(WARN|ERROR)$ ]] && echo "[$timestamp] $level: $message" ;;
        ERROR) [[ $level =~ ^(ERROR)$ ]] && echo "[$timestamp] $level: $message" ;;
    esac
}

# الاستخدام
log DEBUG "رسالة تصحيح"
log INFO "رسالة معلومات"
log WARN "رسالة تحذير"
log ERROR "رسالة خطأ"
```

## أمثلة تطبيقية 🎯

### 1. نص برمجي مساعد للتصحيح
```bash
#!/bin/bash

# دوال مساعدة للتصحيح
debug_info() {
    echo "=== معلومات التصحيح ==="
    echo "النص البرمجي: $0"
    echo "PID: $$"
    echo "المعاملات: $@"
    echo "دليل العمل: $PWD"
    echo "متغيرات البيئة:"
    env | sort
    echo "======================="
}

# متتبع استخدام الذاكرة
track_memory() {
    local pid=$1
    while ps -p $pid > /dev/null; do
        ps -o pid,ppid,%mem,rss,cmd -p $pid
        sleep 1
    done
}

# مثال الاستخدام
debug_info "$@"
track_memory $$ &
```

### 2. نص برمجي لكشف الأخطاء
```bash
#!/bin/bash

# إعداد معالجة الأخطاء
set -euo pipefail
IFS=$'\n\t'

# تكوين التصحيح
DEBUG=${DEBUG:-0}
TRACE=${TRACE:-0}

# دوال التصحيح
debug() {
    [ "$DEBUG" -eq 1 ] && echo "تصحيح: $*" >&2
}

trace() {
    if [ "$TRACE" -eq 1 ]; then
        local frame=0
        echo "=== تتبع المكدس ===" >&2
        while caller $frame; do
            ((frame++))
        done
        echo "=================" >&2
    fi
}

# معالج الأخطاء
error_handler() {
    local line_no=$1
    local error_code=$2
    echo "خطأ في السطر $line_no (رمز الخروج: $error_code)" >&2
    trace
}

# تعيين المصيدة
trap 'error_handler ${LINENO} $?' ERR

# التنفيذ الرئيسي
main() {
    debug "بدء الدالة الرئيسية"
    # الكود الخاص بك هنا
}

main "$@"
```

## أفضل الممارسات 📚

1. **إعداد التصحيح**
   - استخدام علامات التصحيح
   - تنفيذ التسجيل
   - إضافة معالجات الأخطاء
   - تضمين تتبع المكدس

2. **جودة الكود**
   - استخدام shellcheck
   - اتباع دليل الأسلوب
   - إضافة تعليقات
   - استخدام الدوال

3. **الاختبار**
   - اختبارات الوحدة
   - اختبارات التكامل
   - الحالات الحدية
   - حالات الخطأ

4. **التوثيق**
   - إجراءات التصحيح
   - المشاكل المعروفة
   - الحلول الشائعة
   - الأمثلة

## الخطوات التالية 🚀

- [التعبيرات النمطية](04-regex.md)
- [أمثلة النصوص البرمجية](05-script-examples.md)
- [برمجة Bash المتقدمة](02-advanced-bash.md)
- [إدارة النظام](../admin/01-system-admin.md)

</div>
