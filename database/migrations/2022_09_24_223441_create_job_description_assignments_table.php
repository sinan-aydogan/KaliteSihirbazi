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
        Schema::create('job_description_assignments', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(\App\Models\HumanResources\Employee\Employee::class);
            $table->foreignIdFor(\App\Models\HumanResources\JobDescription\JobDescription::class);
            $table->foreignId('appointer_id');
            $table->date('assignment_date')->default(\Carbon\Carbon::now());
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
        Schema::dropIfExists('job_description_assignments');
    }
};
