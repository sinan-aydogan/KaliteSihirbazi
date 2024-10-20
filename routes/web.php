<?php

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

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/', function(){
        return Inertia::render('Dashboard');
    });

    // Dashboard
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
    Route::post('/user-language-update', \App\Http\Controllers\User\UpdateActiveLanguageController::class)->name('user-language.update');
    Route::post('/user-theme-update', \App\Http\Controllers\User\UpdateActiveThemeController::class)->name('user-theme.update');


    /*Modules*/
    $mRoutes = [
        ['uri'=>'department', 'model'=>'department', 'controller'=> \App\Http\Controllers\DepartmentController::class],
        ['uri'=>'warehouse', 'model'=>'warehouse', 'controller'=> \App\Http\Controllers\Warehouse\WarehouseController::class, 'settingController' => \App\Http\Controllers\Warehouse\WarehouseSettingController::class],
        ['uri'=>'vehicle', 'model'=>'vehicle', 'controller'=>\App\Http\Controllers\VehicleController::class, 'settingController' => \App\Http\Controllers\BusinessManagement\Vehicle\VehicleSettingController::class],
        ['uri'=>'device', 'model'=>'device', 'controller'=>\App\Http\Controllers\DeviceController::class],
        ['uri'=>'machine', 'model'=>'machine', 'controller'=>\App\Http\Controllers\MachineController::class],
        ['uri'=>'customer', 'model'=>'customer', 'controller'=>\App\Http\Controllers\CustomerController::class],
        ['uri'=>'supplier', 'model'=>'supplier', 'controller'=>\App\Http\Controllers\SupplierController::class],
        ['uri'=>'audit-firm', 'model'=>'auditFirm', 'controller'=>\App\Http\Controllers\AuditFirmController::class],
        ['uri'=>'employee', 'model'=>'employee', 'controller'=> \App\Http\Controllers\HumanResources\Employee\EmployeeController::class],
        ['uri'=>'job-description', 'model'=>'jobDescription', 'controller'=> \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController::class],
        ['uri'=>'job-description-assignment', 'model'=>'jobDescriptionAssignment', 'controller'=> \App\Http\Controllers\HumanResources\JobDescription\JobDescriptionAssignmentController::class],
        ['uri'=>'education', 'model'=>'education', 'controller'=> \App\Http\Controllers\HumanResources\Education\EducationController::class],
        ['uri'=>'education-plan', 'model'=>'educationPlan', 'controller'=> \App\Http\Controllers\HumanResources\Education\EducationPlanController::class],
        ['uri'=>'take-time-off', 'model'=>'takeTime', 'controller'=> \App\Http\Controllers\HumanResources\Employee\TakeTimeOffController::class],
        ['uri'=>'problem', 'model'=>'problem', 'controller'=>App\Http\Controllers\ProblemController::class],
        ['uri'=>'capa-action', 'model'=>'capaAction', 'controller'=>\App\Http\Controllers\CapaActionController::class],
        ['uri'=>'product', 'model'=>'product', 'controller'=>\App\Http\Controllers\ProductController::class],
        ['uri'=>'raw-material', 'model'=>'rawMaterial', 'controller'=>\App\Http\Controllers\RawMaterialController::class],
        ['uri'=>'consumable-material', 'model'=>'consumableMaterial', 'controller'=>\App\Http\Controllers\ConsumableMaterialController::class],
        ['uri'=>'product-tree', 'model'=>'productTree', 'controller'=>\App\Http\Controllers\ProductTreeController::class],
        ['uri'=>'document', 'model'=>'document', 'controller'=> \App\Http\Controllers\Document\DocumentController::class, 'settingController' => \App\Http\Controllers\Document\DocumentSettingController::class],
        ['uri'=>'document-type', 'model'=>'documentType', 'controller'=> \App\Http\Controllers\Document\DocumentTypeController::class],
        ['uri'=>'document-revision-request', 'model'=>'documentRevisionRequest', 'controller'=> \App\Http\Controllers\Document\DocumentRevisionRequestController::class],
        ['uri'=>'distribution-point', 'model'=>'distributionPoint', 'controller'=> \App\Http\Controllers\Document\DistributionPointController::class],
        ['uri'=>'document-action', 'model'=>'documentAction', 'controller'=> \App\Http\Controllers\Document\DocumentActionController::class],
        ['uri'=>'measurement-device', 'model'=>'measurementDevice', 'controller'=> \App\Http\Controllers\MeasurementDevice\MeasurementDeviceController::class],
        ['uri'=>'measurement-device-type', 'model'=>'measurementDeviceType', 'controller'=> \App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController::class],
        ['uri'=>'measurement-device-calibration', 'model'=>'measurementDeviceCalibration', 'controller'=>\App\Http\Controllers\MeasurementDevice\Calibration\MeasurementDeviceCalibrationTaskController::class],
        ['uri'=>'calibration-firm', 'model'=>'calibrationFirm', 'controller'=> \App\Http\Controllers\MeasurementDevice\Calibration\CalibrationFirmController::class],
        ['uri'=>'measurement-device-action', 'model'=>'measurementDeviceAction', 'controller'=> \App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionController::class],
        ['uri'=>'audit', 'model'=>'audit', 'controller'=>\App\Http\Controllers\AuditController::class],
        ['uri'=>'certificate', 'model'=>'certificate', 'controller'=>\App\Http\Controllers\CertificateController::class],
        ['uri'=>'standard', 'model'=>'standard', 'controller'=>\App\Http\Controllers\StandardController::class],
        ['uri'=>'improvement-work', 'model'=>'improvementWork', 'controller'=>\App\Http\Controllers\ImprovementWorkController::class]
    ];

    foreach ($mRoutes as $mRoute){
        /*Setting*/
        if(isset($mRoute['settingController'])){
            Route::get($mRoute['uri']."/setting", [$mRoute['settingController'], 'index'])->withTrashed()->name($mRoute['uri']."-setting.index");
            Route::post($mRoute['uri']."/setting", [$mRoute['settingController'], 'update'])->name($mRoute['uri']."-setting.update");
        }
        /*Resource*/
        Route::resource($mRoute['uri'], $mRoute['controller']);
        /*Search*/
        Route::post($mRoute['uri'], [$mRoute['controller'], 'index'])->name($mRoute['uri'].".search");
        /*Regenerate Store Route because of the Search*/
        Route::post($mRoute['uri']."-store", [$mRoute['controller'], 'store'])->name($mRoute['uri'].".store");
        /*Soft Delete Routes*/
        Route::get($mRoute['uri']."-deleted", [$mRoute['controller'], 'deleted'])->name($mRoute['uri'].".deleted");
        Route::delete($mRoute['uri']."-permanent-delete/{".$mRoute['model']."}", [$mRoute['controller'], 'permanentDestroy'])->withTrashed()->name($mRoute['uri'].".permanent-delete");
        Route::get($mRoute['uri']."-restore/{".$mRoute['model']."}", [$mRoute['controller'], 'restore'])->withTrashed()->name($mRoute['uri'].".restore");

    }

    /*Employee Management Pages*/
    Route::get('employee/{employee}/personal-info', [\App\Http\Controllers\HumanResources\Employee\PersonalInfo::class, 'index'])->name('employee-personal-info.index');
    Route::get('employee/{employee}/employment-info', [\App\Http\Controllers\HumanResources\Employee\EmploymentInfo::class, 'index'])->name('employee-employment-info.index');
    Route::get('employee/{employee}/jd-assignment', [\App\Http\Controllers\HumanResources\Employee\JobAssignmentController::class, 'index'])->name('employee-jd-assignment.index');
    Route::get('employee/{employee}/time-off', [\App\Http\Controllers\HumanResources\Employee\TimeOffController::class, 'index'])->name('employee-time-off.index');
    Route::get('employee/{employee}/debt', [\App\Http\Controllers\HumanResources\Employee\DebtController::class, 'index'])->name('employee-debt.index');
    Route::get('employee/{employee}/education', [\App\Http\Controllers\HumanResources\Employee\EducationController::class, 'index'])->name('employee-education.index');

    /*Warehouse Setting Pages*/
    Route::resource('warehouse-type', \App\Http\Controllers\Warehouse\WarehouseTypeController::class);

    /*Measurement Device Management Pages*/
    Route::get('measurement-device/{measurementDevice}/device-info', [\App\Http\Controllers\MeasurementDevice\DeviceInfoController::class, 'index'])->name('measurement-device-info.index');
    Route::get('measurement-device/{measurementDevice}/calibration-tasks', [\App\Http\Controllers\MeasurementDevice\Calibration\CalibrationTaskController::class, 'index'])->name('measurement-device-calibrations.index');
    Route::get('measurement-device/{measurementDevice}/device-actions', [\App\Http\Controllers\MeasurementDevice\Action\DeviceActionController::class, 'index'])->name('measurement-device-actions.index');
});

// Test Route
Route::get('test', function (){
    return Inertia::render('Test');
})->name('route');
