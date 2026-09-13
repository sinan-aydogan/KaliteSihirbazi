<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <title>Kalibrasyon Raporu — {{ $task->device->code }}</title>
    <style>
        * { box-sizing: border-box; }
        body { font-family: Arial, Helvetica, sans-serif; color: #1e293b; margin: 2rem; }
        h1 { font-size: 1.25rem; margin-bottom: 0.25rem; }
        h2 { font-size: 1rem; margin: 1.5rem 0 0.5rem; }
        .meta { color: #64748b; font-size: 0.85rem; margin-bottom: 1rem; }
        .meta-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.25rem 2rem; margin-bottom: 1.5rem; font-size: 0.85rem; }
        .meta-grid div span:first-child { color: #64748b; display: inline-block; min-width: 11rem; }
        table { width: 100%; border-collapse: collapse; }
        th, td { border: 1px solid #cbd5e1; padding: 0.5rem 0.6rem; font-size: 0.85rem; text-align: left; vertical-align: top; }
        th { background: #f1f5f9; }
        .result-badge { display: inline-block; padding: 0.15rem 0.6rem; border-radius: 0.25rem; font-size: 0.8rem; }
        .result-passed { background: #d1fae5; color: #065f46; }
        .result-failed { background: #fee2e2; color: #991b1b; }
        .print-button { margin-bottom: 1.5rem; }
        .notes { font-size: 0.85rem; white-space: pre-wrap; }
        @media print {
            .print-button { display: none; }
            body { margin: 0.5cm; }
        }
    </style>
</head>
<body>
    <button class="print-button" onclick="window.print()">Yazdır / PDF Olarak İndir</button>

    <h1>Kalibrasyon Raporu — {{ $task->device->code }}</h1>
    <div class="meta">Rapor No: {{ $task->report_number ?? '—' }}</div>

    <div class="meta-grid">
        <div><span>Cihaz</span> {{ $task->device->code }} ({{ $task->device->type->name ?? '—' }})</div>
        <div><span>Departman</span> {{ $task->device->department->name ?? '—' }}</div>
        <div><span>Kalibrasyon Türü</span> {{ $task->type === 'internal' ? 'İç Kalibrasyon' : 'Dış Kalibrasyon' }}</div>
        @if ($task->type === 'internal')
            <div><span>Referans Cihaz (Etalon)</span> {{ $task->referenceDevice->code ?? '—' }} ({{ $task->referenceDevice->type->name ?? '—' }})</div>
            <div><span>Kalibrasyonu Yapan</span> {{ $task->performedBy->user->name ?? '—' }}</div>
        @else
            <div><span>Kalibrasyon Firması</span> {{ $task->firm->name ?? '—' }}</div>
        @endif
        <div><span>Planlanan Tarih</span> {{ optional($task->planned_date)->format('d.m.Y') }}</div>
        <div><span>Gerçekleşme Tarihi</span> {{ optional($task->accomplished_date)->format('d.m.Y') ?? '—' }}</div>
        <div><span>Sonraki Kalibrasyon Tarihi</span> {{ optional($task->next_calibration_date)->format('d.m.Y') ?? '—' }}</div>
        <div>
            <span>Sonuç</span>
            @if ($task->result)
                <span class="result-badge {{ $task->result === 'passed' ? 'result-passed' : 'result-failed' }}">
                    {{ $task->result === 'passed' ? 'Uygun' : 'Uygunsuz' }}
                </span>
            @else
                —
            @endif
        </div>
    </div>

    @if ($task->measurementPoints->isNotEmpty())
        <h2>Ölçüm Noktaları</h2>
        <table>
            <thead>
            <tr>
                <th>#</th>
                <th>Nominal Değer</th>
                <th>Ölçülen Değer</th>
                <th>Birim</th>
                <th>Tolerans (±)</th>
                <th>Sapma</th>
                <th>Sonuç</th>
            </tr>
            </thead>
            <tbody>
            @foreach ($task->measurementPoints as $point)
                <tr>
                    <td>{{ $point->sequence }}</td>
                    <td>{{ $point->nominal_value }}</td>
                    <td>{{ $point->measured_value }}</td>
                    <td>{{ $point->unit }}</td>
                    <td>{{ $point->tolerance ?? '—' }}</td>
                    <td>{{ $point->deviation }}</td>
                    <td>
                        @if ($point->is_within_tolerance === true)
                            <span class="result-badge result-passed">Uygun</span>
                        @elseif ($point->is_within_tolerance === false)
                            <span class="result-badge result-failed">Uygunsuz</span>
                        @else
                            —
                        @endif
                    </td>
                </tr>
            @endforeach
            </tbody>
        </table>
    @endif

    @if ($task->report_notes)
        <h2>Rapor Notları</h2>
        <div class="notes">{{ $task->report_notes }}</div>
    @endif

    @if ($certificateUrl)
        <h2>Kalibrasyon Sertifikası</h2>
        <a href="{{ $certificateUrl }}" target="_blank">Sertifikayı Görüntüle</a>
    @endif
</body>
</html>
