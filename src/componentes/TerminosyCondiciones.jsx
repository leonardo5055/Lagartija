import React from 'react';

const TerminosyCondiciones = () => {
  return (
    <div className="container rounded mt-5 mb-5">
      <div className="terms-container bg-white rounded p-4 shadow">
        <h1 className="mb-4">Términos y condiciones de uso del Sitio</h1>

        <h2 className="font-weight-bold mb-3">Resumen de términos y condiciones</h2>

        <p>
          La Lagartija es una compañía que ofrece servicios vinculados principalmente al comercio electrónico y a los pagos digitales.
        </p>

        <ul>
          <li>
            <b>El Marketplace</b> es una plataforma de comercio electrónico donde las Personas Usuarias pueden vender y comprar productos usando distintas soluciones de pago y envío.
          </li>
          <li>
            En <b>Marketplace VIS</b>, conectamos a las personas interesadas en realizar transacciones con vehículos, inmuebles y servicios con posibles vendedores.
          </li>
          <li>
            <b>Pago</b> es una plataforma de pagos y cobros que puede ser usada tanto para operaciones realizadas dentro del Marketplace como fuera de él.
          </li>
          <li>
            <b>Envíos</b> es la herramienta tecnológica que ofrecemos para que las Personas Usuarias puedan enviar y recibir sus compras hechas en sitios o aplicaciones que utilicen la tecnología de la Lagartija.
          </li>
        </ul>
        <p>
          Para poder operar en la plataforma todas las Personas Usuarias deberán aceptar los Términos y Condiciones, los anexos y la Declaración de Privacidad.
        </p>
      </div>
    </div>
  );
};

export default TerminosyCondiciones;