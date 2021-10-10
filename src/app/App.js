import React, { Component } from 'react';
/*importar route */
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";

/*importacion componentes*/
import IniciarSesion from './components/IniciarSesion.jsx';
import RegistroDOs from './components/registroDos.jsx';
import Producto from './components/Producto.jsx';
import NuevoProducto from './components/NuevoProducto.jsx';
import EditarProducto from './components/EditarProducto.jsx';
import Home from './components/Home.jsx';
import RegistrarVenta from './components/RegistrarVenta.jsx';
import EstadoVenta from './components/EstadoVenta.jsx';
import ListarUsuarios from './components/ListarUsuarios.jsx';

function App() {

    return (
        <Router>
            <div className="App" align="center">
                <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-success">
                    <div className="container-fluid">
                        <div className="col-2">
                            <Link className="navbar-brand" to="#">
                                Proyecto Grupo 11
                            </Link>
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/">Inicio</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        Ventas
                                    </Link>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><Link className="dropdown-item" to="registrarVenta">Registrar Venta</Link></li>
                                        <li><Link className="dropdown-item" to="estadoVenta">Estado Venta</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="Producto">Productos</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="ListarUsuarios">Usuarios</Link>
                                </li>
                            </ul>
                            <Link className="text-light" to="IniciarSesion">Login</Link>
                        </div>
                    </div>
                </nav>
                <Switch>
                    <div className="App">
                        <Route exact path="/" component={Home} />
                        <Route path="/iniciarSesion" component={IniciarSesion} />
                        <Route path="/registro" component={RegistroDOs} />
                        <Route path="/producto" component={Producto} />
                        <Route path="/nuevoProducto" component={NuevoProducto} />
                        <Route path="/editarProducto" component={EditarProducto} />
                        <Route path="/registrarVenta" component={RegistrarVenta} />
                        <Route path="/estadoVenta" component={EstadoVenta} />
                        <Route path="/listarUsuarios" component={ListarUsuarios} />
                    </div>
                </Switch>
            </div>
        </Router>
    );
}
export default App;
