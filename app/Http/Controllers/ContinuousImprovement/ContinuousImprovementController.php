<?php

namespace App\Http\Controllers\ContinuousImprovement;

use App\Enums\ImprovementFindingStatus;
use App\Enums\KaizenSuggestionStatus;
use App\Http\Controllers\Controller;
use App\Models\ContinuousImprovement\FiveSAudit;
use App\Models\ContinuousImprovement\GembaWalkFinding;
use App\Models\ContinuousImprovement\KaizenSuggestion;
use Inertia\Inertia;

class ContinuousImprovementController extends Controller
{
    public function index()
    {
        $openStatuses = [
            KaizenSuggestionStatus::Submitted,
            KaizenSuggestionStatus::UnderReview,
            KaizenSuggestionStatus::Approved,
            KaizenSuggestionStatus::InProgress,
        ];

        $summary = [
            'open_suggestions' => KaizenSuggestion::whereIn('status', $openStatuses)->count(),
            'implemented_this_year' => KaizenSuggestion::whereIn('status', [KaizenSuggestionStatus::Implemented, KaizenSuggestionStatus::Closed])
                ->whereYear('completed_at', now()->year)
                ->count(),
            'realized_saving_this_year' => (float) KaizenSuggestion::whereIn('status', [KaizenSuggestionStatus::Implemented, KaizenSuggestionStatus::Closed])
                ->whereYear('completed_at', now()->year)
                ->sum('realized_annual_saving'),
            'average_5s_score' => round((float) FiveSAudit::latest('audit_date')->limit(20)->avg('total_score'), 1),
            'open_gemba_findings' => GembaWalkFinding::where('status', '!=', ImprovementFindingStatus::Resolved)->count(),
        ];

        $recentSuggestions = KaizenSuggestion::with(['category:id,name'])
            ->latest('id')
            ->limit(5)
            ->get(['id', 'code', 'title', 'kaizen_category_id', 'status', 'created_at']);

        $recentAudits = FiveSAudit::with(['area:id,name'])
            ->latest('audit_date')
            ->limit(5)
            ->get(['id', 'code', 'continuous_improvement_area_id', 'audit_date', 'total_score']);

        return Inertia::render('Modules/ContinuousImprovement/IndexPage', [
            'summary' => $summary,
            'recentSuggestions' => $recentSuggestions,
            'recentAudits' => $recentAudits,
        ]);
    }
}
