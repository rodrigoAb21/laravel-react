<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDetalleTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('detalle', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('cantidad');
            $table->unsignedInteger('venta_id');
            $table->unsignedInteger('producto_id');
            $table->foreign('venta_id')->references('id')->on('venta')->onDelete('cascade');
            $table->foreign('producto_id')->references('id')->on('producto')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('detalle');
    }
}
