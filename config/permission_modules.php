<?php

// Canonical list of permission modules. Each key becomes 4 Spatie permissions
// ({key}.view / .create / .update / .delete), seeded by PermissionSeeder and
// checked by the `module.permission` route middleware (see routes/web.php).
// Adding a new module to the app = add one line here, then re-run the seeder.
return [
    // Business Management
    'department' => 'Departmanlar',
    'area' => 'Alanlar',
    'warehouse' => 'Depolar',
    'warehouse-type' => 'Depo Tipleri',
    'vehicle' => 'Araçlar',
    'vehicle-type' => 'Araç Tipleri',
    'vehicle-status' => 'Araç Durumları',
    'device' => 'Cihazlar',
    'machine' => 'Makineler',
    'customer' => 'Müşteriler',
    'supplier' => 'Tedarikçiler',
    'distributor' => 'Dağıtıcılar',
    'audit-firm' => 'Denetim Firmaları',

    // Human Resources
    'employee' => 'Çalışanlar',
    'job-description' => 'Görev Tanımları',
    'job-description-assignment' => 'Görev Tanımı Atamaları',
    'take-time-off' => 'İzin Yönetimi',
    'education' => 'Eğitimler',
    'education-plan' => 'Eğitim Planları',
    'education-type' => 'Eğitim Türleri',
    'education-instructor' => 'Eğitim Eğitmenleri',

    // Documentation
    'document' => 'Dokümanlar',
    'document-type' => 'Doküman Tipleri',
    'document-revision-request' => 'Revizyon Talepleri',
    'distribution-point' => 'Dağıtım Noktaları',
    'document-action' => 'Doküman Aksiyonları',

    // Measurement Devices / Calibration
    'measurement-device' => 'Ölçüm Cihazları',
    'measurement-device-type' => 'Ölçüm Cihazı Tipleri',
    'measurement-device-calibration' => 'Kalibrasyon Emirleri',
    'calibration-firm' => 'Kalibrasyon Firmaları',
    'calibration-technician' => 'Kalibrasyon Teknisyenleri',
    'measurement-device-action' => 'Cihaz Aksiyonları',
    'measurement-device-action-type' => 'Cihaz Aksiyon Tipleri',

    // Certification
    'standard' => 'Standartlar',
    'audit' => 'Denetimler',
    'audit-type' => 'Denetim Tipleri',
    'audit-scope' => 'Denetim Kapsamları',
    'internal-auditor' => 'İç Denetçiler',
    'audit-checklist-template' => 'Denetim Kontrol Listesi Şablonları',
    'certificate' => 'Sertifikalar',

    // Risk Management
    'risk' => 'Riskler',
    'risk-category' => 'Risk Kategorileri',
    'risk-hazard-class' => 'Risk Tehlike Sınıfları',

    // Customer Complaints
    'customer-complaint' => 'Müşteri Şikayetleri',
    'customer-complaint-analytics' => 'Şikayet Analizi',
    'complaint-source-type' => 'Şikayet Kaynak Türleri',
    'complaint-subject' => 'Şikayet Konuları',

    // CAPA System
    'problem' => 'Uygunsuzluklar',
    'problem-source-type' => 'Uygunsuzluk Kaynak Türleri',
    'capa' => 'DÖF Kayıtları',
    'capa-source-type' => 'DÖF Kaynak Türleri',

    // Production Management
    'product' => 'Ürünler',
    'product-tree' => 'Ürün Ağaçları',
    'raw-material' => 'Hammaddeler',
    'consumable-material' => 'Sarf Malzemeler',

    // Continuous Improvement
    'continuous-improvement' => 'Sürekli İyileştirme Panosu',
    'kaizen-suggestion' => 'Kaizen Önerileri',
    'kaizen-category' => 'Kaizen Kategorileri',
    'five-s-audit' => '5S Denetimleri',
    'gemba-walk' => 'Gemba Yürüyüşleri',

    // System / Settings
    'module' => 'Modül Lisans Yönetimi',
    'tag-type' => 'Etiket Yönetimi',
    'role' => 'Roller',
    'user' => 'Kullanıcılar',
];
