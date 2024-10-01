import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BannerBuzos from "../../img/banner-buzos.png";
import CardDescuento from '../estructura/CardDescuento';
import "./estilos/home.css";

function BuzosCat() {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const obtenerProductos = async () => {
            try {
                const response = await axios.get('https://lagartija-api-production.up.railway.app/api/productos');
                setProductos(response.data);
            } catch (error) {
                console.error("Error al obtener los productos", error);
            } finally {
                setCargando(false);
            }
        };

        obtenerProductos();
    }, []);

    return (
        <div>
            <div>
                <img src={BannerBuzos} width={"100%"} height={"300"} alt="banner" />
            </div>
            <h1 className='text-center'>Buzos</h1>
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
                        productos.filter(producto => producto.categoria_id === 1).map((producto) => (
                            <div className='col-md-3 mb-4' key={producto.id_producto}>
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

export default BuzosCat;
