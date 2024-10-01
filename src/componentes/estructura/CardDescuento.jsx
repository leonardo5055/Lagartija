import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardMeta, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


function CardDescuento({ imagen, nombre, precioOriginal, precioDescuento }) {
    // Función para sanitizar el nombre del producto
    const crearSlug = (nombre) => {
        return nombre
            .toLowerCase()
            .replace(/[^\w\s]/gi, '') // Elimina caracteres especiales
            .replace(/\s+/g, '-');    // Sustituye los espacios por guiones
    };

    return (
        <Link to={`/articulo/${crearSlug(nombre)}`}> {/* Usamos el nombre sanitizado en la URL */}
            <Card role="button" className='text-black card-uniform'>
                <Image src={imagen} height="250px" wrapped ui={false} className='text-center' />
                <CardContent>
                    <div className='mx-3 mb-3'>
                        <CardHeader>{nombre}</CardHeader>
                        <CardMeta>
                            <span className='date text-decoration-line-through'>{precioOriginal}</span>
                        </CardMeta>
                        <CardDescription>
                            <span className='fs-4'>{precioDescuento}</span>
                            <span className='descuento'> Descuento</span>
                        </CardDescription>
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
}

export default CardDescuento;
