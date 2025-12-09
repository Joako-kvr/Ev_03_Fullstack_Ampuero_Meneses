import Hero from '../components/Hero';
import Servicios from '../components/Servicios';
import Soluciones from '../components/Soluciones';
import CalculadoraPrincipal from '../components/CalculadoraIntegral';
import Planes from '../components/Planes';
import Testimonios from '../components/Testimonios';
import FAQ from '../components/FAQ';
import Contacto from '../components/Contacto';
import Footer from '../components/Footer';
import NavbarHelioAndes from '../components/NavbarHelio';
import LoginAdmin from '../admin/pages/LoginAdministrador';



function Home() {
  return (
    <div className="pt-5 main-bg">
      <div>
        <NavbarHelioAndes />
        <Hero />
        <Servicios />
        <Soluciones />
        <CalculadoraPrincipal />
        <Planes />
        <Testimonios />
        <FAQ />
        <Contacto />
        <Footer />

      </div>
    </div>
  );
}

export default Home;