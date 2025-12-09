import React from 'react';
import { Link } from "react-router-dom";


function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-dark mt-5">
      <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between gap-2">
        <div className="small mb-0">© {year} HelioAndes Energía</div>

        <nav className="d-flex align-items-center gap-2 small">
          <a href="#!" className="footer-link">Privacidad</a>
          <span className="opacity-50">·</span>
          <a href="#!" className="footer-link">Términos</a>



          <div class="d-flex align-items-center gap-2 small">
            <Link to="/loginAdmin" className="btn btn-dark btn-sm">
              <i class="fas fa-lock mr-1"></i> Acceso
            </Link>
          </div>


        </nav>
      </div>
    </footer>
  );


}

export default Footer;
