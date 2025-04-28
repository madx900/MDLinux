# دليل أوامر الشبكة 🌐

<div dir="rtl">

## أدوات الشبكة الأساسية

### 1. معلومات الشبكة 📡

| الأمر | الوصف | مثال |
|-------|--------|-------|
| `ifconfig` | إعدادات واجهة الشبكة | `ifconfig eth0` |
| `ip` | أداة الشبكة الحديثة | `ip addr show` |
| `iwconfig` | معلومات الواجهة اللاسلكية | `iwconfig wlan0` |
| `hostname` | اسم المضيف | `hostname -f` |
| `nmcli` | واجهة سطر أوامر مدير الشبكة | `nmcli dev status` |

### 2. اختبار الشبكة 🔍

| الأمر | الوصف | مثال |
|-------|--------|-------|
| `ping` | اختبار الاتصال | `ping -c 4 google.com` |
| `traceroute` | تتبع مسار الحزم | `traceroute google.com` |
| `mtr` | تشخيص الشبكة | `mtr google.com` |
| `nslookup` | أداة استعلام DNS | `nslookup google.com` |
| `dig` | أداة DNS متقدمة | `dig google.com` |

## إعداد الشبكة

### 1. إدارة الواجهات 🔌

| الأمر | الوصف | مثال |
|-------|--------|-------|
| `ip link` | إدارة واجهات الشبكة | `ip link set eth0 up` |
| `ip addr` | إعداد عناوين IP | `ip addr add 192.168.1.10/24 dev eth0` |
| `ip route` | إدارة جدول التوجيه | `ip route add default via 192.168.1.1` |
| `dhclient` | عميل DHCP | `dhclient eth0` |
| `ethtool` | إعدادات إيثرنت | `ethtool eth0` |

### 2. ملفات إعداد الشبكة 📄

```bash
/etc/network/interfaces    # إعداد الواجهة
/etc/netplan/*.yaml       # إعداد Netplan
/etc/resolv.conf          # إعداد محلل DNS
/etc/hosts               # إدخالات المضيف الثابتة
/etc/hostname            # اسم مضيف النظام
```

## مراقبة الشبكة

### 1. مراقبة حركة المرور 📊

| الأمر | الوصف | مثال |
|-------|--------|-------|
| `netstat` | إحصائيات الشبكة | `netstat -tuln` |
| `ss` | إحصائيات المقابس | `ss -tuln` |
| `iftop` | حركة مرور الواجهة | `iftop -i eth0` |
| `tcpdump` | محلل الحزم | `tcpdump -i eth0` |
| `wireshark` | محلل حزم رسومي | `wireshark` |

### 2. إحصائيات الشبكة 📈

| الأمر | الوصف | مثال |
|-------|--------|-------|
| `vnstat` | مراقب حركة الشبكة | `vnstat -h` |
| `bmon` | مراقب عرض النطاق | `bmon` |
| `iptraf` | مراقب حركة IP | `iptraf-ng` |
| `nethogs` | عرض النطاق لكل عملية | `nethogs eth0` |
| `nload` | مراقب حمل الشبكة | `nload eth0` |

## الوصول عن بعد

### 1. أوامر SSH 🔐

| الأمر | الوصف | مثال |
|-------|--------|-------|
| `ssh` | الصدفة الآمنة | `ssh user@host` |
| `scp` | النسخ الآمن | `scp file user@host:/path` |
| `sftp` | بروتوكول نقل الملفات الآمن | `sftp user@host` |
| `ssh-keygen` | توليد مفاتيح SSH | `ssh-keygen -t rsa` |
| `ssh-copy-id` | نسخ مفتاح SSH للمضيف | `ssh-copy-id user@host` |

### 2. الإدارة عن بعد 🖥️

| الأمر | الوصف | مثال |
|-------|--------|-------|
| `telnet` | عميل Telnet | `telnet host port` |
| `rdesktop` | عميل سطح المكتب البعيد | `rdesktop host` |
| `vnc` | عميل VNC | `vncviewer host` |
| `screen` | مضاعف الطرفية | `screen -S name` |
| `tmux` | مضاعف الطرفية | `tmux new -s name` |

## إدارة جدار الحماية

### 1. UFW (جدار الحماية غير المعقد) 🛡️

| الأمر | الوصف | مثال |
|-------|--------|-------|
| `ufw enable` | تفعيل جدار الحماية | `sudo ufw enable` |
| `ufw allow` | السماح لمنفذ/خدمة | `sudo ufw allow 22` |
| `ufw deny` | منع منفذ/خدمة | `sudo ufw deny 23` |
| `ufw status` | عرض حالة جدار الحماية | `sudo ufw status verbose` |
| `ufw reset` | إعادة تعيين جدار الحماية | `sudo ufw reset` |

### 2. iptables 🔒

| الأمر | الوصف | مثال |
|-------|--------|-------|
| `iptables -L` | عرض القواعد | `sudo iptables -L` |
| `iptables -A` | إضافة قاعدة | `sudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT` |
| `iptables -D` | حذف قاعدة | `sudo iptables -D INPUT 1` |
| `iptables-save` | حفظ القواعد | `sudo iptables-save > rules.v4` |
| `iptables-restore` | استعادة القواعد | `sudo iptables-restore < rules.v4` |

## أمثلة تطبيقية 🎯

### 1. إعداد الشبكة
```bash
# إعداد IP ثابت
sudo ip addr add 192.168.1.100/24 dev eth0
sudo ip link set eth0 up
sudo ip route add default via 192.168.1.1

# اختبار الاتصال
ping -c 4 8.8.8.8
traceroute google.com
```

### 2. إعداد جدار الحماية
```bash
# إعداد UFW الأساسي
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow ssh
sudo ufw allow http
sudo ufw enable
```

### 3. الوصول عن بعد
```bash
# توليد وإعداد مفاتيح SSH
ssh-keygen -t rsa -b 4096
ssh-copy-id user@remote-host
ssh user@remote-host
```

## استكشاف أخطاء الشبكة وإصلاحها 🔧

### 1. المشاكل الشائعة
```bash
# التحقق من حالة الواجهة
ip link show
ethtool eth0

# مشاكل DNS
dig +short google.com
cat /etc/resolv.conf

# مشاكل التوجيه
ip route show
traceroute problematic-host
```

### 2. مشاكل الأداء
```bash
# مراقبة عرض النطاق
iftop -i eth0
nethogs eth0

# التحقق من الاتصالات
netstat -tuln
ss -s
```

## أفضل الممارسات 📚

1. **الأمان**
   - استخدام مفاتيح SSH دائماً بدلاً من كلمات المرور
   - الحفاظ على قواعد جدار الحماية محددة وبسيطة
   - مراقبة حركة الشبكة بانتظام
   - استخدام البروتوكولات الآمنة (HTTPS, SFTP, إلخ)

2. **المراقبة**
   - إعداد مراقبة منتظمة للشبكة
   - الاحتفاظ بسجلات نشاط الشبكة
   - مراقبة استخدام عرض النطاق
   - تتبع إحصائيات الاتصال

3. **التوثيق**
   - توثيق إعدادات الشبكة
   - توثيق قواعد جدار الحماية
   - الاحتفاظ بقائمة عناوين IP
   - توثيق إجراءات استكشاف الأخطاء وإصلاحها

## الخطوات التالية 🚀

- [إدارة العمليات](04-process.md)
- [أوامر الأمان](05-security.md)
- [مراقبة النظام](06-monitoring.md)
- [الشبكات المتقدمة](07-advanced-network.md)

</div>
