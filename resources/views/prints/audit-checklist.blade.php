<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <title>{{ $title }}</title>
    <style>
        * { box-sizing: border-box; }
        body { font-family: Arial, Helvetica, sans-serif; color: #1e293b; margin: 2rem; }
        h1 { font-size: 1.25rem; margin-bottom: 0.25rem; }
        .meta { color: #64748b; font-size: 0.85rem; margin-bottom: 1.5rem; }
        .meta span { margin-right: 1.5rem; }
        table { width: 100%; border-collapse: collapse; }
        th, td { border: 1px solid #cbd5e1; padding: 0.5rem 0.6rem; font-size: 0.85rem; text-align: left; vertical-align: top; }
        th { background: #f1f5f9; }
        .q-no { width: 2.5rem; }
        .q-ref { width: 9rem; color: #64748b; }
        .q-answer { width: 6.5rem; }
        .q-notes { width: 14rem; }
        .blank-line { display: inline-block; width: 100%; border-bottom: 1px solid #94a3b8; height: 1.1rem; }
        .print-button { margin-bottom: 1.5rem; }
        @media print {
            .print-button { display: none; }
            body { margin: 0.5cm; }
        }
    </style>
</head>
<body>
    <button class="print-button" onclick="window.print()">Yazdır / PDF Olarak İndir</button>

    <h1>{{ $title }}</h1>
    <div class="meta">
        @foreach ($meta as $label => $value)
            <span><strong>{{ $label }}:</strong> {{ $value }}</span>
        @endforeach
    </div>

    <table>
        <thead>
        <tr>
            <th class="q-no">#</th>
            <th>Soru</th>
            <th class="q-ref">Standart Referansı</th>
            <th class="q-answer">Sonuç</th>
            <th class="q-notes">Not</th>
        </tr>
        </thead>
        <tbody>
        @foreach ($questions as $index => $question)
            <tr>
                <td class="q-no">{{ $index + 1 }}</td>
                <td>{{ $question['question'] }}</td>
                <td class="q-ref">{{ $question['standard_reference'] ?? '' }}</td>
                <td class="q-answer">{{ $question['answer'] ?? '' }}@if(!$question['answer'])<span class="blank-line"></span>@endif</td>
                <td class="q-notes">{{ $question['notes'] ?? '' }}@if(!$question['notes'])<span class="blank-line"></span>@endif</td>
            </tr>
        @endforeach
        </tbody>
    </table>
</body>
</html>
