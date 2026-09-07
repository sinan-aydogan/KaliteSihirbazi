<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * `document_actions` was an empty, never-wired scaffold (id + timestamps
     * only, no model/controller/policy actually used it). The real
     * "Dökümantasyon > Aksiyonlar" feature is backed by the already-populated
     * `document_activity_logs` table instead.
     */
    public function up(): void
    {
        Schema::dropIfExists('document_actions');
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::create('document_actions', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
        });
    }
};
