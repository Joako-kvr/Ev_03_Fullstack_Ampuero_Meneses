import React, { useState } from "react";

// OJO: los nombres después de ../components/ deben ser IGUALES al archivo
import AdminLayout from "../components/adminLayout";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import ListaServicios from "../components/lista_servicios";
import ListaPlanes from "../components/lista_planes";
import KPIs from "../components/kpis";
import { Link } from "react-router-dom";


function Dashboard() {
  // qué sección está activa en el panel (para mostrar servicios o planes)
  const [activeSection, setActiveSection] = useState("servicios");

  return (
    <AdminLayout>
      {/* Barra superior */}
      <Navbar />

      {/* Menú lateral */}
      <Sidebar
        activeSection={activeSection}
        onChangeSection={setActiveSection}
      />

      {/* Contenido principal AdminLTE */}
      <div className="content-wrapper">
        {/* Encabezado */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Panel de control – HelioAndes</h1>
                <p className="text-muted mb-0">
                  Resumen de servicios y planes fotovoltaicos.
                </p>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <Link to="/">Inicio</Link>
                  </li>
                  <li className="breadcrumb-item active">Panel administración</li>

                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Contenido */}
        <section className="content">
          <div className="container-fluid">
            {/* Tarjetas tipo small-box */}
            <KPIs onChangeSection={setActiveSection} />

            {/* SOLO una sección visible según lo que elija el usuario */}
            {activeSection === "servicios" && <ListaServicios />}
            {activeSection === "planes" && <ListaPlanes />}
          </div>
        </section>
      </div>
    </AdminLayout>
  );
}

export default Dashboard;
