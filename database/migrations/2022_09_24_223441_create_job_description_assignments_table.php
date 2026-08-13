<?php

use App\Models\HumanResources\Employee\Employee;
use App\Models\HumanResources\JobDescription\JobDescription;
use Carbon\Carbon;
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
        Schema::create('job_description_assignments', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Employee::class)->constrained()->cascadeOnDelete();
            $table->foreignIdFor(JobDescription::class)->constrained()->restrictOnDelete();
            $table->foreignId('appointer_id')->constrained('employees')->restrictOnDelete();
            $table->date('assignment_date')->default(Carbon::now());
            $table->boolean('status')->default(true);
            $table->softDeletes();
            $table->timestamps();
            $table->unique(['employee_id', 'job_description_id', 'assignment_date']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('job_description_assignments');
    }
};
