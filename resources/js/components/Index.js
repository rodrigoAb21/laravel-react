import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header'

import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';

import Categoria from './Categoria/Index';
import CategoriaCreate from './Categoria/Create';
import CategoriaEdit from './Categoria/Edit';

import Producto from './Producto/Index';
import ProductoCreate from './Producto/Create';
import ProductoEdit from './Producto/Edit';

import Venta from './Venta/Index';
import VentaCreate from './Venta/Create';

export default class Index extends Component {
    render() {
        return (
            <Router>

                <Header/>
                <div className="container-fluid mt-5 pt-5">
                    <Route path="/" exact component={Home}/>
                    <Route path="/about" exact component={About}/>

                    <Route path="/categorias" exact component={Categoria}/>
                    <Route path="/categorias/create" exact component={CategoriaCreate}/>
                    <Route path="/categorias/:id/edit" exact component={CategoriaEdit}/>

                    <Route path="/productos" exact component={Producto}/>
                    <Route path="/productos/create" exact component={ProductoCreate}/>
                    <Route path="/productos/:id/edit" exact component={ProductoEdit}/>

                    <Route path="/ventas" exact component={Venta}/>
                    <Route path="/ventas/create" exact component={VentaCreate}/>
                </div>

            </Router>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}
