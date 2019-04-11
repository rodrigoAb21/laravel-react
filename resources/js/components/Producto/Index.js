import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import axios from 'axios';


export default class Index extends Component {
    constructor(){
        super();
        this.state = {
            productos: []
        };
    }

    componentDidMount(){
        axios.get('/api/productos')
            .then( response => {
                this.setState({
                    productos: response.data
                })
            })
    }

    eliminar(id){
        axios.delete('/api/productos/' + id).then(
            response => {
                if (response.status == 200) {
                    var nueva_lista = this.state.productos;

                    for (var i = 0; i < nueva_lista.length; i++){
                        if (nueva_lista[i].id == id){
                            nueva_lista.splice(i, 1);
                        }
                    }

                    this.setState({
                        productos: nueva_lista
                    });
                }
            }
        );
    }

    render() {

        const { productos } = this.state;

        return (
            <div className="container">
                <h2>Gestionar Productos
                    <Link to="/productos/create">
                        <button className="btn btn-primary float-right">
                            Nuevo Producto
                        </button>
                    </Link>
                </h2>

                <div className="table-responsive mt-3">
                    <table className="table table-hover table-bordered">
                        <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Categoria</th>
                            <th className="w-25" scope="col">Opciones</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                productos.map( (producto, index) => (
                                    <tr key={index}>
                                        <td>{producto.id}</td>
                                        <td>{producto.nombre}</td>
                                        <td>{producto.precio}</td>
                                        <td>{producto.categoria.nombre}</td>
                                        <td>
                                            <Link to={'/productos/'+ producto.id +'/edit'} className="btn btn-success mr-2">
                                                Editar
                                            </Link>
                                            <button className="btn btn-danger" onClick={this.eliminar.bind(this, producto.id)} >
                                                Eliminar
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
