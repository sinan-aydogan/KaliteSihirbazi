<?php

namespace Database\Seeders\Risk;

use App\Enums\ProblemSourceType;
use App\Enums\RiskControlEffectiveness;
use App\Enums\RiskControlStatus;
use App\Enums\RiskReviewConclusion;
use App\Enums\RiskTreatmentStrategy;
use App\Models\Department;
use App\Models\Problem;
use App\Models\Risk;
use App\Models\RiskCategory;
use App\Models\RiskHazardClass;
use App\Models\User;
use App\Services\Risk\RiskWorkflowService;
use Illuminate\Database\Seeder;

class RiskDemoSeeder extends Seeder
{
    private User $admin;

    private $users;

    private RiskWorkflowService $service;

    public function run(): void
    {
        $this->service = app(RiskWorkflowService::class);
        $this->admin = User::where('email', 'yonetici@kalitesihirbazi.com.tr')->first() ?? User::factory()->create();
        $this->users = User::inRandomOrder()->limit(8)->get();
        if ($this->users->isEmpty()) {
            $this->users = collect([$this->admin]);
        }

        if (Risk::exists()) {
            return;
        }

        // 1) Üretim - kalıp aşınması -> önlem alındı ama risk yine de gerçekleşti,
        //    tetiklenen gözden geçirme "önlemler yetersizmiş" sonucuna bağlanıyor (temel kapalı döngü senaryosu)
        $risk = $this->makeRisk(
            title: 'Enjeksiyon kalıbı aşınmasına bağlı boyutsal tolerans sapması',
            description: 'Uzun süreli kullanım sonucu enjeksiyon kalıplarında aşınma oluşması, üretilen parçalarda boyutsal toleransın dışına çıkma riski taşıyor.',
            department: 'URT',
            category: 'quality',
            hazardClass: 'mechanical',
            probability: 4,
            impact: 4,
            treatment: RiskTreatmentStrategy::Mitigate,
            identifiedDaysAgo: 220,
        );
        $this->makeControl($risk, 'Kritik kalıplar için 3 aylık periyodik aşınma ölçümü planı', dueDaysAgo: 190, status: RiskControlStatus::Completed, completedDaysAgo: 185, effectiveness: RiskControlEffectiveness::PartiallyEffective);
        $this->makeControl($risk, 'Kalıp bakım ekibine aşınma erken teşhis eğitimi', dueDaysAgo: 180, status: RiskControlStatus::Completed, completedDaysAgo: 175, effectiveness: RiskControlEffectiveness::Effective);
        // Önlemlere rağmen risk gerçekleşti -> uygunsuzluk açıldı -> otomatik pending review tetiklendi
        $problem = $this->makeRealizedProblem(
            risk: $risk,
            title: 'Enjeksiyon hattında boyut toleransı aşımı tespit edildi',
            description: 'Periyodik ölçüm planına rağmen B hattı kalıbında beklenmedik hızda aşınma oluştu, üretilen parti tolerans dışı çıktı.',
            severity: 'high',
            status: 'closed',
            detectedDaysAgo: 45,
            closedDaysAgo: 10,
        );
        $this->completeRealizationReview(
            risk: $risk,
            problem: $problem,
            probability: 4,
            impact: 4,
            controlsAdequate: false,
            conclusion: RiskReviewConclusion::ControlsReinforced,
            notes: 'Periyodik ölçüm aralığı aşınma hızını yakalamakta yetersiz kaldı; ölçüm periyodu sıklaştırılıp erken uyarı eşiği düşürülecek.',
            reviewDaysAgo: 9,
        );
        $this->makeControl($risk, 'Ölçüm periyodu 3 aydan 1 aya düşürüldü, erken uyarı eşiği tanımlandı', dueDaysAgo: -5, status: RiskControlStatus::InProgress);

        // 2) İSG - depo raf sistemi devrilme riski -> önlemler alındı, planlı gözden geçirmede
        //    "değişiklik yok / kabul edilebilir" sonucuyla izlemeye devam
        $risk = $this->makeRisk(
            title: 'Depo raf sisteminde yüksek raflardan malzeme devrilmesi/düşmesi riski',
            description: 'Depo raf sisteminin yoğun kullanımı ve forklift trafiği, üst raflardan malzeme düşmesi ihtimalini artırıyor.',
            department: 'SEV',
            category: 'occupational_health_safety',
            hazardClass: 'mechanical',
            probability: 3,
            impact: 4,
            treatment: RiskTreatmentStrategy::Mitigate,
            identifiedDaysAgo: 300,
        );
        $this->makeControl($risk, 'Raf sistemlerinin zemine sabitlenmesi ve yük limiti etiketlemesi', dueDaysAgo: 270, status: RiskControlStatus::Completed, completedDaysAgo: 260, effectiveness: RiskControlEffectiveness::Effective);
        $this->makeControl($risk, 'Forklift operatörlerine yükleme yüksekliği ve denge eğitimi', dueDaysAgo: 250, status: RiskControlStatus::Completed, completedDaysAgo: 245, effectiveness: RiskControlEffectiveness::Effective);
        $this->addScheduledReview(
            risk: $risk,
            probability: 1,
            impact: 3,
            controlsAdequate: true,
            conclusion: RiskReviewConclusion::NoChange,
            notes: 'Son 6 aylık izlemede raf kaynaklı olay görülmedi, mevcut önlemler yeterli bulundu.',
            reviewDaysAgo: 30,
        );

        // 3) Bilgi Güvenliği - müşteri verisine yetkisiz erişim riski -> önlemler planlandı, uygulamada
        $risk = $this->makeRisk(
            title: 'Müşteri sipariş verilerine yetkisiz erişim riski',
            description: 'Ticari ve teknik departmanların ortak kullandığı paylaşımlı sürücülerde müşteri sipariş verilerine erişim yetkilendirmesi ayrıntılı tanımlanmamış durumda.',
            department: 'STP',
            category: 'information_security',
            hazardClass: 'information_security_breach',
            probability: 3,
            impact: 5,
            treatment: RiskTreatmentStrategy::Mitigate,
            identifiedDaysAgo: 60,
        );
        $this->makeControl($risk, 'Paylaşımlı sürücülerde rol bazlı erişim yetkilendirmesi kurulacak', dueDaysAgo: -10, status: RiskControlStatus::InProgress);
        $this->makeControl($risk, 'Kritik müşteri verileri için erişim logu ve periyodik denetim', dueDaysAgo: -20, status: RiskControlStatus::Planned);

        // 4) Satın Alma - tek tedarikçiye bağımlılık -> kabul edilen risk (gerekçeli), izleniyor
        $risk = $this->makeRisk(
            title: 'Kritik hammaddede tek tedarikçiye bağımlılık riski',
            description: 'Ana üretim hattında kullanılan özel formülasyonlu hammadde şu an tek bir tedarikçiden temin ediliyor; tedarik kesintisi üretim durmasına yol açabilir.',
            department: 'STA',
            category: 'operational',
            hazardClass: 'operational_disruption',
            probability: 2,
            impact: 5,
            treatment: RiskTreatmentStrategy::Accept,
            identifiedDaysAgo: 150,
            acceptanceJustification: 'Alternatif tedarikçi nitelendirme süreci başlatıldı ancak kısa vadede maliyet/kalite dengesi mevcut tedarikçiyi korumayı gerektiriyor; stok tamponu ile risk yönetilebilir seviyede tutuluyor.',
        );
        $this->makeControl($risk, 'Kritik hammadde için 2 aylık güvenlik stoku bulundurulması', dueDaysAgo: 120, status: RiskControlStatus::Completed, completedDaysAgo: 110, effectiveness: RiskControlEffectiveness::Effective);
        $this->addScheduledReview(
            risk: $risk,
            probability: 2,
            impact: 4,
            controlsAdequate: true,
            conclusion: RiskReviewConclusion::NoChange,
            notes: 'Güvenlik stoku mevcut tedarik riskini yönetilebilir tutuyor; alternatif tedarikçi nitelendirme süreci paralel devam ediyor.',
            reviewDaysAgo: 60,
        );

        // 5) Muhasebe / Finansal - döviz kuru dalgalanması -> kabul edilen risk, izleniyor
        $risk = $this->makeRisk(
            title: 'Döviz kuru dalgalanmasının ithal hammadde maliyetine etkisi riski',
            description: 'İthal hammadde alımlarının döviz bazlı fiyatlandırılması, kur dalgalanmalarında maliyet öngörülebilirliğini azaltıyor.',
            department: 'MUH',
            category: 'financial',
            hazardClass: 'compliance_legal',
            probability: 3,
            impact: 3,
            treatment: RiskTreatmentStrategy::Accept,
            identifiedDaysAgo: 90,
            acceptanceJustification: 'Kur riski forward sözleşmeleriyle kısmen dengeleniyor; kalan risk kabul edilebilir seviyede görülüyor, çeyreklik bazda izleniyor.',
        );
        $this->addScheduledReview(
            risk: $risk,
            probability: 3,
            impact: 3,
            controlsAdequate: true,
            conclusion: RiskReviewConclusion::RiskAcceptedAsIs,
            notes: 'Çeyreklik değerlendirmede kur hareketleri forward sözleşmeleriyle öngörülen sınırlar içinde kaldı, risk olduğu gibi kabul edilmeye devam ediyor.',
            reviewDaysAgo: 15,
        );

        // 6) Bakım - kritik makine plansız arıza riski -> yeni tanımlandı, henüz analiz aşamasında
        $this->makeRisk(
            title: 'Kritik üretim makinesinde plansız arıza/duruş riski',
            description: 'Yaşı ve kullanım yoğunluğu yüksek olan pres makinesinde önleyici bakım geçmişi düzensiz; plansız arıza üretim hattının tamamını durdurabilir.',
            department: 'BKM',
            category: 'operational',
            hazardClass: 'mechanical',
            probability: 3,
            impact: 4,
            treatment: RiskTreatmentStrategy::Mitigate,
            identifiedDaysAgo: 5,
        );

        // 7) Kalite - eğitim kaydı eksikliği -> önlemi ile gerçekleşme sonrası "kabul edilen sonuç" olarak kapanan döngü
        $risk = $this->makeRisk(
            title: 'Sezonluk yoğun üretim döneminde geçici personel oryantasyon eksikliği riski',
            description: 'Sezonluk talep artışında hızlı işe alınan geçici personelin tam oryantasyon eğitimini tamamlayamadan üretime dahil olma ihtimali.',
            department: 'KLT',
            category: 'quality',
            hazardClass: 'ergonomic',
            probability: 3,
            impact: 3,
            treatment: RiskTreatmentStrategy::Mitigate,
            identifiedDaysAgo: 400,
        );
        $this->makeControl($risk, 'Geçici personel için 1 günlük zorunlu temel oryantasyon eğitimi', dueDaysAgo: 370, status: RiskControlStatus::Completed, completedDaysAgo: 365, effectiveness: RiskControlEffectiveness::PartiallyEffective);
        $problem = $this->makeRealizedProblem(
            risk: $risk,
            title: 'Yeni işe alınan geçici personelin hatalı ambalajlama uygulaması',
            description: 'Sezon yoğunluğunda işe başlayan bir geçici personel, tam oryantasyonu tamamlanmadan ambalajlama istasyonunda görevlendirildi ve düşük riskli bir ambalajlama hatası yaptı.',
            severity: 'low',
            status: 'closed_without_capa',
            detectedDaysAgo: 200,
            closedDaysAgo: 195,
        );
        $this->completeRealizationReview(
            risk: $risk,
            problem: $problem,
            probability: 2,
            impact: 2,
            controlsAdequate: true,
            conclusion: RiskReviewConclusion::RiskAcceptedAsIs,
            notes: 'Sezonluk yoğunlukta düşük etkili benzer sapmalar öngörülebilir kabul ediliyor; oryantasyon eğitimi genel olarak etkili, bu tekil sapma kabul edilen risk sınırları içinde.',
            reviewDaysAgo: 194,
        );
    }

