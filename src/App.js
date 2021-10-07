import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'font-awesome/css/font-awesome.min.css';
/*importar route */
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

/*importacion componentes*/
import IniciarSesion from './components/IniciarSesion';
import Registro from './components/Registro';
import ListarProducto from './components/ListarProducto';
import NuevoProducto from './components/NuevoProducto';
import EditarProducto from './components/EditarProducto';
import Home from './components/Home';
import RegistrarVenta from './components/RegistrarVenta';
import EstadoVenta from './components/EstadoVenta';
import LitarUsuarios from './components/LitarUsuarios';
function App() {

  return (
    <Router>
    <div className="App">
      <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <div className="col-2">
          <a className="navbar-brand">
          Proyecto Grupo 11
        </a>
        </div>        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/">Inicio</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Ventas
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="registrarVenta">Registrar Venta</a></li>
                <li><a className="dropdown-item" href="estadoVenta">Estado Venta</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Productos
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="nuevoProducto">Nuevo</a></li>
                <li><a className="dropdown-item" href="listarProducto">Listar Productos</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="LitarUsuarios">Usuarios</a>
            </li>
          </ul>
          <a className="text-light" href="IniciarSesion">Login</a>
        </div>
      </div>
    </nav>  
        <Switch>
          <Route path="/iniciarSesion">
            <IniciarSesion />
          </Route>
          <Route path="/registro">
            <Registro />
          </Route>
          <Route path="/listarProducto">
            <ListarProducto />
          </Route>
          <Route path="/nuevoProducto">
            <NuevoProducto />
          </Route>
          <Route path="/editarProducto">
            <EditarProducto />
          </Route>
          <Route path="/registrarVenta">
            <RegistrarVenta />
          </Route>
          <Route path="/estadoVenta">
            <EstadoVenta />
          </Route>
          <Route path="/litarUsuarios">
            <LitarUsuarios />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
