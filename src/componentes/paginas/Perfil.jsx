import React, { useEffect, useState } from 'react';
import Usuario from "../../img/usuario.png";
import { Link } from 'react-router-dom';

function Perfil() {
    const [usuario, setUsuario] = useState(null);

    useEffect(() => {
        try {
            const usuarioGuardado = localStorage.getItem('usuario');
            if (usuarioGuardado) {
                const usuarioParseado = JSON.parse(usuarioGuardado);
                if (usuarioParseado && usuarioParseado.id_usuario) {
                    setUsuario(usuarioParseado);
                }
            }
        } catch (error) {
            console.error("Error al obtener los datos del usuario:", error);
        }
    }, []);

    // Si el usuario no está disponible, mostramos un mensaje de carga o un estado vacío
    if (!usuario) {
        return <p>Cargando datos del usuario...</p>;
    }

    return (
        <div className='d-flex justify-content-center gap-5 m-5'>
            <div className='d-flex m-3 flex-column gap-5'>
                <img src={Usuario} width={100} className='cajaFor rounded-circle' alt="perfil" />
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
                    <form className='m-5 fw-bold row row-cols-2'>
                        <div className="mb-5">
                            <label htmlFor="usuario" className="form-label">NOMBRE</label>
                            <p className='fw-normal'>{usuario.nombres}</p>
                            <div className="collapse mt-3" id="contenidoAdicional">
                                <input type="text" className="form-control cajaFor" id="usuario" placeholder="" />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="apellido" className="form-label">APELLIDO</label>
                            <p className='fw-normal'>{usuario.apellidos}</p>
                            <div className="collapse mt-3" id="contenidoAdicional">
                                <input type="text" className="form-control cajaFor" id="apellido" placeholder="" />
                            </div>
                        </div>
                        <div className="mb-5">
                            <label htmlFor="correo" className="form-label">EMAIL</label>
                            <p className='fw-normal'>{usuario.correo}</p>
                            <div className="collapse mt-3" id="contenidoAdicional">
                                <input type="email" className="form-control cajaFor" id="correo" placeholder="" />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="telefono" className="form-label">TELEFONO</label>
                            <p className='fw-normal'>{usuario.telefono}</p>
                            <div className="collapse mt-3" id="contenidoAdicional">
                                <input type="number" className="form-control cajaFor" id="telefono" placeholder="" />
                            </div>
                        </div>
                        <div className="mb-5">
                            <label htmlFor="DNI" className="form-label">DNI</label>
                            <p className='fw-normal'>{usuario.dni}</p>
                            <div className="collapse mt-3" id="contenidoAdicional">
                                <input type="number" className="form-control cajaFor" id="DNI" placeholder="" />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="genero" className="form-label">GENERO</label>
                            <p className='fw-normal'>{usuario.genero}</p>
                            <div className="collapse mt-3" id="contenidoAdicional">
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
    );
}

export default Perfil;
