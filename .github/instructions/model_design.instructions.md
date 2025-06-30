---
applyTo: '**'
---
Yeni moduller eklenirken aşağıdaki kurallara uyulmalıdır:

Her modelin arayüz sayfaları `resources/js/Pages/Modules` dizininde bulunur. 
Temel modüller vardır.
 - BusinessManagement: İşletme yönetimi ile ilgili sayfalar.
    - Department: Departman sayfaları.
    - Supplier: Tedarikçi sayfaları.
    - Vehicle: Araç sayfaları.
 - HumanResources: İnsan kaynakları ile ilgili sayfalar.
    - Employee: Çalışan sayfaları.
    - Education: Eğitim sayfaları.
    - EducationPlan: Eğitim planı sayfaları.
    - JobDescription: İş tanımı sayfaları.
- MeasurementDevice: Ölçüm cihazları ile ilgili sayfalar.
    - Device: Cihaz sayfaları.

- Her modül içinde olması gereken sayfalar ve bileşenler bulunur.
 - IndexPage: Modülün ana sayfası. Örnek: `resources/js/Pages/Modules/BusinessManagement/Department/IndexPage.vue`
    - Tablo komponenti: Modülün verilerini listeleyen tablo.
    - Create işlemi için modal: Yeni kayıt eklemek için kullanılan modal.
 - DeletePage: Silinmiş kayıtların listesi. Örnek: `resources/js/Pages/Modules/BusinessManagement/Department/DeletePage.vue`
    - Silinmiş kayıtların listelendiği tablo.
 - ShowPage: Detay sayfası. Örnek: `resources/js/Pages/Modules/BusinessManagement/Department/ShowPage.vue`
    - Detayları gösteren bileşen.
 - translate.js : Modülün çeviri dosyası. Örnek: `resources/js/Pages/Modules/BusinessManagement/Department/translate.js`
    - Modül içindeki metinlerin çevirileri.
    - Her modül için `translates` klasörü altında dil kodu ile isimlendirilmiş ayrı çeviri dosyaları bulunur. `resources/js/Pages/Modules/BusinessManagement/Department/translates/tr.json`

- Proje Inertia.js ve Vue.js tabanlıdır. Bu yüzden her sayfanın rotası vardır.
- Her modül için `routes/web.php` dosyasında rotalar tanımlanır
- Her modülün kendi rotaları ve bileşenleri vardır.
- Modüller arası geçişler Inertia.js ile yapılır.

Bazı modüller alt ayar sayfalarına sahiptir. Örneğin:
- Warehouse modülü içinde `resources/js/Pages/Modules/BusinessManagement/Warehouse/Setting`
- Her ayar sayfası için ayrı bir Vue bileşeni bulunur. Örnek: `resources/js/Pages/Modules/BusinessManagement/Vehicle/Setting/StatusPage.vue`
- Varsayılan ayar sayfası IndexPage.vue olarak adlandırılır. Örnek: `resources/js/Pages/Modules/BusinessManagement/Warehouse/Setting/IndexPage.vue`
- Bütün ayar sayfalarının tanımlandığı menu.js dosyası bulunur. Örnek: `resources/js/Pages/Modules/BusinessManagement/Warehouse/Setting/menu.js`
