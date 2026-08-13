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
        Schema::create('warehouse_types', function (Blueprint $table) {
            $table->id();
            $table->string('code', 10)->unique();
            $table->string('name', 255);
            $table->timestamps();
        });

        Schema::table('warehouses', function (Blueprint $table) {
            $table->foreign('warehouse_type_id')->references('id')->on('warehouse_types')->nullOnDelete();
            $table->foreign('employee_id')->references('id')->on('employees')->nullOnDelete();
            $table->foreign('department_id')->references('id')->on('departments')->nullOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('warehouses', function (Blueprint $table) {
            $table->dropForeign(['warehouse_type_id']);
            $table->dropForeign(['employee_id']);
            $table->dropForeign(['department_id']);
        });

        Schema::dropIfExists('warehouse_types');
    }
};
