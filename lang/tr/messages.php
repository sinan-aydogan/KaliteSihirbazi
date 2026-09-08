<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Sistem bildirim mesajı metinleri
    |--------------------------------------------------------------------------
    */

    'department' => [
        'created' => ':department isimli departman oluşturuldu.',
        'creation_failed' => ':department isimli departman oluşturulamadı.',
        'deleted' => ':department isimli departman silindi.',
        'permanentDeleted' => ':department isimli departman kalıcı olarak silindi.',
        'restored' => ':department isimli departman geri getirildi.',
        'updated' => ':department isimli departman güncellendi.',
        'update_failed' => ':department isimli departman güncellenemedi.',
    ],
    'vehicle' => [
        'created' => ':vehicle plakalı araç oluşturuldu.',
        'deleted' => ':vehicle plakalı araç silindi.',
        'permanentDeleted' => ':vehicle plakalı araç kalıcı olarak silindi.',
        'restored' => ':vehicle plakalı araç geri getirildi.',
        'updated' => ':vehicle plakalı araç güncellendi.'
    ],
    'jobDescription' => [
        'created' => ':jobDescription isimli görev tanımı oluşturuldu.',
        'creation_failed' => ':jobDescription isimli görev tanımı oluşturulamadı.',
        'deleted' => ':jobDescription isimli görev tanımı silindi.',
        'permanentDeleted' => ':jobDescription isimli görev tanımı kalıcı olarak silindi.',
        'restored' => ':jobDescription isimli görev tanımı geri getirildi.',
        'updated' => ':jobDescription isimli görev tanımı güncellendi.',
        'update_failed' => ':jobDescription isimli görev tanımı güncellenemedi.',
    ],
    'jobDescriptionAssignment' => [
        'created' => ':employee personeli :jobDescription olarak atandı.',
        'deleted' => ':employee personeline ait :jobDescription ataması silindi.',
        'permanentDeleted' => ':employee personeline ait :jobDescription ataması kalıcı olarak silindi.',
        'restored' => ':employee personeline ait :jobDescription ataması geri getirildi.',
        'updated' => ':employee personeline ait :jobDescription ataması güncellendi.'
    ],
    'employee' => [
        'created' => ':employee isimli personel oluşturuldu.',
        'creation_failed' => ':employee isimli personel oluşturulamadı.',
        'deleted' => ':employee isimli personel silindi.',
        'permanentDeleted' => ':employee isimli personel kalıcı olarak silindi.',
        'restored' => ':employee isimli personel geri getirildi.',
        'updated' => ':employee isimli personelin bilgileri güncellendi.',
        'update_failed' => ':employee isimli personelin bilgileri güncellenemedi.',
    ],
    'warehouse' => [
        'created' => ':warehouse isimli depo oluşturuldu.',
        'creation_failed' => ':warehouse isimli depo oluşturulamadı.',
        'deleted' => ':warehouse isimli depo silindi.',
        'permanentDeleted' => ':warehouse isimli depo kalıcı olarak silindi.',
        'restored' => ':warehouse isimli depo geri getirildi.',
        'updated' => ':warehouse isimli depo güncellendi.',
        'update_failed' => ':warehouse isimli depo güncellenemedi.'
    ],
    'warehouseType' => [
        'created' => ':warehouseType isimli depo tipi oluşturuldu.',
        'deleted' => ':warehouseType isimli depo tipi silindi.',
        'permanentDeleted' => ':warehouseType isimli depo tipi kalıcı olarak silindi.',
        'restored' => ':warehouseType isimli depo tipi geri getirildi.',
        'updated' => ':warehouseType isimli depo tipi güncellendi.'
    ],
    'measurementDevice' => [
        'created' => ':measurementDeviceCode kodlu, :measurementDeviceType cihaz oluşturuldu.',
        'deleted' => ':measurementDeviceCode kodlu, :measurementDeviceType silindi.',
        'permanentDeleted' => ':measurementDeviceCode kodlu, :measurementDeviceType kalıcı olarak silindi.',
        'restored' => ':measurementDeviceCode kodlu, :measurementDeviceType geri getirildi.',
        'updated' => ':measurementDeviceCode kodlu, :measurementDeviceType güncellendi.'
    ],
    'measurementDeviceType' => [
        'created' => ':measurementDeviceType isimli cihaz tipi oluşturuldu.',
        'deleted' => ':measurementDeviceType isimli cihaz tipi silindi.',
        'permanentDeleted' => ':measurementDeviceType isimli cihaz tipi kalıcı olarak silindi.',
        'restored' => ':measurementDeviceType isimli cihaz tipi geri getirildi.',
        'updated' => ':measurementDeviceType isimli cihaz tipi güncellendi.'
    ],
    'measurementDeviceCalibration' => [
        'created' => '#:measurementDeviceCalibration kodlu kalibrasyon emri oluşturuldu.',
        'deleted' => '#:measurementDeviceCalibration kodlu kalibrasyon emri silindi.',
        'permanentDeleted' => '#:measurementDeviceCalibration kodlu kalibrasyon emri kalıcı olarak silindi.',
        'restored' => '#:measurementDeviceCalibration kodlu kalibrasyon emri geri getirildi.',
        'updated' => '#:measurementDeviceCalibration kodlu kalibrasyon emri güncellendi.'
    ],
    'document' => [
        'created' => ':document isimli döküman oluşturuldu.',
        'deleted' => ':document isimli döküman silindi.',
        'permanentDeleted' => ':document isimli döküman kalıcı olarak silindi.',
        'restored' => ':document isimli döküman geri getirildi.',
        'updated' => ':document isimli döküman güncellendi.',
        'cancelled' => ':document isimli döküman iptal edildi.'
    ],
    'documentType' => [
        'created' => ':documentType isimli döküman tipi oluşturuldu.',
        'deleted' => ':documentType isimli döküman tipi silindi.',
        'deletedError' => ':documentType isimli döküman tipi silinemedi. Bu döküman tipine ait dökümanlar bulunmaktadır.',
        'permanentDeleted' => ':documentType isimli döküman tipi kalıcı olarak silindi.',
        'restored' => ':documentType isimli döküman tipi geri getirildi.',
        'updated' => ':documentType isimli döküman tipi güncellendi.'
    ],
    'distributionPoint' => [
        'created' => ':distributionPoint isimli döküman dağıtım noktası oluşturuldu.',
        'deleted' => ':distributionPoint isimli döküman dağıtım noktası silindi.',
        'deletedError' => ':distributionPoint isimli döküman dağıtım noktası silinemedi. Bu döküman tipine ait dökümanlar bulunmaktadır.',
        'permanentDeleted' => ':distributionPoint isimli döküman dağıtım noktası kalıcı olarak silindi.',
        'restored' => ':distributionPoint isimli döküman dağıtım noktası geri getirildi.',
        'updated' => ':distributionPoint isimli döküman dağıtım noktası güncellendi.'
    ],
    'documentSettings' => [
        'updated' => 'Döküman modülü ayarları güncellendi.',
        'tagsUpdated' => 'Döküman modülünde gösterilecek etiket tipleri güncellendi.'
    ],
    'tagType' => [
        'created' => 'Etiket tipi oluşturuldu.',
        'updated' => 'Etiket tipi güncellendi.',
        'deleted' => 'Etiket tipi silindi.'
    ],
    'tag' => [
        'created' => 'Etiket oluşturuldu.',
        'deleted' => 'Etiket silindi.'
    ],
    'documentTypeAuthority' => [
        'grantedToUsers' => ':count kişiye yetki verildi.',
        'grantedToDepartment' => 'Departman üyelerinden :count kişiye yetki verildi.',
        'revoked' => 'Yetki kaldırıldı.'
    ],
    'documentVersion' => [
        'created' => 'Yeni döküman revizyonu yüklendi.',
        'submitted' => 'Döküman versiyonu incelemeye gönderildi.',
        'reviewed' => 'Döküman versiyonu incelendi.',
        'approved' => 'Döküman versiyonu onaylandı ve yayınlandı.',
        'rejected' => 'Döküman versiyonu reddedildi.',
        'acknowledged' => 'Döküman okundu olarak işaretlendi.'
    ],
    'documentRevisionRequest' => [
        'created' => 'Revizyon talebi oluşturuldu.',
        'accepted' => 'Revizyon talebi kabul edildi.',
        'rejected' => 'Revizyon talebi reddedildi.'
    ],
    'timeSettings' => [
        'updated' => 'Zaman ayarları güncellendi.'
    ],
    'educationSettings' => [
        'updated' => 'Eğitim modülü ayarları güncellendi.'
    ],
    'standard' => [
        'created' => ':standard isimli standart oluşturuldu.',
        'updated' => ':standard isimli standart güncellendi.',
        'deleted' => ':standard isimli standart silindi.',
        'deletedError' => ':standard isimli standart silinemez çünkü üzerinde kayıtlı akreditasyonlar var.'
    ],
    'companyAccreditation' => [
        'created' => 'Akreditasyon kaydı oluşturuldu.',
        'updated' => 'Akreditasyon kaydı güncellendi.',
        'deleted' => 'Akreditasyon kaydı silindi.'
    ],
    'capa' => [
        'created' => ':capa kodlu DÖF kaydı oluşturuldu.',
        'updated' => ':capa kodlu DÖF kaydı güncellendi.',
        'deleted' => ':capa kodlu DÖF kaydı silindi.',
        'deletedError' => ':capa kodlu DÖF kaydı silinemez çünkü üzerinde tanımlı aksiyonlar var.',
        'submittedForVerification' => 'DÖF doğrulamaya gönderildi.',
        'verified' => 'DÖF doğrulama kaydı oluşturuldu.',
        'reopened' => 'DÖF yeniden açıldı.'
    ],
    'capaAction' => [
        'created' => 'Aksiyon oluşturuldu.',
        'updated' => 'Aksiyon güncellendi.',
        'deleted' => 'Aksiyon silindi.',
        'started' => 'Aksiyon başlatıldı.',
        'completed' => 'Aksiyon tamamlandı.'
    ],
    'problem' => [
        'created' => ':problem kodlu uygunsuzluk kaydı oluşturuldu.',
        'updated' => ':problem kodlu uygunsuzluk kaydı güncellendi.',
        'deleted' => ':problem kodlu uygunsuzluk kaydı silindi.',
        'deletedError' => ':problem kodlu uygunsuzluk kaydı silinemez çünkü üzerinde açılmış DÖF kayıtları var.',
        'markedUnderReview' => 'Uygunsuzluk inceleme durumuna alındı.',
        'closedWithoutCapa' => 'Uygunsuzluk DÖF gerektirmeden kapatıldı.',
        'closed' => 'Uygunsuzluk kapatıldı.'
    ],
    'auditFirm' => [
        'created' => ':auditFirm isimli denetim firması oluşturuldu.',
        'updated' => ':auditFirm isimli denetim firması güncellendi.',
        'deleted' => ':auditFirm isimli denetim firması silindi.',
        'deletedError' => ':auditFirm isimli denetim firması silinemez çünkü üzerinde kayıtlı denetimler var.'
    ],
    'audit' => [
        'created' => ':audit kodlu denetim oluşturuldu.',
        'updated' => ':audit kodlu denetim güncellendi.',
        'deleted' => ':audit kodlu denetim silindi.',
        'deletedError' => ':audit kodlu denetim silinemez çünkü üzerinde kayıtlı uygunsuzluk bulguları var.',
        'started' => 'Denetim başlatıldı.',
        'completed' => 'Denetim tamamlandı.',
        'cancelled' => 'Denetim iptal edildi.'
    ],
    'auditType' => [
        'created' => 'Denetim türü oluşturuldu.',
        'updated' => 'Denetim türü güncellendi.',
        'deleted' => 'Denetim türü silindi.',
        'deletedError' => 'Bu denetim türü silinemez çünkü üzerinde kayıtlı denetimler var.',
        'deletedErrorProtected' => 'Sistem varsayılanı olan bu denetim türü silinemez.'
    ],
    'auditScope' => [
        'created' => 'Denetim kapsamı oluşturuldu.',
        'updated' => 'Denetim kapsamı güncellendi.',
        'deleted' => 'Denetim kapsamı silindi.',
        'deletedError' => 'Bu denetim kapsamı silinemez çünkü üzerinde kayıtlı denetimler var.',
        'deletedErrorProtected' => 'Sistem varsayılanı olan bu denetim kapsamı silinemez.'
    ],
    'internalAuditor' => [
        'created' => 'İç denetçi eklendi.',
        'updated' => 'İç denetçi güncellendi.',
        'deleted' => 'İç denetçi kaldırıldı.'
    ],
    'auditChecklistTemplate' => [
        'created' => 'Checklist şablonu oluşturuldu.',
        'updated' => 'Checklist şablonu güncellendi.',
        'deleted' => 'Checklist şablonu silindi.'
    ],
    'auditChecklistQuestion' => [
        'created' => 'Soru eklendi.',
        'updated' => 'Soru güncellendi.',
        'deleted' => 'Soru silindi.'
    ],
    'auditChecklist' => [
        'attached' => 'Checklist denetime eklendi.'
    ],
    'auditChecklistAnswer' => [
        'saved' => 'Cevap kaydedildi.'
    ],
    'auditSettings' => [
        'updated' => 'Denetim modülü ayarları güncellendi.'
    ],
    'auditFirmAuditor' => [
        'created' => 'Denetçi personel eklendi.',
        'updated' => 'Denetçi personel güncellendi.',
        'deleted' => 'Denetçi personel silindi.',
        'mediaDeleted' => 'Belge silindi.'
    ],
    'vehicleType' => [
        'created' => ':vehicleType isimli araç tipi oluşturuldu.',
        'deleted' => ':vehicleType isimli araç tipi silindi.',
        'permanentDeleted' => ':vehicleType isimli araç tipi kalıcı olarak silindi.',
        'restored' => ':vehicleType isimli araç tipi geri getirildi.',
        'updated' => ':vehicleType isimli araç tipi güncellendi.'
    ],
    'vehicleStatus' => [
        'created' => ':vehicleStatus isimli araç durumu oluşturuldu.',
        'deleted' => ':vehicleStatus isimli araç durumu silindi.',
        'permanentDeleted' => ':vehicleStatus isimli araç durumu kalıcı olarak silindi.',
        'restored' => ':vehicleStatus isimli araç durumu geri getirildi.',
        'updated' => ':vehicleStatus isimli araç durumu güncellendi.'
    ],
    'educationPlan' => [
        'created' => ':educationPlan isimli eğitim planı oluşturuldu.',
        'deleted' => ':educationPlan isimli eğitim planı silindi.',
        'permanentDeleted' => ':educationPlan isimli eğitim planı kalıcı olarak silindi.',
        'restored' => ':educationPlan isimli eğitim planı geri getirildi.',
        'updated' => ':educationPlan isimli eğitim planı güncellendi.'
    ],
    'educationType' => [
        'created' => ':educationType isimli eğitim türü oluşturuldu.',
        'deleted' => ':educationType isimli eğitim türü silindi.',
        'permanentDeleted' => ':educationType isimli eğitim türü kalıcı olarak silindi.',
        'restored' => ':educationType isimli eğitim türü geri getirildi.',
        'updated' => ':educationType isimli eğitim türü güncellendi.'
    ],
    'educationInstructor' => [
        'created' => ':educationInstructor isimli eğitmen oluşturuldu.',
        'deleted' => ':educationInstructor isimli eğitmen silindi.',
        'permanentDeleted' => ':educationInstructor isimli eğitmen kalıcı olarak silindi.',
        'restored' => ':educationInstructor isimli eğitmen geri getirildi.',
        'updated' => ':educationInstructor isimli eğitmen güncellendi.',
        'mediaDeleted' => 'Medya dosyası başarıyla silindi.'
    ],
    'education' => [
        'created' => ':education isimli eğitim oluşturuldu.',
        'deleted' => ':education isimli eğitim silindi.',
        'permanentDeleted' => ':education isimli eğitim kalıcı olarak silindi.',
        'restored' => ':education isimli eğitim geri getirildi.',
        'updated' => ':education isimli eğitim güncellendi.',
        'participantAdded' => 'Katılımcı eğitime başarıyla eklendi.',
        'participantUpdated' => 'Katılımcı bilgileri başarıyla güncellendi.',
        'participantRemoved' => 'Katılımcı eğitimden başarıyla çıkarıldı.',
        'mediaDeleted' => 'Medya dosyası başarıyla silindi.'
    ],
    'supplier' => [
        'created' => ':supplier isimli tedarikçi oluşturuldu.',
        'creation_failed' => ':supplier isimli tedarikçi oluşturulamadı.',
        'deleted' => ':supplier isimli tedarikçi silindi.',
        'delete_failed' => ':supplier isimli tedarikçi silinemedi.',
        'permanentDeleted' => ':supplier isimli tedarikçi kalıcı olarak silindi.',
        'restored' => ':supplier isimli tedarikçi geri getirildi.',
        'updated' => ':supplier isimli tedarikçi güncellendi.',
        'update_failed' => ':supplier isimli tedarikçi güncellenemedi.',
    ],
    'risk' => [
        'created' => ':risk kodlu risk oluşturuldu.',
        'updated' => ':risk kodlu risk güncellendi.',
        'deleted' => ':risk kodlu risk silindi.',
        'deletedError' => ':risk kodlu risk silinemez çünkü üzerinde kayıtlı uygunsuzluk kayıtları var.',
        'closed' => ':risk kodlu risk kapatıldı.'
    ],
    'riskCategory' => [
        'created' => 'Risk kategorisi oluşturuldu.',
        'updated' => 'Risk kategorisi güncellendi.',
        'deleted' => 'Risk kategorisi silindi.',
        'deletedError' => 'Bu risk kategorisi silinemez çünkü üzerinde kayıtlı riskler var.',
        'deletedErrorProtected' => 'Sistem varsayılanı olan bu risk kategorisi silinemez.'
    ],
    'riskHazardClass' => [
        'created' => 'Tehlike sınıfı oluşturuldu.',
        'updated' => 'Tehlike sınıfı güncellendi.',
        'deleted' => 'Tehlike sınıfı silindi.',
        'deletedError' => 'Bu tehlike sınıfı silinemez çünkü üzerinde kayıtlı riskler var.',
        'deletedErrorProtected' => 'Sistem varsayılanı olan bu tehlike sınıfı silinemez.'
    ],
    'riskControl' => [
        'created' => 'Önlem eklendi.',
        'updated' => 'Önlem güncellendi.',
        'deleted' => 'Önlem silindi.'
    ],
    'riskReview' => [
        'created' => 'Gözden geçirme kaydedildi.',
        'completed' => 'Gözden geçirme tamamlandı.'
    ],
    'riskSettings' => [
        'updated' => 'Risk modülü ayarları güncellendi.'
    ],
    'customer' => [
        'created' => 'Müşteri oluşturuldu.',
        'updated' => 'Müşteri güncellendi.',
        'deleted' => 'Müşteri silindi.',
        'deletedError' => 'Bu müşteri silinemez çünkü üzerinde kayıtlı şikayetler var.',
    ],
    'customerComplaint' => [
        'created' => ':complaint kodlu şikayet kaydedildi.',
        'updated' => ':complaint kodlu şikayet güncellendi.',
        'deleted' => ':complaint kodlu şikayet silindi.',
        'deletedError' => ':complaint kodlu şikayet silinemez çünkü üzerinde kök neden araştırması/DÖF kayıtları var.',
        'acknowledged' => ':complaint kodlu şikayet için ilk yanıt kaydedildi, inceleme başladı.',
        'resolved' => ':complaint kodlu şikayet çözüldü olarak işaretlendi.',
        'closed' => ':complaint kodlu şikayet müşteriye bildirilerek kapatıldı.',
        'reopened' => ':complaint kodlu şikayet yeniden açıldı.',
    ],
    'customerComplaintSettings' => [
        'updated' => 'Müşteri Şikayetleri modülü ayarları güncellendi.'
    ],
    'problemSourceType' => [
        'created' => 'Kaynak türü oluşturuldu.',
        'updated' => 'Kaynak türü güncellendi.',
        'deleted' => 'Kaynak türü silindi.',
        'deletedError' => 'Bu kaynak türü silinemez çünkü üzerinde kayıtlı uygunsuzluklar var.',
        'deletedErrorProtected' => 'Sistem varsayılanı olan bu kaynak türü silinemez.'
    ],
    'capaSourceType' => [
        'created' => 'Kaynak türü oluşturuldu.',
        'updated' => 'Kaynak türü güncellendi.',
        'deleted' => 'Kaynak türü silindi.',
        'deletedError' => 'Bu kaynak türü silinemez çünkü üzerinde kayıtlı DÖF kayıtları var.',
        'deletedErrorProtected' => 'Sistem varsayılanı olan bu kaynak türü silinemez.'
    ],
];
