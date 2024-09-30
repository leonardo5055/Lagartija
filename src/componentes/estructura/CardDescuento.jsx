import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardMeta, Image } from 'semantic-ui-react';

function CardDescuento({ imagen, nombre, precioOriginal, precioDescuento }) {
    return (
        <Card role="button" className='text-black' onClick={() => window.location.href = "./articulo"}>
            <Image src={imagen} width="250px" wrapped ui={false} />
            <CardContent>
                <div className='mx-3 mb-3'>
                    <CardHeader>{nombre}</CardHeader>
                    <CardMeta><span className='date text-decoration-line-through'>{precioOriginal}</span></CardMeta>
                    <CardDescription className=''>
                        <span className='fs-4'>{precioDescuento}</span>
                        <span className='descuento'> Descuento</span>
                    </CardDescription>
                </div>
            </CardContent>
        </Card>
    )
}

export default CardDescuento
