<?php

use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // The original pivot migrations already create these cascade constraints.
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // No schema changes are made in up().
    }
};
