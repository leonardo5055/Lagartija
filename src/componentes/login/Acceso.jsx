import React from 'react'
import Footer from '../estructura/Footer'
import Nav from '../estructura/Nav'
import Usuario from "../../img/usuario.png";
import "./estilo/acceso.css"

function Acceso() {
    return (
        <div>
            <Nav />
            <div className='d-flex align-items-center justify-content-center gap-5 my-5'>
                <div>
                    <img src={Usuario} width="150px" alt="usuario" />
                </div>
                <div>
                    <form action="">
                        <div className="mb-3">
                            <label for="correo" className="form-label">Correo electronico</label>
                            <input type="email" className="form-control" id="correo" placeholder="Email" />
                        </div>
                        <div className="mb-3">
                            <label for="contra" className="form-label">Contraseña</label>
                            <input type="password" className="form-control" id="contra" placeholder="Contraseña" />
                        </div>
                    </form>
                    <div className='row row-cols-2'>
                        <div className='col'>
                            <button className='button1 mb-2 px-4 py-2 rounded-pill w-100 text-light border-0'>Continuar</button>
                            <button className='button3 px-4 py-2 rounded-pill w-100 text-light border-0'>Olvide mi contraseña</button>
                        </div>
                        <div className='col'>
                            <button className='button2 px-4 py-2 rounded-pill w-100 text-light border-0'>Crear cuenta</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Acceso