import React, { useState } from 'react';
import Footer from '../estructura/Footer';
import Nav from '../estructura/Nav';
import './estilo/RecuperarContraseña.css';

function RecuperarContraseña() {
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");

  const manejarEnvio = (e) => {
    e.preventDefault(); 
    // Aquí deberías agregar la lógica para enviar la solicitud de recuperación de contraseña al backend

    setMensaje(`Se ha enviado correctamente el enlace de recuperación al ${correo}`);
  }

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
          <hr className='separador' />
          <a href="/crear-cuenta" className='crear-cuenta-nueva'>Crear Cuenta Nueva</a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default RecuperarContraseña;
