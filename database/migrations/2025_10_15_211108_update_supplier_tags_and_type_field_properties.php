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
        Schema::table('supplier_tag_supplier', function (Blueprint $table) {
            $table->foreign('supplier_tag_id')->references('id')->on('supplier_tags')->onDelete('cascade');
            $table->foreign('supplier_id')->references('id')->on('suppliers')->onDelete('cascade');
        });

        Schema::table('supplier_type_supplier', function (Blueprint $table) {
            $table->foreign('supplier_type_id')->references('id')->on('supplier_types')->onDelete('cascade');
            $table->foreign('supplier_id')->references('id')->on('suppliers')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('supplier_tag_supplier', function (Blueprint $table) {
            $table->dropForeign(['supplier_tag_id']);
            $table->dropForeign(['supplier_id']);
        });

        Schema::table('supplier_type_supplier', function (Blueprint $table) {
            $table->dropForeign(['supplier_type_id']);
            $table->dropForeign(['supplier_id']);
        });
    }
};
