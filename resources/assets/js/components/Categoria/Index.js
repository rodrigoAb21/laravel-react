import React, { Component } from 'react';

import {Link} from 'react-router-dom';
import axios from 'axios';


export default class Index extends Component {
    constructor(){
        super();
        this.state = {
            categorias: []
        };
    }

    componentDidMount(){
        axios.get('http://127.0.0.1:8000/categorias')
            .then( response => {
                this.setState({
                    categorias: response.data
                });
            });
    }

    render() {
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
                                this.state.categorias.map( (categoria, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{categoria.id}</td>
                                            <td>{categoria.nombre}</td>
                                            <td>
                                                <button className="btn btn-danger">
                                                    Editar
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
