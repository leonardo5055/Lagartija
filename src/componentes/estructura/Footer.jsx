import React, { useEffect } from 'react'
import "./estilo/footer.css"
import Logo from "../../img/logo-lagartija.png";
import { Link, useLocation } from 'react-router-dom'; 

function Footer() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <footer className='d-flex justify-content-between align-items-center text-light px-5'>
      <div>
        <img className='m-2' src={Logo} width="200px" alt="Lagartija - Logo" />
      </div>
      <div className='d-flex justify-content-between gap-5'>
        <div>
          <h5>Tienda</h5>
          <ul>
            <li><Link to="/remeras">Remeras</Link></li>
            <li><Link to="/buzos">Buzos</Link></li>
            <li><Link to="/pantalones">Pantalones</Link></li>
            <li><Link to="/zapatillas">Zapatillas</Link></li>
          </ul>
        </div>
        <div>
          <h5>Nuestra tienda</h5>
          <ul>
            <li><Link to="/contacto">Contacto</Link></li>
            <li><Link to="/terminosycondiciones">Terminos y condiciones</Link></li>
            <li><Link to="/politicadedevolucion">Envios y devoluciones</Link></li>
          </ul>
        </div>
      </div>
      <div>
        <h5 className='text-center'>Suscripcion a la tienda</h5>
        <input className="form-control me-2 my-2" type="suscrib" placeholder="Email" aria-label="suscrib" />
        <button className='px-4 py-2 rounded-pill w-100 text-light border-0 btnRojo'>Suscribete</button>
      </div>
    </footer>
  )
}

export default Footer