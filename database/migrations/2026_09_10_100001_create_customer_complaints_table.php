<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('customer_complaints', function (Blueprint $table) {
            $table->id();
            $table->string('code')->unique();
            $table->foreignId('customer_id')->constrained()->cascadeOnDelete();
            $table->string('title');
            $table->text('description');
            $table->string('channel');
            $table->string('product_reference')->nullable();
            $table->string('severity');
            $table->date('received_date');
            $table->date('response_due_date')->nullable();
            $table->timestamp('first_response_at')->nullable();
            $table->string('status');
            $table->text('resolution_summary')->nullable();
            $table->timestamp('customer_notified_at')->nullable();
            $table->unsignedTinyInteger('customer_satisfaction_rating')->nullable();
            $table->text('reopen_reason')->nullable();
            $table->unsignedInteger('reopened_count')->default(0);
            $table->foreignId('reported_by_id')->constrained('users')->cascadeOnDelete();
            $table->foreignId('department_id')->nullable()->constrained()->nullOnDelete();
            $table->timestamp('closed_at')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('customer_complaints');
    }
};
