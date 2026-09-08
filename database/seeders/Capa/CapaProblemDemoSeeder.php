<?php

namespace Database\Seeders\Capa;

use App\Models\Department;
use App\Models\Problem;
use App\Models\User;
use Illuminate\Database\Seeder;

class CapaProblemDemoSeeder extends Seeder
{
    private $users;

    private $departmentIds;

    public function run(): void
    {
        $admin = User::where('email', 'yonetici@kalitesihirbazi.com.tr')->first() ?? User::factory()->create();
        $this->users = User::inRandomOrder()->limit(8)->get();
        if ($this->users->isEmpty()) {
            $this->users = collect([$admin]);
        }
        $this->departmentIds = Department::pluck('id');

        // 1) Denetim sonrası tespit edilen etiketleme hatası -> etkili CAPA ile kapatıldı
        $problem = $this->makeProblem(
            title: 'Sevkiyat paletlerinde yanlış ürün etiketi kullanımı',
            description: 'Depo sevkiyat kontrolünde, B hattı paletlerinde A hattına ait ürün etiketi kullanıldığı tespit edildi.',
            sourceType: 'internal_observation',
            severity: 'high',
            status: 'closed',
            detectedDaysAgo: 75,
            closedDaysAgo: 20,
        );
        $capa = $this->makeCapa($problem, 'Etiketleme talimatı revize edilecek ve hat operatörleri eğitilecek',
            'corrective', 'Etiket baskı istasyonunda ürün kodu doğrulama adımı eksik; talimat güncellenip çift kontrol eklenecek.',
            'internal', 'closed_effective', dueDaysAgo: 60, closedDaysAgo: 20);
        $this->makeAction($capa, 'Etiketleme talimatı SOP-014 revize edildi, çift kontrol adımı eklendi', dueDaysAgo: 55, completedDaysAgo: 50);
        $this->makeAction($capa, 'B hattı operatörlerine yeni talimat üzerinden eğitim verildi', dueDaysAgo: 45, completedDaysAgo: 40);
        $this->makeVerification($capa, verificationDaysAgo: 20, isEffective: true, notes: '30 günlük izlemede tekrar hatası görülmedi, önlem etkili bulundu.');

        // 2) Müşteri şikayeti -> CAPA devam ediyor (bir aksiyon tamamlandı, biri sürüyor, termin geçmiş)
        $problem = $this->makeProblem(
            title: 'Müşteri X firmasından ürün boyut toleransı şikayeti',
            description: 'Müşteriden gelen parti içerisinde ölçüsel toleransı aşan parçalar bulunduğu bildirildi.',
            sourceType: 'customer_complaint',
            severity: 'critical',
            status: 'capa_raised',
            detectedDaysAgo: 40,
        );
        $capa = $this->makeCapa($problem, 'Enjeksiyon kalıbı ölçü sapması giderilecek',
            'corrective', 'Kalıp aşınması nedeniyle son 2 haftadır boyut toleransı sınırda seyrediyor.',
            'customer_complaint', 'in_progress', dueDaysAgo: -10);
        $this->makeAction($capa, 'Kalıp bakım ve ölçüm ekibi tarafından incelendi, aşınma tespit edildi', dueDaysAgo: 20, completedDaysAgo: 18);
        $this->makeAction($capa, 'Kalıp yenileme/tamir işlemi planlanıyor', dueDaysAgo: -5, completedDaysAgo: null, status: 'in_progress');

        // 3) İç gözlem -> tüm aksiyonlar tamamlandı, doğrulama bekliyor
        $problem = $this->makeProblem(
            title: 'Enjeksiyon hattında ölçüm sapması tespit edildi',
            description: 'Vardiya kontrolünde numune ölçümlerinde sınıra yakın sapmalar görüldü.',
            sourceType: 'internal_observation',
            severity: 'medium',
            status: 'capa_raised',
            detectedDaysAgo: 50,
        );
        $capa = $this->makeCapa($problem, 'Ölçüm istasyonu kalibrasyon periyodu sıklaştırılacak',
            'preventive', 'Sapmaların kalibrasyon periyodunun uzun olmasından kaynaklandığı düşünülüyor.',
            'internal', 'pending_verification', dueDaysAgo: 15);
        $this->makeAction($capa, 'Kalibrasyon periyodu 3 aydan 1 aya düşürüldü', dueDaysAgo: 20, completedDaysAgo: 18);
        $this->makeAction($capa, 'Ölçüm istasyonu operatörlerine tazeleme eğitimi verildi', dueDaysAgo: 16, completedDaysAgo: 14);

        // 4) Tedarikçi kaynaklı problem -> ilk CAPA etkisiz kapatıldı, yeniden açılıp devam ediyor
        $problem = $this->makeProblem(
            title: 'Tedarikçiden gelen hammadde parti numarası uyuşmazlığı',
            description: 'Depoya giren hammadde partisinin sertifika numarası ile fiziksel etiket numarası uyuşmuyor.',
            sourceType: 'supplier',
            severity: 'medium',
            status: 'capa_raised',
            detectedDaysAgo: 90,
        );
        $capa = $this->makeCapa($problem, 'Tedarikçi giriş kalite kontrol talimatı güncellenecek',
            'corrective', 'Giriş kalite kontrolde parti/sertifika çapraz kontrolü net tanımlı değildi.',
            'other', 'in_progress', dueDaysAgo: 5);
        $this->makeAction($capa, 'Giriş kalite kontrol formuna çapraz kontrol maddesi eklendi', dueDaysAgo: 70, completedDaysAgo: 65);
        $this->makeVerification($capa, verificationDaysAgo: 45, isEffective: false, notes: 'Form güncellendi ancak depo personeli yeni maddeyi uygulamıyor, tekrar hata görüldü.');
        $capa->update(['status' => 'in_progress', 'closed_at' => null]);
        $this->makeAction($capa, 'Depo personeline giriş kalite kontrol formu üzerinden yeniden eğitim veriliyor', dueDaysAgo: -5, status: 'in_progress');

        // 5) Düşük önem, henüz inceleniyor
        $this->makeProblem(
            title: 'Depo giriş-çıkış prosedürüne kısmi uyumsuzluk',
            description: 'Rutin gözlemde bazı giriş kayıtlarının prosedürde tanımlı sürede sisteme işlenmediği görüldü.',
            sourceType: 'other',
            severity: 'low',
            status: 'under_review',
            detectedDaysAgo: 10,
        );

        // 6) Düşük önem, CAPA gerektirmeden kapatıldı
        $this->makeProblem(
            title: 'Üretim sahasında geçici düzensiz malzeme istifleme',
            description: 'Yoğun sipariş döneminde ara stok alanında düzensiz istifleme gözlendi, aynı gün düzeltildi.',
            sourceType: 'internal_observation',
            severity: 'low',
            status: 'closed_without_capa',
            detectedDaysAgo: 30,
            closedDaysAgo: 25,
        );

        // 7) Yeni açılmış denetim bulgusu, henüz incelenmedi
        $this->makeProblem(
            title: 'İç denetimde kalite el kitabı güncel olmayan referans bulundu',
            description: 'İç denetimde kalite el kitabındaki bir prosedür referansının güncel revizyona işaret etmediği görüldü.',
            sourceType: 'audit_finding',
            severity: 'high',
            status: 'open',
            detectedDaysAgo: 3,
        );

        // 8) Müşteri şikayeti -> CAPA aksiyon planlama aşamasında
        $problem = $this->makeProblem(
            title: 'Ambalaj hattında müşteri şikayetine konu nem hasarı',
            description: 'Müşteriye ulaşan bir sevkiyatta ambalaj içinde nem kaynaklı hasar bildirildi.',
            sourceType: 'customer_complaint',
            severity: 'high',
            status: 'capa_raised',
            detectedDaysAgo: 20,
        );
        $capa = $this->makeCapa($problem, 'Ambalaj deposu nem kontrolü ve sevkiyat öncesi kontrol eklenecek',
            'corrective', 'Ambalaj deposunda nem ölçümü yapılmıyor, sevkiyat öncesi görsel kontrol yeterli değil.',
            'customer_complaint', 'action_plan', dueDaysAgo: -20);
        $this->makeAction($capa, 'Ambalaj deposuna nem ölçer cihaz temin edilecek', dueDaysAgo: -10, completedDaysAgo: null, status: 'pending');
        $this->makeAction($capa, 'Sevkiyat öncesi kontrol formuna nem kontrolü maddesi eklenecek', dueDaysAgo: -15, completedDaysAgo: null, status: 'pending');

        // 9) Kritik önem, CAPA henüz açık (aksiyon planlanmadı)
        $problem = $this->makeProblem(
            title: 'Kritik ölçüm cihazının kalibrasyon süresi geçmiş halde kullanılması',
            description: 'Son ürün kontrolünde kullanılan bir ölçüm cihazının kalibrasyon süresinin dolduğu fark edildi.',
            sourceType: 'internal_observation',
            severity: 'critical',
            status: 'capa_raised',
            detectedDaysAgo: 5,
        );
        $this->makeCapa($problem, 'Kalibrasyon takip sürecinde uyarı mekanizması kurulacak',
            'preventive', 'Kalibrasyon süresi dolan cihazların kullanımdan otomatik olarak kaldırılmasını sağlayacak bir kontrol yok.',
            'internal', 'open', dueDaysAgo: -30);

        // 10) En eski kayıt, etkili CAPA ile kapatıldı
        $problem = $this->makeProblem(
            title: 'Tedarikçi malzeme kalite belgesi eksikliği',
            description: 'Bir tedarikçiden gelen sevkiyatta malzeme kalite belgesi (sertifika) eksik geldiği tespit edildi.',
            sourceType: 'supplier',
            severity: 'medium',
            status: 'closed',
            detectedDaysAgo: 100,
            closedDaysAgo: 60,
        );
        $capa = $this->makeCapa($problem, 'Tedarikçiye sevkiyat öncesi belge kontrolü şartı eklenecek',
            'corrective', 'Tedarikçi sözleşmesinde sevkiyat öncesi belge kontrolü zorunluluğu net tanımlı değildi.',
            'other', 'closed_effective', dueDaysAgo: 85, closedDaysAgo: 60);
        $this->makeAction($capa, 'Tedarikçi sözleşmesine belge kontrolü maddesi eklendi', dueDaysAgo: 80, completedDaysAgo: 75);
        $this->makeVerification($capa, verificationDaysAgo: 60, isEffective: true, notes: 'Son 3 sevkiyatta belge eksikliği yaşanmadı.');
    }

