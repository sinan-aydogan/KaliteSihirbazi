<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('capa_actions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('capa_id')->constrained('capas')->cascadeOnDelete();
            $table->text('description');
            $table->foreignId('responsible_id')->constrained('users');
            $table->date('due_date');
            $table->timestamp('completed_at')->nullable();
            $table->string('status')->default('pending');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('capa_actions');
    }
};
