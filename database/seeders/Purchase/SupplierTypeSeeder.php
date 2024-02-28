<?php

namespace Database\Seeders\Purchase;

use App\Models\Purchase\SupplierType;
use Illuminate\Database\Seeder;

class SupplierTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        /*Measurement Device Seller*/
        $measurementDeviceSeller = new SupplierType([
            'code' => 'MDS',
            'name' => [
                'tr' => 'Ölçüm Cihazı Satıcısı',
                'en' => 'Measurement Device Seller',
            ],
            'description' => [
                'tr' => 'Ölçüm cihazı satıcısı, ölçüm cihazlarını satan firmaların türüdür.',
                'en' => 'Measurement device seller is the type of companies that sell measurement devices.',
            ]
        ]);
        $measurementDeviceSeller->save();

        /*Consumable Material for Production Seller*/
        $consumableMaterialForProductionSeller = new SupplierType([
            'code' => 'CMPS',
            'name' => [
                'tr' => 'Üretim İçin Sarf Malzemesi Satıcısı',
                'en' => 'Consumable Material for Production Seller',
            ],
            'description' => [
                'tr' => 'Üretim için sarf malzemesi satıcısı, üretim için gerekli olan sarf malzemelerini satan firmaların türüdür.',
                'en' => 'Consumable material for production seller is the type of companies that sell consumable materials needed for production.'
            ]
        ]);
        $consumableMaterialForProductionSeller->save();

        /*Work Uniform Seller*/
        $workUniformSeller = new SupplierType([
            'code' => 'WUS',
            'name' => [
                'tr' => 'İş Elbisesi Satıcısı',
                'en' => 'Work Uniform Seller',
            ],
            'description' => [
                'tr' => 'İş elbisesi satıcısı, iş elbiselerini satan firmaların türüdür.',
                'en' => 'Work uniform seller is the type of companies that sell work uniforms.'
            ]
        ]);
        $measurementDeviceSeller->save();

        /*Office Material Seller*/
        $officeMaterialSeller = new SupplierType([
            'code' => 'OMS',
            'name' => [
                'tr' => 'Ofis Malzemesi Satıcısı',
                'en' => 'Office Material Seller',
            ],
            'description' => [
                'tr' => 'Ofis malzemesi satıcısı, ofis malzemelerini satan firmaların türüdür.',
                'en' => 'Office material seller is the type of companies that sell office materials.'
            ]
        ]);
        $officeMaterialSeller->save();

        /*Maintenance Service Provider*/
        $maintenanceServiceProvider = new SupplierType([
            'code' => 'MSP',
            'name' => [
                'tr' => 'Bakım Hizmeti Sağlayıcısı',
                'en' => 'Maintenance Service Provider',
            ],
            'description' => [
                'tr' => 'Bakım hizmeti sağlayıcısı, bakım hizmeti veren firmaların türüdür.',
                'en' => 'Maintenance service provider is the type of companies that provide maintenance services.'
            ]
        ]);
        $maintenanceServiceProvider->save();

        /*Transportation Service Provider*/
        $transportationServiceProvider = new SupplierType([
            'code' => 'TSP',
            'name' => [
                'tr' => 'Taşıma Hizmeti Sağlayıcısı',
                'en' => 'Transportation Service Provider',
            ],
            'description' => [
                'tr' => 'Taşıma hizmeti sağlayıcısı, taşıma hizmeti veren firmaların türüdür.',
                'en' => 'Transportation service provider is the type of companies that provide transportation services.'
            ]
        ]);
        $transportationServiceProvider->save();

        /*IT Service Provider*/
        $itServiceProvider = new SupplierType([
            'code' => 'ITSP',
            'name' => [
                'tr' => 'Bilgi İşlem Hizmeti Sağlayıcısı',
                'en' => 'IT Service Provider',
            ],
            'description' => [
                'tr' => 'Bilgi işlem hizmeti sağlayıcısı, bilgi işlem hizmeti veren firmaların türüdür.',
                'en' => 'IT service provider is the type of companies that provide IT services.'
            ]
        ]);
        $itServiceProvider->save();

        /*Consultancy Service Provider*/
        $consultancyServiceProvider = new SupplierType([
            'code' => 'CSP',
            'name' => [
                'tr' => 'Danışmanlık Hizmeti Sağlayıcısı',
                'en' => 'Consultancy Service Provider',
            ],
            'description' => [
                'tr' => 'Danışmanlık hizmeti sağlayıcısı, danışmanlık hizmeti veren firmaların türüdür.',
                'en' => 'Consultancy service provider is the type of companies that provide consultancy services.'
            ]
        ]);
        $consultancyServiceProvider->save();
    }
}
