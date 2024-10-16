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
        Schema::create('vehicles', function (Blueprint $table) {
            $table->id();
            $table->string('code', 50)->unique();
            $table->foreignId('vehicle_type_id')->constrained();
            $table->foreignId('vehicle_status_id')->nullable()->constrained();
            $table->string('brand', 50)->nullable();
            $table->string('model', 50)->nullable();
            $table->unsignedSmallInteger('production_year')->nullable();
            $table->dateTime('purchase_date')->nullable();
            $table->longText('purchase_description')->nullable();
            $table->dateTime('disposing_date')->nullable();
            $table->string('disposing_reason', 50)->nullable();
            $table->longText('disposing_description')->nullable();
            $table->longText('notes')->nullable();
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
        Schema::dropIfExists('vehicles');
    }
};
