import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios'

export default class Create extends Component {
    constructor(){
        super();
        this.state = {
            cliente: '',
            precio_total: '',
            tabla: [],
            productos: []
        };

        this.txt_cantidad = React.createRef();
        this.selector = React.createRef();

        this.manejadorInputs = this.manejadorInputs.bind(this);
        this.enviar = this.enviar.bind(this);
        this.agregar = this.agregar.bind(this);

    }

    componentDidMount(){
        axios.get('/api/ventas/create')
            .then( response => {
                this.setState({
                    productos: response.data
                })
            });
    }

    manejadorInputs(evento){
        this.setState({
            [evento.target.name]: evento.target.value
        });
    }

    enviar(e){
        e.preventDefault();

        const { history } = this.props;

        const venta = {
            cliente: this.state.cliente,
            detalle: this.state.tabla
        };

        axios.post('/api/ventas', venta).then(
            response => {
                if (response.status == 200){
                    history.push('/ventas')
                }
            }
        );


    }

    quitar(id){
        var t = this.state.tabla;

        for (var i = 0; i < t.length; i++){
            if (t[i].producto_id == id){
                t.splice(i, 1);
            }
        }

        this.setState({
            tabla: t
        });
    }

    agregar(){
        var t = this.state.tabla;
        const s = this.selector.current.value.split('-');
        t.push({producto_id:s[0], nombre:s[1], cantidad:this.txt_cantidad.current.value});
        this.setState({
            tabla: t
        });
    }

    render() {
        var { tabla } = this.state;

        return (

                <form onSubmit={this.enviar} autoComplete="off" >
                    <div className="container">
                        <h2>Nuevo Venta</h2>
                        <br/>
                        <div className="row">
                            <div className="col">
                                <div className="form-group">
                                    <label>Cliente</label>
                                    <input
                                        id="cliente"
                                        type="text"
                                        className="form-control"
                                        placeholder="Cliente"
                                        name="cliente"
                                        onChange={this.manejadorInputs}
                                        value={this.state.cliente}
                                        required
                                    />
                                </div>
                            </div>

                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Producto</label>
                                    <select
                                        required
                                        ref={this.selector}
                                        className="form-control"
                                        name="producto_id"
                                        id="producto_id"
                                        onChange={this.manejadorInputs}>
                                        {
                                            this.state.productos.map( (producto, index) => (
                                                <option
                                                    key={index}
                                                    value={producto.id+"-"+producto.nombre}>
                                                    {producto.nombre}
                                                </option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-group">
                                    <label>Cantidad</label>
                                    <input
                                        id="cantidad"
                                        ref={this.txt_cantidad}
                                        type="number"
                                        className="form-control"
                                        placeholder="cantidad"
                                        name="cantidad"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-2 mt-3 pt-3">
                                <button type="button" className="btn btn-primary" onClick={this.agregar}>
                                    Agregar
                                </button>
                            </div>

                        </div>
                        <div className="row">
                            <div className="table-responsive mt-3">
                                <table className="table table-hover table-bordered">
                                    <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Producto</th>
                                        <th scope="col">Cantidad</th>
                                        <th scope="col">Opc.</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        tabla.map( (t, index) => (
                                            <tr key={index}>
                                                <td>{t.producto_id}</td>
                                                <td>{t.nombre}</td>
                                                <td>{t.cantidad}</td>
                                                <td>
                                                    <button className="btn btn-danger" type="button" onClick={this.quitar.bind(this, t.producto_id)} >
                                                        <i className="fa fa-trash"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm">
                                <Link className="btn btn-danger mr-2" to="/ventas">
                                    Atras
                                </Link>
                                <button type="submit" className="btn btn-success">
                                    Guardar
                                </button>
                            </div>
                        </div>
                    </div>
                </form>



        );
    }
}
