# Laravel 13 ve Inertia geçişi

## Tamamlanan temel geçiş

- Uygulama Laravel 13, PHP 8.3+, Inertia 3 ve Vue 3.5 bağımlılıklarına geçirildi.
- `laravel/jetstream` kaldırıldı; kimlik doğrulama Laravel Fortify üzerinden mevcut Inertia sayfalarına bağlandı.
- Profil güncelleme, parola güncelleme, iki aşamalı doğrulama ve Sanctum korunuyor.
- Hesap silme, diğer tarayıcı oturumlarını kapatma ve API token yönetimi uygulamaya ait controller'lara taşındı.
- Yeni kurulum yapılandırmasının varsayılan veritabanı PostgreSQL oldu.
- Jetstream'e ait `current_team_id` ve `profile_photo_path` kolonları yeni kullanıcı şemasından çıkarıldı.
- Tüm migration'lar geçici PostgreSQL 18 veritabanında sıfırdan doğrulandı.

## Geçiş stratejisi

Vue ekranları tek seferde yeniden yazılmayacak. Her modül şu sırayla ele alınacak:

1. Model ilişkileri ve migration kısıtları doğrulanır.
2. Controller ve form doğrulama kodu Laravel 13 kalıplarına taşınır.
3. İlgili Inertia sayfası ve ortak Vue bileşenleri güncellenir.
4. Modül için özellik testleri eklenir.
5. Eski uyumluluk katmanı yalnız tüketicisi kalmadığında kaldırılır.

## Önerilen model sırası

Bağımlılığı az olan sözlük/ayar modellerinden, ilişki yoğun iş modellerine doğru ilerlenmelidir:

1. `Setting`, `Module`, `PropertyType`, `Property`
2. `Department`, `WarehouseType`, `VehicleType`, `VehicleStatus`, `SupplierType`, `SupplierTag`
3. `DocumentType`, `DistributionPoint`, `MeasurementDeviceType`, `CalibrationFirm`, `EducationType`, `EducationInstructor`
4. `Warehouse`, `Vehicle`, `Supplier`, `Employee`, `JobDescription`, `MeasurementDevice`
5. Atama, katılım, sürüm, kalibrasyon ve pivot modelleri
6. Audit, CAPA, problem, iyileştirme ve ürün ağacı gibi çapraz modüller

## Sonraki teknik temizlik

- Profil fotoğrafı yeniden istenecekse Jetstream trait'i yerine Media Library tabanlı uygulama özelliği olarak ekle.
- Her modül taşınırken PostgreSQL üzerinde indeks, foreign key ve silme davranışlarını yeniden değerlendiril.

## Aşama 2: temel ayar modelleri

`Setting`, `Module`, `PropertyType` ve `Property` grubu tamamlandı:

- Boolean ve JSON alanlarına model cast'leri eklendi.
- Property → PropertyType ilişkisi ve Module ↔ PropertyType pivot ilişkisi tanımlandı.
- Pivot tablolara foreign key, cascade ve tekrarı önleyen unique indeksler eklendi.
- PostgreSQL için property özellik alanı `jsonb` olarak tanımlandı.
- Polymorphic kolonlar Laravel'in `propertiable_type` / `propertiable_id` standardına getirildi.
- Module, PropertyType ve Property listeleme/oluşturma/güncelleme/silme uçları tamamlandı.
- Global ayar medya yüklemeleri izin verilen koleksiyonlar ve dosya türleriyle sınırlandı.
- Bu grup için model ilişkisi, doğrulama, Inertia ve JSON endpoint testleri eklendi.

## Aşama 3: organizasyon ve sözlük modelleri

`Department`, `WarehouseType`, `VehicleType`, `VehicleStatus`, `SupplierType` ve `SupplierTag` grubu tamamlandı:

- Departman yöneticisi nullable tutuldu; ana/alt departman tipi ve kendi kendine bağlanma kuralları doğrulamaya alındı.
- Departman, çalışan ve depo ilişkilerinin migration sırasından dolayı eksik kalan foreign key'leri ilgili tablolar hazır olduktan sonra eklendi.
- Depo tipi → depo, araç tipi/durumu → araç ve tedarikçi sözlüklerinin çift yönlü ilişkileri tamamlandı.
- Araç tipi, araç durumu ve tedarikçi etiketi adları ile pivot çiftleri veritabanında benzersiz hale getirildi.
- Route model binding kullanan güncelleme doğrulamaları düzeltildi; değişmeyen benzersiz değerler artık güncellenebiliyor.
- Bu grup için departman hiyerarşisi ve sözlük doğrulama testleri eklendi.
- Tüm migration zinciri yeniden PostgreSQL 18 üzerinde sıfırdan başarıyla çalıştırıldı.

## Aşama 4: belge, ölçüm cihazı ve eğitim sözlükleri

