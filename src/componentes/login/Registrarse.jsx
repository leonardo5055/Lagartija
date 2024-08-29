import React from 'react'
import Footer from '../estructura/Footer'
import Nav from '../estructura/Nav'
import "./estilo/registrarse.css"

function Registrarse() {
    return (
        <div>
            <Nav />
            <div className='container d-flex align-items-center justify-content-center gap-5 my-5 text-center'>
                <form className='w-100 m-5' action="">
                    <h3>Registrarse</h3>
                    <br />
                    <div className="mb-3">
                        <label for="correo" className="form-label">Correo electronico</label>
                        <input type="email" className="form-control " id="correo" placeholder="" />
                    </div>
                    <div className="mb-3">
                        <label for="contra" className="form-label">Usuario</label>
                        <input type="text" className="form-control" id="contra" placeholder="" />
                    </div>
                    <div className="mb-3">
                        <label for="contra" className="form-label">Contraseña</label>
                        <input type="password" className="form-control" id="contra" placeholder="" />
                    </div>
                    <div className="mb-3">
                        <label for="contra" className="form-label">Confirmar contraseña</label>
                        <input type="password" className="form-control" id="contra" placeholder="" />
                    </div>
                    <div className="mb-3">
                        <label for="contra" className="form-label">Numero de telefono</label>
                        <input type="numer" className="form-control" id="contraCon" placeholder="" />
                    </div>
                    <div className="mb-3">
                        <label for="contra" className="form-label">Direccion</label>
                        <input type="text" className="form-control" id="contra" placeholder="" />
                    </div>
                    <div className="mb-3">
                        <label for="contra" className="form-label">Localidad</label>
                        <input type="text" className="form-control" id="contra" placeholder="" />
                    </div>
                    <div className="mb-3">
                        <label for="contra" className="form-label">Codigo postal</label>
                        <input type="number" className="form-control" id="contra" placeholder="" />
                    </div>
                    <div className='col'>
                        <button className='button2 px-4 py-2 rounded-pill w-100 text-light border-0'>Crear cuenta</button>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default Registrarse