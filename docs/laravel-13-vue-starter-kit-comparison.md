# Laravel 13 Vue starter kit karşılaştırması

Referans kurulum: `_reference/laravel13-vue-starter-kit`

Referans, resmi `laravel/vue-starter-kit` deposunun güncel ana dalından kurulmuş ve Laravel `13.25.0` bağımlılıklarıyla çözülmüştür. Klasör yalnız karşılaştırma içindir ve Git takibinin dışındadır.

## Uygulanan uyarlamalar

- Resmi starter kit ile aynı `composer run dev` script'i eklendi. Script Laravel 13'ün yerleşik `php artisan dev` komutunu çağırır.
- Canlı log süreci için `laravel/pail` geliştirme bağımlılığı eklendi.
- İlk çalıştırmada etkileşimli indirme yapılmaması için `@laravel/multiplex` sabit geliştirme bağımlılığı olarak eklendi.
- `composer run dev` ile server, queue, Pail ve Vite süreçlerinin birlikte açıldığı doğrulandı.
- Laravel `13.25.0`, Inertia Laravel `3.3`, Vue `3.5`, Vite `8` ve Laravel Vite Plugin `3` kullanılıyor.
- Fortify tabanlı kimlik doğrulama mevcut.
- Laravel 13'ün fluent `bootstrap/app.php` ve `bootstrap/providers.php` yapısına geçildi; özel dil middleware'i, Inertia paylaşımı ve API rate limiter korundu.
- Eski `Http/Kernel`, `Console/Kernel`, `Exceptions/Handler` ve `RouteServiceProvider` uyumluluk katmanları kaldırıldı.
- Tailwind CSS 4, `@tailwindcss/vite` üzerinden doğrudan Vite hattına alındı; eski PostCSS/Autoprefixer yapılandırması kaldırıldı.
- Inertia'nın preload link middleware'i web grubunda etkin.
- TypeScript denetimi `allowJs` ile devreye alındı; mevcut JavaScript ekranları zorunlu toplu dönüşüme sokulmadı.
- ESLint 9 flat config, Prettier, `vue-tsc`, Pint ve Larastan seviye 7 kalite komutları eklendi.
- Wayfinder route/action üretimi eklendi. Mevcut ekranlar kırılmasın diye Ziggy, modül bazlı geçiş tamamlanana kadar birlikte çalışıyor.

## Bilinçli olarak alınmayan starter kit parçaları

Resmi kitteki Reka UI, Lucide ve class-variance-authority bağımlılıkları kurulmadı. Projenin Font Awesome, Pinia, vue-i18n ve özel Vue bileşenlerinden oluşan mevcut arayüzü korundu. Böylece Laravel/Inertia altyapısı güncellenirken ürünün UI mimarisi değiştirilmedi.

## Kalan aşamalı iyileştirmeler

- ESLint mevcut Vue kodunda 239 eski-kod uyarısını görünür kılıyor; hata bulunmuyor. Bunlar ekran bazında temizlenebilir.
- Pint ve Larastan seviye 7, yeni taşınan çekirdek alanlarda zorunlu. Eski modüller düzeltilerek bu kontrollerin kapsamına aşamalı eklenebilir.
- Yeni ve güncellenen ekranlarda Wayfinder tercih edilmeli; son Ziggy tüketicisi kaldırıldıktan sonra Ziggy bağımlılığı silinebilir.
- JavaScript ekranları işlevsel değişiklik yapılırken parça parça TypeScript'e geçirilebilir.
