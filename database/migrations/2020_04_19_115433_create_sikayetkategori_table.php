<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateSikayetkategoriTable extends Migration {

	public function up()
	{
		Schema::create('sikayetkategori', function(Blueprint $table) {
			$table->increments('id');
			$table->timestamps();
			$table->softDeletes();
			$table->string('sikayet_kategori_adi', 100);
			$table->integer('user_id');
		});
	}

	public function down()
	{
		Schema::drop('sikayetkategori');
	}
}