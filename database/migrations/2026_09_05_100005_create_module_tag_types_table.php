<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Which tag types a given module (by its route key, e.g. "document") shows
     * to its users. The tag pool itself (tag_types/tags) is global; this table
     * is only the per-module visibility toggle.
     */
    public function up(): void
    {
        Schema::create('module_tag_types', function (Blueprint $table) {
            $table->id();
            $table->string('module_key');
            $table->foreignId('tag_type_id')->constrained('tag_types')->cascadeOnDelete();
            $table->timestamps();

            $table->unique(['module_key', 'tag_type_id']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('module_tag_types');
    }
};
