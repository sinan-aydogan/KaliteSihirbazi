<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::dropIfExists('improvement_works');
    }

    public function down(): void
    {
        Schema::create('improvement_works', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
        });
    }
};
