import React from 'react';
import { Link } from 'react-router-dom';
import Usuario from "../../img/usuario.png";
import "./estilo/Acceso.css";

function Acceso() {
    return (
        <div>
            <div className='d-flex align-items-center justify-content-center gap-5 my-5 vh-100'>
                <div>
                    <img src={Usuario} width="150px" alt="usuario" />
                </div>
                <div>
                    <h1 className='text-center'>Iniciar Sesion</h1>
                    <br />
                    <form action="">
                        <div className="mb-3">
                            <label for="correo" className="form-label">Correo electrónico</label>
                            <input type="email" className="form-control" id="correo" placeholder="Email" />
                        </div>
                        <div className="mb-3">
                            <label for="contrasena" className="form-label">Contrasena</label>
                            <input type="password" className="form-control" id="contrasena" placeholder="Contrasena" />
                        </div>
                    </form>
                    <div className='row row-cols-2'>
                        <div className='col'>
                            <button className='button1 mb-2 px-4 py-2 rounded-pill w-100 text-light border-0'>Continuar</button>
                            <Link to="/recuperar-contrasena" className="text-primary">Olvidé mi contrasena</Link>
                        </div>
                        <div className='col'>
                            <button onClick={() => window.location.href = "./registrarse"} className='button2 px-4 py-2 rounded-pill w-100 text-light border-0'>Crear cuenta</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Acceso;
