<?php

use App\Models\Department;
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
            $table->string('name', 150);
            $table->string('description', 750)->nullable();
            $table->string('staff_type', 10)->default('blue')->nullable();
            $table->foreignIdFor(Department::class)->nullable()->constrained()->nullOnDelete();
            $table->jsonb('responsibilities');
            $table->jsonb('powers');
            $table->jsonb('requirements');
            $table->jsonb('skills');
            $table->jsonb('working_conditions');
            $table->jsonb('working_tools');
            $table->jsonb('working_hours');
            $table->jsonb('overtime_status');
            $table->jsonb('travel_status');
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
