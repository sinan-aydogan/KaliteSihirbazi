<?php

use App\Models\Capa;
use App\Models\HumanResources\Education\Education;
use App\Models\HumanResources\Education\EducationPlan;
use App\Models\HumanResources\Education\EducationType;
use App\Models\HumanResources\JobDescription\JobDescription;
use App\Models\Problem;
use App\Models\User;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

beforeEach(function () {
    $this->actingAs(User::factory()->create());
});

test('an education type can define a validity period and required job descriptions', function () {
    $jobDescription = JobDescription::create([
        'code' => 'JD-001',
        'name' => 'Hat Operatörü',
        'responsibilities' => [],
        'powers' => [],
        'requirements' => [],
        'skills' => [],
        'working_conditions' => [],
        'working_tools' => [],
        'working_hours' => [],
        'overtime_status' => [],
        'travel_status' => [],
    ]);

    $this->post(route('education-type.store'), [
        'name' => 'Yıllık İş Güvenliği Eğitimi',
        'validity_months' => 12,
        'job_description_ids' => [$jobDescription->id],
    ])->assertSessionHasNoErrors();

    $type = EducationType::where('name', 'Yıllık İş Güvenliği Eğitimi')->first();

    expect($type->validity_months)->toBe(12)
        ->and($type->jobDescriptions()->whereKey($jobDescription->id)->exists())->toBeTrue();
});

test('marking a participant as attended and successful computes an expiry date from the education type validity', function () {
    $type = EducationType::factory()->create(['validity_months' => 12]);
    $education = Education::factory()->create(['performed_date' => '2026-01-10']);
    $education->educationTypes()->sync([$type->id]);

    $participant = User::factory()->create();
    $education->participants()->attach($participant->id, ['is_attend' => false, 'status' => false]);

    $this->put(route('education.update-participant', [$education, $participant]), [
        'is_attend' => true,
        'status' => true,
        'score' => 90,
    ])->assertSessionHasNoErrors();

    $pivot = $education->participants()->whereKey($participant->id)->first()->pivot;

    expect($pivot->expires_at->toDateString())->toBe('2027-01-10');
});

test('an effectiveness evaluation records the rating, note and evaluator', function () {
    $education = Education::factory()->create();
    $participant = User::factory()->create();
    $education->participants()->attach($participant->id, ['is_attend' => true, 'status' => true]);

    $evaluator = auth()->user();

    $this->put(route('education.update-participant', [$education, $participant]), [
        'is_attend' => true,
        'status' => true,
        'effectiveness_rating' => 'effective',
        'effectiveness_note' => 'Saha gözleminde uygulandığı doğrulandı.',
    ])->assertSessionHasNoErrors();

    $pivot = $education->participants()->whereKey($participant->id)->first()->pivot;

    expect($pivot->effectiveness_rating->value)->toBe('effective')
        ->and($pivot->effectiveness_note)->toBe('Saha gözleminde uygulandığı doğrulandı.')
        ->and($pivot->effectiveness_evaluated_by_id)->toBe($evaluator->id)
        ->and($pivot->effectiveness_evaluated_at)->not->toBeNull();
});

test('a participant document can be uploaded and deleted', function () {
    Storage::fake('public');

    $education = Education::factory()->create();
    $participant = User::factory()->create();
    $education->participants()->attach($participant->id, ['is_attend' => true, 'status' => true]);

    $file = UploadedFile::fake()->image('certificate.jpg');

    $this->post(route('education.upload-participant-document', [$education, $participant]), [
        'document' => $file,
    ])->assertSessionHasNoErrors();

    $pivot = $education->participants()->whereKey($participant->id)->first()->pivot;
    expect($pivot->getMedia('education_documents'))->toHaveCount(1);

    $mediaId = $pivot->getMedia('education_documents')->first()->id;

    $this->delete(route('education.delete-participant-document', [$education, $participant, $mediaId]))
        ->assertSessionHasNoErrors();

    expect($pivot->fresh()->getMedia('education_documents'))->toHaveCount(0);
});

test('an education can be raised as a corrective action from a problem', function () {
    $author = auth()->user();
    $problem = Problem::create([
        'title' => 'Yanlış ürün etiketi',
        'description' => 'Sevkiyatta yanlış ürün etiketi kullanıldı.',
        'problem_source_type_id' => problemSourceTypeId('internal_observation'),
        'severity' => 'medium',
        'detected_by_id' => $author->id,
        'detected_date' => now(),
    ]);
    $plan = EducationPlan::factory()->create();

    $this->post(route('education.store'), [
        'education_plan_id' => $plan->id,
        'problem_id' => $problem->id,
        'name' => 'Ek Eğitim - Hat Operatörleri',
        'planned_date' => now()->addWeek()->toDateString(),
        'duration' => 60,
        'is_completed' => false,
        'is_cancelled' => false,
    ])->assertSessionHasNoErrors();

    $education = Education::where('name', 'Ek Eğitim - Hat Operatörleri')->first();

    expect($education->problem_id)->toBe($problem->id)
        ->and($problem->trainings()->whereKey($education->id)->exists())->toBeTrue();
});

test('an education can be raised as a corrective action from a capa', function () {
    $author = auth()->user();
    $capa = Capa::create([
        'title' => 'Yanlış etiketleme',
        'type' => 'corrective',
        'description' => 'Sevkiyatta yanlış ürün etiketi kullanıldı.',
        'opened_by_id' => $author->id,
        'responsible_id' => $author->id,
        'due_date' => now()->addWeek(),
    ]);
    $plan = EducationPlan::factory()->create();

    $this->post(route('education.store'), [
        'education_plan_id' => $plan->id,
        'capa_id' => $capa->id,
        'name' => 'Ek Eğitim - DÖF Aksiyonu',
        'planned_date' => now()->addWeek()->toDateString(),
        'duration' => 60,
        'is_completed' => false,
        'is_cancelled' => false,
    ])->assertSessionHasNoErrors();

    $education = Education::where('name', 'Ek Eğitim - DÖF Aksiyonu')->first();

    expect($education->capa_id)->toBe($capa->id);
});
