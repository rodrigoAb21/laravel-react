import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import axios from 'axios';


export default class Index extends Component {
    constructor(){
        super();
        this.state = {
            ventas: []
        };
    }

    componentDidMount(){
        axios.get('/api/ventas')
            .then( response => {
                this.setState({
                    ventas: response.data
                })
            })
    }

    eliminar(id){
        axios.delete('/api/ventas/' + id).then(
            response => {
                if (response.status == 200) {
                    var nueva_lista = this.state.ventas;

                    for (var i = 0; i < nueva_lista.length; i++){
                        if (nueva_lista[i].id == id){
                            nueva_lista.splice(i, 1);
                        }
                    }

                    this.setState({
                        ventas: nueva_lista
                    });
                }
            }
        );
    }

    render() {

        const { ventas } = this.state;

        return (
            <div className="container">
                <h2>Gestionar Ventas
                    <Link to="/ventas/create">
                        <button className="btn btn-primary float-right">
                            <i className="fa fa-plus"></i> Nuevo
                        </button>
                    </Link>
                </h2>

                <div className="table-responsive mt-3">
                    <table className="table table-hover table-bordered">
                        <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Cliente</th>
                            <th scope="col">Precio</th>
                            <th className="w-25" scope="col">Opciones</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                ventas.map( (venta, index) => (
                                    <tr key={index}>
                                        <td>{venta.id}</td>
                                        <td>{venta.cliente}</td>
                                        <td>{venta.precio_total}</td>
                                        <td>
                                            <button className="btn btn-danger" onClick={this.eliminar.bind(this, venta.id)} >
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
        );
    }
}
