# أوامر معالجة النصوص 📝

<div dir="rtl">

## أدوات النص الأساسية

### 1. عرض النص 👀

| الأمر | الوصف | مثال |
|-------|--------|-------|
| `cat` | عرض محتوى الملف | `cat file.txt` |
| `less` | تصفح النص | `less large_file.txt` |
| `head` | عرض الأسطر الأولى | `head -n 10 file.txt` |
| `tail` | عرض الأسطر الأخيرة | `tail -f log.txt` |
| `more` | متصفح نصوص بسيط | `more file.txt` |

### 2. البحث في النص 🔍

| الأمر | الوصف | مثال |
|-------|--------|-------|
| `grep` | البحث عن أنماط النص | `grep "pattern" file.txt` |
| `egrep` | جريب الموسع | `egrep "pattern1|pattern2" file.txt` |
| `fgrep` | بحث النصوص الثابتة | `fgrep "exact string" file.txt` |
| `rg` | جريب متكرر (ripgrep) | `rg "pattern" directory/` |
| `ag` | الباحث الفضي | `ag "pattern" directory/` |

## معالجة النص

### 1. عمليات النص الأساسية ✂️

| الأمر | الوصف | مثال |
|-------|--------|-------|
| `cut` | استخراج الأعمدة | `cut -d"," -f1 data.csv` |
| `paste` | دمج الأسطر | `paste file1 file2` |
| `tr` | ترجمة الأحرف | `tr 'a-z' 'A-Z' < file.txt` |
| `sort` | ترتيب الأسطر | `sort -n numbers.txt` |
| `uniq` | إزالة التكرار | `sort file.txt \| uniq` |

### 2. معالجة النص المتقدمة 🔧

| الأمر | الوصف | مثال |
|-------|--------|-------|
| `sed` | محرر التدفق | `sed 's/old/new/g' file.txt` |
| `awk` | مسح الأنماط | `awk '{print $1}' file.txt` |
| `perl` | معالجة بيرل | `perl -pe 's/old/new/g' file.txt` |
| `xargs` | بناء أسطر الأوامر | `find . -name "*.txt" \| xargs grep "pattern"` |
| `fmt` | تنسيق النص | `fmt -w 80 file.txt` |

## التعبيرات النمطية

### 1. الأنماط الأساسية 📋

```bash
.       # أي حرف واحد
^       # بداية السطر
$       # نهاية السطر
*       # صفر أو أكثر من التكرارات
+       # واحد أو أكثر من التكرارات
?       # صفر أو واحد من التكرارات
[]      # فئة الأحرف
[^]     # فئة الأحرف المنفية
```

### 2. الأنماط الموسعة 🎯

```bash
\d      # رقم [0-9]
\w      # حرف كلمة [a-zA-Z0-9_]
\s      # مسافة بيضاء
\b      # حد الكلمة
()      # تجميع
|       # تناوب
{n}     # بالضبط n مرات
{n,m}   # من n إلى m مرات
```

## تحليل الملفات

### 1. عمليات الأعمدة 📊

| الأمر | الوصف | مثال |
|-------|--------|-------|
| `cut` | استخراج الأعمدة | `cut -d"," -f1,3 data.csv` |
| `column` | تنسيق النص في أعمدة | `column -t data.txt` |
| `join` | دمج الملفات على حقل | `join file1 file2` |
| `csvkit` | أدوات معالجة CSV | `csvcut -c 1,3 data.csv` |
| `jq` | معالج JSON | `jq '.field' data.json` |

### 2. استخراج البيانات 📈

| الأمر | الوصف | مثال |
|-------|--------|-------|
| `awk` | معالجة الحقول | `awk -F',' '{sum+=$1} END {print sum}' data.csv` |
| `sed` | استخراج الأنماط | `sed -n 's/.*<title>\(.*\)<\/title>.*/\1/p'` |
| `grep` | مطابقة الأنماط | `grep -o "pattern" file.txt` |
| `perl` | معالجة معقدة | `perl -ne 'print if /pattern/'` |
| `xml` | معالجة XML | `xmlstarlet sel -t -v "//path" file.xml` |

## تنسيق النص

