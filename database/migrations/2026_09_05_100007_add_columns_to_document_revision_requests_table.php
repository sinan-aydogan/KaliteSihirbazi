<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * `document_revision_requests` was scaffolding (id + timestamps only);
     * this fills in the real columns for the revision-request workflow.
     */
    public function up(): void
    {
        Schema::table('document_revision_requests', function (Blueprint $table) {
            $table->foreignId('document_id')->after('id')->constrained('documents')->cascadeOnDelete();
            $table->foreignId('requested_by')->after('document_id')->constrained('users')->cascadeOnDelete();
            $table->text('reason');
            $table->string('status')->default('pending');
            $table->foreignId('resolved_by')->nullable()->constrained('users')->nullOnDelete();
            $table->text('resolution_note')->nullable();
            $table->timestamp('resolved_at')->nullable();
            $table->foreignId('resulting_version_id')->nullable()->constrained('document_versions')->nullOnDelete();
        });
    }

    public function down(): void
    {
        Schema::table('document_revision_requests', function (Blueprint $table) {
            $table->dropForeign(['document_id']);
            $table->dropForeign(['requested_by']);
            $table->dropForeign(['resolved_by']);
            $table->dropForeign(['resulting_version_id']);
            $table->dropColumn([
                'document_id', 'requested_by', 'reason', 'status',
                'resolved_by', 'resolution_note', 'resolved_at', 'resulting_version_id',
            ]);
        });
    }
};