    private function makeRisk(
        string $title,
        string $description,
        string $department,
        string $category,
        string $hazardClass,
        int $probability,
        int $impact,
        RiskTreatmentStrategy $treatment,
        int $identifiedDaysAgo,
        ?string $acceptanceJustification = null,
    ): Risk {
        return $this->service->create([
            'title' => $title,
            'description' => $description,
            'department_id' => Department::where('code', $department)->value('id'),
            'risk_category_id' => RiskCategory::where('key', $category)->value('id'),
            'risk_hazard_class_id' => RiskHazardClass::where('key', $hazardClass)->value('id'),
            'risk_owner_id' => $this->pickUserId(),
            'identified_by_id' => $this->pickUserId(),
            'identified_date' => now()->subDays($identifiedDaysAgo),
            'initial_probability' => $probability,
            'initial_impact' => $impact,
            'treatment_strategy' => $treatment,
            'acceptance_justification' => $acceptanceJustification,
            'next_review_date' => now()->addDays(90),
        ], $this->admin);
    }

    private function makeControl(
        Risk $risk,
        string $description,
        int $dueDaysAgo,
        RiskControlStatus $status,
        ?int $completedDaysAgo = null,
        RiskControlEffectiveness $effectiveness = RiskControlEffectiveness::NotEvaluated,
    ) {
        return $this->service->addControl($risk, [
            'description' => $description,
            'responsible_id' => $this->pickUserId(),
            'due_date' => now()->subDays($dueDaysAgo),
            'status' => $status,
            'completed_at' => $completedDaysAgo !== null ? now()->subDays($completedDaysAgo) : null,
            'effectiveness_rating' => $effectiveness,
        ]);
    }

