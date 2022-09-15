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
        Schema::create('employees', function (Blueprint $table) {
            $table->id();
            $table->boolean('has_account')->default(false);
            $table->string('code', 25)->unique();
            $table->string('name', 250)->nullable();
            $table->foreignIdFor(\App\Models\Department::class)->nullable();
            $table->string('employment_type')->nullable();
            $table->string('sex')->nullable();
            $table->boolean('is_married')->default(false);
            $table->json('contact_info')->nullable();
            $table->unsignedSmallInteger('children_count')->nullable();
            $table->date('birthday')->nullable();
            $table->date('employment_date')->default(\Carbon\Carbon::now());
            $table->date('leaving_date')->nullable();
            $table->string('leaving_detail', 250)->nullable();
            $table->string('blood_type', 3)->nullable();
            $table->string('status', 10)->default('working');
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
        Schema::dropIfExists('employees');
    }
};
