import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios'

export default class Create extends Component {
    constructor(){
        super();
        this.state = {
            cliente: '',
            precio_total: '',
        };

        this.manejadorInputs = this.manejadorInputs.bind(this);
        this.enviar = this.enviar.bind(this);

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
            precio_total: this.state.precio_total,
        };

        axios.post('/api/ventas', venta).then(
            response => {
                if (response.status == 200){
                    history.push('/ventas')
                }
            }
        );


    }

    render() {
        return (

                <form onSubmit={this.enviar} autoComplete="off" >
                    <div className="container">
                        <h2>Nuevo Venta</h2>
                        <br/>
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Nombre</label>
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
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Precio</label>
                                    <input
                                        id="precio_total"
                                        type="number"
                                        className="form-control"
                                        placeholder="Precio Total"
                                        name="precio_total"
                                        onChange={this.manejadorInputs}
                                        value={this.state.precio_total}
                                        required
                                    />
                                </div>
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
