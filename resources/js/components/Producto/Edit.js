import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios'

export default class Edit extends Component {
    constructor(props){
        super(props);
        this.state = {
            nombre: ''
        };

        this.manejadorInputs = this.manejadorInputs.bind(this);
        this.enviar = this.enviar.bind(this);

    }


    componentDidMount(){
        axios.get('/api/categorias/' + this.props.match.params.id + '/edit')
            .then( response => {
                this.setState({
                    nombre: response.data.nombre
                })
            })
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

        axios.patch('/api/categorias/' + this.props.match.params.id, categoria).then(
            response => {
                if (response.status == 200){
                    history.push('/categorias')
                }
            }
        );


    }

    render() {
        return (

                <form onSubmit={this.enviar} autoComplete="off" >
                    <div className="container">
                        <h2>Editar Categoria</h2>
                        <br/>
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
