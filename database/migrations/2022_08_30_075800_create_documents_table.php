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
        Schema::create('documents', function (Blueprint $table) {
            $table->id();
            $table->string('code',10)->unique();
            $table->string('name',255);
            $table->string('description',750)->nullable();
            $table->foreignId('department_id');
            $table->foreignId('document_type_id');
            $table->foreignId('creator_id');
            $table->string('publishing_status')->default('draft')->nullable();
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
        Schema::dropIfExists('documents');
    }
};
