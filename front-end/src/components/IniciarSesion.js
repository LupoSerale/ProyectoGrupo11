import React, { Component } from "react";
import GoogleLogin from 'react-google-login';
import {
    Link
} from "react-router-dom";

class IniciarSesion extends Component {
    render() {
        const responseGoogle = (response) => {
            console.log(response);
        }
        return (

            <div className="login">

                <form action="" className="formulario_login">
                    <h2>INICIAR SESIÓN</h2>
                    <br></br>
                    <br></br>
                    <div className="Oauth2">
                        <GoogleLogin
                            clientId="1086293686192-5giqrbgjdotqubufjr11dvruejdrc759.apps.googleusercontent.com"
                            buttonText="INGRESA"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        />,
                    </div>
                    <br></br>
                    <br></br>

                    <p>¿No tienes una cuenta?</p>
                    <div className="btn-group">
                        <Link to="registro" className="btn btn-light">
                            Registrate
                        </Link>
                    </div>
                </form>

            </div>
        )
    }

}
export default IniciarSesion;