import React, { useEffect, useState } from "react";
import Axios from "axios";

import AdminLayout from "../components/adminLayout";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import KPIs from "../components/kpis";
import ListaServicios from "../components/lista_servicios";
import ListaPlanes from "../components/lista_planes";

const Dashboard = () => {
  const [servicios, setServicios] = useState([]);
  const [planes, setPlanes] = useState([]);
  const [activeTab, setActiveTab] = useState("servicios"); // "servicios" | "planes"

  const [modalData, setModalData] = useState(null); // objeto seleccionado
  const [modalTipo, setModalTipo] = useState(null); // "servicio" | "plan"

  // Cargar datos desde Mockoon al montar
  useEffect(() => {
    Axios.get("http://localhost:3001/api/servicios")
      .then((res) => {
        const data = Array.isArray(res.data) ? res.data : [];
        setServicios(data);
      })
      .catch((err) => console.error("Error al cargar servicios:", err));

    Axios.get("http://localhost:3001/api/planes")
      .then((res) => {
        const data = Array.isArray(res.data) ? res.data : [];
        setPlanes(data);
      })
      .catch((err) => console.error("Error al cargar planes:", err));
  }, []);

  // Cálculo de KPIs (adaptar filtros a tus campos reales si cambian)
  const serviciosActivos = servicios.length;
  const planesConfigurados = planes.length;

  const planesResidenciales = planes.filter(
    (p) => p.tipo === "residencial" || p.segmento === "residencial"
  ).length;

  const serviciosIndustria = servicios.filter(
    (s) => s.categoria === "industria" || s.segmento === "industria"
  ).length;

  // Handlers de modal
  const handleVerServicio = (servicio) => {
    setModalTipo("servicio");
    setModalData(servicio);
  };

  const handleVerPlan = (plan) => {
    setModalTipo("plan");
    setModalData(plan);
  };

  const cerrarModal = () => {
    setModalData(null);
    setModalTipo(null);
  };

  const irInicio = () => {
    window.location.href = "/";
  };

  return (
    <AdminLayout>
      <Navbar />
      <Sidebar activeTab={activeTab} onChangeTab={setActiveTab} />

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
                    <button
                      type="button"
                      className="btn btn-link p-0"
                      onClick={irInicio}
                    >
                      Inicio
                    </button>
                  </li>
                  <li className="breadcrumb-item active">
                    Panel administración
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Contenido principal */}
        <section className="content">
          <div className="container-fluid">
            {/* KPIs */}
            <KPIs
              serviciosActivos={serviciosActivos}
              planesConfigurados={planesConfigurados}
              planesResidenciales={planesResidenciales}
              serviciosIndustria={serviciosIndustria}
              onIrServicios={() => setActiveTab("servicios")}
              onIrPlanes={() => setActiveTab("planes")}
            />

            {/* Tablas */}
            {activeTab === "servicios" && (
              <ListaServicios
                servicios={servicios}
                onVerDetalle={handleVerServicio}
              />
            )}

            {activeTab === "planes" && (
              <ListaPlanes planes={planes} onVerDetalle={handleVerPlan} />
            )}
          </div>
        </section>

        {/* Modal detalle (compartido) */}
        {modalData && (
          <>
            <div
              className="modal fade show"
              style={{ display: "block" }}
              tabIndex="-1"
              role="dialog"
            >
              <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                  <div
                    className={`modal-header ${
                      modalTipo === "plan" ? "bg-success" : "bg-info"
                    } text-white`}
                  >
                    <h5 className="modal-title">
                      {modalTipo === "plan"
                        ? modalData.nombre_plan
                        : modalData.titulo}
                    </h5>
                    <button
                      type="button"
                      className="close text-white"
                      onClick={cerrarModal}
                    >
                      <span>&times;</span>
                    </button>
                  </div>

                  <div className="modal-body">
                    {modalTipo === "servicio" ? (
                      <>
                        <p>
                          <strong>Descripción:</strong>
                        </p>
                        <p>{modalData.descripcion}</p>
                      </>
                    ) : (
                      <>
                        {modalData.descripcion && (
                          <>
                            <p>
                              <strong>Descripción:</strong>
                            </p>
                            <p>{modalData.descripcion}</p>
                          </>
                        )}

                        {modalData.incluye && (
                          <>
                            <p className="mt-3">
                              <strong>Incluye:</strong>
                            </p>
                            {Array.isArray(modalData.incluye) ? (
                              <ul>
                                {modalData.incluye.map((item, index) => (
                                  <li key={index}>{item}</li>
                                ))}
                              </ul>
                            ) : (
                              <p>{modalData.incluye}</p>
                            )}
                          </>
                        )}
                      </>
                    )}
                  </div>

                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={cerrarModal}
                    >
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Backdrop del modal */}
            <div className="modal-backdrop fade show"></div>
          </>
        )}
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
