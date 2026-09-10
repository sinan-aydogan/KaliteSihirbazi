<?php

namespace Database\Seeders\CustomerComplaint;

use App\Models\ComplaintSourceType;
use App\Models\ComplaintSubject;
use App\Models\ProblemSourceType;
use App\Models\Customer;
use App\Models\CustomerComplaint;
use App\Models\Department;
use App\Models\Problem;
use App\Models\User;
use App\Services\CustomerComplaint\CustomerComplaintWorkflowService;
use Illuminate\Database\Seeder;

class CustomerComplaintDemoSeeder extends Seeder
{
    private User $admin;

    private $users;

    private CustomerComplaintWorkflowService $service;

    public function run(): void
    {
        if (CustomerComplaint::exists()) {
            return;
        }

        $this->service = app(CustomerComplaintWorkflowService::class);
        $this->admin = User::where('email', 'yonetici@kalitesihirbazi.com.tr')->first() ?? User::factory()->create();
        $this->users = User::inRandomOrder()->limit(8)->get();
        if ($this->users->isEmpty()) {
            $this->users = collect([$this->admin]);
        }

        $akbulut = Customer::where('code', 'MST-001')->first();
        $deniz = Customer::where('code', 'MST-002')->first();
        $karel = Customer::where('code', 'MST-003')->first();
        $yildiz = Customer::where('code', 'MST-004')->first();
        $marmara = Customer::where('code', 'MST-005')->first();

        // 1) Yeni alındı, henüz ilk yanıt verilmedi
        $this->makeComplaint(
            customer: $karel,
            title: 'Sipariş edilen konektör setinde eksik parça',
            description: 'Son sevkiyatta 500 adetlik konektör setinin 12 kutusunda birer adet fiş eksik çıktı.',
            channel: 'email',
            severity: 'low',
            productReference: 'KNT-450 Konektör Seti',
            receivedDaysAgo: 2,
            subjectKey: 'delivery_logistics',
        );

        // 2) İlk yanıt verildi, kök neden araştırması (DÖF) açık, devam ediyor
        $complaint = $this->makeComplaint(
            customer: $yildiz,
            title: 'Enjeksiyon parçalarında yüzey çizikleri',
            description: 'Teslim alınan enjeksiyon parçalarının bir kısmında paketleme kaynaklı olduğu düşünülen yüzey çizikleri tespit edildi.',
            channel: 'portal',
            severity: 'medium',
            productReference: 'PLC-220 Gövde Parçası',
            receivedDaysAgo: 15,
        );
        $this->service->acknowledge($complaint);
        $this->raiseRootCauseProblem($complaint, 'Enjeksiyon gövde parçalarında paketleme kaynaklı çizik', 'medium', 'capa_raised', detectedDaysAgo: 13);

        // 3) Çözüldü, müşteriye bildirim ve kapanış bekliyor
        $complaint = $this->makeComplaint(
            customer: $deniz,
            title: 'Ambalaj kutularının nem nedeniyle deforme olması',
            description: 'Uzun deniz yolu sevkiyatı sonrası bir kısım ambalaj kutusunda nem kaynaklı deformasyon gözlendi.',
            channel: 'phone',
            severity: 'medium',
            productReference: 'AMB-100 Nakliye Kutusu',
            receivedDaysAgo: 30,
        );
        $this->service->acknowledge($complaint);
        $this->service->resolve($complaint, [
            'resolution_summary' => 'Nakliye kutusu iç yüzeyine nem bariyeri kaplama eklendi, kalan stoktaki kutular değiştirilerek yeniden gönderildi.',
        ]);

        // 4) Tam kapalı döngü — çözüldü, müşteriye bildirildi, yüksek memnuniyetle kapatıldı
        $complaint = $this->makeComplaint(
            customer: $akbulut,
            title: 'Teslimatta eksik irsaliye/sertifika belgesi',
            description: 'Sevkiyatla birlikte gelmesi gereken malzeme uygunluk sertifikası eksik gönderildi.',
            channel: 'email',
            severity: 'low',
            productReference: 'OTM-310 Fren Balata Seti',
            receivedDaysAgo: 60,
            subjectKey: 'delivery_logistics',
        );
        $this->service->acknowledge($complaint);
        $this->service->resolve($complaint, [
            'resolution_summary' => 'Eksik sertifika taranarak aynı gün müşteriye iletildi, sevkiyat sürecine belge kontrol adımı eklendi.',
        ]);
        $this->service->close($complaint, ['customer_satisfaction_rating' => 5]);

        // 5) Kapalı döngü, kök neden araştırması (DÖF) ile birlikte kapatıldı
        $complaint = $this->makeComplaint(
            customer: $marmara,
            title: 'Beyaz eşya kapı contalarında ölçü sapması',
            description: 'Teslim alınan kapı contalarının bir kısmının montaj toleransının dışında kaldığı, bazı ünitelerde sızdırmazlık sorununa yol açtığı bildirildi.',
            channel: 'in_person',
            severity: 'high',
            productReference: 'CNT-780 Kapı Contası',
            receivedDaysAgo: 90,
        );
        $this->service->acknowledge($complaint);
        $this->raiseRootCauseProblem($complaint, 'Kapı contası ekstrüzyon hattında ölçü sapması', 'high', 'closed', detectedDaysAgo: 88, closedDaysAgo: 70);
        $this->service->resolve($complaint, [
            'resolution_summary' => 'Ekstrüzyon kalıbı revize edildi, ölçüm sıklığı artırıldı; yeniden üretilen parti müşteriye gönderildi ve sahada kontrol edildi.',
        ]);
        $this->service->close($complaint, ['customer_satisfaction_rating' => 4]);

        // 6) Yeniden açılan şikayet — müşteri ilk çözümden memnun kalmadı (tekrar/kalıcı olmayan çözüm sinyali)
        $complaint = $this->makeComplaint(
            customer: $karel,
            title: 'PCB kartlarında lehim kaynaklı temassızlık',
            description: 'Teslim alınan PCB kartlarının bir kısmında ara ara temassızlık sorunu bildirildi.',
            channel: 'portal',
            severity: 'high',
            productReference: 'PCB-901 Kontrol Kartı',
            receivedDaysAgo: 120,
        );
        $this->service->acknowledge($complaint);
        $this->service->resolve($complaint, [
            'resolution_summary' => 'Lehim istasyonu sıcaklık profili kalibre edildi, etkilenen parti değiştirildi.',
        ]);
        $this->service->close($complaint, ['customer_satisfaction_rating' => 3]);
        $this->service->reopen($complaint, [
            'reopen_reason' => 'Değiştirilen partide de benzer temassızlık şikayeti tekrar bildirildi; ilk düzeltme kalıcı çözüm sağlamamış.',
        ]);
        $this->raiseRootCauseProblem($complaint, 'PCB lehim hattında tekrarlayan temassızlık', 'critical', 'capa_raised', detectedDaysAgo: 3);
    }

