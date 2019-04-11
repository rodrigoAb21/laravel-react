<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Producto extends Model
{
    protected $table = 'producto';
    protected $primaryKey = 'id';
    public $timestamps = false;
    protected $fillable = [
        'nombre',
        'precio',
        'visible',
        'categoria_id'
    ];

    public function categoria(){
        return $this->belongsTo('App\Categoria');
    }
}
