<?php

namespace Database\Seeders\Audit;

use App\Models\AuditChecklistTemplate;
use App\Models\AuditScope;
use Illuminate\Database\Seeder;

class AuditChecklistTemplateSeeder extends Seeder
{
    public function run(): void
    {
        $this->makeTemplate(
            name: 'ISO 9001 Proses Denetimi',
            scopeKey: 'process',
            description: 'Proses yaklaşımı, girdi/çıktı kontrolü ve performans göstergelerine odaklanan genel proses denetimi checklist\'i.',
            questions: [
                ['ISO 9001 md. 4.4', 'Proses akış şeması ve sorumlular güncel mi?', 'compliance_4'],
                ['ISO 9001 md. 9.1', 'Proses performans göstergeleri (KPI) takip ediliyor mu?', 'compliance_4'],
                ['ISO 9001 md. 8.5', 'Proses girdileri (hammadde/bilgi) kontrol altında mı?', 'compliance_4'],
                [null, 'Son 3 ayda prosese ait kaç uygunsuzluk kaydı açıldı?', 'numeric'],
                [null, 'Proses sorumlusunun genel değerlendirmesi', 'text'],
            ],
        );

        $this->makeTemplate(
            name: 'ISO 9001 Sistem Denetimi',
            scopeKey: 'system',
            description: 'Kalite yönetim sistemi dokümantasyonu, yönetimin gözden geçirmesi ve iç denetim programına ilişkin sistem denetimi checklist\'i.',
            questions: [
                ['ISO 9001 md. 5.1', 'Üst yönetim kalite politikasını ve hedeflerini aktif olarak destekliyor mu?', 'compliance_4'],
                ['ISO 9001 md. 9.3', 'Yönetimin gözden geçirmesi toplantıları planlandığı gibi yapılıyor mu?', 'compliance_4'],
                ['ISO 9001 md. 7.5', 'Dokümante bilgi (prosedür/talimat) güncel revizyonları yansıtıyor mu?', 'compliance_4'],
                ['ISO 9001 md. 9.2', 'İç denetim programı planlandığı gibi yürütülüyor mu?', 'compliance_4'],
                [null, 'Sistemle ilgili genel gözlemler', 'text'],
            ],
        );

        $this->makeTemplate(
            name: 'Tedarikçi Değerlendirme Checklist\'i',
            scopeKey: null,
            description: 'Tedarikçi denetimlerinde kalite sistemi, sevkiyat performansı ve kayıt tutma pratiklerini puanlamak için kullanılır.',
            questions: [
                [null, 'Kalite yönetim sistemi belgesi (ISO 9001 vb.) mevcut mu?', 'yes_no'],
                [null, 'Genel kalite sistemi olgunluğu (1-5)', 'rating_1_5'],
                [null, 'Zamanında sevkiyat performansı (1-5)', 'rating_1_5'],
                [null, 'Son 12 ayda kaç kalite reddi/iade yaşandı?', 'numeric'],
                [null, 'Kalite kayıtları (kalibrasyon, muayene vb.) düzenli tutuluyor mu?', 'compliance_4'],
                [null, 'Denetçi genel değerlendirmesi', 'text'],
            ],
        );

        $this->makeTemplate(
            name: '5S / Saha Denetimi',
            scopeKey: 'process',
            description: 'Üretim/depo sahasında hızlı 5S (Sınıflandır, Sırala, Sil Süpür, Standartlaştır, Sürdür) kontrolü için kısa checklist.',
            questions: [
                [null, 'Çalışma alanında gereksiz malzeme/ekipman var mı? (Sınıflandır)', 'yes_no'],
                [null, 'Malzemeler tanımlı yerlerinde mi? (Sırala)', 'yes_no'],
                [null, 'Alan temiz ve düzenli mi? (Sil Süpür)', 'yes_no'],
                [null, 'Görsel standartlar (etiket, çizgi, pano) uygulanmış mı? (Standartlaştır)', 'yes_no'],
                [null, 'Fotoğraf/kanıt ekleyin', 'file_evidence'],
            ],
        );

        $this->makeTemplate(
            name: 'Ölçüm Cihazı Kalibrasyon Kontrolü',
            scopeKey: 'device',
            description: 'Kritik ölçüm cihazlarının kalibrasyon durumunu ve kullanım koşullarını kontrol etmek için checklist.',
            questions: [
                [null, 'Cihaz üzerinde geçerli kalibrasyon etiketi var mı?', 'compliance_4'],
                [null, 'Kalibrasyon sertifikası dosyasında mevcut mu?', 'yes_no'],
                [null, 'Cihazın son kalibrasyon tarihinden bu yana geçen gün sayısı', 'numeric'],
                [null, 'Cihaz fiziksel olarak hasarsız ve temiz mi?', 'compliance_4'],
                [null, 'Cihaz fotoğrafı/etiket kanıtı', 'file_evidence'],
            ],
        );
    }

    /**
     * @param  array<int, array{0: ?string, 1: string, 2: string}>  $questions  [standard_reference, question, question_type]
     */
    private function makeTemplate(string $name, ?string $scopeKey, string $description, array $questions): void
    {
        $scope = $scopeKey ? AuditScope::where('key', $scopeKey)->first() : null;

        $template = AuditChecklistTemplate::updateOrCreate(
            ['name' => $name],
            [
                'audit_scope_id' => $scope?->id,
                'description' => $description,
                'is_active' => true,
            ]
        );

        if ($template->questions()->exists()) {
            return;
        }

        foreach ($questions as $sortOrder => [$standardReference, $question, $questionType]) {
            $template->questions()->create([
                'question' => $question,
                'question_type' => $questionType,
                'standard_reference' => $standardReference,
                'sort_order' => $sortOrder + 1,
            ]);
        }
    }
}
