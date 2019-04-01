import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header'

import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';


export default class Index extends Component {
    render() {
        return (
            <Router>
                <div className="container-fluid">
                    <Header/>
                    <div className="container mt-5 pt-5">
                        <Route path="/" exact strict component={Home}/>
                        <Route path="/about" exact strict component={About}/>
                    </div>
                </div>
            </Router>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}
