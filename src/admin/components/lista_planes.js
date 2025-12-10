import React, { useState, useEffect } from "react";
import Axios from "axios";

function ListaPlanes() {
  const [planes, setPlanes] = useState([]);
  const [planSeleccionado, setPlanSeleccionado] = useState(null);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/planes")
      .then((response) => {
        const data = Array.isArray(response.data) ? response.data : [];
        setPlanes(data);
      })
      .catch((error) => console.log("Error al cargar planes:", error));
  }, []);

  const handleVerDetalle = (plan) => {
    setPlanSeleccionado(plan);
    window.$("#modalPlanDetalle").modal("show");
  };

  const handleCerrarModal = () => {
    setPlanSeleccionado(null);
    window.$("#modalPlanDetalle").modal("hide");
  };

  return (
    <>
      <section className="content" id="tab-planes">
        <div className="card card-success card-outline">
          <div className="card-header">
            <h3 className="card-title">
              <i className="fas fa-th-large mr-1" />
              Planes registrados
            </h3>
            <div className="card-tools">
              <span className="badge badge-success">{planes.length} planes</span>
            </div>
          </div>

          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-hover">
                <thead className="thead-light">
                  <tr>
                    <th style={{ width: 60 }}>#</th>
                    <th>Nombre Plan</th>
                    <th style={{ width: 110 }}>Detalle</th>
                  </tr>
                </thead>
                <tbody>
                  {planes.map((plan, index) => (
                    <tr key={plan.id || index}>
                      <td>{index + 1}</td>
                      <td>{plan.titulo}</td>
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
                      <td colSpan={3} className="text-center text-muted">
                        No hay planes registrados.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>


        </div>
      </section>

      <div
        className="modal fade"
        id="modalPlanDetalle"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="modalPlanDetalleLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header bg-success text-white">
              <h5 className="modal-title" id="modalPlanDetalleLabel">
                {planSeleccionado ? planSeleccionado.titulo : "Detalle del plan"}
              </h5>
              <button
                type="button"
                className="close text-white"
                data-dismiss="modal"
                aria-label="Close"
                onClick={handleCerrarModal}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div className="modal-body">
              {planSeleccionado ? (
                <>
                  <p>
                    <strong>Rango de potencia:</strong> {planSeleccionado.rango}
                  </p>
                  <p>
                    <strong>Tipo de plan:</strong>{" "}
                    {planSeleccionado.tipo === "residencial"
                      ? "Residencial"
                      : planSeleccionado.tipo === "industrial"
                        ? "Industria"
                        : planSeleccionado.tipo}
                  </p>

                  {Array.isArray(planSeleccionado.bullets) &&
                    planSeleccionado.bullets.length > 0 && (
                      <>
                        <p className="mb-1">
                          <strong>Incluye:</strong>
                        </p>
                        <ul>
                          {planSeleccionado.bullets.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </>
                    )}
                </>
              ) : (
                <p className="text-muted mb-0">
                  No hay información del plan seleccionada.
                </p>
              )}
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick={handleCerrarModal}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaPlanes;
