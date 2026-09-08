<?php

use App\Models\AuditChecklistTemplate;
use App\Models\AuditScope;
use Database\Seeders\Audit\AuditChecklistTemplateSeeder;
use Database\Seeders\Audit\AuditDefinitionSeeder;

test('the starter checklist templates seed with realistic questions covering every question type', function () {
    (new AuditDefinitionSeeder)->run();
    (new AuditChecklistTemplateSeeder)->run();

    expect(AuditChecklistTemplate::count())->toBe(5);

    $usedTypes = AuditChecklistTemplate::with('questions')->get()
        ->flatMap(fn ($template) => $template->questions->pluck('question_type'))
        ->map(fn ($type) => $type->value)
        ->unique()
        ->sort()
        ->values();

    expect($usedTypes->all())->toBe(['compliance_4', 'file_evidence', 'numeric', 'rating_1_5', 'text', 'yes_no']);

    $processScope = AuditScope::where('key', 'process')->first();
    expect(AuditChecklistTemplate::where('name', 'ISO 9001 Proses Denetimi')->first()->audit_scope_id)->toBe($processScope->id);
});

test('running the checklist template seeder twice does not duplicate templates or questions', function () {
    (new AuditDefinitionSeeder)->run();
    (new AuditChecklistTemplateSeeder)->run();
    (new AuditChecklistTemplateSeeder)->run();

    expect(AuditChecklistTemplate::count())->toBe(5);
});
