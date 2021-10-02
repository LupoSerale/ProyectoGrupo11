import './App.css';
/*importar route */
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

/*importacion componentes*/
import IniciarSesion from './components/IniciarSesion';
import Registro from './components/Registro';
function App() {


  return (
    <Router>

      <div className="App">
        <Route path="/iniciarSesion">
          <IniciarSesion />

        </Route>
        <Switch>
          <Route path="/registro">
            <Registro />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
