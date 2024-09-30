import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Usuario from "../../img/usuario.png";
import "./estilo/Acceso.css";
import axios from 'axios';

function Acceso() {
    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');
    const navigate = useNavigate();

    // Función para obtener usuarios
    const obtenerUsuarios = async () => {
        try {
            const response = await axios.get('http://localhost:40588/api/usuarios');
            setUsuarios(response.data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // useEffect para obtener usuarios al montar el componente
    useEffect(() => {
        obtenerUsuarios();
    }, []);

    // Función para manejar el inicio de sesión
    const manejarLogin = (e) => {
        e.preventDefault(); // Evitar el comportamiento por defecto del formulario

        // Verificar las credenciales del usuario
        const usuarioEncontrado = usuarios.find(usuario =>
            usuario.correo === correo && usuario.contraseña === contrasena
        );

        if (usuarioEncontrado) {
            // Guardar información en localStorage para indicar que el usuario está autenticado
            localStorage.setItem('usuario', JSON.stringify(usuarioEncontrado));
            console.log('Usuario autenticado:', localStorage.getItem("usuario")); // Verificar aquí
            // Redirigir al inicio
            navigate('/');
        } else {
            // Si las credenciales son incorrectas, muestra un mensaje de error
            alert('Correo o contraseña incorrectos');
        }
    };

    return (
        <div>
            <div className='d-flex align-items-center justify-content-center gap-5 my-5 vh-100'>
                <div>
                    <img src={Usuario} width="150px" alt="usuario" />
                </div>
                <div>
                    <h1 className='text-center'>Iniciar Sesion</h1>
                    <br />
                    <form onSubmit={manejarLogin}>
                        <div className="mb-3">
                            <label htmlFor="correo" className="form-label">Correo electrónico</label>
                            <input
                                type="email"
                                className="form-control"
                                id="correo"
                                placeholder="Email"
                                value={correo}
                                onChange={(e) => setCorreo(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="contrasena" className="form-label">Contrasena</label>
                            <input
                                type="password"
                                className="form-control"
                                id="contrasena"
                                placeholder="Contrasena"
                                value={contrasena}
                                onChange={(e) => setContrasena(e.target.value)}
                            />
                        </div>
                        <button type="submit" className='button1 mb-2 px-4 py-2 rounded-pill w-100 text-light border-0'>Iniciar Sesion</button>
                    </form>
                    <div className='row row-cols-2'>
                        <div className='col'>
                            <Link to="/recuperar-contrasena" className="text-primary">Olvidé mi contrasena</Link>
                        </div>
                        <div className='col'>
                            <button onClick={() => window.location.href = "./registrarse"} className='button2 px-4 py-2 rounded-pill w-100 text-light border-0'>Crear cuenta</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Mostrar la lista de usuarios o un mensaje de carga */}
            {loading && <p>Cargando usuarios...</p>}
            {error && <p>Error al cargar usuarios: {error}</p>}
        </div>
    );
}

export default Acceso;
