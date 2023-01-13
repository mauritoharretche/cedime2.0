import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Inicio from "./components/Inicio/Inicio.jsx"
import Nosotros from "./components/Nosotros/Nosotros.jsx"
import Filosofia from './components/Filofosia/Filosofia';
import Galeria from "./components/Galeria/Galeria.jsx"
import Colaboradores from "./components/Colaboradores/Colaboradores.jsx"
import Servicios from "./components/Servicios/Servicios.jsx"
import Contacto from "./components/Contacto/Contacto.jsx"
import Equipo from './components/Equipo/Equipo'
import BackToTopButton from './components/BackToTopButton/BackToTopButton'
// import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      {/* <NavBar /> */}
      <div className="App">
        <Inicio />
        <Nosotros />
        <Filosofia />
        <Equipo />
        <Colaboradores />
        <Galeria />
        <Servicios />
        <Contacto />
      </div>
      <BackToTopButton />
      <Footer />
    </>
  );
}

export default App;
