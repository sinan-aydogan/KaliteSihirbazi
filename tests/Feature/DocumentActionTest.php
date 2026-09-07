<?php

use App\Enums\Document\DocumentActivityAction;
use App\Enums\Document\DocumentAuthorityRole;
use App\Models\Department;
use App\Models\Document\Document;
use App\Models\Document\DocumentActivityLog;
use App\Models\Document\DocumentType;
use App\Models\Document\DocumentTypeAuthority;
use App\Models\Setting;
use App\Models\User;
use Illuminate\Support\Facades\Storage;
use Inertia\Testing\AssertableInertia as Assert;

beforeEach(function () {
    Storage::fake('public');
    Setting::create(['code' => 'document_naming_rule', 'module' => 'document', 'type' => 'string', 'value' => 'auto']);
    $this->department = Department::create(['code' => 'QA', 'name' => 'Quality', 'type' => 'main']);

    $this->visibleType = DocumentType::create(['code' => 'PROC', 'name' => 'Procedure']);
    $this->hiddenType = DocumentType::create(['code' => 'FORM', 'name' => 'Form']);
    $this->creator = User::factory()->create();

    $this->visibleDocument = Document::create([
        'code' => 'QA.PROC.1',
        'name' => 'Visible Manual',
        'department_id' => $this->department->id,
        'document_type_id' => $this->visibleType->id,
        'creator_id' => $this->creator->id,
        'publishing_status' => 'draft',
    ]);
    $this->visibleDocument->addMediaFromString('dummy')->usingFileName('manual.pdf')->toMediaCollection('document');

    $this->hiddenDocument = Document::create([
        'code' => 'QA.FORM.1',
        'name' => 'Hidden Form',
        'department_id' => $this->department->id,
        'document_type_id' => $this->hiddenType->id,
        'creator_id' => $this->creator->id,
        'publishing_status' => 'draft',
    ]);
    $this->hiddenDocument->addMediaFromString('dummy')->usingFileName('form.pdf')->toMediaCollection('document');

    DocumentActivityLog::record($this->visibleDocument, DocumentActivityAction::Created, $this->creator);
    DocumentActivityLog::record($this->hiddenDocument, DocumentActivityAction::Created, $this->creator);
});

test('a user only sees action logs for documents visible to them', function () {
    $viewer = User::factory()->create();
    DocumentTypeAuthority::create([
        'document_type_id' => $this->visibleType->id,
        'user_id' => $viewer->id,
        'role' => DocumentAuthorityRole::Viewer,
        'granted_by' => $this->creator->id,
    ]);

    $this->actingAs($viewer)->get(route('document-action.index'))
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->component('Modules/Document/Action/IndexPage')
            ->where('tableData.data.0.document.code', 'QA.PROC.1')
            ->count('tableData.data', 1)
        );
});

test('a global admin sees action logs for every document', function () {
    \Spatie\Permission\Models\Role::findOrCreate('Kalite Yöneticisi');
    $admin = User::factory()->create();
    $admin->assignRole('Kalite Yöneticisi');

    $this->actingAs($admin)->get(route('document-action.index'))
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->component('Modules/Document/Action/IndexPage')
            ->count('tableData.data', 2)
        );
});

test('an unrelated user sees no action logs at all', function () {
    $stranger = User::factory()->create();

    $this->actingAs($stranger)->get(route('document-action.index'))
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->component('Modules/Document/Action/IndexPage')
            ->count('tableData.data', 0)
        );
});

test('each logged action exposes a human-readable label', function () {
    \Spatie\Permission\Models\Role::findOrCreate('Kalite Yöneticisi');
    $admin = User::factory()->create();
    $admin->assignRole('Kalite Yöneticisi');

    $this->actingAs($admin)->get(route('document-action.index'))
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->where('tableData.data.0.action_label', DocumentActivityAction::Created->label())
        );
});

test('the real workflow actions actually appear in the log a viewer can see', function () {
    $author = User::factory()->create();
    DocumentTypeAuthority::create([
        'document_type_id' => $this->visibleType->id,
        'user_id' => $author->id,
        'role' => DocumentAuthorityRole::Author,
        'granted_by' => $this->creator->id,
    ]);

    $version = $this->visibleDocument->versions()->create([
        'revised_by' => $author->id,
        'version' => 1,
        'status' => \App\Enums\Document\DocumentVersionStatus::Draft,
    ]);

    $this->actingAs($author)->post(route('document-version.submit', $version))->assertSessionHasNoErrors();

    $this->actingAs($author)->get(route('document-action.index'))
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->where('tableData.data.0.action_label', DocumentActivityAction::SubmittedForReview->label())
        );
});
