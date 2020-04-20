<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateSikayetdurumTable extends Migration {

	public function up()
	{
		Schema::create('sikayetdurum', function(Blueprint $table) {
			$table->increments('id');
			$table->timestamps();
			$table->softDeletes();
			$table->string('sikayet_durum_adi', 100);
			$table->string('sikayet_durum_renk', 100);
			$table->integer('user_id');
		});
	}

	public function down()
	{
		Schema::drop('sikayetdurum');
	}
}