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
        Schema::create('education_participations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('education_id')->constrained('education')->onDelete('cascade');
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->boolean('is_attend')->default(false)->comment('Katıldı mı?');
            $table->boolean('status')->default(false)->comment('Başarılı mı?');
            $table->integer('score')->nullable()->comment('0-100 arası puan');
            $table->timestamps();
            
            // Aynı eğitime aynı kullanıcı birden fazla kez katılamaz
            $table->unique(['education_id', 'user_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('education_participations');
    }
};
