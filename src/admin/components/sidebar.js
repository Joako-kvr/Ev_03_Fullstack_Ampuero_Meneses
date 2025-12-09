import React from "react";

const Sidebar = ({ activeTab, onChangeTab }) => {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <a href="#!" className="brand-link">
        <span className="brand-text font-weight-light">HelioAndes Admin</span>
      </a>

      <div className="sidebar">
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="info">
            <span className="d-block">Administrador</span>
          </div>
        </div>

        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
          >
            <li className="nav-header">GESTIÓN</li>

            {/* Servicios */}
            <li className="nav-item">
              <button
                type="button"
                className={`nav-link w-100 text-left ${
                  activeTab === "servicios" ? "active" : ""
                }`}
                onClick={() => onChangeTab("servicios")}
              >
                <i className="nav-icon fas fa-tools" />
                <p>Servicios</p>
              </button>
            </li>

            {/* Planes */}
            <li className="nav-item">
              <button
                type="button"
                className={`nav-link w-100 text-left ${
                  activeTab === "planes" ? "active" : ""
                }`}
                onClick={() => onChangeTab("planes")}
              >
                <i className="nav-icon fas fa-th-large" />
                <p>Planes</p>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
