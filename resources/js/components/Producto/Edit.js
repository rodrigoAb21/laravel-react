import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios'

export default class Edit extends Component {
    constructor(props){
        super(props);
        this.state = {
            nombre: '',
            precio: '',
            categoria_id: '',
            categorias: []
        };

        this.manejadorInputs = this.manejadorInputs.bind(this);
        this.enviar = this.enviar.bind(this);

    }


    componentDidMount(){
        axios.get('/api/productos/' + this.props.match.params.id + '/edit')
            .then( response => {
                this.setState({
                    nombre: response.data[0].nombre,
                    precio: response.data[0].precio,
                    categoria_id: response.data[0].categoria_id,
                    categorias: response.data[1]
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

        const producto = {
            nombre: this.state.nombre,
            precio: this.state.precio,
            categoria_id: this.refs.selector.value
        };

        axios.patch('/api/productos/' + this.props.match.params.id, producto).then(
            response => {
                if (response.status == 200){
                    history.push('/productos')
                }
            }
        );


    }

    render() {
        return (

                <form onSubmit={this.enviar} autoComplete="off" >
                    <div className="container">
                        <h2>Nuevo Producto</h2>
                        <br/>
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Nombre</label>
                                    <input
                                        id="nombre"
                                        type="text"
                                        className="form-control"
                                        placeholder="Nombre"
                                        name="nombre"
                                        onChange={this.manejadorInputs}
                                        value={this.state.nombre}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Precio</label>
                                    <input
                                        id="precio"
                                        type="number"
                                        className="form-control"
                                        placeholder="Precio"
                                        name="precio"
                                        onChange={this.manejadorInputs}
                                        value={this.state.precio}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="col-6">
                                <div className="form-group">
                                    <label>Categoria</label>
                                    <select
                                        required
                                        ref="selector"
                                        className="form-control"
                                        name="categoria_id"
                                        id="categoria_id"
                                        value={this.state.categoria_id}
                                        onChange={this.manejadorInputs}>
                                        {
                                            this.state.categorias.map( (categoria, index) => (
                                                    <option
                                                        key={index}
                                                        value={categoria.id}>
                                                        {categoria.nombre}
                                                    </option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-sm">
                                <Link className="btn btn-danger mr-2" to="/productos">
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
