import React, { useState } from 'react';
import Footer from '../estructura/Footer';
import Nav from '../estructura/Nav';
import './estilo/RecuperarContrasena.css';

function RecuperarContrasena() {
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState('');

  const manejarEnvio = async (e) => {
    e.preventDefault();
    setMensaje('');
    setError('');

    try {
      const response = await fetch('http://localhost:3000/RecuperarContrasena', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ correo })
      });

      if (response.ok) {
        setMensaje('Se ha enviado un enlace de recuperación a tu correo electrónico.');
      } else {
        setError('No se encontró una cuenta con ese correo electrónico.');
      }
    } catch (error) {
      setError('Ocurrió un error al procesar tu solicitud. Por favor, inténtalo de nuevo más tarde.');
    }
  };

  return (
    <div>
      <Nav />
      <div className='recupererar-contra-container'>
        <div className='recuperar-contra-card'>
          <div className='icono-de-candado'>
            <i className='fas fa-lock'></i>
          </div>
          <p className='desc'>
            ¿Tienes problemas para entrar? Introduce tu correo electrónico, número de teléfono o nombre de usuario y te enviaremos un enlace para que vuelvas a entrar en tu cuenta.
          </p>
          <form onSubmit={manejarEnvio}>
            <input
              type="text"
              className="form-control entrada-cuenta"
              placeholder="Correo electrónico, teléfono o usuario"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
            <button type="submit" className="btn btn-primary btn-enviar">Enviar enlace de acceso</button>
          </form>
          {mensaje && <p className="mensaje mt-3">{mensaje}</p>}
          {error && <p className="text-danger mt-3">{error}</p>}
          <hr className='separador' />
          <a href="/Registrarse" className='crear-cuenta-nueva'>Crear Cuenta Nueva</a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default RecuperarContrasena;
