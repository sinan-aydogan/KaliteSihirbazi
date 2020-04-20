<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateFailedJobsTable extends Migration {

	public function up()
	{
		Schema::create('failed_jobs', function(Blueprint $table) {
			$table->increments('id');
			$table->text('connection');
			$table->text('queue');
			$table->longText('payload');
			$table->longText('exception');
			$table->timestamp('failed_at');
		});
	}

	public function down()
	{
		Schema::drop('failed_jobs');
	}
}