import React from 'react'
import { Link } from 'react-router-dom'
import Usuario from "../../img/usuario.png"
import Sanlorenzo from "../../img/sanlorenzo.png"
import Remera from "../../img/remera1.jpg"

function Pedidos() {
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
                    <h1 className='m-3'>Pedidos</h1>
                    <div className='m-5 w-100'>
                        <div className='bordeRojo p-3'>
                            <table className="table w-100 m-3 text-center">
                                <tr>
                                    <th scope="col" className="px-3">PRODUCTOS</th>
                                    <th scope='col' className='btnAmarillo px-3'>Pendiente</th>
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
                        <div className='bordeRojo p-3 mt-3'>
                            <table className="table m-3 text-center">
                                <tr>
                                    <th scope="col" className="px-3">PRODUCTOS</th>
                                    <th scope='col' className='btnVerde px-3'>Entregado</th>
                                    <th scope="col" className="px-3">PRECIO</th>
                                    <th scope="col" className="px-3">CANTIDAD</th>
                                    <th scope="col" className="px-3">TOTAL</th>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <img src={Remera} width="150" />
                                    </th>
                                    <td className="px-3">REMERA MARS NEGRA</td>
                                    <td className="px-3">20.000</td>
                                    <td className="px-3">1</td>
                                    <td className="px-3">20.000</td>
                                </tr>

                                <Link to="/devolver-productos">
                                    <button className='d-flex justify-content-end px-4 py-2 w-30 border-0  btnRojo'>Devolver producto</button>
                                </Link>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pedidos
