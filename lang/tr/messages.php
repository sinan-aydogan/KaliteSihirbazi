<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Sistem bildirim mesajı metinleri
    |--------------------------------------------------------------------------
    */

    'department' => [
        'created' => ':department isimli departman oluşturuldu.',
        'deleted' => ':department isimli departman silindi.',
        'permanentDeleted' => ':department isimli departman kalıcı olarak silindi.',
        'restored' => ':department isimli departman geri getirildi.',
        'updated' => ':department isimli departman güncellendi.'
    ],
    'jobDescription' => [
        'created' => ':jobDescription isimli görev tanımı oluşturuldu.',
        'deleted' => ':jobDescription isimli görev tanımı silindi.',
        'permanentDeleted' => ':jobDescription isimli görev tanımı kalıcı olarak silindi.',
        'restored' => ':jobDescription isimli görev tanımı geri getirildi.',
        'updated' => ':jobDescription isimli görev tanımı güncellendi.'
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
        'deleted' => ':employee isimli personel silindi.',
        'permanentDeleted' => ':employee isimli personel kalıcı olarak silindi.',
        'restored' => ':employee isimli personel geri getirildi.',
        'updated' => ':employee isimli personelin bilgileri güncellendi.'
    ],
    'warehouse' => [
        'created' => ':warehouse isimli depo oluşturuldu.',
        'deleted' => ':warehouse isimli depo silindi.',
        'permanentDeleted' => ':warehouse isimli depo kalıcı olarak silindi.',
        'restored' => ':warehouse isimli depo geri getirildi.',
        'updated' => ':warehouse isimli depo güncellendi.'
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
        'updated' => 'Döküman modülü ayarları güncellendi.'
    ]
];
