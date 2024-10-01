import React, { useEffect, useState } from 'react';
import BannerGeneral from "../../img/banner-general.png";
import "./estilos/home.css";
import CardDescuento from '../estructura/CardDescuento';

function Home() {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    // Obtener productos de la API
    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const response = await fetch('https://lagartija-api-production.up.railway.app/api/productos');
                if (!response.ok) {
                    throw new Error("Error en la respuesta de la API");
                }
                const data = await response.json();
                setProductos(data);
            } catch (error) {
                setError("Error al obtener los productos");
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
                        // Esqueleto de carga mientras los productos se cargan
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
                                            <span className="placeholder col-4"></span>
                                            <span className="placeholder col-6"></span>
                                            <span className="placeholder col-8"></span>
                                        </p>
                                        <a href="#" tabIndex="-1" className="btn btn-primary disabled placeholder col-6"></a>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : error ? (
                        // Mostrar mensaje de error si la carga falla
                        <div className="col-12 text-center">
                            <p className="text-danger">{error}</p>
                        </div>
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

            <hr className='linea m-5'/>
            <h1 className='text-center'>Buzos más vendidas</h1>
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
                    ) : productos.filter(producto => producto.categoria_id === 1).length === 0 ? (
                        <div className="col-12 text-center">
                            <p>No hay remeras disponibles.</p>
                        </div>
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
        </div>
    );
}

export default Home;
