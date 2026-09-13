<?php

use App\Models\Customer;
use App\Models\CustomerComplaintReportTemplate;
use App\Models\User;
use App\Services\CustomerComplaint\CustomerComplaintWorkflowService;
use Inertia\Testing\AssertableInertia as Assert;

function makeAnalyticsComplaint(User $author, array $overrides = [])
{
    $customer = Customer::create(['name' => 'Analitik Test Müşterisi']);

    $complaint = app(CustomerComplaintWorkflowService::class)->create([
        'complaint_source_type_id' => complaintSourceTypeId('customer'),
        'complaint_subject_id' => complaintSubjectId('other'),
        'customer_id' => $customer->id,
        'title' => 'Analitik test şikayeti',
        'description' => 'Açıklama',
        'channel' => 'portal',
        'severity' => 'high',
        'received_date' => now()->toDateString(),
    ], $author);

    if ($overrides !== []) {
        $complaint->update($overrides);
    }

    return $complaint->fresh();
}

test('analytics page renders with summary, default breakdowns and templates', function () {
    $user = User::factory()->create();
    makeAnalyticsComplaint($user);

    $this->actingAs($user)
        ->get(route('customer-complaint-analytics.index'))
        ->assertInertia(fn (Assert $page) => $page
            ->component('Modules/CustomerComplaint/Analytics/IndexPage')
            ->has('summary.total')
            ->has('defaultBreakdowns', 4)
            ->has('templates')
        );
});

test('summary counts overdue complaints whose response is past due and still open', function () {
    $user = User::factory()->create();
    makeAnalyticsComplaint($user, ['response_due_date' => now()->subDay()->toDateString()]);
    makeAnalyticsComplaint($user, ['response_due_date' => now()->addDay()->toDateString()]);

    $response = $this->actingAs($user)->get(route('customer-complaint-analytics.index'));

    $response->assertInertia(fn (Assert $page) => $page->where('summary.overdue', 1));
});

test('summary computes average resolution days from closed complaints', function () {
    $user = User::factory()->create();
    $receivedMoment = now()->startOfDay()->subDays(4);
    makeAnalyticsComplaint($user, [
        'status' => 'closed',
        'received_date' => $receivedMoment->toDateString(),
        'closed_at' => $receivedMoment->copy()->addDays(3),
    ]);
    makeAnalyticsComplaint($user, [
        'status' => 'closed',
        'received_date' => $receivedMoment->toDateString(),
        'closed_at' => $receivedMoment->copy()->addDays(4),
    ]);

    $response = $this->actingAs($user)->get(route('customer-complaint-analytics.index'));

    $response->assertInertia(fn (Assert $page) => $page->where('summary.avg_resolution_days', 3.5));
});

test('preview endpoint returns aggregated labels and values for a valid config', function () {
    $user = User::factory()->create();
    makeAnalyticsComplaint($user, ['severity' => 'high']);

    $this->actingAs($user)
        ->postJson(route('customer-complaint-analytics.preview'), [
            'group_by' => 'severity',
            'metric' => 'count',
        ])
        ->assertOk()
        ->assertJsonStructure(['labels', 'values']);
});

test('preview rejects an unsupported group_by value', function () {
    $user = User::factory()->create();

    $this->actingAs($user)
        ->postJson(route('customer-complaint-analytics.preview'), [
            'group_by' => 'not_a_real_dimension',
            'metric' => 'count',
        ])
        ->assertJsonValidationErrors('group_by');
});

test('a user can save a report template', function () {
    $user = User::factory()->create();

    $this->actingAs($user)
        ->post(route('customer-complaint-report-template.store'), [
            'name' => 'Konuya Göre Dağılım',
            'config' => [
                'chart_type' => 'bar',
                'group_by' => 'subject',
                'metric' => 'count',
            ],
        ])
        ->assertSessionHasNoErrors();

    $template = CustomerComplaintReportTemplate::first();

    expect($template->name)->toBe('Konuya Göre Dağılım')
        ->and($template->created_by_id)->toBe($user->id)
        ->and($template->is_shared)->toBeFalse();
});

test('saving a template rejects an invalid chart_type', function () {
    $user = User::factory()->create();

    $this->actingAs($user)
        ->post(route('customer-complaint-report-template.store'), [
            'name' => 'Geçersiz Şablon',
            'config' => [
                'chart_type' => 'not_a_chart',
                'group_by' => 'subject',
                'metric' => 'count',
            ],
        ])
        ->assertSessionHasErrors('config.chart_type');
});

test('a user cannot update another user\'s report template', function () {
    $owner = User::factory()->create();
    $other = User::factory()->create();
    $template = CustomerComplaintReportTemplate::create([
        'name' => 'Sahibine Özel',
        'created_by_id' => $owner->id,
        'config' => ['chart_type' => 'bar', 'group_by' => 'severity', 'metric' => 'count'],
    ]);

    $this->actingAs($other)
        ->put(route('customer-complaint-report-template.update', $template), [
            'name' => 'Değiştirildi',
            'config' => ['chart_type' => 'pie', 'group_by' => 'status', 'metric' => 'count'],
        ])
        ->assertForbidden();
});

test('a user cannot delete another user\'s report template', function () {
    $owner = User::factory()->create();
    $other = User::factory()->create();
    $template = CustomerComplaintReportTemplate::create([
        'name' => 'Sahibine Özel',
        'created_by_id' => $owner->id,
        'config' => ['chart_type' => 'bar', 'group_by' => 'severity', 'metric' => 'count'],
    ]);

    $this->actingAs($other)
        ->delete(route('customer-complaint-report-template.destroy', $template))
        ->assertForbidden();

    expect(CustomerComplaintReportTemplate::find($template->id))->not->toBeNull();
});

test('the owner can delete their own report template', function () {
    $user = User::factory()->create();
    $template = CustomerComplaintReportTemplate::create([
        'name' => 'Silinecek Şablon',
        'created_by_id' => $user->id,
        'config' => ['chart_type' => 'bar', 'group_by' => 'severity', 'metric' => 'count'],
    ]);

    $this->actingAs($user)
        ->delete(route('customer-complaint-report-template.destroy', $template))
        ->assertSessionHasNoErrors();

    expect(CustomerComplaintReportTemplate::find($template->id))->toBeNull();
});
