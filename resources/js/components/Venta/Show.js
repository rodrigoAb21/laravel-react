import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import axios from 'axios';


export default class Show extends Component {
    constructor(props){
        super(props);
        this.state = {
            venta_id:'',
            cliente: '',
            tabla: []
        };
    }

    componentDidMount(){
        axios.get('/api/venta/' + this.props.match.params.id)
            .then( response => {
                this.setState({
                    venta_id: response.data[0].id,
                    cliente: response.data[0].cliente,
                    tabla: response.data[1]
                })
            })
    }



    render() {

        const { tabla } = this.state;

        return (

                <div className="container">
                    <h2>Venta: {this.state.venta_id}</h2>
                    <br/>
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label>Cliente</label>
                                <p className="form-control">{this.state.cliente}</p>
                            </div>
                        </div>

                    </div>
                    <hr/>
                    <div className="row">
                        <div className="table-responsive mt-3">
                            <table className="table table-hover table-bordered">
                                <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Producto</th>
                                    <th scope="col">Cantidad</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    tabla.map( (t, index) => (
                                        <tr key={index}>
                                            <td>{t.producto_id}</td>
                                            <td>{t.nombre}</td>
                                            <td>{t.cantidad}</td>
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
                        </div>
                    </div>
                </div>

        );
    }
}
