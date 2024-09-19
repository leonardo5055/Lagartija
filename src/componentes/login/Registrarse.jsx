import React from 'react';
import Footer from '../estructura/Footer';
import Nav from '../estructura/Nav';
import "./estilo/registrarse.css";

function Registrarse() {
    return (
        <div>
            <div className='container d-flex align-items-center justify-content-center gap-5 my-5 text-center'>
                <form className='w-100 m-5' action="">
                    <h3>Registrarse</h3>
                    <br />
                    <div className="mb-3">
                        <label for="correo" className="form-label">Correo electrónico</label>
                        <input type="email" className="form-control " id="correo" placeholder="" />
                    </div>
                    <div className="mb-3">
                        <label for="usuario" className="form-label">Usuario</label>
                        <input type="text" className="form-control" id="usuario" placeholder="" />
                    </div>
                    <div className="mb-3">
                        <label for="contrasena" className="form-label">Contraseña</label>
                        <input type="password" className="form-control" id="contrasena" placeholder="" />
                    </div>
                    <div className="mb-3">
                        <label for="confirmarContrasena" className="form-label">Confirmar contraseña</label>
                        <input type="password" className="form-control" id="confirmarContrasena" placeholder="" />
                    </div>
                    <div className="mb-3">
                        <label for="telefono" className="form-label">Número de teléfono</label>
                        <input type="numer" className="form-control" id="telefono" placeholder="" />
                    </div>
                    <div className="mb-3">
                        <label for="direccion" className="form-label">Dirección</label>
                        <input type="text" className="form-control" id="direccion" placeholder="" />
                    </div>
                    <div className="mb-3">
                        <label for="localidad" className="form-label">Localidad</label>
                        <input type="text" className="form-control" id="localidad" placeholder="" />
                    </div>
                    <div className="mb-3">
                        <label for="codigoPostal" className="form-label">Código postal</label>
                        <input type="number" className="form-control" id="codigoPostal" placeholder="" />
                    </div>
                    <div className='col'>
                        <button className='button2 px-4 py-2 rounded-pill w-100 text-light border-0'>Crear cuenta</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Registrarse;
