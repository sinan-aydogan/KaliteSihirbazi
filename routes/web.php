<?php

use App\Http\Controllers\AccountController;
use App\Http\Controllers\ApiTokenController;
use App\Http\Controllers\BusinessManagement\Vehicle\VehicleSettingController;
use App\Http\Controllers\BusinessManagement\Vehicle\VehicleStatusController;
use App\Http\Controllers\BusinessManagement\Vehicle\VehicleTypeController;
use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\Document\DistributionPointController;
use App\Http\Controllers\Document\DocumentController;
use App\Http\Controllers\Document\DocumentSettingController;
use App\Http\Controllers\Document\DocumentTypeController;
use App\Http\Controllers\HumanResources\Education\EducationController;
use App\Http\Controllers\HumanResources\Education\EducationInstructorController;
use App\Http\Controllers\HumanResources\Education\EducationPlanController;
use App\Http\Controllers\HumanResources\Education\EducationSettingController;
use App\Http\Controllers\HumanResources\Education\EducationTypeController;
use App\Http\Controllers\HumanResources\Employee\DebtController;
use App\Http\Controllers\HumanResources\Employee\EmployeeController;
use App\Http\Controllers\HumanResources\Employee\EmploymentInfo;
use App\Http\Controllers\HumanResources\Employee\JobAssignmentController;
use App\Http\Controllers\HumanResources\Employee\PersonalInfo;
use App\Http\Controllers\HumanResources\Employee\TimeOffController;
use App\Http\Controllers\HumanResources\JobDescription\JobDescriptionAssignmentController;
use App\Http\Controllers\HumanResources\JobDescription\JobDescriptionController;
use App\Http\Controllers\MeasurementDevice\Action\DeviceActionController;
use App\Http\Controllers\MeasurementDevice\Action\MeasurementDeviceActionController;
use App\Http\Controllers\MeasurementDevice\Calibration\CalibrationFirmController;
use App\Http\Controllers\MeasurementDevice\Calibration\CalibrationTaskController;
use App\Http\Controllers\MeasurementDevice\Calibration\MeasurementDeviceCalibrationTaskController;
use App\Http\Controllers\MeasurementDevice\DeviceInfoController;
use App\Http\Controllers\MeasurementDevice\MeasurementDeviceController;
use App\Http\Controllers\MeasurementDevice\MeasurementDeviceTypeController;
use App\Http\Controllers\Setting\GlobalSettingController;
use App\Http\Controllers\Setting\ModuleController;
use App\Http\Controllers\Setting\PropertyController;
use App\Http\Controllers\Setting\PropertyTypeController;
use App\Http\Controllers\SupplierController;
use App\Http\Controllers\Tag\TagController;
use App\Http\Controllers\Tag\TagTypeController;
use App\Http\Controllers\User\UpdateActiveLanguageController;
use App\Http\Controllers\User\UpdateActiveThemeController;
use App\Http\Controllers\VehicleController;
use App\Http\Controllers\Warehouse\WarehouseController;
use App\Http\Controllers\Warehouse\WarehouseSettingController;
use App\Http\Controllers\Warehouse\WarehouseTypeController;
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
    'auth',
    'verified',
])->group(function () {
    Route::get('/user/profile', [AccountController::class, 'show'])->name('profile.show');
    Route::delete('/user', [AccountController::class, 'destroy'])->name('current-user.destroy');
    Route::delete('/user/profile-photo', [AccountController::class, 'destroyPhoto'])->name('current-user-photo.destroy');
    Route::delete('/user/other-browser-sessions', [AccountController::class, 'destroyOtherBrowserSessions'])->name('other-browser-sessions.destroy');

    Route::get('/user/api-tokens', [ApiTokenController::class, 'index'])->name('api-tokens.index');
    Route::post('/user/api-tokens', [ApiTokenController::class, 'store'])->name('api-tokens.store');
    Route::put('/user/api-tokens/{token}', [ApiTokenController::class, 'update'])->name('api-tokens.update');
    Route::delete('/user/api-tokens/{token}', [ApiTokenController::class, 'destroy'])->name('api-tokens.destroy');

    Route::get('/', function () {
        return Inertia::render('Dashboard');
    });

    // Dashboard
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    /* Settings */
    Route::prefix('settings')->group(function () {
        Route::get('/', [GlobalSettingController::class, 'index'])->name('global-setting.index');
        /* Module Management */
        Route::resource('module', ModuleController::class);
        /* Property Management */
        Route::resource('property', PropertyController::class);
        Route::resource('property-type', PropertyTypeController::class);
        /* Logo Upload */
        Route::post('media-upload/{type}', [GlobalSettingController::class, 'mediaUpload'])->name('global-setting.media-upload');
        /* Get Setting */
        Route::get('get-setting', [GlobalSettingController::class, 'getSetting'])->name('global-setting.get-setting');
        /* Time Setting */
        Route::get('time', [GlobalSettingController::class, 'time'])->name('global-setting.time');
        Route::post('time', [GlobalSettingController::class, 'updateTime'])->name('global-setting.time.update');
        /* Tag Management (global pool: types + tags) */
        Route::resource('tag-type', TagTypeController::class)->only(['index', 'store', 'update', 'destroy']);
        Route::post('tag', [TagController::class, 'store'])->name('tag.store');
        Route::delete('tag/{tag}', [TagController::class, 'destroy'])->name('tag.destroy');
    });

    /* User Functions */
    Route::post('/user-language-update', UpdateActiveLanguageController::class)->name('user-language.update');
    Route::post('/user-theme-update', UpdateActiveThemeController::class)->name('user-theme.update');

    /* Modules */
    $mRoutes = [
        ['uri' => 'department', 'model' => 'department', 'controller' => DepartmentController::class],
        ['uri' => 'warehouse', 'model' => 'warehouse', 'controller' => WarehouseController::class, 'settingController' => WarehouseSettingController::class],
        ['uri' => 'vehicle', 'model' => 'vehicle', 'controller' => VehicleController::class, 'settingController' => VehicleSettingController::class],
        ['uri' => 'supplier', 'model' => 'supplier', 'controller' => SupplierController::class],
        ['uri' => 'employee', 'model' => 'employee', 'controller' => EmployeeController::class],
        ['uri' => 'job-description', 'model' => 'jobDescription', 'controller' => JobDescriptionController::class],
        ['uri' => 'job-description-assignment', 'model' => 'jobDescriptionAssignment', 'controller' => JobDescriptionAssignmentController::class],
        ['uri' => 'education', 'model' => 'education', 'controller' => EducationController::class, 'settingController' => EducationSettingController::class],
        ['uri' => 'education-plan', 'model' => 'educationPlan', 'controller' => EducationPlanController::class],
        ['uri' => 'education-type', 'model' => 'educationType', 'controller' => EducationTypeController::class],
        ['uri' => 'education-instructor', 'model' => 'educationInstructor', 'controller' => EducationInstructorController::class],
        ['uri' => 'document', 'model' => 'document', 'controller' => DocumentController::class, 'settingController' => DocumentSettingController::class],
        ['uri' => 'document-type', 'model' => 'documentType', 'controller' => DocumentTypeController::class],
        ['uri' => 'distribution-point', 'model' => 'distributionPoint', 'controller' => DistributionPointController::class],
        ['uri' => 'measurement-device', 'model' => 'measurementDevice', 'controller' => MeasurementDeviceController::class],
        ['uri' => 'measurement-device-type', 'model' => 'measurementDeviceType', 'controller' => MeasurementDeviceTypeController::class],
        ['uri' => 'measurement-device-calibration', 'model' => 'measurementDeviceCalibration', 'controller' => MeasurementDeviceCalibrationTaskController::class],
        ['uri' => 'calibration-firm', 'model' => 'calibrationFirm', 'controller' => CalibrationFirmController::class],
        ['uri' => 'measurement-device-action', 'model' => 'measurementDeviceAction', 'controller' => MeasurementDeviceActionController::class],
    ];

    $plannedModules = [
        'audit-firm',
        'problem',
        'capa-action',
        'product-tree',
        'audit',
        'improvement-work',
        'device',
        'machine',
        'customer',
        'product',
        'raw-material',
        'consumable-material',
        'certificate',
        'standard',
        'take-time-off',
        'document-revision-request',
        'document-action',
    ];

    foreach ($plannedModules as $plannedModule) {
        Route::get($plannedModule, fn () => Inertia::render('ComingSoon'))
            ->name($plannedModule.'.index');
    }

    foreach ($mRoutes as $mRoute) {
        /* Setting */
        if (isset($mRoute['settingController'])) {
            Route::get($mRoute['uri'].'/setting', [$mRoute['settingController'], 'index'])->withTrashed()->name($mRoute['uri'].'-setting.index');
            Route::post($mRoute['uri'].'/setting', [$mRoute['settingController'], 'update'])->name($mRoute['uri'].'-setting.update');
        }
        /* Search */
        Route::post($mRoute['uri'].'/search', [$mRoute['controller'], 'index'])->name($mRoute['uri'].'.search');
        /* Resource */
        Route::resource($mRoute['uri'], $mRoute['controller']);
        /* Soft Delete Routes */
        if (method_exists($mRoute['controller'], 'deleted')) {
            Route::get($mRoute['uri'].'-deleted', [$mRoute['controller'], 'deleted'])->name($mRoute['uri'].'.deleted');
        }

        if (method_exists($mRoute['controller'], 'permanentDestroy')) {
            Route::delete($mRoute['uri'].'-permanent-delete/{'.$mRoute['model'].'}', [$mRoute['controller'], 'permanentDestroy'])->withTrashed()->name($mRoute['uri'].'.permanent-delete');
        }

        if (method_exists($mRoute['controller'], 'restore')) {
            Route::get($mRoute['uri'].'-restore/{'.$mRoute['model'].'}', [$mRoute['controller'], 'restore'])->withTrashed()->name($mRoute['uri'].'.restore');
        }

    }

    /* Employee Management Pages */
    Route::get('employee/{employee}/personal-info', [PersonalInfo::class, 'index'])->name('employee-personal-info.index');
    Route::get('employee/{employee}/employment-info', [EmploymentInfo::class, 'index'])->name('employee-employment-info.index');
    Route::get('employee/{employee}/jd-assignment', [JobAssignmentController::class, 'index'])->name('employee-jd-assignment.index');
    Route::get('employee/{employee}/time-off', [TimeOffController::class, 'index'])->name('employee-time-off.index');
    Route::get('employee/{employee}/debt', [DebtController::class, 'index'])->name('employee-debt.index');
    Route::get('employee/{employee}/education', [App\Http\Controllers\HumanResources\Employee\EducationController::class, 'index'])->name('employee-education.index');

    // Education Participant Management
    Route::post('education/{education}/participants', [EducationController::class, 'addParticipant'])->name('education.add-participant');
    Route::put('education/{education}/participants/{user}', [EducationController::class, 'updateParticipant'])->name('education.update-participant');
    Route::delete('education/{education}/participants/{user}', [EducationController::class, 'removeParticipant'])->name('education.remove-participant');

    // Education Media Management
    Route::delete('education/{education}/media/{mediaId}', [EducationController::class, 'deleteMedia'])->name('education.delete-media');
    Route::delete('education-instructor/{educationInstructor}/media/{mediaId}', [EducationInstructorController::class, 'deleteMedia'])->name('education-instructor.delete-media');

    /* Warehouse Setting Pages */
    Route::resource('warehouse-type', WarehouseTypeController::class);

    /* Measurement Device Management Pages */
    Route::get('measurement-device/{measurementDevice}/device-info', [DeviceInfoController::class, 'index'])->name('measurement-device-info.index');
    Route::get('measurement-device/{measurementDevice}/calibration-tasks', [CalibrationTaskController::class, 'index'])->name('measurement-device-calibrations.index');
    Route::get('measurement-device/{measurementDevice}/device-actions', [DeviceActionController::class, 'index'])->name('measurement-device-actions.index');
    /* Vehicle Setting Pages */
    Route::resource('vehicle-type', VehicleTypeController::class);
    Route::resource('vehicle-status', VehicleStatusController::class);
});

// Test Route
Route::get('test', function () {
    return Inertia::render('Test');
})->name('route');
