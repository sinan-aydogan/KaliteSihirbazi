<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateBayiTable extends Migration {

	public function up()
	{
		Schema::create('bayi', function(Blueprint $table) {
			$table->increments('id');
			$table->timestamps();
			$table->softDeletes();
			$table->string('bayi_adi', 255);
			$table->string('bayi_kodu', 10)->unique();
			$table->smallInteger('bayi_il');
			$table->integer('user_id');
		});
	}

	public function down()
	{
		Schema::drop('bayi');
	}
}