import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./estilos/articulo.css";
import CardDescuento from '../estructura/CardDescuento';

function Articulo() {
    const { slug } = useParams();
    const [producto, setProducto] = useState(null);
    const [imagenSeleccionada, setImagenSeleccionada] = useState(null);
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        // Lógica para obtener el producto de la API según el 'slug'
        fetch(`https://lagartija-api-production.up.railway.app/api/productos`)
            .then(response => response.json())
            .then(data => {
                // Encuentra el producto usando el slug (simulamos con nombre)
                const productoEncontrado = data.find(item =>
                    item.nombre.toLowerCase().replace(/[^\w\s]/gi, '').replace(/\s+/g, '-') === slug
                );
                console.log(data);
                setProductos(data);
                setProducto(productoEncontrado);
            })
            .catch(error => console.error("Error fetching product:", error));
    }, [slug]);

    if (!producto) {
        return <p>Cargando producto...</p>;
    }

    const seleccionarImagen = (index) => {
        setImagenSeleccionada(index);
    };

    return (
        <div>
            <div className='d-flex justify-content-center align-items-center m-5'>
                <div className='d-flex gap-4 flex-column'>
                    <img className='border border-2 border-black' src={producto.imagen_url} alt='foto' width="70" />
                </div>
                <div>
                    <img src={producto.imagen_url} width="500" alt='foto' />
                </div>
                <div className='d-flex flex-column gap-3'>
                    <h1>{producto.nombre}</h1>
                    <p className='fs-2'>${producto.precio_actual}</p>
                    <p className='text-naranja'>Metodos de pago</p>
                    <p>Colores:</p>
                    <div className='d-flex gap-3'>
                        {[0, 1, 2, 3].map((index) => (
                            <button key={index} className='border-0 p-0' onClick={() => seleccionarImagen(index)}>
                                <img className={imagenSeleccionada === index ? 'bordeActivo' : 'bordeInactivo'} src={producto.imagen_url} width="70" alt={`Imagen ${index + 1}`} />
                            </button>
                        ))}
                    </div>
                    <p>Talles</p>
                    <div className='d-flex gap-2'>
                        <button className='px-4 py-2 rounded-pill text-light border-0 btnRojo'>L</button>
                        <button className='px-4 py-2 rounded-pill text-light border-0 btnRojo'>XL</button>
                        <button className='px-4 py-2 rounded-pill text-light border-0 btnRojo'>XXL</button>
                    </div>
                    <div className='d-flex align-items-center gap-5'>
                        <div>
                            <p>Cantidad</p>
                            <p>stock disponibles: {producto.stock}</p>
                        </div>
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
                <p>{producto.descripcion}</p>
            </div>
            <hr />
            <div>
                <h1 className='text-center text-naranja'>También te puede interesar</h1>
                <div className='row'>
                    {
                        productos.map((producto) => (
                            <div className='col-md-3 mb-5' key={producto.id_producto}>
                                <CardDescuento
                                    imagen={producto.imagen_url}
                                    nombre={producto.nombre}
                                    precioOriginal={`$${producto.precio_antes}`}
                                    precioDescuento={`$${producto.precio_actual}`}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Articulo;
