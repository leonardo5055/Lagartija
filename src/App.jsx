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

function App() {
  return (
    <Router>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articulo" element={<Articulo />} />
        <Route path="/acceso" element={<Acceso />} />
        <Route path="/registrarse" element={<Registrarse />} />
        <Route path="/compras" element={<Registrarse />} />
        <Route path="/recuperar-contrasena" element={<RecuperarContrasena />} />
        <Route path="/remeras" element={<RemarasCat />} />
        <Route path="/pantalones" element={<PantalonesCat />} />
        <Route path="/buzos" element={<BuzosCat />} />
        <Route path="/zapatillas" element={<Zapatillas />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
