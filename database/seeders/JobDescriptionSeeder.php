<?php

namespace Database\Seeders;

use App\Models\Department;
use App\Models\JobDescription;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class JobDescriptionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        /*Quality Manager*/
        JobDescription::create([
            'code' => 'KLT-MDR',
            'name' => 'Kalite Müdürü',
            'description' => 'İşleme içi ve dışı kalite faaliyetlerinin organize edilmesi ve Kalite Departmanı\'nın yönetilmesi.',
            'staff_type' => 'white',
            'department_id' => Department::where('code', 'KLT')->first()->id,
            'responsibilities' => ['Ürün belgelendirme', 'Kalite Departmanının Yönetilmesi', 'Aylık Fabrika Kalite Raporu', 'Tedarikçi Ziyareti'],
            'powers' => ['Ölçüm aleti satın aldırma', 'Kalite Departmanı vardiya düzeni belirleme', 'Departman çalışanlarına izin verme', 'Departman içi personel pozisyonlarını değiştirme'],
            'requirements' => ['Fen bilimleri lisans mezunu', 'Akışı İngilizce', 'Minimum 10 yıl Kalite Sistemleri Yönetimi deneyimi'],
            'skills' => ['Sorun çözme', 'Meraklı', 'Öğrenmeye yatkınlık', 'Stres yönetimi becerisi'],
            'working_conditions' => ['Özel ofis', 'Üretim sahası', 'Tedarikçi üretim sahaları ve ofisleri'],
            'working_tools' => ['Bilgisayar', 'Cep telefonu', 'Özel Araç'],
            'working_hours' => ['Hafta İçi (08:00-18:00)'],
            'overtime_status' => ['Denetim zamanları (İzin karşılığı)'],
            'travel_status' => [
                [
                    'name' => 'Kalite Çalıştayı(Yıllık)',
                    'location' => 'abroad'
                ],
                [
                    'name' => 'Kalite Değerlendirmesi Toplantısı (Her Çeyrek)',
                    'location' => 'domestic'
                ],
                [
                    'name' => 'Müşteri şikayeti yerinde inceleme (Gerektiğinde)',
                    'location' => 'abroad'
                ]
            ],
            'status' => true
        ]);

        /*Quality Engineer*/
        JobDescription::create([
            'code' => 'KLT-UZM',
            'name' => 'Kalite Uzmanı',
            'description' => 'İşleme içi faaliyetlerinin yürütülmesi.',
            'staff_type' => 'white',
            'department_id' => Department::where('code', 'KLT')->first()->id,
            'responsibilities' => ['Ürün analizi', 'Kalite Belgelendirme Hazırlıkları', 'Müşteri Şikayeti İncelemesi'],
            'powers' => ['Kalibrasyona cihaz gönderme', 'Kalibrasyon periyodu belirleme'],
            'requirements' => ['Fen/Mühendislik bilimleri lisans mezunu', 'Minimum 2 yıl kalite deneyimi'],
            'skills' => ['Sorun çözme', 'Meraklı', 'Öğrenmeye yatkınlık', 'Laboratuvar cihazları kullanabilme'],
            'working_conditions' => ['Laboratuvar', 'Üretim sahası', 'Sesli ortam'],
            'working_tools' => ['Bilgisayar', 'Etüv', 'Çeker Ocak', 'pH Metre'],
            'working_hours' => ['Hafta İçi (08:00-18:00)'],
            'overtime_status' => [],
            'travel_status' => [
                [
                    'name' => 'Müşteri şikayeti yerinde inceleme (Gerektiğinde)',
                    'location' => 'domestic'
                ]
            ],
            'status' => true
        ]);

        /*Production Engineer*/
        JobDescription::create([
            'code' => 'URT-MUH',
            'name' => 'Üretim Mühendisi',
            'description' => 'Üretim süreçlerinin yürütülmesi ve takibi.',
            'staff_type' => 'white',
            'department_id' => Department::where('code', 'URT')->first()->id,
            'responsibilities' => ['Üretim planına uygun üretim yapılması', 'Hammadde stoklarını takip', 'Bitmiş ürün stoğu takibi'],
            'powers' => ['Hammadde siparişi verme', 'Üretim personellerine izin durumlarını yönetme', 'Prim miktarını belirleme'],
            'requirements' => ['Mühendislik fakültesi mezunu', 'Minimum 5 yıl tecrübe'],
            'skills' => ['Organizasyon', 'İkna Kabiliyeti', 'Zaman Yönetimi'],
            'working_conditions' => ['Tozlu, sesli ve değişken ısı koşullarına sahip üretim hattı'],
            'working_tools' => ['Bilgisayar', 'Telsiz', 'Yazıcı'],
            'working_hours' => ['Hafta İçi (08:00-18:00)'],
            'overtime_status' => ['Hafta Sonu (08:00-12:30)'],
            'travel_status' => [
                [
                    'name' => 'Üretim Verimlilik Toplantısı (Yıllık)',
                    'location' => 'abroad'
                ]
            ],
            'status' => true
        ]);

        /*Mikser Operatörü*/
        JobDescription::create([
            'code' => 'URT-MOP',
            'name' => 'Mikser Operatörü',
            'description' => 'Üretim planına uygun üretim harcı reçetesinin hazırlanması ve üretimin sürdürülebilirsinin sağlanması.',
            'staff_type' => 'blue',
            'department_id' => Department::where('code', 'URT')->first()->id,
            'responsibilities' => ['Üretim planına reçetenin hazırlanması', 'Üretim parametrelerine uygun minör reçete değişikliği', 'Kalite parametrelerinin periyodik ölçümü', 'Mikser bölgesinin temizliği'],
            'powers' => ['Minör reçete değişikliği', 'Majör problemlerde vardiya amirinden bağımsız üretimi durdurlabilme'],
            'requirements' => ['Meslek lisesi ve Ön lisans mezunu'],
            'skills' => ['Zorlu koşullar altında çalışabilme', 'Sorumluluk alabilme', 'Sorun çözme'],
            'working_conditions' => ['Tozlu, sesli ve değişken ısı koşullarına sahip üretim hattı'],
            'working_tools' => ['Mikser', 'Yoğunluk Ölçer', 'Kronometre'],
            'working_hours' => ['3 Vardiya'],
            'overtime_status' => [''],
            'travel_status' => [],
            'status' => true
        ]);

        /*Sevkiyat Forklift Şöförü*/
        JobDescription::create([
            'code' => 'SEV-SFR',
            'name' => 'Sevkiyat Forklift Şöförü',
            'description' => 'Stok sahaları ve depolarda yer alan malzemelerin forklift yardımıyla taşınması, araçlardan indirilmesi ve yüklenmesini gerçekleştirir.',
            'staff_type' => 'blue',
            'department_id' => Department::where('code', 'SEV')->first()->id,
            'responsibilities' => ['Sevk planına uygun ürünlerin araçlara yüklenmesi', 'Gelen hammaddelerin depolara indirilmesi', 'Forklift\'in önleyici bakımlarının yapılması'],
            'powers' => ['Sevk yoğunluğu durumunda minör araç sıralamasının düzenlenebilmesi'],
            'requirements' => ['Meslek lisesi ve Ön lisans mezunu', 'Forklift ehliyeti'],
            'skills' => ['Şöförlük kabiliyeti', 'Düzenli çalışma', 'Az alan kullanarak yerleşim yapabilme'],
            'working_conditions' => ['Sevkiyat sahası', 'Hammadde depoları'],
            'working_tools' => ['Forklift', 'Forklift Şarj Ünitesi'],
            'working_hours' => ['3 Vardiya'],
            'overtime_status' => [''],
            'travel_status' => [],
            'status' => true
        ]);
    }
}
