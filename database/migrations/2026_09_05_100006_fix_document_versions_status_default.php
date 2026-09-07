<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * `document_versions.status` defaulted to (and DocumentVersionTrait::createVersion()
     * literally wrote) "pending" - a value the DocumentVersionStatus enum cast on the
     * model does not recognize, so every newly created document's first version threw
     * a ValueError the moment it was read back. The write side is fixed in
     * DocumentVersionTrait; this sweeps the column default and any leftover rows.
     */
    public function up(): void
    {
        Schema::table('document_versions', function (Blueprint $table) {
            $table->string('status')->default('draft')->change();
        });

        DB::table('document_versions')->where('status', 'pending')->update(['status' => 'draft']);
    }

    public function down(): void
    {
        Schema::table('document_versions', function (Blueprint $table) {
            $table->string('status')->default('pending')->change();
        });
    }
};
