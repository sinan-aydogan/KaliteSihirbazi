<?php

use App\Models\ContinuousImprovement\FiveSAudit;
use App\Models\ContinuousImprovement\KaizenCategory;
use App\Models\ContinuousImprovement\KaizenSuggestion;
use App\Models\User;
use Inertia\Testing\AssertableInertia as Assert;

test('the continuous improvement hub renders a summary', function () {
    $category = KaizenCategory::where('key', 'efficiency')->first();

    KaizenSuggestion::factory()->create(['kaizen_category_id' => $category->id, 'status' => 'submitted']);
    KaizenSuggestion::factory()->create([
        'kaizen_category_id' => $category->id,
        'status' => 'implemented',
        'completed_at' => now()->toDateString(),
        'realized_annual_saving' => 2000,
    ]);
    FiveSAudit::factory()->create([
        'sort_score' => 5, 'set_in_order_score' => 5, 'shine_score' => 5, 'standardize_score' => 5, 'sustain_score' => 5,
    ]);

    $this->actingAs(User::factory()->create())
        ->get(route('continuous-improvement.index'))
        ->assertInertia(fn (Assert $page) => $page
            ->component('Modules/ContinuousImprovement/IndexPage')
            ->where('summary.open_suggestions', 1)
            ->where('summary.implemented_this_year', 1)
            ->has('summary.average_5s_score')
            ->has('recentSuggestions')
            ->has('recentAudits')
        );
});
