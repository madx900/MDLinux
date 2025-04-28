# أوامر إدارة الحزم 📦

<div dir="rtl">

## APT (ديبيان/أوبنتو)

### 1. عمليات الحزم الأساسية 🔄

| الأمر | الوصف | مثال |
|-------|--------|-------|
| `apt update` | تحديث قائمة الحزم | `sudo apt update` |
| `apt upgrade` | ترقية الحزم | `sudo apt upgrade` |
| `apt install` | تثبيت حزمة | `sudo apt install package_name` |
| `apt remove` | إزالة حزمة | `sudo apt remove package_name` |
| `apt purge` | إزالة حزمة مع الإعدادات | `sudo apt purge package_name` |

### 2. معلومات الحزم 📋

| الأمر | الوصف | مثال |
|-------|--------|-------|
| `apt search` | البحث عن الحزم | `apt search keyword` |
| `apt show` | عرض تفاصيل الحزمة | `apt show package_name` |
| `apt list` | عرض قائمة الحزم | `apt list --installed` |
| `apt policy` | عرض سياسة الحزمة | `apt policy package_name` |
| `apt depends` | عرض الاعتماديات | `apt depends package_name` |

## DNF/YUM (فيدورا/ريد هات)

### 1. العمليات الأساسية 🔄

| الأمر | الوصف | مثال |
|-------|--------|-------|
| `dnf check-update` | التحقق من التحديثات | `sudo dnf check-update` |
| `dnf upgrade` | ترقية الحزم | `sudo dnf upgrade` |
| `dnf install` | تثبيت حزمة | `sudo dnf install package_name` |
| `dnf remove` | إزالة حزمة | `sudo dnf remove package_name` |
| `dnf autoremove` | إزالة الاعتماديات غير المستخدمة | `sudo dnf autoremove` |

### 2. معلومات الحزم 📋

| الأمر | الوصف | مثال |
|-------|--------|-------|
| `dnf search` | البحث عن الحزم | `dnf search keyword` |
| `dnf info` | عرض معلومات الحزمة | `dnf info package_name` |
| `dnf list` | عرض قائمة الحزم | `dnf list installed` |
| `dnf provides` | البحث عن الحزمة التي توفر ملفاً | `dnf provides /path/to/file` |
| `dnf repolist` | عرض قائمة المستودعات | `dnf repolist all` |

## Pacman (آرتش لينكس)

### 1. العمليات الأساسية 🔄

| الأمر | الوصف | مثال |
|-------|--------|-------|
| `pacman -Sy` | مزامنة قواعد البيانات | `sudo pacman -Sy` |
| `pacman -Syu` | ترقية النظام | `sudo pacman -Syu` |
| `pacman -S` | تثبيت حزمة | `sudo pacman -S package_name` |
| `pacman -R` | إزالة حزمة | `sudo pacman -R package_name` |
| `pacman -Rs` | إزالة مع الاعتماديات غير المستخدمة | `sudo pacman -Rs package_name` |

### 2. معلومات الحزم 📋

| الأمر | الوصف | مثال |
|-------|--------|-------|
| `pacman -Ss` | البحث عن الحزم | `pacman -Ss keyword` |
| `pacman -Si` | عرض معلومات الحزمة | `pacman -Si package_name` |
| `pacman -Q` | الاستعلام عن الحزم المثبتة | `pacman -Q` |
| `pacman -Qdt` | عرض الحزم اليتيمة | `pacman -Qdt` |
| `pacman -Ql` | عرض ملفات الحزمة | `pacman -Ql package_name` |

## مدير حزم Snap

### 1. العمليات الأساسية 🔄

| الأمر | الوصف | مثال |
|-------|--------|-------|
| `snap install` | تثبيت حزمة | `sudo snap install package_name` |
| `snap remove` | إزالة حزمة | `sudo snap remove package_name` |
| `snap refresh` | تحديث الحزم | `sudo snap refresh` |
| `snap revert` | العودة للإصدار السابق | `sudo snap revert package_name` |
| `snap list` | عرض قائمة الحزم المثبتة | `snap list` |

