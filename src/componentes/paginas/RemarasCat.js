import React, { useEffect, useState } from 'react';
import BannerGeneral from "../../img/banner-remeras.png";
import CardDescuento from '../estructura/CardDescuento';
import "./estilos/home.css";

function RemarasCat() {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);

    // Función para obtener los productos de la API
    const obtenerProductos = async () => {
        try {
            const response = await fetch('https://lagartija-api-production.up.railway.app/api/productos');
            const data = await response.json();
            // Filtrar "remeras"
            const remeras = data.filter(producto => producto.categoria_id === 1);
            setProductos(remeras);
        } catch (error) {
            console.error("Error al obtener los productos:", error);
        } finally {
            setCargando(false);
        }
    };

    useEffect(() => {
        obtenerProductos();
    }, []);

    return (
        <div>
            <div>
                <img src={BannerGeneral} width={"100%"} height={"300"} alt="banner" />
            </div>
            <h1 className='text-center'>Remeras</h1>
            <div className='mx-5'>
                <div className='row'>
                    {cargando ? (
                        // Esqueleto de carga para categoría de remeras
                        [...Array(4)].map((_, index) => (
                            <div className="col-md-3 mb-5" key={index}>
                                <div className="card placeholder-glow" aria-hidden="true">
                                    <div className="card-img-top placeholder" style={{ height: '200px' }}></div>
                                    <div className="card-body">
                                        <h5 className="card-title placeholder-glow">
                                            <span className="placeholder col-6"></span>
                                        </h5>
                                        <p className="card-text placeholder-glow">
                                            <span className="placeholder col-7"></span>
                                            <span className="placeholder col-4"></span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
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
        </div>
    );
}

export default RemarasCat;
