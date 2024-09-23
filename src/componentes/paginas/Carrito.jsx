import React from "react";
import Remera from "../../img/remera1.jpg";

function Carrito() {
    return (
        <div>
            <h1>CARRITO DE COMPRAS</h1>
            <hr />
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">PRODUCTOS</th>
                        <th scope="col">PRECIO</th>
                        <th scope="col">CANTIDAD</th>
                        <th scope="col">TOTAL</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">
                            <img src={Remera} width="100" />
                            <p>Remera Mars</p>
                        </th>
                        <td>20.000</td>
                        <td>1</td>
                        <td>20.000</td>
                        <td>x</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Carrito;
