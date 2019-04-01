import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header'

export default class Index extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Header/>
                <div className="container pt-5 mt-5">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-header">Example Component</div>

                                <div className="card-body">
                                    I'm an example component!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}
