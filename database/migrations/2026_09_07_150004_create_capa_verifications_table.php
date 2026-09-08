<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('capa_verifications', function (Blueprint $table) {
            $table->id();
            $table->foreignId('capa_id')->constrained('capas')->cascadeOnDelete();
            $table->foreignId('verified_by_id')->constrained('users');
            $table->date('verification_date');
            $table->boolean('is_effective');
            $table->text('notes')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('capa_verifications');
    }
};
