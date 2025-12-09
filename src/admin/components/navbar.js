import React from "react";

const Navbar = () => {
  const irInicio = () => {
    window.location.href = "/"; // sitio público HelioAndes
  };

  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="#!" role="button">
            <i className="fas fa-bars" />
          </a>
        </li>

        <li className="nav-item d-none d-sm-inline-block">
          <button
            type="button"
            className="btn btn-link nav-link p-0"
            onClick={irInicio}
          >
            Inicio
          </button>
        </li>

        <li className="nav-item d-none d-sm-inline-block">
          <span className="nav-link">Sitio público HelioAndes</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
