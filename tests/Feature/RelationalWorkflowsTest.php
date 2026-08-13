<?php

use App\Models\Department;
use App\Models\Document\Document;
use App\Models\Document\DocumentType;
use App\Models\HumanResources\Education\Education;
use App\Models\HumanResources\Education\EducationPlan;
use App\Models\HumanResources\Employee\Employee;
use App\Models\HumanResources\JobDescription\JobDescription;
use App\Models\HumanResources\JobDescription\JobDescriptionAssignment;
use App\Models\MeasurementDevice\Calibration\CalibrationFirm;
use App\Models\MeasurementDevice\Calibration\MeasurementDeviceCalibrationTask;
use App\Models\MeasurementDevice\MeasurementDevice;
use App\Models\MeasurementDevice\MeasurementDeviceType;
use App\Models\User;

beforeEach(function () {
    $this->user = User::factory()->create();
    $this->actingAs($this->user);
});

test('job description assignment validates relations and persists them', function () {
    $employee = Employee::create(['code' => 'EMP-1', 'name' => 'Assigned']);
    $appointer = Employee::create(['code' => 'EMP-2', 'name' => 'Manager']);
    $description = JobDescription::create(jobDescriptionData());

    $this->post(route('job-description-assignment.store'), [
        'employee_id' => $employee->id,
        'job_description_id' => $description->id,
        'appointer_id' => $appointer->id,
        'assignment_date' => '2026-08-01',
    ])->assertSessionHasNoErrors();

    $assignment = JobDescriptionAssignment::with(['employee', 'jobDescription', 'appointer'])->firstOrFail();
    expect($assignment->employee->is($employee))->toBeTrue()
        ->and($assignment->jobDescription->is($description))->toBeTrue()
        ->and($assignment->appointer->is($appointer))->toBeTrue();
});

test('an employee cannot appoint themselves in an assignment', function () {
    $employee = Employee::create(['code' => 'EMP-1', 'name' => 'Employee']);
    $description = JobDescription::create(jobDescriptionData());

    $this->post(route('job-description-assignment.store'), [
        'employee_id' => $employee->id,
        'job_description_id' => $description->id,
        'appointer_id' => $employee->id,
        'assignment_date' => '2026-08-01',
    ])->assertSessionHasErrors('appointer_id');
});

test('education participant workflow adds updates and removes a participant', function () {
    $plan = EducationPlan::create([
        'name' => 'Annual Plan',
        'start_date' => '2026-01-01',
        'end_date' => '2026-12-31',
    ]);
    $education = Education::create([
        'education_plan_id' => $plan->id,
        'name' => 'Safety',
        'planned_date' => '2026-09-01',
        'duration' => 60,
    ]);
    $participant = User::factory()->create();

    $this->post(route('education.add-participant', $education), ['user_id' => $participant->id])
        ->assertSessionHasNoErrors();
    $this->put(route('education.update-participant', [$education, $participant]), [
        'is_attend' => true,
        'status' => true,
        'score' => 90,
    ])->assertSessionHasNoErrors();

    $this->assertDatabaseHas('education_participations', [
        'education_id' => $education->id,
        'user_id' => $participant->id,
        'score' => 90,
    ]);

    $this->delete(route('education.remove-participant', [$education, $participant]));
    $this->assertDatabaseMissing('education_participations', ['education_id' => $education->id, 'user_id' => $participant->id]);
});

test('document versions belong to a document and have sequential unique numbers', function () {
    $department = Department::create(['code' => 'QMS', 'name' => 'Quality', 'type' => 'main']);
    $type = DocumentType::create(['code' => 'PROC', 'name' => 'Procedure']);
    $document = Document::create([
        'code' => 'DOC-1',
        'name' => 'Procedure',
        'department_id' => $department->id,
        'document_type_id' => $type->id,
        'creator_id' => $this->user->id,
    ]);

    $first = $document->versions()->create(['revised_by' => $this->user->id, 'version' => 1]);
    $second = $document->versions()->create(['revised_by' => $this->user->id, 'version' => 2]);

    expect($first->document->is($document))->toBeTrue()
        ->and($second->version)->toBe(2);
});

test('calibration task validates chronology and stores decimal price', function () {
    $department = Department::create(['code' => 'LAB', 'name' => 'Laboratory', 'type' => 'main']);
    $employee = Employee::create(['code' => 'EMP-3', 'name' => 'Supervisor']);
    $type = MeasurementDeviceType::create(['code' => 'SCALE', 'name' => 'Scale']);
    $device = MeasurementDevice::create([
        'code' => 'DEV-1',
        'department_id' => $department->id,
        'device_supervisor_id' => $employee->id,
        'calibration_supervisor_id' => $employee->id,
        'measurement_device_type_id' => $type->id,
    ]);
    $firm = CalibrationFirm::create([
        'name' => 'Calibration Lab',
        'email' => 'lab@example.com',
        'address' => 'Industrial Zone',
        'phone' => '555',
    ]);

    $payload = [
        'planned_date' => '2026-08-10',
        'accomplished_date' => '2026-08-09',
        'measurement_device_id' => $device->id,
        'calibration_firm_id' => $firm->id,
        'price' => 125.50,
        'currency' => 'TRY',
    ];
    $this->post(route('measurement-device-calibration.store'), $payload)
        ->assertSessionHasErrors('accomplished_date');

    $payload['accomplished_date'] = '2026-08-10';
    $this->post(route('measurement-device-calibration.store'), $payload)
        ->assertSessionHasNoErrors();

    expect(MeasurementDeviceCalibrationTask::firstOrFail()->price)->toBe('125.50');
});

function jobDescriptionData(): array
{
    $list = ['Item'];

    return [
        'code' => 'JD-1',
        'name' => 'Specialist',
        'responsibilities' => $list,
        'powers' => $list,
        'requirements' => $list,
        'skills' => $list,
        'working_conditions' => $list,
        'working_tools' => $list,
        'working_hours' => $list,
        'overtime_status' => $list,
        'travel_status' => [['reason' => 'Audit', 'location' => 'Plant']],
    ];
}
