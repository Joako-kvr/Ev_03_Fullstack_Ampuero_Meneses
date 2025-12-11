import React from "react";

function Sidebar({ activeSection, onChangeSection }) {
  const handleClick = (section, e) => {
    e.preventDefault();
    if (onChangeSection) onChangeSection(section);
  };

  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">

      <a href="#dashboard" className="brand-link">
        <i
          className="fas fa-solar-panel brand-image img-circle elevation-3"
          style={{ opacity: ".8" }}
        />
        <span className="brand-text font-weight-light">HelioAndes Admin</span>
      </a>


      <div className="sidebar">

        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <i
              className="fas fa-user-circle text-white"
              style={{ fontSize: 32 }}
            />
          </div>
          <div className="info">
            <span className="d-block text-white font-weight-semibold">
              Administrador
            </span>
            <span className="text-xs text-white">Panel HelioAndes</span>
          </div>
        </div>


        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" role="menu">
            <li className="nav-header">GESTIÓN</li>


            <li className="nav-item">
              <a
                href="#tab-servicios"
                className={`nav-link ${
                  activeSection === "servicios" ? "active" : ""
                }`}
                onClick={(e) => handleClick("servicios", e)}
              >
                <i className="nav-icon fas fa-tools" />
                <p>Servicios</p>
              </a>
            </li>


            <li className="nav-item">
              <a
                href="#tab-planes"
                className={`nav-link ${
                  activeSection === "planes" ? "active" : ""
                }`}
                onClick={(e) => handleClick("planes", e)}
              >
                <i className="nav-icon fas fa-th-large" />
                <p>Planes</p>
              </a>
            </li>

            <li className="nav-header">INFORMACIÓN</li>
            <li className="nav-item">
              <span className="nav-link">
                <i className="nav-icon fas fa-info-circle" />
                <p className="text-sm mb-0">
                  Panel tipo AdminLTE
                  <br />

                </p>
              </span>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
