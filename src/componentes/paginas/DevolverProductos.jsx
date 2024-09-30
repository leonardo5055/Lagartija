import React from 'react'
import Usuario from "../../img/usuario.png"
import Sanlorenzo from "../../img/sanlorenzo.png"
import Remera from "../../img/remera1.jpg"
import { Link } from 'react-router-dom'

function DevolverProductos() {
    return (
        <div>
            <div className='d-flex justify-content-start gap-5 m-5'>
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
                <div className='d-flex border border-black w-100'>
                    <h1 className='m-3'>Devolver producto</h1>
                    <div className='m-5 w-100'>
                        <div className='p-3'>
                            <table className="table w-100 m-3 text-center">
                                <tr>
                                    <th scope="col" className="px-3">PRODUCTOS</th>
                                    <th scope='col' className='px-3'></th>
                                    <th scope="col" className="px-3">PRECIO</th>
                                    <th scope="col" className="px-3">CANTIDAD</th>
                                    <th scope="col" className="px-3">TOTAL</th>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <img src={Sanlorenzo} width="150" />
                                    </th>
                                    <td className="px-3">REMERA SAN LORENZO</td>
                                    <td className="px-3">60.000</td>
                                    <td className="px-3">1</td>
                                    <td className="px-3">60.000</td>
                                </tr>
                            </table>
                        </div>
                        <hr className='linea' />
                        <div className='mt-3'>
                            <p>Motivo de devolucion</p>
                            <input type="text" className="form-control cajaFor mt-4 " id="usuario" placeholder="" />
                            <button className='d-flex justify-content-end px-4 py-2 w-30 border-0 mt-3 btnVerde text-light' data-bs-toggle="collapse" data-bs-target="#contenidoAdicional" aria-expanded="false" aria-controls="contenidoAdicional">Devolver producto</button>
                            <div class="collapse mt-3" id="contenidoAdicional">
                                <p>Peticion de devolucion enviada con exito</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DevolverProductos
