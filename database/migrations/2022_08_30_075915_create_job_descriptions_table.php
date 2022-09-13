<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('job_descriptions', function (Blueprint $table) {
            $table->id();
            $table->string('code', 10)->unique();
            $table->string('name',150);
            $table->string('description',750);
            $table->string('staff_type',10)->default('blue')->nullable();
            $table->foreignIdFor(\App\Models\Department::class)->nullable();
            $table->json('responsibilities');
            $table->json('powers');
            $table->json('requirements');
            $table->json('skills');
            $table->json('working_conditions');
            $table->json('working_tools');
            $table->json('working_hours');
            $table->json('overtime_status');
            $table->json('travel_status');
            $table->boolean('status')->default(true);
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('job_descriptions');
    }
};
