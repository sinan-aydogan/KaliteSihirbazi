<?php

use App\Enums\Document\DocumentAuthorityRole;
use App\Models\Department;
use App\Models\Document\Document;
use App\Models\Document\DocumentType;
use App\Models\Document\DocumentTypeAuthority;
use App\Models\Setting;
use App\Models\User;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

beforeEach(function () {
    Storage::fake('public');
    $this->user = User::factory()->create();
    $this->actingAs($this->user);

    $this->department = Department::create(['code' => 'QUALITY', 'name' => 'Quality', 'type' => 'main']);
    $this->documentType = DocumentType::create(['code' => 'PROC', 'name' => 'Procedure']);

    DocumentTypeAuthority::create([
        'document_type_id' => $this->documentType->id,
        'user_id' => $this->user->id,
        'role' => DocumentAuthorityRole::Author,
        'granted_by' => $this->user->id,
    ]);

    Setting::create([
        'code' => 'document_naming_rule',
        'module' => 'document',
        'type' => 'string',
        'value' => 'auto',
    ]);
    Setting::create([
        'code' => 'document_allowed_file_types',
        'module' => 'document',
        'type' => 'json',
        'value' => json_encode(['pdf']),
    ]);
    Setting::create([
        'code' => 'document_max_file_size',
        'module' => 'document',
        'type' => 'json',
        'value' => json_encode(['size' => 1, 'unit' => 'MB']),
    ]);
});

function baseDocumentPayload($test): array
{
    return [
        'name' => 'Quality Manual',
        'department_id' => $test->department->id,
        'document_type_id' => $test->documentType->id,
        'publishing_status' => 'draft',
        'distribution_points' => [],
    ];
}

test('it rejects a file extension outside the configured allowed types', function () {
    $file = UploadedFile::fake()->create('manual.txt', 50, 'text/plain');

    $this->post(route('document.store'), [
        ...baseDocumentPayload($this),
        'file' => $file,
    ])->assertSessionHasErrors('file');

    expect(Document::count())->toBe(0);
});

test('it accepts a file within the configured allowed types and size', function () {
    $file = UploadedFile::fake()->create('manual.pdf', 50, 'application/pdf');

    $this->post(route('document.store'), [
        ...baseDocumentPayload($this),
        'file' => $file,
    ])->assertSessionHasNoErrors()->assertRedirect();

    expect(Document::count())->toBe(1);
    expect(Document::first()->versions()->count())->toBe(1);
});

test('it rejects a file larger than the configured max file size', function () {
    $file = UploadedFile::fake()->create('manual.pdf', 2000, 'application/pdf');

    $this->post(route('document.store'), [
        ...baseDocumentPayload($this),
        'file' => $file,
    ])->assertSessionHasErrors('file');

    expect(Document::count())->toBe(0);
});