    private function addScheduledReview(
        Risk $risk,
        int $probability,
        int $impact,
        bool $controlsAdequate,
        RiskReviewConclusion $conclusion,
        string $notes,
        int $reviewDaysAgo,
    ) {
        return $this->service->addReview($risk, [
            'review_date' => now()->subDays($reviewDaysAgo)->toDateString(),
            'probability' => $probability,
            'impact' => $impact,
            'controls_adequate' => $controlsAdequate,
            'conclusion' => $conclusion,
            'notes' => $notes,
        ], $this->admin);
    }

    private function makeRealizedProblem(
        Risk $risk,
        string $title,
        string $description,
        string $severity,
        string $status,
        int $detectedDaysAgo,
        ?int $closedDaysAgo = null,
    ): Problem {
        $problem = Problem::create([
            'risk_id' => $risk->id,
            'title' => $title,
            'description' => $description,
            'source_type' => ProblemSourceType::RiskRealization,
            'severity' => $severity,
            'status' => $status,
            'detected_by_id' => $this->pickUserId(),
            'department_id' => $risk->department_id,
            'detected_date' => now()->subDays($detectedDaysAgo),
            'closed_at' => $closedDaysAgo !== null ? now()->subDays($closedDaysAgo) : null,
        ]);

        $this->service->registerRealization($risk, $problem);

        return $problem;
    }

    private function completeRealizationReview(
        Risk $risk,
        Problem $problem,
        int $probability,
        int $impact,
        bool $controlsAdequate,
        RiskReviewConclusion $conclusion,
        string $notes,
        int $reviewDaysAgo,
    ) {
        $review = $risk->reviews()->where('linked_problem_id', $problem->id)->firstOrFail();

        return $this->service->completeReview($review, [
            'review_date' => now()->subDays($reviewDaysAgo)->toDateString(),
            'probability' => $probability,
            'impact' => $impact,
            'controls_adequate' => $controlsAdequate,
            'conclusion' => $conclusion,
            'notes' => $notes,
        ], $this->admin);
    }

    private function pickUserId(): int
    {
        return $this->users->random()->id;
    }
}