`DocumentType`, `DistributionPoint`, `MeasurementDeviceType`, `CalibrationFirm`, `EducationType` ve `EducationInstructor` grubu tamamlandı:

- Belge türü CRUD işlemlerine sunucu doğrulaması ve benzersiz kod kısıtı eklendi.
- Dağıtım noktası güncellemesinin yanlışlıkla şemada olmayan `code` alanını yazması düzeltildi.
- Belge, departman, belge türü ve oluşturucu ilişkileri ile dağıtım noktası pivotunun foreign key/unique kısıtları tamamlandı.
- Ölçüm cihazı tipi açıklaması opsiyonel hale getirildi; tip, departman ve çalışan ilişkilerinin eksik foreign key'leri eklendi.
- Kalibrasyon firması CRUD uçları ve kalibrasyon görevi ilişkileri tamamlandı.
- Eğitim türü unique güncelleme doğrulaması route model binding ile düzeltildi; eğitmen medya silme ucu tutarlı bir HTTP yanıtı döndürüyor.
- Bu grup için CRUD, ilişki ve benzersizlik testleri eklendi.
- Tüm migration zinciri PostgreSQL 18 üzerinde sıfırdan, Vue üretim paketi de Vite ile başarıyla doğrulandı.

## Aşama 5: ana iş modelleri

`Warehouse`, `Vehicle`, `Supplier`, `Employee`, `JobDescription` ve `MeasurementDevice` grubu tamamlandı:

- Ana model güncellemelerindeki unique kuralları route model binding ile güvenli hale getirildi.
- Araç üretim yılı ve satın alma/elden çıkarma tarihleri iş kurallarına göre doğrulanıyor; tarih alanlarına model cast'leri eklendi.
- Tedarikçinin iletişim/not alanları ve tip/etiket ilişkileri doğrulanarak kaydediliyor; PostgreSQL JSONB ve benzersiz pivot yapısı kullanılıyor.
- Çalışan accessor ve ilişki tipleri modern Eloquent imzalarına getirildi.
- İş tanımı JSON alanları JSONB'ye geçirildi, departman ilişkisi eklendi ve hata anında uygulamayı durduran `dd()` kaldırıldı.
- Ölçüm cihazı kodunun yanlış tabloda unique kontrol edilmesi düzeltildi; tüm form alanları doğrulanıp toplu atanıyor ve fiyat `decimal` saklanıyor.
- Ölçüm cihazı Vue formundaki eksik düzenleme akışı, yanlış silinenler bağlantısı ve satın alma fiyatı binding hatası düzeltildi.
- Bu grup için model, doğrulama, JSON cast ve pivot ilişki testleri eklendi.
- Tüm migration zinciri PostgreSQL 18 üzerinde, PHP testleri ve Vite üretim paketiyle yeniden doğrulandı.

## Aşama 6: ilişkisel iş akışları

Atama, katılım, belge sürümü, kalibrasyon ve pivot modelleri tamamlandı:

- İş tanımı atamalarına çalışan, iş tanımı ve atayan çalışan foreign key'leri ile tekrar atamayı önleyen unique kısıt eklendi.
- Atama oluşturma/güncelleme doğrulamaları tamamlandı; çalışanın kendisini ataması engellendi.
- Eğitim katılımında skor/boolean cast'leri tamamlandı ve yalnız eğitime bağlı kullanıcıların güncellenip çıkarılması sağlandı.
- Eğitim türü, eğitmen ve katılımcı pivotları timestamp ve benzersizlik kurallarıyla uyumlu hale getirildi.
- Belge sürümlerine document/revised-by/approved-by foreign key'leri ve belge başına benzersiz sürüm numarası eklendi.
- Yeni sürüm numarası ilişki koleksiyonunu yüklemek yerine veritabanındaki en yüksek sürüm üzerinden hesaplanıyor.
- Kalibrasyon görevi güncellemesi etkinleştirildi; tarih sırası, fiyat ve üç harfli para birimi doğrulamaları eklendi.
- Kalibrasyon fiyatı PostgreSQL uyumlu `decimal` alana geçirildi.
- İlişkisel iş akışları için atama, katılım, sürüm ve kalibrasyon özellik testleri eklendi.

## Aşama 7: planlanmış modüllerin ayrıştırılması

`Audit`, `AuditFirm`, `Capa`, `CapaAction`, `Problem`, `ImprovementWork` ve `ProductTree` incelendi:

