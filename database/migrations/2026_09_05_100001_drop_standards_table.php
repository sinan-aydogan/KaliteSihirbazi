<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * The `standards` table was scaffolding (id + timestamps only) for a
     * "Standard" concept that was never implemented; the global tag system
     * (tag_types/tags) now covers linking records to a standard/regulation/topic.
     */
    public function up(): void
    {
        Schema::dropIfExists('standards');
    }

    public function down(): void
    {
        Schema::create('standards', function ($table) {
            $table->id();
            $table->timestamps();
        });
    }
};
