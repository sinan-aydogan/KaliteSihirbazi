<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



Auth::routes();
Auth::routes(['verify' => true, 'register' => false]);

Route::get('/', 'HomeController@index')->name('home');

/**BAĞIMLI AÇILIR LİSTE ROUTE LERİ**/
Route::get('veri/sikayet_urunu/{id}', 'MusteriSikayetiController@sikayet_urunu')->name('sikayet_urunu');
Route::get('veri/sikayet_turu/{id}', 'MusteriSikayetiController@sikayet_turu')->name('sikayet_turu');

Route::Resources([
    'bayi' => 'BayiController',
    'bolum' => 'BolumController',
    'sikayet-turu' => 'SikayetTuruController',
    'sikayet-durum' => 'SikayetDurumController',
    'sikayet-kategori' => 'SikayetKategoriController',
    'musteri-sikayeti' => 'MusteriSikayetiController',
    'urun' => 'UrunController',
    'urun-turu' => 'UrunTuruController',
    'kullanici' => 'KullaniciController'
]);


Route::get('silinmis/kullanici', 'SilinmislerController@kullanici')->name('silinmis_kullanicilar_index');
Route::get('silinmis/kullanici/restore/{id}', 'SilinmislerController@kullanici_restore')->name('silinmis_kullanici_restore');
Route::delete('silinmis/kullanici/{id}', 'SilinmislerController@kullanici_destroy')->name('silinmis_kullanici_destroy');
