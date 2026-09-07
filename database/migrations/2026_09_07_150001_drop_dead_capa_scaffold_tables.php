<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * `capas` and `capa_actions` were empty, never-wired 2022 scaffolds
     * (id + timestamps only, no model/controller/policy actually used
     * them). The real CAPA module replaces them with proper schema in the
     * migrations that follow this one.
     */
    public function up(): void
    {
        Schema::dropIfExists('capa_actions');
        Schema::dropIfExists('capas');
    }

    public function down(): void
    {
        Schema::create('capas', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
        });

        Schema::create('capa_actions', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
        });
    }
};