    private function pickUserId(): int
    {
        return $this->users->random()->id;
    }

    private function pickDepartmentId(): ?int
    {
        return $this->departmentIds->isNotEmpty() ? $this->departmentIds->random() : null;
    }

    private function makeProblem(
        string $title,
        string $description,
        string $sourceType,
        string $severity,
        string $status,
        int $detectedDaysAgo,
        ?int $closedDaysAgo = null,
    ): Problem {
        return Problem::create([
            'title' => $title,
            'description' => $description,
            'source_type' => $sourceType,
            'severity' => $severity,
            'status' => $status,
            'detected_by_id' => $this->pickUserId(),
            'department_id' => $this->pickDepartmentId(),
            'detected_date' => now()->subDays($detectedDaysAgo),
            'closed_at' => $closedDaysAgo !== null ? now()->subDays($closedDaysAgo) : null,
        ]);
    }

    private function makeCapa(
        Problem $problem,
        string $title,
        string $type,
        string $description,
        string $sourceType,
        string $status,
        int $dueDaysAgo,
        ?int $closedDaysAgo = null,
    ) {
        return $problem->capas()->create([
            'title' => $title,
            'type' => $type,
            'description' => $description,
            'source_type' => $sourceType,
            'status' => $status,
            'opened_by_id' => $this->pickUserId(),
            'responsible_id' => $this->pickUserId(),
            'due_date' => now()->subDays($dueDaysAgo),
            'closed_at' => $closedDaysAgo !== null ? now()->subDays($closedDaysAgo) : null,
        ]);
    }

    private function makeAction(
        $capa,
        string $description,
        int $dueDaysAgo,
        ?int $completedDaysAgo = null,
        string $status = 'done',
    ) {
        return $capa->actions()->create([
            'description' => $description,
            'responsible_id' => $this->pickUserId(),
            'due_date' => now()->subDays($dueDaysAgo),
            'completed_at' => $completedDaysAgo !== null ? now()->subDays($completedDaysAgo) : null,
            'status' => $status,
        ]);
    }

    private function makeVerification($capa, int $verificationDaysAgo, bool $isEffective, string $notes)
    {
        return $capa->verifications()->create([
            'verified_by_id' => $this->pickUserId(),
            'verification_date' => now()->subDays($verificationDaysAgo),
            'is_effective' => $isEffective,
            'notes' => $notes,
        ]);
    }
}
