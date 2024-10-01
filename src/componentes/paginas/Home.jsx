import React, { useEffect, useState } from 'react';
import BannerGeneral from "../../img/banner-general.png";
import "./estilos/home.css";
import CardDescuento from '../estructura/CardDescuento';

function Home() {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);

    // Obtener productos de la API
    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const response = await fetch('https://lagartija-api-production.up.railway.app/api/productos');
                const data = await response.json();
                setProductos(data);
            } catch (error) {
                console.error("Error al obtener los productos:", error);
            } finally {
                setCargando(false);
            }
        };

        fetchProductos();
    }, []);

    return (
        <div>
            <div>
                <img src={BannerGeneral} width={"100%"} height={"300"} alt="banner" />
            </div>
            <br />
            <h1 className='text-center'>Ofertas</h1>
            <div className='mx-5'>
                <div className='row'>
                    {cargando ? (
                        <p>Cargando productos...</p>
                    ) : (
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
                    )}
                </div>
            </div>


            <hr />
            <h1 className='text-center'>Remeras más vendidas</h1>
            <div className='mx-5'>
                <div className='row'>
                    {productos.filter(producto => producto.categoria_id === 1).length === 0 ? (
                        <p>No hay remeras disponibles.</p>
                    ) : (
                        productos.filter(producto => producto.categoria_id === 1).map((producto) => (
                            <div className='col-md-3 mb-5' key={producto.id_producto}>
                                <CardDescuento
                                    imagen={producto.imagen_url}
                                    nombre={producto.nombre}
                                    precioOriginal={`$${producto.precio_antes}`}
                                    precioDescuento={`$${producto.precio_actual}`}
                                />
                            </div>
                        ))
                    )}
                </div>
            </div>
            {/*aca se sigue con las categorias*/}
        </div>
    );
}

export default Home;
