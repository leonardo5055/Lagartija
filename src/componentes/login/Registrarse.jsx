import React, { useState } from 'react';
import "./estilo/registrarse.css";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Registrarse() {
    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [confirmarContrasena, setConfirmarContrasena] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const registrado = async (e) => {
        e.preventDefault(); // Evitar el comportamiento por defecto del formulario

        // Validar que las contraseñas coincidan
        if (contrasena !== confirmarContrasena) {
            setError('Las contraseñas no coinciden');
            return;
        }

        // Preparar los datos del nuevo usuario
        const nuevoUsuario = {
            correo,
            contraseña: contrasena,
        };

        try {
            // Enviar los datos a la API
            const response = await axios.post('http://localhost:40588/api/usuarios', nuevoUsuario);
            console.log('Usuario registrado:', response.data);

            // Redirigir al usuario a la página de inicio de sesión
            navigate('/acceso');
        } catch (err) {
            // Manejar errores de la API
            if (err.response) {
                // Si el servidor responde con un estado que no sea 2xx
                setError('Error al registrar el usuario: ' + err.response.data.error);
            } else {
                // Si hay un error en la configuración de la solicitud
                setError('Error de red. Por favor, intenta de nuevo más tarde.');
            }
        }
    };

    return (
        <div>
            <div className='container d-flex align-items-center justify-content-center gap-5 my-5 text-center'>
                <form className='w-100 m-5' onSubmit={registrado}>
                    <h3>Registrarse</h3>
                    <br />
                    {error && <p className="text-danger">{error}</p>}
                    <div className="mb-3">
                        <label htmlFor="correo" className="form-label">Correo electrónico</label>
                        <input
                            type="email"
                            className="form-control"
                            id="correo"
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="contrasena" className="form-label">Contraseña</label>
                        <input
                            type="password"
                            className="form-control"
                            id="contrasena"
                            value={contrasena}
                            onChange={(e) => setContrasena(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="confirmarContrasena" className="form-label">Confirmar contraseña</label>
                        <input
                            type="password"
                            className="form-control"
                            id="confirmarContrasena"
                            value={confirmarContrasena}
                            onChange={(e) => setConfirmarContrasena(e.target.value)}
                            required
                        />
                    </div>
                    <div className='col'>
                        <button type="submit" className='button2 px-4 py-2 rounded-pill w-100 text-light border-0'>Crear cuenta</button>
                    </div>
                    <div className="mt-3">
                        <Link to="/acceso">¿Ya tienes una cuenta? Iniciar sesión</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Registrarse;
