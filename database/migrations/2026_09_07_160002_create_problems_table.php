<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('problems', function (Blueprint $table) {
            $table->id();
            $table->string('code')->unique();
            $table->string('title');
            $table->text('description');
            $table->string('source_type');
            $table->string('severity');
            $table->string('status')->default('open');
            $table->foreignId('detected_by_id')->constrained('users');
            $table->foreignId('department_id')->nullable()->constrained('departments')->nullOnDelete();
            $table->date('detected_date');
            $table->timestamp('closed_at')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('problems');
    }
};
