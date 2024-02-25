<?php

namespace Database\Seeders;

use App\Models\Hr\JobDescription;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class JobDescriptionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        /*General Manager*/
        $generalManager = new JobDescription([
            'code' => 'GN-JD-MAN',
            'name' => [
                'en' => 'General Manager',
                'tr' => 'Genel Müdür',
            ],
            'collar_type' => 'white_collar',
            'purpose_and_scope' => [
                'en' => 'The General Manager is responsible for the overall operation of the company.',
                'tr' => 'Genel Müdür, şirketin genel işleyişinden sorumludur.',
            ],
            'powers' => [
                'en' => 'The General Manager has the authority to stop production if the quality of the product is not up to the standard.',
                'tr' => 'Genel Müdür, ürünün kalitesi standartlara uygun değilse üretimi durdurma yetkisine sahiptir.',
            ],
            'responsibilities' => [
                'en' => 'The General Manager is responsible for the overall operation of the company.',
                'tr' => 'Genel Müdür, şirketin genel işleyişinden sorumludur.',
            ],
            'qualifications' => [
                'en' => 'The General Manager must have a bachelor’s degree in business administration or a related field.',
                'tr' => 'Genel Müdür\'ün işletme yönetimi veya ilgili bir alanda lisans derecesine sahip olması gerekir.'
            ],
            'skills' => [
                'en' => 'The General Manager must have excellent communication skills.',
                'tr' => 'Genel Müdür\'ün mükemmel iletişim becerilerine sahip olması gerekir.'
            ],
            'physical_demands' => [
                'en' => 'The General Manager must be able to sit for long periods of time.',
                'tr' => 'Genel Müdür, uzun süre oturabilmelidir.'
            ],
            'work_environment' => [
                'en' => 'The General Manager works in an office',
                'tr' => 'Genel Müdür, bir ofis ortamında çalışır.'
            ],
            'work_equipments' => [
                'en' => 'The General Manager uses a computer and a phone.',
                'tr' => 'Genel Müdür, bir bilgisayar ve telefon kullanır.'
            ],
            'status' => 1,
        ]);
        $generalManager->save();

        /*Quality Manager*/
        $qualityManager = new JobDescription([
            'code' => 'QC-JD-MAN',
            'name' => [
                'en' => 'Quality Manager',
                'tr' => 'Kalite Yöneticisi',
            ],
            'collar_type' => 'white_collar',
            'purpose_and_scope' => [
                'en' => 'The Quality Manager is responsible for the development, implementation, and maintenance of the organization’s quality management system.',
                'tr' => 'Kalite Yöneticisi, organizasyonun kalite yönetim sisteminin geliştirilmesi, uygulanması ve sürdürülmesinden sorumludur.',
            ],
            'powers' => [
                'en' => 'The Quality Manager has the authority to stop production if the quality of the product is not up to the standard.',
                'tr' => 'Kalite Yöneticisi, ürünün kalitesi standartlara uygun değilse üretimi durdurma yetkisine sahiptir.',
            ],
            'responsibilities' => [
                'en' => 'The Quality Manager is responsible for the development, implementation, and maintenance of the organization’s quality management system.',
                'tr' => 'Kalite Yöneticisi, organizasyonun kalite yönetim sisteminin geliştirilmesi, uygulanması ve sürdürülmesinden sorumludur.',
            ],
            'qualifications' => [
                'en' => 'The Quality Manager must have a bachelor’s degree in engineering or a related field.',
                'tr' => 'Kalite Yöneticisi\'nin mühendislik veya ilgili bir alanda lisans derecesine sahip olması gerekir.'
            ],
            'skills' => [
                'en' => 'The Quality Manager must have excellent communication skills.',
                'tr' => 'Kalite Yönetsicisi\'nin mükemmel iletişim becerilerine sahip olması gerekir.'
            ],
            'physical_demands' => [
                'en' => 'The Quality Manager must be able to sit for long periods of time.',
                'tr' => 'Kalite Yöneticisi, uzun süre oturabilmelidir.'
            ],
            'work_environment' => [
                'en' => 'The Quality Manager works in an office environment.',
                'tr' => 'Kalite Yöneticisi, bir ofis ortamında çalışır.'
            ],
            'work_equipments' => [
                'en' => 'The Quality Manager uses a computer and a phone.',
                'tr' => 'Kalite Yöneticisi, bir bilgisayar ve telefon kullanır.'
            ],
            'status' => 1,
        ]);
        $qualityManager->save();

        /*Production Manager*/
        $productionManager = new JobDescription([
            'code' => 'PR-JD-MAN',
            'name' => [
                'en' => 'Production Manager',
                'tr' => 'Üretim Müdürü',
            ],
            'collar_type' => 'white_collar',
            'purpose_and_scope' => [
                'en' => 'The Production Manager is responsible for the planning, coordination, and control of manufacturing processes.',
                'tr' => 'Üretim Müdürü, üretim süreçlerinin planlanması, koordinasyonu ve kontrolünden sorumludur.',
            ],
            'powers' => [
                'en' => 'The Production Manager has the authority to stop production if the quality of the product is not up to the standard.',
                'tr' => 'Üretim Müdürü, ürünün kalitesi standartlara uygun değilse üretimi durdurma yetkisine sahiptir.',
            ],
            'responsibilities' => [
                'en' => 'The Production Manager is responsible for the planning, coordination, and control of manufacturing processes.',
                'tr' => 'Üretim Müdürü, üretim süreçlerinin planlanması, koordinasyonu ve kontrolünden sorumludur.',
            ],
            'qualifications' => [
                'en' => 'The Production Manager must have a bachelor’s degree in engineering or a related field.',
                'tr' => 'Üretim Müdürü\'nün mühendislik veya ilgili bir alanda lisans derecesine sahip olması gerekir.'
            ],
            'skills' => [
                'en' => 'The Production Manager must have excellent communication skills.',
                'tr' => 'Üretim Müdürü\'nün mükemmel iletişim becerilerine sahip olması gerekir.'
            ],
            'physical_demands' => [
                'en' => 'The Production Manager must be able to sit for long periods of time.',
                'tr' => 'Üretim Müdürü, uzun süre oturabilmelidir.'
            ],
            'work_environment' => [
                'en' => 'The Production Manager works in an office environment.',
                'tr' => 'Üretim Müdürü, bir ofis ortamında çalışır.'
            ],
            'work_equipments' => [
                'en' => 'The Production Manager uses a computer and a phone.',
                'tr' => 'Üretim Müdürü, bir bilgisayar ve telefon kullanır.'
            ],
            'status' => 1,
        ]);
        $productionManager->save();

        /*Production Worker*/
        $productionWorker = new JobDescription([
            'code' => 'PR-JD-WRK',
            'name' => [
                'en' => 'Production Worker',
                'tr' => 'Üretim İşçisi',
            ],
            'collar_type' => 'blue_collar',
            'purpose_and_scope' => [
                'en' => 'The Production Worker is responsible for the manufacturing of products.',
                'tr' => 'Üretim İşçisi, ürünlerin üretiminden sorumludur.',
            ],
            'powers' => [
                'en' => 'The Production Worker has the authority to stop production if the quality of the product is not up to the standard.',
                'tr' => 'Üretim İşçisi, ürünün kalitesi standartlara uygun değilse üretimi durdurma yetkisine sahiptir.',
            ],
            'responsibilities' => [
                'en' => 'The Production Worker is responsible for the manufacturing of products.',
                'tr' => 'Üretim İşçisi, ürünlerin üretiminden sorumludur.',
            ],
            'qualifications' => [
                'en' => 'The Production Worker must have a high school diploma.',
                'tr' => 'Üretim İşçisi\'nin lise diplomasına sahip olması gerekir.'
            ],
            'skills' => [
                'en' => 'The Production Worker must have excellent communication skills.',
                'tr' => 'Üretim İşçisi\'nin mükemmel iletişim becerilerine sahip olması gerekir.'
            ],
            'physical_demands' => [
                'en' => 'The Production Worker must be able to stand for long periods of time.',
                'tr' => 'Üretim İşçisi, uzun süre ayakta durabilmelidir.'
            ],
            'work_environment' => [
                'en' => 'The Production Worker works in a factory environment.',
                'tr' => 'Üretim İşçisi, bir fabrika ortamında çalışır.'
            ],
            'work_equipments' => [
                'en' => 'The Production Worker uses a machine and a phone.',
                'tr' => 'Üretim İşçisi, bir makine ve telefon kullanır.'
            ],
            'status' => 1,
        ]);
        $productionWorker->save();

        /*Quality Inspector*/
        $qualityInspector = new JobDescription([
            'code' => 'QC-JD-INS',
            'name' => [
                'en' => 'Quality Inspector',
                'tr' => 'Kalite Kontrolcü',
            ],
            'collar_type' => 'blue_collar',
            'purpose_and_scope' => [
                'en' => 'The Quality Inspector is responsible for the inspection of products.',
                'tr' => 'Kalite Kontrolcü, ürünlerin kontrolünden sorumludur.',
            ],
            'powers' => [
                'en' => 'The Quality Inspector has the authority to stop production if the quality of the product is not up to the standard.',
                'tr' => 'Kalite Kontrolcü, ürünün kalitesi standartlara uygun değilse üretimi durdurma yetkisine sahiptir.',
            ],
            'responsibilities' => [
                'en' => 'The Quality Inspector is responsible for the inspection of products.',
                'tr' => 'Kalite Kontrolcü, ürünlerin kontrolünden sorumludur.',
            ],
            'qualifications' => [
                'en' => 'The Quality Inspector must have a high school diploma.',
                'tr' => 'Kalite Kontrolcü\'nün lise diplomasına sahip olması gerekir.'
            ],
            'skills' => [
                'en' => 'The Quality Inspector must have excellent communication skills.',
                'tr' => 'Kalite Kontrolcü\'nün mükemmel iletişim becerilerine sahip olması gerekir.'
            ],
            'physical_demands' => [
                'en' => 'The Quality Inspector must be able to stand for long periods of time.',
                'tr' => 'Kalite Kontrolcü, uzun süre ayakta durabilmelidir.'
            ],
            'work_environment' => [
                'en' => 'The Quality Inspector works in a factory environment.',
                'tr' => 'Kalite Kontrolcü, bir fabrika ortamında çalışır.'
            ],
            'work_equipments' => [
                'en' => 'The Quality Inspector uses a measuring equipment and a phone.',
                'tr' => 'Kalite Kontrolcü bir ölçüm ekipmanı ve telefon kullanır.'
            ],
            'status' => 1,
        ]);
        $qualityInspector->save();

        /*Human Resources Specialist*/
        $humanResourcesSpecialist = new JobDescription([
            'code' => 'HR-JD-SPE',
            'name' => [
                'en' => 'Human Resources Specialist',
                'tr' => 'İnsan Kaynakları Uzmanı',
            ],
            'collar_type' => 'white_collar',
            'purpose_and_scope' => [
                'en' => 'The Human Resources Specialist is responsible for the recruitment and training of employees.',
                'tr' => 'İnsan Kaynakları Uzmanı, çalışanların işe alımı ve eğitiminden sorumludur.',
            ],
            'powers' => [
                'en' => 'The Human Resources Specialist has the authority to stop production if the quality of the product is not up to the standard.',
                'tr' => 'İnsan Kaynakları Uzmanı, ürünün kalitesi standartlara uygun değilse üretimi durdurma yetkisine sahiptir.',
            ],
            'responsibilities' => [
                'en' => 'The Human Resources Specialist is responsible for the recruitment and training of employees.',
                'tr' => 'İnsan Kaynakları Uzmanı, çalışanların işe alımı ve eğitiminden sorumludur.',
            ],
            'qualifications' => [
                'en' => 'The Human Resources Specialist must have a bachelor’s degree in human resources or a related field.',
                'tr' => 'İnsan Kaynakları Uzmanı\'nın insan kaynakları veya ilgili bir alanda lisans derecesine sahip olması gerekir.'
            ],
            'skills' => [
                'en' => 'The Human Resources Specialist must have excellent communication skills.',
                'tr' => 'İnsan Kaynakları Uzmanı\'nın mükemmel iletişim becerilerine sahip olması gerekir.'
            ],
            'physical_demands' => [
                'en' => 'The Human Resources Specialist must be able to sit for long periods of time.',
                'tr' => 'İnsan Kaynakları Uzmanı, uzun süre oturabilmelidir.'
            ],
            'work_environment' => [
                'en' => 'The Human Resources Specialist works in an office',
                'tr' => 'İnsan Kaynakları Uzmanı, bir ofis ortamında çalışır.'
            ],
            'work_equipments' => [
                'en' => 'The Human Resources Specialist uses a computer and a phone.',
                'tr' => 'İnsan Kaynakları Uzmanı, bir bilgisayar ve telefon kullanır.'
            ],
            'status' => 1,
        ]);
        $humanResourcesSpecialist->save();

        /*Logistic Specialist*/
        $logisticSpecialist = new JobDescription([
            'code' => 'LG-JD-SPE',
            'name' => [
                'en' => 'Logistic Specialist',
                'tr' => 'Lojistik Uzmanı',
            ],
            'collar_type' => 'white_collar',
            'purpose_and_scope' => [
                'en' => 'The Logistic Specialist is responsible for the planning and coordination of the transportation of goods.',
                'tr' => 'Lojistik Uzmanı, malların taşınmasının planlanması ve koordinasyonundan sorumludur.',
            ],
            'powers' => [
                'en' => 'The Logistic Specialist has the authority to stop production if the quality of the product is not up to the standard.',
                'tr' => 'Lojistik Uzmanı, ürünün kalitesi standartlara uygun değilse üretimi durdurma yetkisine sahiptir.',
            ],
            'responsibilities' => [
                'en' => 'The Logistic Specialist is responsible for the planning and coordination of the transportation of goods.',
                'tr' => 'Lojistik Uzmanı, malların taşınmasının planlanması ve koordinasyonundan sorumludur.',
            ],
            'qualifications' => [
                'en' => 'The Logistic Specialist must have a bachelor’s degree in logistics or a related field.',
                'tr' => 'Lojistik Uzmanı\'nın lojistik veya ilgili bir alanda lisans derecesine sahip olması gerekir.'
            ],
            'skills' => [
                'en' => 'The Logistic Specialist must have excellent communication skills.',
                'tr' => 'Lojistik Uzmanı\'nın mükemmel iletişim becerilerine sahip olması gerekir.'
            ],
            'physical_demands' => [
                'en' => 'The Logistic Specialist must be able to sit for long periods of time.',
                'tr' => 'Lojistik Uzmanı, uzun süre oturabilmelidir.'
            ],
            'work_environment' => [
                'en' => 'The Logistic Specialist works in an office',
                'tr' => 'Lojistik Uzmanı, bir ofiste çalışır',
            ],
            'work_equipments' => [
                'en' => 'The Logistic Specialist uses a computer and a phone.',
                'tr' => 'Lojistik Uzmanı, bir bilgisayar ve telefon kullanır.',
            ],
            'status' => 1,
        ]);
        $logisticSpecialist->save();

        /*Forklift Operator*/
        $forkliftOperator = new JobDescription([
            'code' => 'FL-JD-OPR',
            'name' => [
                'en' => 'Forklift Operator',
                'tr' => 'Forklift Operatörü',
            ],
            'collar_type' => 'blue_collar',
            'purpose_and_scope' => [
                'en' => 'The Forklift Operator is responsible for the transportation of goods.',
                'tr' => 'Forklift Operatörü, malların taşınmasından sorumludur.',
            ],
            'powers' => [
                'en' => 'The Forklift Operator has the authority to stop production if the quality of the product is not up to the standard.',
                'tr' => 'Forklift Operatörü, ürünün kalitesi standartlara uygun değilse üretimi durdurma yetkisine sahiptir.',
            ],
            'responsibilities' => [
                'en' => 'The Forklift Operator is responsible for the transportation of goods.',
                'tr' => 'Forklift Operatörü, malların taşınmasından sorumludur.',
            ],
            'qualifications' => [
                'en' => 'The Forklift Operator must have a high school diploma.',
                'tr' => 'Forklift Operatörü\'nün lise diplomasına sahip olması gerekir.'
            ],
            'skills' => [
                'en' => 'The Forklift Operator must have excellent communication skills.',
                'tr' => 'Forklift Operatörü\'nün mükemmel iletişim becerilerine sahip olması gerekir.'
            ],
            'physical_demands' => [
                'en' => 'The Forklift Operator must be able to stand for long periods of time.',
                'tr' => 'Forklift Operatörü, uzun süre ayakta durabilmelidir.'
            ],
            'work_environment' => [
                'en' => 'The Forklift Operator works in a factory environment.',
                'tr' => 'Forklift Operatörü, bir fabrika ortamında çalışır.',
            ],
            'work_equipments' => [
                'en' => 'The Forklift Operator uses a forklift and a phone.',
                'tr' => 'Forklift Operatörü, bir forklift ve telefon kullanır.',
            ],
            'status' => 1,
        ]);
        $forkliftOperator->save();
    }
}
