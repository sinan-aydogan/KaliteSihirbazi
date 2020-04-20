<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateMusterisikayetiTable extends Migration {

	public function up()
	{
		Schema::create('musterisikayeti', function(Blueprint $table) {
			$table->increments('id');
			$table->timestamps();
			$table->softDeletes();
			$table->date('sikayet_tarihi');
			$table->integer('sikayet_bolum');
			$table->integer('sikayet_bayi');
			$table->integer('sikayet_urun');
			$table->integer('sikayet_turu');
			$table->integer('sikayet_kategorisi');
			$table->integer('sikayet_durum');
			$table->integer('user_id');
		});
	}

	public function down()
	{
		Schema::drop('musterisikayeti');
	}
}