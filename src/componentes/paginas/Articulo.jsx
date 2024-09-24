import React from 'react';
import Sanlorenzo from "../../img/sanlorenzo.png";
import "./estilos/articulo.css"

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
            <div className='d-flex justify-content-center align-items-center m-5'>
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
                    <p className='fs-2'>$60.000</p>
                    <p className='text-naranja'>Metodos de pago</p>
                    <p>Colores:</p>
                    <div className='d-flex gap-2'>
                        <img className='border border-2 border-black' src={Sanlorenzo} width="70" />
                        <img className='border border-2 border-black' src={Sanlorenzo} width="70" />
                        <img className='border border-2 border-black' src={Sanlorenzo} width="70" />
                    </div>
                    <p>Talles</p>
                    <div className='d-flex gap-2'>
                        <button className='px-4 py-2 rounded-pill text-light border-0 btnRojo'>L</button>
                        <button className='px-4 py-2 rounded-pill text-light border-0 btnRojo'>XL</button>
                        <button className='px-4 py-2 rounded-pill text-light border-0 btnRojo'>XXL</button>
                    </div>
                    <div className='d-flex align-items-center gap-5'>
                        <p>Cantidad</p>
                        <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
                            <button type="button" class="px-4 py-2 border-0 btnVerde text-light">-</button>
                            <button type="button" class="px-4 py-2 border-0 btnVerde text-light">1</button>
                            <button type="button" class="px-4 py-2 border-0 btnVerde text-light">+</button>
                        </div>
                    </div>
                    <button type="button" class="px-4 py-2 border-0 rounded-pill btnAzulOscuro text-light">Comprar ahora</button>
                    <button type="button" class="px-4 py-2 border-0 rounded-pill btnAmarillo text-light">Añadir al carrito</button>
                </div>
            </div>
            <div className='m-5'>
                <h1 className='text-naranja'>Descripción del producto:</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur iste vitae veritatis accusamus! Esse odit quod aliquam molestiae commodi, perferendis rerum officia magnam nulla. Ab quia ipsa corporis sapiente soluta!</p>
            </div>
            <hr />
            <div>
                <h1 className='text-center text-naranja'>También te puede interesar</h1>
                <div className='d-flex gap-5 justify-content-center m-5'>
                    <Card>
                        <Image src={Sanlorenzo} wrapped ui={false} />
                        <CardContent>
                            <CardHeader>Remera San Lorenzo</CardHeader>
                            <CardMeta><span className='date text-decoration-line-through'>$90.000</span></CardMeta>
                            <CardDescription>$60.000 <span className='descuento'>- Descuento</span></CardDescription>
                        </CardContent>
                    </Card>
                    <Card>
                        <Image src={Sanlorenzo} wrapped ui={false} />
                        <CardContent>
                            <CardHeader>Remera San Lorenzo</CardHeader>
                            <CardMeta><span className='date text-decoration-line-through'>$90.000</span></CardMeta>
                            <CardDescription>$60.000 <span className='descuento'>- Descuento</span></CardDescription>
                        </CardContent>
                    </Card>
                    <Card>
                        <Image src={Sanlorenzo} wrapped ui={false} />
                        <CardContent>
                            <CardHeader>Remera San Lorenzo</CardHeader>
                            <CardMeta><span className='date text-decoration-line-through'>$90.000</span></CardMeta>
                            <CardDescription>$60.000 <span className='descuento'>- Descuento</span></CardDescription>
                        </CardContent>
                    </Card>
                    <Card>
                        <Image src={Sanlorenzo} wrapped ui={false} />
                        <CardContent>
                            <CardHeader>Remera San Lorenzo</CardHeader>
                            <CardMeta><span className='date text-decoration-line-through'>$90.000</span></CardMeta>
                            <CardDescription>$60.000 <span className='descuento'>- Descuento</span></CardDescription>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Articulo;