<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateUrunturuTable extends Migration {

	public function up()
	{
		Schema::create('urunturu', function(Blueprint $table) {
			$table->increments('id');
			$table->timestamps();
			$table->softDeletes();
			$table->string('urun_turu_adi', 255);
			$table->integer('user_id');
		});
	}

	public function down()
	{
		Schema::drop('urunturu');
	}
}