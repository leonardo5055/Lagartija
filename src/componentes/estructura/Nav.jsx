import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Importar useNavigate
import "./estilo/nav.css";
import Logo from "../../img/logo-lagartija.png";
import Carrito from "../../img/carrito-de-compras.png";

function Nav() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [usuario, setUsuario] = useState(null);
    const [busqueda, setBusqueda] = useState(''); // Estado para el término de búsqueda
    const navigate = useNavigate(); // Hook para la navegación

    // useEffect para verificar si el usuario está autenticado
    useEffect(() => {
        try {
            const usuarioGuardado = localStorage.getItem('usuario');
            if (usuarioGuardado) {
                const usuarioParseado = JSON.parse(usuarioGuardado);
                if (usuarioParseado && usuarioParseado.id_usuario) {
                    setUsuario(usuarioParseado);
                    setIsAuthenticated(true);
                }
            }
        } catch (error) {
            console.error("Error al obtener los datos del usuario:", error);
        }
    }, []);

    // Función para cerrar sesión
    const handleLogout = () => {
        localStorage.removeItem('usuario'); // Eliminar el usuario del localStorage
        setIsAuthenticated(false); // Cambiar el estado de autenticación
        setUsuario(null); // Borrar la información del usuario
    };

    // Función para manejar la búsqueda
    const handleBusqueda = (e) => {
        setBusqueda(e.target.value);
    };

    // Función para enviar la búsqueda
    const enviarBusqueda = (e) => {
        e.preventDefault();
        if (busqueda.trim()) {
            // Redirigir a la página de resultados de búsqueda
            navigate(`/buscar?query=${busqueda}`);
        }
    };

    return (
        <header>
            <nav className='h-auto d-flex justify-content-between align-items-center text-light'>
                <Link to="/">
                    <img className='m-2' src={Logo} width="100px" alt="Lagartija - Logo" />
                </Link>

                <div className="d-flex flex-column w-50 m-2">
                    <form className='mb-3' onSubmit={enviarBusqueda}>
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Buscar"
                            aria-label="Search"
                            value={busqueda}
                            onChange={handleBusqueda} // Actualizar el valor de búsqueda
                        />
                    </form>
                    <div>
                        <ul className='d-flex list-unstyled flex-row gap-4 justify-content-center'>
                            <li><Link to="/remeras">Remeras</Link></li>
                            <li><Link to="/buzos">Buzos</Link></li>
                            <li><Link to="/pantalones">Pantalones</Link></li>
                            <li><Link to="/zapatillas">Zapatillas</Link></li>
                        </ul>
                    </div>
                </div>

                <div className='m-2'>
                    <ul className='d-flex list-unstyled flex-row gap-3'>
                        {!isAuthenticated && (
                            <>
                                <li><Link to="/registrarse">Crear tu cuenta</Link></li>
                                <li><Link to="/acceso">Ingresar</Link></li>
                            </>
                        )}

                        {isAuthenticated && usuario && (
                            <>
                                <div className="btn-group">
                                    <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                        {usuario.correo}
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/perfil">Perfil</Link></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><button className="dropdown-item" onClick={handleLogout}>Cerrar Sesión</button></li>
                                    </ul>
                                </div>
                            </>
                        )}
                        <li><Link to="/carrito"><img src={Carrito} width="25px" alt="carrito" /></Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Nav;
