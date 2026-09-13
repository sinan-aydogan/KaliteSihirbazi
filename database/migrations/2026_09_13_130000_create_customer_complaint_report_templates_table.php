<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('customer_complaint_report_templates', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->foreignId('created_by_id')->constrained('users')->cascadeOnDelete();
            $table->boolean('is_shared')->default(false);
            $table->json('config');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('customer_complaint_report_templates');
    }
};
