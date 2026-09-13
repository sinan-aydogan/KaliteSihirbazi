<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('gemba_walks', function (Blueprint $table) {
            $table->id();
            $table->string('code')->unique();
            $table->foreignId('continuous_improvement_area_id')->constrained('continuous_improvement_areas')->restrictOnDelete();
            $table->foreignId('conducted_by_id')->nullable()->constrained('users')->nullOnDelete();
            $table->date('walk_date');
            $table->text('participants')->nullable();
            $table->text('observations');
            $table->text('general_note')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('gemba_walks');
    }
};
