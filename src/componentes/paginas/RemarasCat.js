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
            const response = await fetch('http://localhost:40588/api/productos');
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
                        <p className="text-center">Cargando productos...</p>
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
