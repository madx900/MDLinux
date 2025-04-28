# أمثلة النصوص البرمجية في Bash 📚

<div dir="rtl">

## نصوص إدارة النظام

### 1. مراقب صحة النظام 🔍

```bash
#!/bin/bash

# مراقبة صحة وموارد النظام
monitor_system() {
    echo "=== تقرير صحة النظام ==="
    date
    
    echo -e "\n=== استخدام المعالج ==="
    top -bn1 | head -n 3
    
    echo -e "\n=== استخدام الذاكرة ==="
    free -h
    
    echo -e "\n=== استخدام القرص ==="
    df -h
    
    echo -e "\n=== حمل النظام ==="
    uptime
    
    echo -e "\n=== المستخدمون النشطون ==="
    who
}

# تشغيل المراقبة كل 5 دقائق
while true; do
    monitor_system > "health_$(date +%Y%m%d_%H%M).log"
    sleep 300
done
```

### 2. نص النسخ الاحتياطي 💾

```bash
#!/bin/bash

# الإعدادات
BACKUP_DIR="/backup"
SOURCE_DIR="/data"
DATE=$(date +%Y%m%d_%H%M)
BACKUP_NAME="backup_$DATE.tar.gz"
LOG_FILE="/var/log/backup.log"

# إنشاء نسخة احتياطية
backup() {
    echo "بدء النسخ الاحتياطي في $(date)" >> "$LOG_FILE"
    
    # إنشاء مجلد النسخ الاحتياطي إذا لم يكن موجوداً
    mkdir -p "$BACKUP_DIR"
    
    # إنشاء النسخة الاحتياطية
    tar -czf "$BACKUP_DIR/$BACKUP_NAME" "$SOURCE_DIR" 2>> "$LOG_FILE"
    
    # التحقق من الحالة
    if [ $? -eq 0 ]; then
        echo "نجح النسخ الاحتياطي: $BACKUP_NAME" >> "$LOG_FILE"
    else
        echo "فشل النسخ الاحتياطي: $BACKUP_NAME" >> "$LOG_FILE"
        return 1
    fi
    
    # إزالة النسخ الاحتياطية القديمة (الاحتفاظ بآخر 5)
    ls -t "$BACKUP_DIR"/*.tar.gz | tail -n +6 | xargs -r rm
}

backup
```

## نصوص إدارة الملفات

### 1. منظم الملفات 📁

```bash
#!/bin/bash

# تنظيم الملفات حسب الامتداد
organize_files() {
    local dir=$1
    
    # مجلدات أنواع الملفات
    declare -A types=(
        ["images"]="jpg jpeg png gif"
        ["documents"]="pdf doc docx txt odt"
        ["audio"]="mp3 wav ogg"
        ["video"]="mp4 avi mkv mov"
        ["archives"]="zip tar gz rar"
    )
    
    # إنشاء المجلدات ونقل الملفات
    for type in "${!types[@]}"; do
        mkdir -p "$dir/$type"
        for ext in ${types[$type]}; do
            find "$dir" -maxdepth 1 -type f -name "*.$ext" -exec mv {} "$dir/$type/" \;
        done
    done
    
    echo "تم تنظيم الملفات بنجاح!"
}

# الاستخدام
organize_files "$HOME/Downloads"
```

### 2. البحث والاستبدال في الملفات 🔎

```bash
#!/bin/bash

# البحث واستبدال النص في الملفات
search_replace() {
    local search=$1
    local replace=$2
    local dir=$3
    local ext=${4:-"*"}
    local backup=".bak"
    
    # البحث عن الملفات ومعالجتها
    find "$dir" -type f -name "*.$ext" | while read -r file; do
        if grep -q "$search" "$file"; then
            echo "معالجة: $file"
            cp "$file" "$file$backup"
            sed -i "s/$search/$replace/g" "$file"
        fi
    done
}

# مثال الاستخدام
search_replace "النص_القديم" "النص_الجديد" "/المسار/إلى/المجلد" "txt"
```

## نصوص الشبكة

### 1. مراقب الشبكة 🌐

