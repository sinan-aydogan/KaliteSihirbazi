<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('customers', function (Blueprint $table) {
            $table->string('code')->nullable()->unique()->after('id');
            $table->string('name')->after('code');
            $table->string('contact_name')->nullable()->after('name');
            $table->string('phone')->nullable()->after('contact_name');
            $table->string('email')->nullable()->after('phone');
            $table->text('address')->nullable()->after('email');
            $table->boolean('is_active')->default(true)->after('address');
        });
    }

    public function down(): void
    {
        Schema::table('customers', function (Blueprint $table) {
            $table->dropColumn(['code', 'name', 'contact_name', 'phone', 'email', 'address', 'is_active']);
        });
    }
};
