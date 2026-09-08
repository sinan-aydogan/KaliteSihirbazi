<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * `problems` was an empty, never-wired 2022 scaffold (id + timestamps
     * only, no model/controller/policy actually used it). The real
     * "Uygunsuzluklar" module replaces it with proper schema in the
     * migrations that follow this one.
     */
    public function up(): void
    {
        Schema::dropIfExists('problems');
    }

    public function down(): void
    {
        Schema::create('problems', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
        });
    }
};
