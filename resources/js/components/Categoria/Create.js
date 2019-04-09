import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios'

export default class Create extends Component {
    constructor(){
        super();
        this.state = {
          nombre: ''
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

        const categoria = {
            nombre: this.state.nombre
        };

        axios.post('/api/categorias', categoria).then(
            response => {
                if (response.status == 200){
                    console.log('todo ok');
                    history.push('/categorias')
                }
            }
        );


    }

    render() {
        return (
            <form onSubmit={this.enviar} autoComplete="off" >
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className="form-group">
                                <label>Nombre</label>
                                <input
                                    id="name"
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre"
                                    name="nombre"
                                    onChange={this.manejadorInputs}
                                    value={this.state.nombre}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <Link className="btn btn-danger mr-2" to="/categorias">
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
