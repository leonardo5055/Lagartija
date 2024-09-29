import React from 'react';
import "./estilo/registrarse.css";
import { Link } from 'react-router-dom';

function Registrarse() {
    function registrado() {
        //validar los datos
        window.location.href = "./acceso";
    }
    return (
        <div>
            <div className='container d-flex align-items-center justify-content-center gap-5 my-5 text-center'>
                <form className='w-100 m-5' action="">
                    <h3>Registrarse</h3>
                    <br />
                    <div className="mb-3">
                        <label for="correo" className="form-label">Correo electrónico</label>
                        <input type="email" className="form-control " id="correo" />
                    </div>
                    <div className="mb-3">
                        <label for="contrasena" className="form-label">Contraseña</label>
                        <input type="password" className="form-control" id="contrasena" />
                    </div>
                    <div className="mb-3">
                        <label for="confirmarContrasena" className="form-label">Confirmar contraseña</label>
                        <input type="password" className="form-control" id="confirmarContrasena" />
                    </div>
                    <div className='col'>
<<<<<<< HEAD
                        <button onClick={registrado} className='button2 px-4 py-2 rounded-pill w-100 text-light border-0'>Crear cuenta</button>
=======
                        <Link to="/">
                            <button className='button2 px-4 py-2 rounded-pill w-100 text-light border-0'>Crear cuenta</button>
                        </Link>
>>>>>>> 734bb96b542f0335ecc504c0b9a265cea54e172a
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Registrarse;
