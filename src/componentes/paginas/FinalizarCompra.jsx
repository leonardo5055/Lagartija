import React from 'react'
import Sanlorenzo from "../../img/sanlorenzo.png";
import Usuario from "../../img/usuario.png";
import Casa from "../../img/casa.png";
import Master from "../../img/mastercard.png";
import Visa from "../../img/visa.png";
import Mercado from "../../img/mercado-pago.png";

function FinalizarCompra() {
    return (
        <div>
            <h1 className='m-3'>FINALIZAR COMPRA</h1>
            <div className='d-flex justify-content-around gap-5 m-3'>
                <div className='cajaFor w-50'>
                    <form className=' m-5 fw-bold' action="">
                        <div className='d-flex gap-3'>
                            <img src={Usuario} width={32} alt="" />
                            <h3>IDENTIFICACION</h3>
                        </div>
                        <p>SOLICITAMOS ÚNICAMENTE LA INFORMACIÓN ESENCIAL PARA LA FINALIZACIÓN DE LA COMPRA.</p>
                        <div className="mb-3">
                            <label for="usuario" className="form-label">NOMBRE</label>
                            <input type="text" className="form-control tamano" id="usuario" placeholder="" />
                        </div>
                        <div className="mb-3">
                            <label for="usuario" className="form-label">EMAIL</label>
                            <input type="email" className="form-control tamano" id="correo" placeholder="" />
                        </div>
                        <div className="mb-3">
                            <label for="telefono" className="form-label">TELEFONO</label>
                            <input type="number" className="form-control tamano" id="telefono" placeholder="" />
                        </div>
                        <div className="mb-3">
                            <label for="DNI" className="form-label">DNI</label>
                            <input type="number" className="form-control tamano" id="DNI" placeholder="" />
                        </div>
                        <div className="mb-3">
                            <label for="tarjeta" className="form-label">NUMERO DE TARJETA</label>
                            <input type="number" className="form-control tamano" id="tarjeta" placeholder="" />
                        </div>
                        <div className="mb-3">
                            <label for="codigo" className="form-label">CODIGO DE SEGURIDAD</label>
                            <input type="number" className="form-control tamano" id="codigo" placeholder="" />
                        </div>
                        <div className="mb-3">
                            <label for="vencimiento" className="form-label">VENCIMIENTO</label>
                            <input type="number" className="form-control tamano" id="vencimiento" placeholder="" />
                        </div>
                        <div className="mb-3">
                            <p>METODO DE PAGO</p>
                            <div className='d-flex gap-3'>
                                <button><img src={Master} alt="" /></button>
                                <button><img src={Visa} alt="" /></button>
                                <button><img src={Mercado} alt="" /></button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="cajaFor w-50">
                    <form className="m-5 fw-bold" action="">
                        <div className='d-flex'>
                            <img src={Casa} alt="" />
                            <h3 className='m-3'>ENVIO</h3>
                        </div>
                        <div className="mb-3">
                            <label for="calle" className="form-label">CALLE</label>
                            <input type="text" className="form-control " id="calle" placeholder="" />
                        </div>
                        <div className="mb-3">
                            <label for="localidad" className="form-label">LOCALIDAD</label>
                            <input type="text" className="form-control " id="localidad" placeholder="" />
                        </div>
                        <div className="mb-3">
                            <label for="codigo-postal" className="form-label">CODIGO POSTAL</label>
                            <input type="text" className="form-control " id="codigo-postal" placeholder="" />
                        </div>
                    </form>
                </div>
                <div className='d-flex flex-column m-5'>
                    <div>
                        <h3>PRODUCTOS</h3>
                        <img src={Sanlorenzo} width={150} alt="" />
                        <p>Remera de San Lorenzo</p>
                    </div>
                    <div>
                        <div className="d-flex justify-content-between m-3">
                            <p>Subtotal</p>
                            <p>60.000</p>
                        </div>
                        <hr className="linea" />
                        <div className="d-flex justify-content-between m-3 fw-bold">
                            <p>Total</p>
                            <p>60.000</p>
                        </div>
                        <div>
                            <button className="px-4 py-2 rounded-pill w-30 text-light border-0 btnVerde">Finalizar compra</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FinalizarCompra
