<?php

use App\Models\Setting\Property;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('propertiables', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Property::class)
                ->constrained()
                ->cascadeOnDelete();
            $table->morphs('propertiable');
            $table->unique(['property_id', 'propertiable_type', 'propertiable_id']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('propertiables');
    }
};
