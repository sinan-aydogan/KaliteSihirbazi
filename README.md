Kalite Sihirbazı & LaraQuality
======

<p align="center">
Kalite yönetimi için hazırlanmış içinde hemen hemen tüm kalite faaliyetlerini eksiksiz yönetmenizi sağlayacak modüller barındıran online yönetim paneli.
</p>

<p align="center">
<b>Kullanılan teknolojiler</b>
<br>
  <img src="https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  <img src="https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D" />
</p>
<hr>
<p align="center">
<b>Geliştirmenin devam edebilmesi için beni destekleyebilirsiniz</b>
<br/>
<a href="https://ko-fi.com/sinanaydogan" target="_blank">
    <img src="https://ko-fi.com/img/githubbutton_sm.svg">
</a>

</p>

<p align="center">
<a href="https://www.buymeacoffee.com/sinanaydogan">
    <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=sinanaydogan&button_colour=FFDD00&font_colour=000000&font_family=Lato&outline_colour=000000&coffee_colour=ffffff">
</a>
</p>


Gereklilikler
------
1. PHP en az v.8.1
2. DB server (MySQL tavsiye edilir)
3. [composer en az v.2](https://getcomposer.org/)
4. [nodejs en az v.14](https://nodejs.org/)
5. Gereklilikler hakkında daha fazla bilgi için [Laravel](https://laravel.com/) ve [Inertia](https://inertiajs.com/) sitelerini ziyaret ediniz.


Kurulum / Standart
------

1. ```npm install```
2. ```composer install```
3. .env.example dosyasını kopyalayın ve adını .env olarak değiştirin
4. Temiz bir veri tablosu oluşturun
5. Veri tabanı bilgilerinizi .env içinde yer alan DB_ ön eki ile başlayan alanlara ekleyin
6. Sırasıyla aşağıda yer alan komutları komut satırınızdan(cmd) çalıştırın. Projenin olduğun dizinde olduğunuzu kontrol edin.
7. ```php artisan migrate --seed```
8. ```php artisan storage:link```
9. ```php artisan key:generate```
10. ```npm run hot```
11. ```php artisan serve```
12. ```http://localhost:8000 sayfasına gidin```

Kurulum / Docker
------
1. Repoyu bilgisayarınıza indirin/klonlayın ```git clone https://github.com/sinan-aydogan/KaliteSihirbazi.git```
2. Projenin ana dizinine terminalden giriş yapın ```cd /dizin isimleri/KaliteSihirbazi```
3. Bilgisayarınızda composer ve node kurulu olmasına gerek yok, docker ile gereken paketlerin kurulmu için aşağıdaki komutu çalıştırın.
   ```
    docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v "$(pwd):/var/www/html" \
    -w /var/www/html \
    laravelsail/php83-composer:latest \
    composer install --ignore-platform-reqs
   ```
5. Docker konteynırına direk erişiminizi sağlayan sail komutlarını hızlıca girebilmenizi için kullanıcı dosyanıza aşağıdaki komutları ekleyin. ```sudo nano ~/.bashrc```
   ```
   alias sail='sh $([ -f sail ] && echo sail || echo vendor/bin/sail)'
   ```
7. Komutun aktif olması için bu komutu terminalde çalıştırın ```source ~/.bashrc```
8. Artık hazırsınız.```sail up -d``` komutu ile docker konteynırlarını başlatın.
9. Projenizin domain adresini host dosyanıza eklemeyi unutmayın ```sudo nano /etc/hosts``` ile host dosyasını açın ve proje adresini ```127.0.0.1 kalitesihirbazi.test``` şeklinde girin.
10. .env dosyasından APP_URL'i ```http://kalitesihirbazi.test``` olarak değiştirin.
11. ```http://kalitesihirbazi.test``` adresinde projeniz artık çalışıyor olmalı.
12. ```sail artisan migrate --seed``` komutu ile veritabanını oluşturun ve örnek verileri ekleyin.
13. ```sail artisan storage:link``` komutu ile storage klasörünü public klasörüne bağlayın.
14. ```sail artisan key:generate``` komutu ile yeni bir key oluşturun.
15. ```sail npm install``` komutu ile npm paketilerini indirin.
16. ```sail npm run dev``` komutu ile projenizi çalıştırın.

Demo Bilgileri
------
- LaraQuality
  - **Demo:** *[https://laraquality.dev](https://laraquality.dev)*
  - **Email:** *admin@laraquality.dev*
  - **Password:** *admin*
- Kalite Sihirbazı
  - **Demo:** *[https://kalitesihirbazi.com.tr](https://kalitesihirbazi.com.tr)*
  - **Email:** *yonetici@kalitesihirbazi.com.tr*
  - **Password:** *admin*

## Yardım

Daha fazla bilgiye veya desteğe ihtiyacın varsa:
- Discord kanalımıza katılabilirsin: [Discord Channel](https://discord.gg/TnjA2GqYmw)

### Sponsorlar

><a href="https://cleavr.io/" target="_blank"><h3>Cleavr</h3>
Cleavr hepsi bir arada proje(kod) yönetim sistemidir. Birden fazla server'ı ekleyebilir, içlerine bir çok özelliği tek tık ile kurabilir, yedek alabilir ve projelerinizi canlı olarak test edebilirsiniz.</a>

> :metal: Eğer beni desteklemek istiyorsanız [admin@tailadmin.dev](mailto:admin@tailadmin.dev) üzerinden benimle iletişime geçebilir veya [Github üzerinden Sponsorum Olabilirsiniz](https://github.com/sponsors/sinan-aydogan)

---

#### Ana Kaynaklar

- [Tailwind](https://tailwindcss.com/)
- [Vue](https://vuejs.org/)
- [Fontawesome](https://fontawesome.com/)

#### Alt Yapılar

composer.json ve package.json dosyalarına göz atınız. Projemizde kullandığımız paketlerin sahiplerine ve topluluklarına en içten teşekkürlerimi sunarım.

---
Lisans
------
Kalite Sihirbazı ve Laraquality [MIT license](https://opensource.org/licenses/MIT) lisansı ile yayınlanan açık kaynak bir projedir.

<p align="center">

<a href="https://ko-fi.com/sinanaydogan" target="_blank">
    <img src="https://ko-fi.com/img/githubbutton_sm.svg">
</a>

</p>

<p align="center">
<a href="https://www.buymeacoffee.com/sinanaydogan">
    <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=sinanaydogan&button_colour=FFDD00&font_colour=000000&font_family=Lato&outline_colour=000000&coffee_colour=ffffff">
</a>
</p>
