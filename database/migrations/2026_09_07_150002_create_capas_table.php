<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('capas', function (Blueprint $table) {
            $table->id();
            $table->string('code')->unique();
            $table->string('title');
            $table->string('type');
            $table->text('description');
            $table->string('source_type')->nullable();
            $table->unsignedBigInteger('source_id')->nullable();
            $table->text('root_cause')->nullable();
            $table->string('status')->default('open');
            $table->foreignId('opened_by_id')->constrained('users');
            $table->foreignId('responsible_id')->constrained('users');
            $table->date('due_date');
            $table->timestamp('closed_at')->nullable();
            $table->timestamps();

            $table->index(['source_type', 'source_id']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('capas');
    }
};
