import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class Create extends Component {
    render() {
        return (
            <form>
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <div className="form-group">
                                <label>Nombre</label>
                                <input type="text" className="form-control" placeholder="Nombre"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <div className="mr-2">
                                <Link className="btn btn-danger" to="/categorias">
                                    Atras
                                </Link>
                            </div>
                            <button type="button" className="btn btn-success">
                                Guardar
                            </button>
                        </div>
                    </div>
                </div>

            </form>

        );
    }
}
