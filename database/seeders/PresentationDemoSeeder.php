<?php

namespace Database\Seeders;

use App\Enums\AuditResult;
use App\Enums\AuditStatus;
use App\Enums\Document\DocumentVersionStatus;
use App\Models\Area;
use App\Models\Audit;
use App\Models\AuditFirm;
use App\Models\AuditType;
use App\Models\Department;
use App\Models\Device;
use App\Models\DeviceType;
use App\Models\Document\Document;
use App\Models\Document\DocumentType;
use App\Models\HumanResources\Employee\Employee;
use App\Models\InternalAuditor;
use App\Models\Machine;
use App\Models\MachineType;
use App\Models\MeasurementDevice\MeasurementDevice;
use App\Models\MeasurementDevice\MeasurementDeviceType;
use App\Models\Standard;
use App\Models\User;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

/**
 * Fills presentation/screenshot gaps left after the functional seeders:
 * Document, Audit, Device/Machine and a few more Employees/Areas/
 * MeasurementDevices, plus a couple of extra roles so Settings > Roller/
 * Kullanıcılar isn't a two-row screen. Idempotent-ish via firstOrCreate
 * on natural keys where practical; safe to re-run.
 */
class PresentationDemoSeeder extends Seeder
{
    public function run(): void
    {
        $departments = Department::pluck('id', 'name');
        $admin = User::where('email', 'yonetici@kalitesihirbazi.com.tr')->first();

        $employees = collect([
            ['name' => 'Ayşe Kaya', 'department' => 'Kalite'],
            ['name' => 'Mehmet Demir', 'department' => 'Üretim'],
            ['name' => 'Elif Şahin', 'department' => 'Kalite'],
            ['name' => 'Can Öztürk', 'department' => 'Bakım'],
            ['name' => 'Zeynep Arslan', 'department' => 'Satış & Pazarlama'],
            ['name' => 'Burak Yıldız', 'department' => 'Satın Alma'],
            ['name' => 'Selin Aydın', 'department' => 'Sevkiyat'],
            ['name' => 'Emre Koç', 'department' => 'Üretim'],
        ])->map(function ($row) use ($departments) {
            return Employee::firstOrCreate(
                ['name' => $row['name']],
                [
                    'has_account' => false,
                    'code' => strtoupper(fake()->unique()->bothify('EMP-####')),
                    'department_id' => $departments[$row['department']] ?? null,
                    'birthday' => fake()->dateTimeBetween('-55 years', '-22 years'),
                    'employment_date' => fake()->dateTimeBetween('-6 years', '-3 months'),
                    'blood_type' => fake()->randomElement(['A+', 'A-', 'B+', '0+', 'AB+']),
                    'status' => 'working',
                ]
            );
        });

        // Documents
        $documentType = DocumentType::pluck('id', 'name');
        $documentsSeed = [
            ['code' => 'PR-QA-01', 'name' => 'Doküman Kontrol Prosedürü', 'type' => 'Procedure', 'dept' => 'Kalite'],
            ['code' => 'PR-QA-02', 'name' => 'Uygunsuz Ürün Kontrol Prosedürü', 'type' => 'Procedure', 'dept' => 'Kalite'],
            ['code' => 'FRM-UR-05', 'name' => 'Hat Kontrol Formu', 'type' => 'Form', 'dept' => 'Üretim'],
            ['code' => 'FRM-KL-11', 'name' => 'İç Denetim Kontrol Formu', 'type' => 'Form', 'dept' => 'Kalite'],
            ['code' => 'QP-2026', 'name' => '2026 Yılı Kalite Planı', 'type' => 'Quality Plan', 'dept' => 'Kalite'],
            ['code' => 'WM-BK-02', 'name' => 'Kalibrasyon Cihazı Kullanım Talimatı', 'type' => 'Working Manual', 'dept' => 'Bakım'],
        ];

        foreach ($documentsSeed as $row) {
            $document = Document::firstOrCreate(
                ['code' => $row['code']],
                [
                    'name' => $row['name'],
                    'document_type_id' => $documentType[$row['type']] ?? null,
                    'department_id' => $departments[$row['dept']] ?? null,
                    'creator_id' => $admin->id,
                    'publishing_status' => 'published',
                ]
            );

            if ($document->versions()->doesntExist()) {
                $document->versions()->create([
                    'revised_by' => $admin->id,
                    'approved_by' => $admin->id,
                    'version' => 1,
                    'revision_reason' => 'İlk yayın',
                    'status' => DocumentVersionStatus::Approved,
                    'published_at' => now()->subMonths(rand(1, 8)),
                ]);
            }
        }

        // Areas
        collect(['Hat 1 - Karıştırma', 'Hat 2 - Paketleme', 'Depo Sahası'])->each(function ($name) use ($departments) {
            Area::firstOrCreate(['name' => $name], [
                'department_id' => $departments['Üretim'] ?? null,
                'is_active' => true,
            ]);
        });
        $areas = Area::pluck('id', 'name');

        // Device / Machine types
        $sensorType = DeviceType::firstOrCreate(['name' => 'Sensör']);
        $panelType = DeviceType::firstOrCreate(['name' => 'Kontrol Paneli']);
        $mixerType = MachineType::firstOrCreate(['name' => 'Karıştırıcı']);
        $packagerType = MachineType::firstOrCreate(['name' => 'Paketleme Makinesi']);

        $devicesSeed = [
            ['code' => 'DEV-101', 'name' => 'Nem Sensörü', 'type' => $sensorType->id, 'area' => 'Hat 1 - Karıştırma'],
            ['code' => 'DEV-102', 'name' => 'Sıcaklık Sensörü', 'type' => $sensorType->id, 'area' => 'Hat 1 - Karıştırma'],
            ['code' => 'DEV-103', 'name' => 'Hat Kontrol Paneli', 'type' => $panelType->id, 'area' => 'Hat 2 - Paketleme'],
        ];
        foreach ($devicesSeed as $row) {
            $device = Device::firstOrCreate(['code' => $row['code']], [
                'name' => $row['name'],
                'device_type_id' => $row['type'],
                'department_id' => $departments['Üretim'] ?? null,
                'is_active' => true,
            ]);
            if (isset($areas[$row['area']])) {
                $device->areas()->syncWithoutDetaching([$areas[$row['area']]]);
            }
        }

        $machinesSeed = [
            ['code' => 'MAC-201', 'name' => 'Ana Karıştırıcı', 'type' => $mixerType->id, 'area' => 'Hat 1 - Karıştırma'],
            ['code' => 'MAC-202', 'name' => 'Paketleme Hattı A', 'type' => $packagerType->id, 'area' => 'Hat 2 - Paketleme'],
        ];
        foreach ($machinesSeed as $row) {
            $machine = Machine::firstOrCreate(['code' => $row['code']], [
                'name' => $row['name'],
                'machine_type_id' => $row['type'],
                'department_id' => $departments['Üretim'] ?? null,
                'is_active' => true,
            ]);
            if (isset($areas[$row['area']])) {
                $machine->areas()->syncWithoutDetaching([$areas[$row['area']]]);
            }
            $operator = $employees->first();
            if ($operator && $machine->operatorAuthorizations()->doesntExist()) {
                $machine->operatorAuthorizations()->create([
                    'employee_id' => $operator->id,
                    'granted_at' => now()->subMonths(2)->toDateString(),
                    'granted_by_id' => $admin->id,
                ]);
            }
        }

        // Extra Measurement Devices
        $mdType = MeasurementDeviceType::pluck('id', 'name');
        collect([
            ['code' => 'MD-021', 'brand' => 'Mettler Toledo', 'model' => 'PB3002', 'type' => 'Hassas Terazi'],
            ['code' => 'MD-022', 'brand' => 'Memmert', 'model' => 'UF55', 'type' => 'Etüv'],
        ])->each(function ($row) use ($mdType, $departments) {
            MeasurementDevice::firstOrCreate(['code' => $row['code']], [
                'brand' => $row['brand'],
                'model' => $row['model'],
                'measurement_device_type_id' => $mdType[$row['type']] ?? null,
                'department_id' => $departments['Kalite'] ?? null,
                'status' => MeasurementDevice::STATUS_ACTIVE,
            ]);
        });

        // Audits
        $auditType = AuditType::pluck('id', 'name');
        $firm = AuditFirm::first();
        $auditor = InternalAuditor::firstOrCreate(['user_id' => $admin->id], ['is_active' => true]);
        $standard = Standard::first();

        Audit::firstOrCreate(['title' => '2026 Q1 İç Denetim - Üretim'], [
            'audit_type_id' => $auditType['İç Denetim'] ?? null,
            'standard_id' => $standard?->id,
            'auditor_id' => $auditor->id,
            'department_id' => $departments['Üretim'] ?? null,
            'scope' => 'Üretim hattı ISO 9001 uygunluk denetimi',
            'planned_date' => now()->subMonths(2),
            'actual_date' => now()->subMonths(2)->addDays(1),
            'status' => AuditStatus::Completed,
            'result' => AuditResult::PassedWithFindings,
            'closed_at' => now()->subMonths(2)->addDays(3),
        ]);

        Audit::firstOrCreate(['title' => 'Yıllık Belgelendirme Denetimi 2026'], [
            'audit_type_id' => $auditType['Belgelendirme Denetimi'] ?? null,
            'standard_id' => $standard?->id,
            'audit_firm_id' => $firm?->id,
            'department_id' => $departments['Kalite'] ?? null,
            'scope' => 'ISO 9001:2015 gözetim denetimi',
            'planned_date' => now()->addMonth(),
            'status' => AuditStatus::Planned,
        ]);

        Audit::firstOrCreate(['title' => 'Tedarikçi Denetimi - Ana Hammadde'], [
            'audit_type_id' => $auditType['Tedarikçi Denetimi'] ?? null,
            'auditor_id' => $auditor->id,
            'department_id' => $departments['Satın Alma'] ?? null,
            'scope' => 'Kritik hammadde tedarikçisi saha denetimi',
            'planned_date' => now()->subWeek(),
            'actual_date' => now()->subWeek(),
            'status' => AuditStatus::InProgress,
        ]);

        // A couple more roles so Settings > Roller/Kullanıcılar has real variety
        $qualityManagerRole = Role::findOrCreate('Kalite Yöneticisi');
        $qualityManagerRole->syncPermissions([
            'problem.view', 'problem.create', 'problem.update',
            'capa.view', 'capa.create', 'capa.update',
            'audit.view', 'audit.create', 'audit.update',
            'risk.view', 'risk.create', 'risk.update',
            'document.view', 'document.create', 'document.update',
            'education.view', 'education.create', 'education.update',
        ]);

        $auditorRole = Role::findOrCreate('Denetçi');
        $auditorRole->syncPermissions([
            'audit.view', 'audit.create', 'audit.update',
            'audit-checklist-template.view',
            'internal-auditor.view',
        ]);

        $accountedUsers = User::whereHas('accountable')->orWhere('email', $admin->email)->pluck('id');
        User::whereNotIn('id', $accountedUsers)->inRandomOrder()->take(3)->get()->each(function (User $user, int $i) use ($qualityManagerRole, $auditorRole) {
            $user->assignRole($i === 0 ? $auditorRole : $qualityManagerRole);
        });
    }
}
