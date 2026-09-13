<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::rename('continuous_improvement_areas', 'areas');

        Schema::table('five_s_audits', function ($table) {
            $table->renameColumn('continuous_improvement_area_id', 'area_id');
        });

        Schema::table('gemba_walks', function ($table) {
            $table->renameColumn('continuous_improvement_area_id', 'area_id');
        });
    }

    public function down(): void
    {
        Schema::table('gemba_walks', function ($table) {
            $table->renameColumn('area_id', 'continuous_improvement_area_id');
        });

        Schema::table('five_s_audits', function ($table) {
            $table->renameColumn('area_id', 'continuous_improvement_area_id');
        });

        Schema::rename('areas', 'continuous_improvement_areas');
    }
};
