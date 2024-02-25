<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('job_descriptions', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('code',25)->unique();
            $table->string('name');
            $table->string('collar_type')->default('white_collar');
            $table->longText('purpose_and_scope')->nullable();
            $table->longText('powers')->nullable();
            $table->longText('responsibilities')->nullable();
            $table->longText('qualifications')->nullable();
            $table->longText('skills')->nullable();
            $table->longText('physical_demands')->nullable();
            $table->longText('work_environment')->nullable();
            $table->longText('work_equipments')->nullable();
            $table->boolean('status')->default(1);
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('job_descriptions');
    }
};
