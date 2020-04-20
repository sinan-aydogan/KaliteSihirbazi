<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateUrunTable extends Migration {

	public function up()
	{
		Schema::create('urun', function(Blueprint $table) {
			$table->increments('id');
			$table->timestamps();
			$table->softDeletes();
			$table->string('urun_adi', 255);
			$table->integer('urun_bolum')->nullable();
			$table->string('urun_resim', 255)->nullable();
			$table->string('urun_aciklama', 500)->nullable();
			$table->string('urun_raf_omru', 255)->nullable();
			$table->integer('urun_turu');
			$table->integer('urun_standart')->nullable();
			$table->integer('user_id');
		});
	}

	public function down()
	{
		Schema::drop('urun');
	}
}