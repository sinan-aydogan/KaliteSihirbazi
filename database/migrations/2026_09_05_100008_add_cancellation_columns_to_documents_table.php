<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('documents', function (Blueprint $table) {
            $table->timestamp('cancelled_at')->nullable();
            $table->foreignId('cancelled_by')->nullable()->constrained('users')->nullOnDelete();
            $table->text('cancellation_reason')->nullable();
            $table->foreignId('superseded_by_document_id')->nullable()->constrained('documents')->nullOnDelete();
        });
    }

    public function down(): void
    {
        Schema::table('documents', function (Blueprint $table) {
            $table->dropForeign(['cancelled_by']);
            $table->dropForeign(['superseded_by_document_id']);
            $table->dropColumn(['cancelled_at', 'cancelled_by', 'cancellation_reason', 'superseded_by_document_id']);
        });
    }
};
