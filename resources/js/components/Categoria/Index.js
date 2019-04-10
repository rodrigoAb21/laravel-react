import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import axios from 'axios';


export default class Index extends Component {
    constructor(){
        super();
        this.state = {
            categorias: []
        };
    }

    componentDidMount(){
        axios.get('/api/categorias')
            .then( response => {
                this.setState({
                    categorias: response.data
                })
            })
    }

    eliminar(id){
        axios.delete('/api/categorias/' + id).then(
            response => {
                if (response.status == 200) {
                    var nueva_lista = this.state.categorias;

                    for (var i = 0; i < nueva_lista.length; i++){
                        if (nueva_lista[i].id == id){
                            nueva_lista.splice(i, 1);
                        }
                    }

                    this.setState({
                        categorias: nueva_lista
                    });
                }
            }
        );
    }

    render() {

        const { categorias } = this.state;

        return (
            <div className="container">
                <h2>Categorias
                    <Link to="/categorias/create">
                        <button className="btn btn-primary float-right">
                            Nueva Categoria
                        </button>
                    </Link>
                </h2>

                <div className="table-responsive mt-3">
                    <table className="table table-hover table-bordered">
                        <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Opciones</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                categorias.map( (categoria, index) => (
                                    <tr key={index}>
                                        <td>{categoria.id}</td>
                                        <td>{categoria.nombre}</td>
                                        <td>
                                            <Link to={'/categorias/'+ categoria.id +'/edit'} className="btn btn-success mr-2">
                                                Editar
                                            </Link>
                                            <button className="btn btn-danger" onClick={this.eliminar.bind(this, categoria.id)} >
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
