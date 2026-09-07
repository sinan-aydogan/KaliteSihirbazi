<?php

use App\Models\HumanResources\Education\EducationInstructor;
use App\Models\Setting;
use App\Models\User;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

beforeEach(function () {
    Storage::fake('public');
    $this->actingAs(User::factory()->create());

    Setting::create(['code' => 'education_allowed_file_types', 'module' => 'education', 'type' => 'json', 'value' => json_encode(['pdf'])]);
    Setting::create(['code' => 'education_max_file_size', 'module' => 'education', 'type' => 'json', 'value' => json_encode(['size' => 1, 'unit' => 'MB'])]);
});

test('it rejects an instructor document extension outside the configured allowed types', function () {
    $file = UploadedFile::fake()->create('cv.txt', 50, 'text/plain');

    $this->post(route('education-instructor.store'), [
        'name' => 'Jane Doe',
        'documents' => [$file],
    ])->assertSessionHasErrors('documents.0');

    expect(EducationInstructor::count())->toBe(0);
});

test('it accepts an instructor document within the configured allowed types and size', function () {
    $file = UploadedFile::fake()->create('cv.pdf', 50, 'application/pdf');

    $this->post(route('education-instructor.store'), [
        'name' => 'Jane Doe',
        'documents' => [$file],
    ])->assertSessionHasNoErrors();

    expect(EducationInstructor::count())->toBe(1);
});

test('it rejects an instructor document larger than the configured max file size', function () {
    $file = UploadedFile::fake()->create('cv.pdf', 2000, 'application/pdf');

    $this->post(route('education-instructor.store'), [
        'name' => 'Jane Doe',
        'documents' => [$file],
    ])->assertSessionHasErrors('documents.0');

    expect(EducationInstructor::count())->toBe(0);
});
