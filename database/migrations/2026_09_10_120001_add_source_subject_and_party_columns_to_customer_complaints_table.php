<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('customer_complaints', function (Blueprint $table) {
            $table->foreignId('complaint_source_type_id')->nullable()->after('customer_id')
                ->constrained()->restrictOnDelete();
            $table->foreignId('complaint_subject_id')->nullable()->after('title')
                ->constrained()->restrictOnDelete();
            $table->foreignId('supplier_id')->nullable()->after('complaint_source_type_id')
                ->constrained()->nullOnDelete();
            $table->foreignId('distributor_id')->nullable()->after('supplier_id')
                ->constrained()->nullOnDelete();
        });

        Schema::table('customer_complaints', function (Blueprint $table) {
            $table->foreignId('customer_id')->nullable()->change();
        });

        (new \Database\Seeders\ComplaintClassificationSeeder())->run();

        $customerSourceTypeId = DB::table('complaint_source_types')->where('key', 'customer')->value('id');
        $otherSubjectId = DB::table('complaint_subjects')->where('key', 'other')->value('id');

        DB::table('customer_complaints')->update([
            'complaint_source_type_id' => $customerSourceTypeId,
            'complaint_subject_id' => $otherSubjectId,
        ]);

        Schema::table('customer_complaints', function (Blueprint $table) {
            $table->foreignId('complaint_source_type_id')->nullable(false)->change();
            $table->foreignId('complaint_subject_id')->nullable(false)->change();
        });
    }

    public function down(): void
    {
        throw new \RuntimeException('Irreversible: customer_id was made nullable to support internal/supplier/distributor complaints. Rows created after this migration may have a null customer_id, so restoring the NOT NULL constraint would need a data-loss decision this migration does not implement.');
    }
};
