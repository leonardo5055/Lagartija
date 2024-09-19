import React from 'react';
import Sanlorenzo from "../../img/sanlorenzo.png";

import {
    CardMeta,
    CardHeader,
    CardDescription,
    CardContent,
    Card,
    Image,
} from 'semantic-ui-react'

function Articulo() {
    return (
        <div>
            <div className='d-flex justify-content-center align-items-center'>
                <div className='d-flex gap-4 flex-column'>
                    <img className='border border-2 border-black' src={Sanlorenzo} width="70" />
                    <img className='border border-2 border-black' src={Sanlorenzo} width="70" />
                    <img className='border border-2 border-black' src={Sanlorenzo} width="70" />
                    <img className='border border-2 border-black' src={Sanlorenzo} width="70" />
                </div>
                <div>
                    <img src={Sanlorenzo} width="500" />
                </div>
                <div className='d-flex flex-column gap-3'>
                    <h1>Remera San Lorenzo</h1>
                    <p>20.000</p>
                    <p>Metodos de pago</p>
                    <div className='d-flex gap-2'>
                        <img className='border border-2 border-black' src={Sanlorenzo} width="50" />
                        <img className='border border-2 border-black' src={Sanlorenzo} width="50" />
                        <img className='border border-2 border-black' src={Sanlorenzo} width="50" />
                    </div>
                    <p>Talles</p>
                    <div className='d-flex gap-2'>
                        <button className='px-4 py-2 rounded-pill text-light border-0'>L</button>
                        <button className='px-4 py-2 rounded-pill text-light border-0'>XL</button>
                        <button className='px-4 py-2 rounded-pill text-light border-0'>XXL</button>
                    </div>
                    <div className='d-flex align-items-center gap-5'>
                        <p>Cantidad</p>
                        <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
                            <button type="button" class="btn btn-primary">-</button>
                            <button type="button" class="btn btn-primary">1</button>
                            <button type="button" class="btn btn-primary">+</button>
                        </div>
                    </div>
                    <button type="button" class="btn btn-primary">Comprar ahora</button>
                    <button type="button" class="btn btn-primary">Añadir al carrito</button>
                </div>
            </div>
            <div className='m-5'>
                <h1>Descripcion</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur iste vitae veritatis accusamus! Esse odit quod aliquam molestiae commodi, perferendis rerum officia magnam nulla. Ab quia ipsa corporis sapiente soluta!</p>
            </div>
            <div>
                <h1 className='text-center'>Tambien te puede interesar</h1>
            </div>
        </div>
    );
}

export default Articulo;