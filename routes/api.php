<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('/categorias', 'Api\CategoriaController');
Route::resource('/productos', 'Api\ProductoController');

Route::get('/ventas', 'Api\VentaController@index');
Route::get('/ventas/create', 'Api\VentaController@create');
Route::post('/ventas', 'Api\VentaController@store');
Route::get('/venta/{id}', 'Api\VentaController@show');
Route::delete('/ventas/{id}', 'Api\VentaController@destroy');

