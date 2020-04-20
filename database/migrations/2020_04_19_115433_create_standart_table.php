<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateStandartTable extends Migration {

	public function up()
	{
		Schema::create('standart', function(Blueprint $table) {
			$table->increments('id');
			$table->timestamps();
			$table->softDeletes();
			$table->string('standart_kodu', 100);
			$table->string('standart_adi_tr', 255);
			$table->string('standart_adi_en', 255);
			$table->string('standart_tr_versiyon', 100);
			$table->string('standart_en_versiyon', 100)->nullable();
			$table->string('standart_tr_kapsam', 500)->nullable();
			$table->string('standart_en_kapsam', 500)->nullable();
			$table->string('standart_dosya', 255)->nullable();
			$table->integer('user_id');
		});
	}

	public function down()
	{
		Schema::drop('standart');
	}
}