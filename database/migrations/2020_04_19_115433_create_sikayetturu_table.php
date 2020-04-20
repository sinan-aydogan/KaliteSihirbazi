<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateSikayetturuTable extends Migration {

	public function up()
	{
		Schema::create('sikayetturu', function(Blueprint $table) {
			$table->increments('id');
			$table->timestamps();
			$table->softDeletes();
			$table->string('sikayet_turu_id', 10)->nullable();
			$table->string('sikayet_turu_adi', 255);
			$table->integer('sikayet_turu_bolum');
			$table->string('sikayet_turu_urunler', 2000)->nullable();
			$table->string('sikayet_turu_kaynak', 2000)->nullable();
			$table->string('sikayet_turu_oneri', 2000)->nullable();
			$table->integer('user_id');
		});
	}

	public function down()
	{
		Schema::drop('sikayetturu');
	}
}