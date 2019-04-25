<?php

namespace App\Http\Controllers\Api;

use App\Detalle;
use App\Producto;
use App\Venta;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class VentaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $ventas = Venta::where('visible', '=', true)->get();
        return $ventas->toJson();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Producto::where('visible', '=', true)->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $venta = new Venta();
        $venta->cliente = $request['cliente'];
        $venta->visible = true;
        $venta->save();

        $cont = 0;
        while ($cont < count($request['detalle'])) {
            $detalle = new Detalle();
            $detalle -> venta_id = $venta -> id;
            $detalle -> producto_id = $request['detalle'][$cont]['producto_id'];
            $detalle -> cantidad = $request['detalle'][$cont]['cantidad'];
            $detalle -> save();
            $cont = $cont + 1;
        }

        return response()->json('ok',200);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $venta = Venta::findOrFail($id);
        $venta->visible = false;
        $venta->save();

        return response()->json('ok', 200);
    }
}
