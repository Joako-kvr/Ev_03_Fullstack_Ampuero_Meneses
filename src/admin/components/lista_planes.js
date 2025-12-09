// src/admin/components/lista_planes.js
import React, { useState, useEffect } from "react";
import Axios from "axios";

function ListaPlanes() {
  const [planes, setPlanes] = useState([]);
  const [planSeleccionado, setPlanSeleccionado] = useState(null);

  // Cargar planes desde Mockoon al montar el componente
  useEffect(() => {
    Axios.get("http://localhost:3001/api/planes")
      .then((response) => {
        const data = Array.isArray(response.data) ? response.data : [];
        setPlanes(data);
      })
      .catch((error) => {
        console.log("Error al cargar planes:", error);
      });
  }, []);

  const handleVerDetalle = (plan) => {
    setPlanSeleccionado(plan);
  };

  const handleCerrarModal = () => {
    setPlanSeleccionado(null);
  };

  return (
    <section className="content" id="tab-planes">
      <div className="card card-success card-outline">
        <div className="card-header">
          <h3 className="card-title">
            <i className="fas fa-solar-panel mr-1" />
            Planes registrados
          </h3>
          <div className="card-tools">
            <span className="badge badge-success">
              {planes.length} planes
            </span>
          </div>
        </div>

        <div className="card-body">
          {/* Sólo lista títulos + botón Ver */}
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead className="thead-light">
                <tr>
                  <th style={{ width: 60 }}>#</th>
                  <th>Título del plan</th>
                  <th>Tipo</th>
                  <th style={{ width: 110 }}>Detalle</th>
                </tr>
              </thead>
              <tbody>
                {planes.map((plan, index) => (
                  <tr key={plan.id || index}>
                    <td>{index + 1}</td>
                    <td>{plan.titulo}</td>
                    <td className="text-capitalize">
                      {plan.tipo}
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-success"
                        onClick={() => handleVerDetalle(plan)}
                      >
                        <i className="fas fa-eye mr-1" />
                        Ver
                      </button>
                    </td>
                  </tr>
                ))}

                {planes.length === 0 && (
                  <tr>
                    <td colSpan={4} className="text-center text-muted">
                      No hay planes registrados.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* MODAL DETALLE PLAN */}
      {planSeleccionado && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
          tabIndex="-1"
          role="dialog"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header bg-success text-white">
                <h5 className="modal-title">
                  {planSeleccionado.titulo}
                </h5>
                <button
                  type="button"
                  className="close text-white"
                  onClick={handleCerrarModal}
                >
                  <span>&times;</span>
                </button>
              </div>

              <div className="modal-body">
                <p className="mb-2">
                  <strong>Rango:</strong> {planSeleccionado.rango}
                </p>
                <p className="mb-2 text-capitalize">
                  <strong>Tipo:</strong> {planSeleccionado.tipo}
                </p>

                {Array.isArray(planSeleccionado.bullets) &&
                  planSeleccionado.bullets.length > 0 && (
                    <>
                      <hr />
                      <p className="mb-1">
                        <strong>Incluye:</strong>
                      </p>
                      <ul className="mb-0">
                        {planSeleccionado.bullets.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </>
                  )}
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCerrarModal}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default ListaPlanes;
