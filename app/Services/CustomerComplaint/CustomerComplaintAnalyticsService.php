<?php

namespace App\Services\CustomerComplaint;

use App\Enums\ComplaintChannel;
use App\Enums\CustomerComplaintStatus;
use App\Models\ComplaintSourceType;
use App\Models\ComplaintSubject;
use App\Models\CustomerComplaint;
use App\Models\Department;
use App\Models\Distributor;
use App\Models\Supplier;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;

class CustomerComplaintAnalyticsService
{
    public const DIMENSIONS = ['source_type', 'subject', 'severity', 'status', 'channel', 'department', 'distributor', 'supplier', 'month'];

    public const METRICS = ['count', 'avg_resolution_days'];

    private const SEVERITY_LABELS = [
        'low' => 'Düşük',
        'medium' => 'Orta',
        'high' => 'Yüksek',
        'critical' => 'Kritik',
    ];

    public function summary(): array
    {
        $total = CustomerComplaint::count();

        $byStatus = CustomerComplaint::selectRaw('status, count(*) as count')
            ->groupBy('status')
            ->pluck('count', 'status');

        $avgResolutionDays = CustomerComplaint::whereNotNull('closed_at')
            ->selectRaw("AVG({$this->resolutionDaysExpression()}) as value")
            ->value('value');

        $overdueCount = CustomerComplaint::whereNotNull('response_due_date')
            ->where('response_due_date', '<', now())
            ->whereNotIn('status', [CustomerComplaintStatus::Resolved->value, CustomerComplaintStatus::Closed->value])
            ->count();

        return [
            'total' => $total,
            'open' => $total - (int) ($byStatus[CustomerComplaintStatus::Closed->value] ?? 0),
            'avg_resolution_days' => $avgResolutionDays !== null ? round((float) $avgResolutionDays, 1) : null,
            'overdue' => $overdueCount,
        ];
    }

    public function monthlyTrend(int $months = 12): array
    {
        $from = now()->subMonths($months - 1)->startOfMonth();

        $rows = CustomerComplaint::where('received_date', '>=', $from)
            ->selectRaw("{$this->monthBucketExpression('received_date')} as bucket, count(*) as value")
            ->groupBy('bucket')
            ->orderBy('bucket')
            ->pluck('value', 'bucket');

        $labels = [];
        $values = [];
        for ($i = 0; $i < $months; $i++) {
            $month = $from->copy()->addMonths($i);
            $key = $month->format('Y-m');
            $labels[] = $month->translatedFormat('M Y');
            $values[] = (int) ($rows[$key] ?? 0);
        }

        return ['labels' => $labels, 'values' => $values];
    }

    public function breakdown(string $groupBy, string $metric = 'count', ?string $dateFrom = null, ?string $dateTo = null): array
    {
        if ($groupBy === 'month') {
            return $this->monthlyTrend();
        }

        $query = CustomerComplaint::query();
        $this->applyDateRange($query, $dateFrom, $dateTo);

        if ($metric === 'avg_resolution_days') {
            $query->whereNotNull('closed_at');
        }

        $column = $this->columnFor($groupBy);
        $valueExpr = $metric === 'avg_resolution_days'
            ? "AVG({$this->resolutionDaysExpression()})"
            : 'COUNT(*)';

        $rows = $query
            ->selectRaw("{$column} as bucket, {$valueExpr} as value")
            ->groupBy($column)
            ->pluck('value', 'bucket');

        $labels = [];
        $values = [];

        foreach ($rows as $bucket => $value) {
            $labels[] = $this->labelFor($groupBy, $bucket);
            $values[] = $metric === 'avg_resolution_days' ? round((float) $value, 1) : (int) $value;
        }

        return ['labels' => $labels, 'values' => $values];
    }

    /**
     * Fractional days between received_date and closed_at, portable across Postgres (production) and SQLite (tests).
     */
    private function resolutionDaysExpression(): string
    {
        return match (DB::connection()->getDriverName()) {
            'sqlite' => 'julianday(closed_at) - julianday(received_date)',
            default => 'EXTRACT(EPOCH FROM (closed_at - received_date)) / 86400',
        };
    }

    private function monthBucketExpression(string $column): string
    {
        return match (DB::connection()->getDriverName()) {
            'sqlite' => "strftime('%Y-%m', {$column})",
            default => "to_char({$column}, 'YYYY-MM')",
        };
    }

    private function applyDateRange(Builder $query, ?string $dateFrom, ?string $dateTo): void
    {
        if ($dateFrom) {
            $query->where('received_date', '>=', Carbon::parse($dateFrom));
        }

        if ($dateTo) {
            $query->where('received_date', '<=', Carbon::parse($dateTo));
        }
    }

    private function columnFor(string $groupBy): string
    {
        return match ($groupBy) {
            'source_type' => 'complaint_source_type_id',
            'subject' => 'complaint_subject_id',
            'department' => 'department_id',
            'distributor' => 'distributor_id',
            'supplier' => 'supplier_id',
            'severity' => 'severity',
            'status' => 'status',
            'channel' => 'channel',
            default => throw new \InvalidArgumentException("Unsupported group_by [{$groupBy}]"),
        };
    }

    private function labelFor(string $groupBy, mixed $bucket): string
    {
        if ($bucket === null || $bucket === '') {
            return '-';
        }

        return match ($groupBy) {
            'source_type' => ComplaintSourceType::find($bucket)?->name ?? '-',
            'subject' => ComplaintSubject::find($bucket)?->name ?? '-',
            'department' => Department::find($bucket)?->name ?? '-',
            'distributor' => Distributor::find($bucket)?->name ?? '-',
            'supplier' => Supplier::find($bucket)?->name ?? '-',
            'severity' => self::SEVERITY_LABELS[$bucket] ?? $bucket,
            'status' => CustomerComplaintStatus::from($bucket)->label(),
            'channel' => ComplaintChannel::from($bucket)->label(),
            default => (string) $bucket,
        };
    }
}