    private function makeComplaint(
        Customer $customer,
        string $title,
        string $description,
        string $channel,
        string $severity,
        string $productReference,
        int $receivedDaysAgo,
        string $subjectKey = 'product_quality',
    ): CustomerComplaint {
        $department = Department::inRandomOrder()->first();

        return $this->service->create([
            'complaint_source_type_id' => ComplaintSourceType::where('key', 'customer')->value('id'),
            'complaint_subject_id' => ComplaintSubject::where('key', $subjectKey)->value('id'),
            'customer_id' => $customer->id,
            'title' => $title,
            'description' => $description,
            'channel' => $channel,
            'product_reference' => $productReference,
            'severity' => $severity,
            'received_date' => now()->subDays($receivedDaysAgo)->toDateString(),
            'department_id' => $department?->id,
        ], $this->admin);
    }

    private function raiseRootCauseProblem(
        CustomerComplaint $complaint,
        string $title,
        string $severity,
        string $status,
        int $detectedDaysAgo,
        ?int $closedDaysAgo = null,
    ): Problem {
        $problem = Problem::create([
            'customer_complaint_id' => $complaint->id,
            'title' => $title,
            'description' => 'Şikayet '.$complaint->code.' için açılan kök neden araştırması.',
            'problem_source_type_id' => ProblemSourceType::where('key', 'customer_complaint')->value('id'),
            'severity' => $severity,
            'status' => $status,
            'detected_by_id' => $this->users->random()->id,
            'department_id' => $complaint->department_id,
            'detected_date' => now()->subDays($detectedDaysAgo),
            'closed_at' => $closedDaysAgo !== null ? now()->subDays($closedDaysAgo) : null,
        ]);

        $this->service->linkProblem($complaint, $problem);

        return $problem;
    }
}
