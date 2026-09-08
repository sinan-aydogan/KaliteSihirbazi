<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::dropIfExists('audits');
        Schema::dropIfExists('audit_firms');
    }

    public function down(): void
    {
        throw new \RuntimeException(
            'Irreversible: dropped audits/audit_firms were dead, empty 2022 scaffold tables with no data to restore.'
        );
    }
};
