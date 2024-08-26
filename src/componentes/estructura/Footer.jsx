import React from 'react'
import "./estilo/footer.css"
import Logo from "../../img/logo-lagartija.png";

function Footer() {
  return (
    <footer className='d-flex justify-content-between align-items-center text-light px-5'>
      <div>
        <img className='m-2' src={Logo} width="200px" alt="Lagartija - Logo" />
      </div>
      <div className='d-flex justify-content-between gap-5'>
        <div>
          <h5>Tienda</h5>
          <ul>
            <li><a href="#">Remeras</a></li>
            <li><a href="#">Pantalones</a></li>
            <li><a href="#">Zapatillas</a></li>
            <li><a href="#">Buzos</a></li>
          </ul>
        </div>
        <div>
          <h5>Nuestra tienda</h5>
          <ul>
            <li><a href="#">Contacto</a></li>
            <li><a href="#">Politicas</a></li>
            <li><a href="#">Envios y devoluciones</a></li>
          </ul>
        </div>
      </div>
      <div>
        <h5 className='text-center'>Suscripcion a la tienda</h5>
        <input className="form-control me-2 my-2" type="suscrib" placeholder="Email" aria-label="suscrib"/>
        <button className='px-4 py-2 rounded-pill w-100 text-light border-0'>Suscribete</button>
      </div>
    </footer>
  )
}

export default Footer