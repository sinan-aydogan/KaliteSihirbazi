<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('risk_controls', function (Blueprint $table) {
            $table->id();
            $table->foreignId('risk_id')->constrained()->cascadeOnDelete();
            $table->text('description');
            $table->foreignId('responsible_id')->nullable()->constrained('users')->nullOnDelete();
            $table->date('due_date')->nullable();
            $table->string('status');
            $table->timestamp('completed_at')->nullable();
            $table->string('effectiveness_rating')->default('not_evaluated');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('risk_controls');
    }
};
