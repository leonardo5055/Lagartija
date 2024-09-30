import React from 'react'
import Usuario from "../../img/usuario.png";
import { Link } from 'react-router-dom';

function Perfil() {
    return (
        <div className='d-flex justify-content-center gap-5 m-5'>
            <div className='d-flex m-3 flex-column gap-5'>
                <img src={Usuario} width={100} className='cajaFor rounded-circle' alt="" />

                <Link to="/perfil">
                    <p className='text-black'>Perfil</p>
                </Link>

                <Link to="/pedidos">
                    <p className='text-black'>Pedidos</p>
                </Link>

                <Link to="/">
                    <p className='text-black'>Salir</p>
                </Link>
            </div>
            <div className='d-flex border border-black'>
                <h1 className='m-3'>Perfil</h1>
                <div className='m-5'>
                    <form className='m-5 fw-bold row row-cols-2' action="">
                        <div className="mb-5">
                            <label for="usuario" className="form-label">NOMBRE</label>
                            <div class="collapse mt-3" id="contenidoAdicional">
                                <input type="text" className="form-control cajaFor " id="usuario" placeholder="" />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label for="apellido" className="form-label">APELLIDO</label>
                            <div class="collapse mt-3" id="contenidoAdicional">
                                <input type="text" className="form-control cajaFor" id="apellido" placeholder="" />
                            </div>
                        </div>
                        <div className="mb-5">
                            <label for="usuario" className="form-label">EMAIL</label>
                            <div class="collapse mt-3" id="contenidoAdicional">
                                <input type="email" className="form-control cajaFor" id="correo" placeholder="" />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label for="telefono" className="form-label">TELEFONO</label>
                            <div class="collapse mt-3" id="contenidoAdicional">
                                <input type="number" className="form-control cajaFor" id="telefono" placeholder="" />
                            </div>
                        </div>
                        <div className="mb-5">
                            <label for="DNI" className="form-label">DNI</label>
                            <div class="collapse mt-3" id="contenidoAdicional">
                                <input type="number" className="form-control cajaFor" id="DNI" placeholder="" />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label for="genero" className="form-label">GENERO</label>
                            <div class="collapse mt-3" id="contenidoAdicional">
                                <input type="text" className="form-control cajaFor" id="genero" placeholder="" />
                            </div>
                        </div>
                    </form>
                    <div className='d-flex justify-content-end'>
                        <button className='px-4 py-2 w-30 border-0 btnVerde w-30 text-light border-0 btnRojo mt-5' data-bs-toggle="collapse" data-bs-target="#contenidoAdicional" aria-expanded="false" aria-controls="contenidoAdicional">Editar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Perfil