- Bu modüllerin mevcut projede gerçek bir veri modeli veya arayüzü olmadığı belirlendi; migration'lar yalnız `id` ve timestamp, controller/request/model dosyaları ise boş artisan iskeletlerinden oluşuyor.
- İş alanı gereksinimi olmadan audit/CAPA şeması tahmin edilerek oluşturulmadı.
- Menüde kullanılan altı modül rotası güvenli `ComingSoon` Inertia sayfasına bağlandı.
- Boş controller'ların ürettiği sahte store/update/delete/deleted/restore/permanent-delete rotaları kaldırıldı.
- Planlanmış modül rotalarının 500 üretmediğini ve yazılabilir sahte CRUD uçlarının bulunmadığını doğrulayan testler eklendi.

## Aşama 8: kalan boş envanter modülleri

`Product`, `RawMaterial`, `ConsumableMaterial`, `Device`, `Machine`, `Customer`, `Certificate` ve `Standard` incelendi:

- Bu sekiz modülün de yalnız `id`/timestamp migration'ı ile boş model, controller ve request iskeletlerinden oluştuğu doğrulandı.
- Bunlar için iş alanı gereksinimi olmadan ürün, stok, müşteri veya sertifika şeması icat edilmedi.
- Menü bağlantıları güvenli `ComingSoon` rotalarına taşındı.
- Gerçekte veri kaydetmeyen resource/search/store ve soft-delete rotaları kaldırıldı.
- Planlanmış toplam 14 modül için yalnız okunabilir menü rotasının bulunduğunu ve sahte CRUD uçlarının kapalı olduğunu doğrulayan kapsam genişletildi.
- Ayrı ve çalışan `MeasurementDevice` modülü korunmuştur; kapatılan `Device` boş iskeletidir.

## Aşama 9: eğitim planı ve kalan iş akışı iskeletleri

`EducationPlan`, `TakeTimeOff`, `DocumentAction` ve `DocumentRevisionRequest` denetlendi:

- `EducationPlan` gerçek model olarak korundu; plan adı veritabanında benzersiz hale getirildi ve update doğrulaması route model binding ile düzeltildi.
- Başlangıç/bitiş tarihleri oluşturma ve güncellemede birlikte, kronolojik olarak doğrulanıyor.
- Eğitim içeren bir planın kalıcı silinmesi hem uygulama hem PostgreSQL `RESTRICT` kısıtıyla engellendi; eğitimlerin cascade ile sessizce kaybolması önlendi.
- `TakeTimeOff`, `DocumentAction` ve `DocumentRevisionRequest` boş migration/controller/request iskeletleri oldukları için planlanmış modüllere taşındı ve sahte CRUD rotaları kapatıldı.
- Planlanmış modül testi toplam 17 menü rotasını kapsayacak şekilde genişletildi.
- Eğitim planı kronolojisi, benzersizliği ve güvenli silme davranışı için özellik testleri eklendi.

## Aşama 10: route ve Vue bileşen temizliği

- Modül kayıt uçları yeniden standart Laravel resource adresine (`POST /modül`) alındı; geçici `POST /modül-store` uçları kaldırıldı.
- Tablo araması kayıt uçlarıyla çakışmayan `POST /modül/search` adresine taşındı.
- Genel route üreticisi soft-delete uçlarını yalnız ilgili controller metodu gerçekten varsa kaydediyor.
- Route tablosunda aynı HTTP metodu ve URI'yi kullanan çakışan uç bulunmadığı doğrulandı.
- Paketten bağımsız Vue arayüz bileşenleri `resources/js/Components/Account` altına taşındı; Jetstream adlı importlar ve kullanılmayan Jetstream karşılama bileşeni kaldırıldı.
- Tam test paketi ve üretim Vite derlemesi yeniden çalıştırıldı: 72 test geçti, 4 özellik yapılandırma nedeniyle atlandı ve 322 assertion doğrulandı.

## Aşama 11: PostgreSQL tarayıcı oturumları

- Profil ekranındaki tarayıcı oturumları artık uygulamaya ait `BrowserSessionService` tarafından `sessions` tablosundan okunuyor.
- Oturum kayıtları IP adresi, platform, tarayıcı, cihaz türü, son etkinlik zamanı ve mevcut cihaz bilgisiyle Inertia sayfasına aktarılıyor.
- Parola doğrulandıktan sonra diğer cihazlardan çıkış, mevcut session kimliğini koruyup kullanıcıya ait diğer veritabanı kayıtlarını siliyor.
- Session kullanıcısı silindiğinde kaydın güvenli şekilde anonimleşmesi için `sessions.user_id` alanına `nullOnDelete` foreign key eklendi.
- Session listeleme ve silme davranışları özellik testleriyle kapsandı.
- PostgreSQL üzerinde `migrate:fresh`, tam test paketi ve üretim Vite derlemesi başarıyla çalıştırıldı: 73 test geçti, 4 özellik yapılandırma nedeniyle atlandı ve 344 assertion doğrulandı.

Sıradaki aşama: kalan modülleri gerçek iş gereksinimlerine göre bağımlılığı en az olandan başlayarak sırayla uygulamak.
