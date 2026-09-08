<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('problems', function (Blueprint $table) {
            $table->foreignId('problem_source_type_id')->nullable()->after('source_type')
                ->constrained()->restrictOnDelete();
        });

        Schema::table('capas', function (Blueprint $table) {
            $table->foreignId('capa_source_type_id')->nullable()->after('source_type')
                ->constrained()->restrictOnDelete();
        });

        (new \Database\Seeders\SourceTypeDefinitionSeeder())->run();

        foreach (DB::table('problem_source_types')->get() as $type) {
            DB::table('problems')->where('source_type', $type->key)->update(['problem_source_type_id' => $type->id]);
        }

        foreach (DB::table('capa_source_types')->get() as $type) {
            DB::table('capas')->where('source_type', $type->key)->update(['capa_source_type_id' => $type->id]);
        }

        Schema::table('problems', function (Blueprint $table) {
            $table->dropColumn('source_type');
        });
        Schema::table('problems', function (Blueprint $table) {
            $table->foreignId('problem_source_type_id')->nullable(false)->change();
        });

        Schema::table('capas', function (Blueprint $table) {
            $table->dropIndex(['source_type', 'source_id']);
        });
        Schema::table('capas', function (Blueprint $table) {
            $table->dropColumn('source_type');
        });
    }

    public function down(): void
    {
        throw new \RuntimeException('Irreversible: source_type columns were dropped after backfilling into problem_source_types/capa_source_types; restoring the original string columns would need a reverse backfill this migration does not implement.');
    }
};
