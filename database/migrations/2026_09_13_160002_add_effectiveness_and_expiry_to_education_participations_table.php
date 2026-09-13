<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('education_participations', function (Blueprint $table) {
            $table->date('expires_at')->nullable()->comment('Eğitim türünün geçerlilik süresine göre hesaplanır');
            $table->string('effectiveness_rating')->nullable();
            $table->text('effectiveness_note')->nullable();
            $table->date('effectiveness_evaluated_at')->nullable();
            $table->foreignId('effectiveness_evaluated_by_id')->nullable()->constrained('users')->nullOnDelete();
        });
    }

    public function down(): void
    {
        Schema::table('education_participations', function (Blueprint $table) {
            $table->dropConstrainedForeignId('effectiveness_evaluated_by_id');
            $table->dropColumn(['expires_at', 'effectiveness_rating', 'effectiveness_note', 'effectiveness_evaluated_at']);
        });
    }
};
