import React from "react";
import Remera from "../../img/sanlorenzo.png";
import { Link } from "react-router-dom";

function Carrito() {
    return (
        <div className="m-5">
            <h1>CARRITO DE COMPRAS</h1>
            <hr className="linea" />
            <table className="table">
                <tr>
                    <th scope="col">PRODUCTOS</th>
                    <th scope="col">PRECIO</th>
                    <th scope="col">CANTIDAD</th>
                    <th scope="col">TOTAL</th>
                    <th scope="col"></th>
                </tr>
                <tr>
                    <th scope="row">
                        <img src={Remera} width="150" />
                        <p>REMERA SAN LORENZO</p>
                    </th>
                    <td>60.000</td>
                    <td>1</td>
                    <td>60.000</td>
                    <td>x</td>
                </tr>
            </table>
            <hr className="linea" />
            <div className="d-flex justify-content-between">
                <div className="m-3">
                    <h1>ENTREGA</h1>
                    <p>VEA TODAS LAS OPCIONES DE ENVÍO PARA SUS PRODUCTOS, INCLUYENDO LOS PLAZOS Y LOS PRECIONS DE ENVIÓ</p>
                    <button className="px-4 py-2 rounded-pill w-30 text-light border-0 btnRojo m-3">Anadir Cupón de descuento </button>
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
                        <Link to="/finalizar-compra">
                            <button className="px-4 py-2 rounded-pill w-30 text-light border-0 btnVerde">Finalizar compra</button>
                        </Link>
                        <Link to="/">
                            <button className="px-4 py-2 rounded-pill w-30 text-light border-0 btnAzulOscuro">Continuar comprando</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Carrito;
