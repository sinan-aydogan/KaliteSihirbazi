<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('machines', function (Blueprint $table) {
            $table->string('code', 20)->unique()->after('id');
            $table->string('name', 150)->after('code');
            $table->foreignId('machine_type_id')->nullable()->after('name')->constrained();
            $table->foreignId('department_id')->nullable()->after('machine_type_id')->constrained();
            $table->foreignId('responsible_id')->nullable()->after('department_id')->constrained('employees');
            $table->string('brand', 100)->nullable()->after('responsible_id');
            $table->string('model', 100)->nullable()->after('brand');
            $table->string('serial_no', 100)->nullable()->after('model');
            $table->boolean('is_active')->default(true)->after('serial_no');
            $table->text('notes')->nullable()->after('is_active');
            $table->softDeletes();
        });
    }

    public function down(): void
    {
        Schema::table('machines', function (Blueprint $table) {
            $table->dropConstrainedForeignId('machine_type_id');
            $table->dropConstrainedForeignId('department_id');
            $table->dropConstrainedForeignId('responsible_id');
            $table->dropColumn(['code', 'name', 'brand', 'model', 'serial_no', 'is_active', 'notes', 'deleted_at']);
        });
    }
};
