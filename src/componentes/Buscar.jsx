import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import CardDescuento from './estructura/CardDescuento';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function Buscar() {
    const query = useQuery();
    const terminoBusqueda = query.get('query');
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const response = await fetch(`https://lagartija-api-production.up.railway.app/api/productos?search=${terminoBusqueda}`);
                const data = await response.json();
                setProductos(data);
            } catch (error) {
                console.error("Error al obtener los productos:", error);
            } finally {
                setCargando(false);
            }
        };

        fetchProductos();
    }, [terminoBusqueda]);

    return (
        <div className='mx-5'>
            <h1>Resultados de la búsqueda para: "{terminoBusqueda}"</h1>
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
                <div className='row'>
                    {productos.map((producto) => (
                        <div className='col-md-3 mb-5' key={producto.id_producto}>
                            <CardDescuento
                                imagen={producto.imagen_url}
                                nombre={producto.nombre}
                                precioOriginal={`$${producto.precio_antes}`}
                                precioDescuento={`$${producto.precio_actual}`}
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Buscar;
