<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Detalle extends Model
{
    protected $table = 'detalle';
    protected $primaryKey = 'id';
    public $timestamps = false;
    protected $fillable = [
        'cantidad',
        'venta_id',
        'producto_id'
    ];
}
