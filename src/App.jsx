import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Acceso from './componentes/login/Acceso';
import Registrarse from './componentes/login/Registrarse';
import Home from './componentes/paginas/Home';
import RecuperarContrasena from './componentes/login/RecuperarContrasena';
import RemarasCat from './componentes/paginas/RemarasCat';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acceso" element={<Acceso />} />
        <Route path="/registrarse" element={<Registrarse />} />
        <Route path="/recuperar-contrasena" element={<RecuperarContrasena />} />
      </Routes>
    </Router>
  );
}

export default App;
