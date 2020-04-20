<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateUsersTable extends Migration {

	public function up()
	{
		Schema::create('users', function(Blueprint $table) {
			$table->increments('id');
			$table->timestamps();
			$table->softDeletes();
			$table->string('name', 255);
			$table->string('email', 255)->unique();
			$table->timestamp('email_verified_at')->nullable();
			$table->string('password', 255);
			$table->string('remember_token', 100)->nullable();
			$table->integer('bolum')->nullable();
			$table->string('pozisyon', 100)->nullable();
			$table->date('ise_giris')->nullable();
			$table->string('avatar', 255)->nullable();
			$table->string('egitim', 1250)->nullable();
			$table->string('konum', 255)->nullable();
			$table->string('yetenek', 1250)->nullable();
			$table->string('gorev', 1250)->nullable();
			$table->integer('user_id');
		});
	}

	public function down()
	{
		Schema::drop('users');
	}
}