```bash
#!/bin/bash

# مراقبة اتصالات الشبكة وعرض النطاق
monitor_network() {
    local interface=${1:-"eth0"}
    local interval=${2:-1}
    
    echo "مراقبة واجهة الشبكة: $interface"
    echo "اضغط Ctrl+C للإيقاف"
    
    # القيم السابقة
    local prev_rx=0
    local prev_tx=0
    
    while true; do
        # الحصول على القيم الحالية
        local stats=$(cat /proc/net/dev | grep "$interface:")
        local rx=$(echo "$stats" | awk '{print $2}')
        local tx=$(echo "$stats" | awk '{print $10}')
        
        # حساب السرعة
        local rx_speed=$(( (rx - prev_rx) / interval ))
        local tx_speed=$(( (tx - prev_tx) / interval ))
        
        # التحويل إلى ميجابايت/ثانية
        rx_speed=$(echo "scale=2; $rx_speed/1048576" | bc)
        tx_speed=$(echo "scale=2; $tx_speed/1048576" | bc)
        
        echo "$(date +%H:%M:%S) استقبال: ${rx_speed}ميجابايت/ثانية إرسال: ${tx_speed}ميجابايت/ثانية"
        
        prev_rx=$rx
        prev_tx=$tx
        sleep "$interval"
    done
}

# الاستخدام
monitor_network "eth0" 2
```

### 2. ماسح المنافذ 🔍

```bash
#!/bin/bash

# مسح المنافذ على مضيف
port_scan() {
    local host=$1
    local start_port=${2:-1}
    local end_port=${3:-1024}
    local timeout=1
    
    echo "مسح $host من المنفذ $start_port إلى $end_port"
    
    for port in $(seq "$start_port" "$end_port"); do
        (echo >/dev/tcp/"$host"/"$port") >/dev/null 2>&1 &&
            echo "المنفذ $port مفتوح"
    done
}

# الاستخدام
port_scan "localhost" 20 100
```

## نصوص الأتمتة

### 1. تدوير السجلات 📄

```bash
#!/bin/bash

# تدوير وضغط ملفات السجل
rotate_logs() {
    local log_dir=$1
    local max_size=${2:-10485760}  # 10 ميجابايت افتراضياً
    local keep_days=${3:-7}
    
    find "$log_dir" -type f -name "*.log" | while read -r log_file; do
        # التحقق من حجم الملف
        size=$(stat -f%z "$log_file")
        
        if [ "$size" -gt "$max_size" ]; then
            echo "تدوير $log_file"
            timestamp=$(date +%Y%m%d_%H%M%S)
            mv "$log_file" "$log_file.$timestamp"
            gzip "$log_file.$timestamp"
            touch "$log_file"
        fi
    done
    
    # إزالة السجلات القديمة
    find "$log_dir" -name "*.gz" -mtime +"$keep_days" -delete
}

# الاستخدام
rotate_logs "/var/log" 5242880 5
```

### 2. النشر التلقائي 🚀

```bash
#!/bin/bash

# نشر التطبيق على الخادم
deploy_app() {
    local app_name=$1
    local version=$2
    local target_dir="/var/www/$app_name"
    local backup_dir="/var/www/backups"
    local timestamp=$(date +%Y%m%d_%H%M%S)
    
    echo "نشر $app_name إصدار $version"
    
    # إنشاء نسخة احتياطية
    echo "إنشاء نسخة احتياطية..."
    mkdir -p "$backup_dir"
    tar -czf "$backup_dir/${app_name}_${timestamp}.tar.gz" "$target_dir"
    
    # نشر الإصدار الجديد
    echo "نشر الإصدار الجديد..."
    git -C "$target_dir" pull origin "$version"
    
    # تحديث التبعيات
    if [ -f "$target_dir/package.json" ]; then
        echo "تحديث تبعيات Node.js..."
        npm --prefix "$target_dir" install
    fi
    
    if [ -f "$target_dir/requirements.txt" ]; then
        echo "تحديث تبعيات Python..."
        pip install -r "$target_dir/requirements.txt"
    fi
    
    # إعادة تشغيل الخدمة
    echo "إعادة تشغيل الخدمة..."
    systemctl restart "$app_name"
    
    echo "اكتمل النشر بنجاح!"
}

# الاستخدام
deploy_app "myapp" "v1.2.3"
```

## أفضل الممارسات 📚

1. **هيكل النص البرمجي**
   - توثيق واضح
   - تصميم نمطي
   - معالجة الأخطاء
   - التسجيل

2. **الأمان**
   - التحقق من المدخلات
   - أذونات آمنة
   - فحص الأخطاء
   - إجراءات النسخ الاحتياطي

3. **الأداء**
   - خوارزميات فعالة
   - مراقبة الموارد
   - التحسين
   - التخزين المؤقت

4. **الصيانة**
   - التحكم في الإصدارات
   - التحديثات المنتظمة
   - الاختبار
   - التوثيق

## الخطوات التالية 🚀

- [برمجة Bash المتقدمة](02-advanced-bash.md)
- [تصحيح أخطاء النصوص البرمجية](03-debugging.md)
- [التعبيرات النمطية](04-regex.md)
- [إدارة النظام](../admin/01-system-admin.md)

</div>
