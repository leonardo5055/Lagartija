import React, { useEffect, useState } from 'react'
import BannerPantalones from "../../img/banner-pantalones.png";
import CardDescuento from '../estructura/CardDescuento';
import "./estilos/home.css"
import axios from 'axios';


function PantalonesCat() {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const obtenerProductos = async () => {
            try {
                const response = await axios.get('http://localhost:40588/api/productos');
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
                <img src={BannerPantalones} width={"100%"} height={"300"} alt="banner" />
            </div>
            <h1 className='text-center'>Pantalones</h1>
            <div className='mx-5'>
                <div className='row'>
                    {cargando ? (
                        <p>Cargando productos...</p>
                    ) : (
                        productos.filter(producto => producto.categoria_id === 3).map((producto) => (
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
    )
}

export default PantalonesCat