### 1. تخطيط النص 📑

| الأمر | الوصف | مثال |
|-------|--------|-------|
| `fmt` | تنسيق عرض النص | `fmt -w 60 file.txt` |
| `fold` | لف النص | `fold -w 80 file.txt` |
| `pr` | تنسيق للطباعة | `pr -l 60 file.txt` |
| `expand` | تحويل علامات التبويب إلى مسافات | `expand file.txt` |
| `unexpand` | تحويل المسافات إلى علامات تبويب | `unexpand file.txt` |

### 2. تحويل النص 🔄

| الأمر | الوصف | مثال |
|-------|--------|-------|
| `iconv` | تحويل مجموعات الأحرف | `iconv -f UTF-8 -t ASCII file.txt` |
| `dos2unix` | تحويل نهايات الأسطر | `dos2unix file.txt` |
| `unix2dos` | تحويل إلى تنسيق DOS | `unix2dos file.txt` |
| `recode` | تحويل ترميز الملف | `recode UTF-8..ASCII file.txt` |
| `pandoc` | تحويل تنسيقات المستندات | `pandoc -f md -t html file.md` |

## أمثلة تطبيقية 🎯

### 1. البحث والاستبدال في النص
```bash
# البحث عن جميع التطابقات
grep -r "pattern" directory/

# الاستبدال في ملفات متعددة
find . -type f -name "*.txt" -exec sed -i 's/old/new/g' {} +

# عد التطابقات
grep -c "pattern" file.txt
```

### 2. معالجة البيانات
```bash
# حساب مجموع العمود
awk -F',' '{sum+=$1} END {print sum}' data.csv

# استخراج حقول محددة
cut -d',' -f1,3 data.csv | sort | uniq -c

# معالجة بيانات JSON
cat data.json | jq '.items[] | select(.field=="value")'
```

### 3. تنسيق الملفات
```bash
# تنسيق ملف نصي
fmt -w 80 input.txt > output.txt

# تحويل الترميز
iconv -f ISO-8859-1 -t UTF-8 input.txt > output.txt

# إنشاء مخرجات عمودية
ls -l | column -t
```

## أمثلة متقدمة 🚀

### 1. معالجة النص المعقدة
```bash
# استخراج البريد الإلكتروني من النص
grep -E -o "\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}\b" file.txt

# معالجة السجلات المنظمة
awk '/ERROR/ {print $1, $2, $NF}' logfile.txt

# استبدالات متعددة
sed -e 's/old1/new1/g' -e 's/old2/new2/g' file.txt
```

### 2. تحليل البيانات
```bash
# حساب الإحصائيات
awk '{sum+=$1; sumsq+=$1*$1} END {print "المتوسط =", sum/NR; print "الانحراف المعياري =", sqrt(sumsq/NR - (sum/NR)**2)}' data.txt

# البحث عن الأسطر المكررة
sort file.txt | uniq -d

# معالجة CSV مع الترويسات
awk -F',' 'NR==1{for(i=1;i<=NF;i++)header[i]=$i;next} {for(i=1;i<=NF;i++)print header[i]": "$i}' data.csv
```

## أفضل الممارسات 📚

1. **معالجة النص**
   - استخدام الأدوات المناسبة للمهمة
   - مراعاة ترميز الأحرف
   - التعامل مع الأحرف الخاصة بشكل صحيح
   - استخدام الاقتباس المناسب في النصوص البرمجية

2. **الأداء**
   - استخدام أدوات فعالة للملفات الكبيرة
   - مراعاة استخدام الذاكرة
   - استخدام التدفق حيثما أمكن
   - تجنب المعالجة غير الضرورية

3. **الصيانة**
   - توثيق الأوامر المعقدة
   - استخدام التحكم في الإصدار للنصوص البرمجية
   - اختبار على بيانات عينة أولاً
   - الاحتفاظ بنسخ احتياطية قبل التغييرات الشاملة

## الخطوات التالية 🚀

- [إدارة الحزم](06-package.md)
- [أوامر الأمان](07-security.md)
- [مراقبة الأداء](08-performance.md)
- [برمجة الصدفة](../scripting/01-bash-basics.md)

</div>
