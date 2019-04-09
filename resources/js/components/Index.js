import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header'

import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Categoria from './Categoria/Index';
import CategoriaCreate from './Categoria/Create';


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
                </div>

            </Router>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}
