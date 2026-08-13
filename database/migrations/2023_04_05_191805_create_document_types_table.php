<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('document_types', function (Blueprint $table) {
            $table->id();
            $table->string('code', 10)->unique();
            $table->string('name', 255);
            $table->timestamps();
        });

        Schema::table('documents', function (Blueprint $table) {
            $table->foreign('department_id')->references('id')->on('departments')->restrictOnDelete();
            $table->foreign('document_type_id')->references('id')->on('document_types')->restrictOnDelete();
            $table->foreign('creator_id')->references('id')->on('users')->restrictOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('documents', function (Blueprint $table) {
            $table->dropForeign(['department_id']);
            $table->dropForeign(['document_type_id']);
            $table->dropForeign(['creator_id']);
        });

        Schema::dropIfExists('document_types');
    }
};
