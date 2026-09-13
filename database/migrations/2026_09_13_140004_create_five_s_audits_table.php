<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('five_s_audits', function (Blueprint $table) {
            $table->id();
            $table->string('code')->unique();
            $table->foreignId('continuous_improvement_area_id')->constrained('continuous_improvement_areas')->restrictOnDelete();
            $table->foreignId('audited_by_id')->nullable()->constrained('users')->nullOnDelete();
            $table->date('audit_date');

            $table->unsignedTinyInteger('sort_score');
            $table->unsignedTinyInteger('set_in_order_score');
            $table->unsignedTinyInteger('shine_score');
            $table->unsignedTinyInteger('standardize_score');
            $table->unsignedTinyInteger('sustain_score');
            $table->unsignedTinyInteger('total_score');

            $table->text('general_note')->nullable();

            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('five_s_audits');
    }
};
