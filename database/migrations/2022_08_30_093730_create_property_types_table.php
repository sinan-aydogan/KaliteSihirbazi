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
        Schema::create('property_types', function (Blueprint $table) {
            $table->id();
            $table->string('code', 100)->unique();
            $table->string('name', 100);
            $table->string('description', 255)->nullable();
            $table->boolean('default')->default(false);
            $table->softDeletes();
            $table->timestamps();
        });

        Schema::table('properties', function (Blueprint $table) {
            $table->foreign('property_type_id')->references('id')->on('property_types')->nullOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('properties', function (Blueprint $table) {
            $table->dropForeign(['property_type_id']);
        });

        Schema::dropIfExists('property_types');
    }
};
