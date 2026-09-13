<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCustomerComplaintReportTemplateRequest;
use App\Http\Requests\UpdateCustomerComplaintReportTemplateRequest;
use App\Models\CustomerComplaintReportTemplate;
use App\Services\CustomerComplaint\CustomerComplaintAnalyticsService;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class CustomerComplaintAnalyticsController extends Controller
{
    public function index(CustomerComplaintAnalyticsService $analytics)
    {
        $defaultBreakdowns = [
            [
                'title' => 'Kaynağa Göre Dağılım',
                'chart_type' => 'bar',
                'data' => $analytics->breakdown('source_type'),
            ],
            [
                'title' => 'Önem Derecesine Göre Dağılım',
                'chart_type' => 'pie',
                'data' => $analytics->breakdown('severity'),
            ],
            [
                'title' => 'Duruma Göre Dağılım',
                'chart_type' => 'pie',
                'data' => $analytics->breakdown('status'),
            ],
            [
                'title' => 'Aylık Şikayet Trendi',
                'chart_type' => 'line',
                'data' => $analytics->monthlyTrend(),
            ],
        ];

        $templates = CustomerComplaintReportTemplate::with('createdBy:id,name')
            ->where(fn ($query) => $query->where('created_by_id', auth()->id())->orWhere('is_shared', true))
            ->latest('id')
            ->get()
            ->map(function (CustomerComplaintReportTemplate $template) use ($analytics) {
                $config = $template->config;

                return [
                    ...$template->toArray(),
                    'data' => $analytics->breakdown(
                        $config['group_by'],
                        $config['metric'] ?? 'count',
                        $config['date_from'] ?? null,
                        $config['date_to'] ?? null
                    ),
                    'can_manage' => $template->created_by_id === auth()->id(),
                ];
            });

        return Inertia::render('Modules/CustomerComplaint/Analytics/IndexPage', [
            'summary' => $analytics->summary(),
            'defaultBreakdowns' => $defaultBreakdowns,
            'templates' => $templates,
        ]);
    }

    public function preview(Request $request, CustomerComplaintAnalyticsService $analytics)
    {
        $validated = $request->validate([
            'group_by' => ['required', Rule::in(CustomerComplaintAnalyticsService::DIMENSIONS)],
            'metric' => ['required', Rule::in(CustomerComplaintAnalyticsService::METRICS)],
            'date_from' => 'nullable|date',
            'date_to' => 'nullable|date|after_or_equal:date_from',
        ]);

        return response()->json($analytics->breakdown(
            $validated['group_by'],
            $validated['metric'],
            $validated['date_from'] ?? null,
            $validated['date_to'] ?? null
        ));
    }

    public function store(StoreCustomerComplaintReportTemplateRequest $request)
    {
        CustomerComplaintReportTemplate::create([
            ...$request->validated(),
            'created_by_id' => auth()->id(),
        ]);

        session()->flash('message', ['type' => 'success', 'content' => __('messages.customerComplaintReportTemplate.created')]);

        return redirect()->back();
    }

    public function update(UpdateCustomerComplaintReportTemplateRequest $request, CustomerComplaintReportTemplate $customerComplaintReportTemplate)
    {
        $customerComplaintReportTemplate->update($request->validated());

        session()->flash('message', ['type' => 'success', 'content' => __('messages.customerComplaintReportTemplate.updated')]);

        return redirect()->back();
    }

    public function destroy(CustomerComplaintReportTemplate $customerComplaintReportTemplate)
    {
        abort_if($customerComplaintReportTemplate->created_by_id !== auth()->id(), 403);

        $customerComplaintReportTemplate->delete();

        session()->flash('message', ['type' => 'danger', 'content' => __('messages.customerComplaintReportTemplate.deleted')]);

        return redirect()->back();
    }
}
