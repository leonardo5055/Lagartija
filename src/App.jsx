import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Acceso from './componentes/login/Acceso';
import Registrarse from './componentes/login/Registrarse';
import Home from './componentes/paginas/Home';
import RecuperarContrasena from './componentes/login/RecuperarContrasena';
import RemarasCat from './componentes/paginas/RemarasCat.js';
import PantalonesCat from './componentes/paginas/PantalonesCat.js';
import BuzosCat from './componentes/paginas/BuzosCat.js';
import Zapatillas from './componentes/paginas/Zapatillas.js';
import Nav from './componentes/estructura/Nav';
import Footer from './componentes/estructura/Footer';
import Articulo from './componentes/paginas/Articulo';
import Carrito from "./componentes/paginas/Carrito";
import FinalizarCompra from './componentes/paginas/FinalizarCompra.jsx';
import Perfil from './componentes/paginas/Perfil.jsx';
import Pedidos from './componentes/paginas/Pedidos.jsx';
import DevolverProductos from "./componentes/paginas/DevolverProductos.jsx";
import Buscar from './componentes/Buscar.jsx';
import FormularioPagina from './componentes/FormularioPagina.jsx';
import TerminosyCondiciones from './componentes/TerminosyCondiciones.jsx';
import PoliticaDeDevoluciones from './componentes/PoliticaDeDevolucion.jsx';

function App() {
  return (
    <Router>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acceso" element={<Acceso />} />
        <Route path="/registrarse" element={<Registrarse />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/finalizar-compra" element={<FinalizarCompra />} />
        <Route path="/recuperar-contrasena" element={<RecuperarContrasena />} />
        <Route path="/remeras" element={<RemarasCat />} />
        <Route path="/pantalones" element={<PantalonesCat />} />
        <Route path="/buzos" element={<BuzosCat />} />
        <Route path="/zapatillas" element={<Zapatillas />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/pedidos" element={<Pedidos />} />
        <Route path="/devolver-productos" element={<DevolverProductos />} />
        <Route path="/articulo/:slug" element={<Articulo />} />
        <Route path="/buscar" element={<Buscar />} />
        <Route path="/contacto" element={<FormularioPagina />} />
        <Route path="/terminosycondiciones" element={<TerminosyCondiciones />} />
        <Route path="/politicadedevolucion" element={<PoliticaDeDevoluciones />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