### 2. معلومات الحزم 📋

| الأمر | الوصف | مثال |
|-------|--------|-------|
| `snap find` | البحث عن الحزم | `snap find keyword` |
| `snap info` | عرض معلومات الحزمة | `snap info package_name` |
| `snap services` | عرض الخدمات النشطة | `snap services` |
| `snap connections` | عرض الواجهات | `snap connections` |
| `snap changes` | عرض التغييرات الأخيرة | `snap changes` |

## Flatpak

### 1. العمليات الأساسية 🔄

| الأمر | الوصف | مثال |
|-------|--------|-------|
| `flatpak install` | تثبيت حزمة | `flatpak install app_id` |
| `flatpak update` | تحديث الحزم | `flatpak update` |
| `flatpak uninstall` | إزالة حزمة | `flatpak uninstall app_id` |
| `flatpak run` | تشغيل تطبيق | `flatpak run app_id` |
| `flatpak repair` | إصلاح التثبيت | `flatpak repair` |

### 2. معلومات الحزم 📋

| الأمر | الوصف | مثال |
|-------|--------|-------|
| `flatpak search` | البحث عن الحزم | `flatpak search keyword` |
| `flatpak list` | عرض التطبيقات المثبتة | `flatpak list` |
| `flatpak info` | عرض معلومات التطبيق | `flatpak info app_id` |
| `flatpak remote-list` | عرض قائمة المستودعات | `flatpak remote-list` |
| `flatpak history` | عرض سجل التثبيت | `flatpak history` |

## أمثلة تطبيقية 🎯

### 1. تحديث النظام
```bash
# ديبيان/أوبنتو
sudo apt update
sudo apt upgrade -y

# فيدورا
sudo dnf upgrade -y

# آرتش لينكس
sudo pacman -Syu
```

### 2. تثبيت الحزم
```bash
# تثبيت مع الاعتماديات
sudo apt install package_name

# تثبيت من مستودع محدد
sudo dnf --enablerepo=repo_name install package_name

# تثبيت مجموعة حزم
sudo pacman -S base-devel
```

### 3. تنظيف الحزم
```bash
# إزالة الحزم غير المستخدمة
sudo apt autoremove

# تنظيف ذاكرة التخزين المؤقت للحزم
sudo dnf clean all

# إزالة الحزم اليتيمة
sudo pacman -Rns $(pacman -Qtdq)
```

## الاستخدام المتقدم 🚀

### 1. إدارة المستودعات
```bash
# إضافة مستودع (أوبنتو)
sudo add-apt-repository ppa:user/repo

# إضافة مستودع (فيدورا)
sudo dnf config-manager --add-repo repo_url

# إضافة مستودع (آرتش)
sudo nano /etc/pacman.conf
```

### 2. بناء الحزم
```bash
# البناء من المصدر (ديبيان)
apt source --compile package_name

# بناء حزمة RPM
rpmbuild -ba package.spec

# بناء حزمة AUR
makepkg -si
```

## أفضل الممارسات 📚

1. **تحديثات النظام**
   - تحديث قوائم الحزم بانتظام
   - إجراء ترقيات النظام دورياً
   - مراجعة التغييرات قبل تطبيقها
   - الاحتفاظ بنسخ احتياطية قبل الترقيات الكبيرة

2. **إدارة الحزم**
   - استخدام المستودعات الرسمية عند الإمكان
   - التحقق من توقيعات الحزم
   - تنظيف ذاكرة التخزين المؤقت للحزم دورياً
   - إزالة الحزم غير المستخدمة

3. **الأمان**
   - الحفاظ على تحديث النظام
   - استخدام مستودعات آمنة
   - التحقق من أصالة الحزم
   - متابعة نشرات الأمان

## الخطوات التالية 🚀

- [أوامر الأمان](07-security.md)
- [مراقبة الأداء](08-performance.md)
- [برمجة الصدفة](../scripting/01-bash-basics.md)
- [إدارة النظام](../admin/01-system-admin.md)

</div>
