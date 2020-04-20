<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateBolumTable extends Migration {

	public function up()
	{
		Schema::create('bolum', function(Blueprint $table) {
			$table->increments('id');
			$table->timestamps();
			$table->softDeletes();
			$table->string('bolum_adi', 100)->unique();
			$table->integer('bolum_yonetici');
			$table->string('bolum_sikayet_alabilirlik', 3);
			$table->string('bolum_urun_kaydedilebilirlik', 3);
			$table->string('bolum_rengi', 15);
			$table->integer('user_id');
		});
	}

	public function down()
	{
		Schema::drop('bolum');
	}
}