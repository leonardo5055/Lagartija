import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './componentes/estructura/Footer';
import Nav from './componentes/estructura/Nav';
import Acceso from './componentes/login/Acceso';
import Registrarse from './componentes/login/Registrarse';
import Home from './componentes/paginas/Home';
import RecuperarContraseña from './componentes/login/RecuperarContraseña';

function App() {
  return (
    
     <Router>
      <div>
        <Nav />
        <main>
          <Routes>
            
           {/* < Route path="/" element={<Home />} /> */ }
          {  <Route path="/acceso" element={<Acceso />} /> }
          { /* <Route path="/registrarse" element={<Registrarse />} /> */}
            <Route path="/recuperar-contraseña" element={<RecuperarContraseña />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    

  );
}

export default App;
