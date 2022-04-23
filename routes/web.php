<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware(['auth:sanctum', 'verified'])->group(function () {
    /*Dashboard*/
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    /*Settings*/
    Route::prefix('settings')->group(function (){
        Route::get('/', [\App\Http\Controllers\Setting\GlobalSettingController::class, 'index'])->name('global-setting.index');
        /*Module Management*/
        Route::resource('module', \App\Http\Controllers\Setting\ModuleController::class);
        /*Property Management*/
        Route::resource('property', \App\Http\Controllers\Setting\PropertyController::class);
        Route::resource('property-type', \App\Http\Controllers\Setting\PropertyTypeController::class);
    });

    /*User Functions*/
    Route::post('/user-language-update', \App\Http\Controllers\User\UpdateActiveLanguage::class)->name('user-language.update');
    Route::post('/user-theme-update', \App\Http\Controllers\User\UpdateActiveTheme::class)->name('user-theme.update');


    /*Modules*/
    $mRoutes = [
        ['department', \App\Http\Controllers\DepartmentController::class],
        ['warehouse',\App\Http\Controllers\WarehouseController::class],
        ['vehicles',\App\Http\Controllers\VehicleController::class],
        ['device',\App\Http\Controllers\DeviceController::class],
        ['machine',\App\Http\Controllers\MachineController::class],
        ['customer',\App\Http\Controllers\CustomerController::class],
        ['supplier',\App\Http\Controllers\SupplierController::class],
        ['audit-firm',\App\Http\Controllers\AuditFirmController::class],
        ['staff',\App\Http\Controllers\StaffController::class],
        ['job-description',\App\Http\Controllers\JobDescriptionController::class],
        ['education',\App\Http\Controllers\EducationController::class],
        ['education-plan',\App\Http\Controllers\EducationPlanController::class],
        ['take-time-off',\App\Http\Controllers\TakeTimeOffController::class],
        ['problem',\App\Http\Controllers\ProblemController::class],
        ['capa-action',\App\Http\Controllers\CapaActionController::class],
        ['product',\App\Http\Controllers\ProductController::class],
        ['raw-material',\App\Http\Controllers\RawMaterialController::class],
        ['consumable-material',\App\Http\Controllers\ConsumableMaterialController::class],
        ['product-tree',\App\Http\Controllers\ProductTreeController::class],
        ['document',\App\Http\Controllers\DocumentController::class],
        ['document-revision-request',\App\Http\Controllers\DocumentRevisionRequestController::class],
        ['document-distribution-point',\App\Http\Controllers\DistributionPointController::class],
        ['document-action',\App\Http\Controllers\DocumentActionController::class],
        ['measurement-device',\App\Http\Controllers\MeasurementDeviceController::class],
        [ 'calibration-task',\App\Http\Controllers\CalibrationTaskController::class],
        ['measurement-device-action',\App\Http\Controllers\MeasurementDeviceActionController::class],
        ['audit',\App\Http\Controllers\AuditController::class],
        ['certificate',\App\Http\Controllers\CertificateController::class],
        ['standard',\App\Http\Controllers\StandardController::class],
        ['improvement-work',\App\Http\Controllers\ImprovementWorkController::class]
    ];

    foreach ($mRoutes as $mRoute){
        Route::resource($mRoute[0], $mRoute[1]);
        Route::post($mRoute[0], [$mRoute[1], 'index'])->name($mRoute[0].".search");
        Route::post($mRoute[0]."-store", [$mRoute[1], 'store'])->name($mRoute[0].".store");
    }

});
