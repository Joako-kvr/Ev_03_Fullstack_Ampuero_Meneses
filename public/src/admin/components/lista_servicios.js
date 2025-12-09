import React, { useState, useEffect } from "react";
import Axios from "axios";

function ListaServicios() {
  const [servicios, setServicios] = useState([]);
  const [servicioSeleccionado, setServicioSeleccionado] = useState(null);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/servicios")
      .then((response) => {
        const data = Array.isArray(response.data) ? response.data : [];
        setServicios(data);
      })
      .catch((error) => console.log("Error al cargar servicios:", error));
  }, []);

  const handleVerDetalle = (servicio) => {
    setServicioSeleccionado(servicio);
    const modal = window.$("#modalServicioDetalle");
    if (modal && modal.modal) modal.modal("show");
  };

  return (
    <>
      <section className="content" id="tab-servicios">
        <div className="card card-primary card-outline">
          <div className="card-header">
            <h3 className="card-title">
              <i className="fas fa-tools mr-1" />
              Servicios registrados
            </h3>
            <div className="card-tools">
              <span className="badge badge-primary">
                {servicios.length} servicios
              </span>
            </div>
          </div>

          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-striped table-hover">
                <thead className="thead-light">
                  <tr>
                    <th style={{ width: 60 }}>#</th>
                    <th>Nombre Servicio</th>
                    <th style={{ width: 110 }}>Detalle</th>
                  </tr>
                </thead>
                <tbody>
                  {servicios.map((servicio, index) => (
                    <tr key={servicio.id || index}>
                      <td>{index + 1}</td>
                      <td>{servicio.titulo}</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-info"
                          onClick={() => handleVerDetalle(servicio)}
                        >
                          <i className="fas fa-eye mr-1" />
                          Ver
                        </button>
                      </td>
                    </tr>
                  ))}

                  {servicios.length === 0 && (
                    <tr>
                      <td colSpan={3} className="text-center text-muted">
                        No hay servicios registrados.
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
        id="modalServicioDetalle"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="modalServicioDetalleTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header bg-info text-white">
              <h5 className="modal-title" id="modalServicioDetalleTitle">
                {servicioSeleccionado
                  ? servicioSeleccionado.titulo
                  : "Detalle del servicio"}
              </h5>
              <button
                type="button"
                className="close text-white"
                data-dismiss="modal"
                aria-label="Cerrar"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div className="modal-body">
              {servicioSeleccionado ? (
                <>
                  <p>{servicioSeleccionado.descripcion}</p>
                </>
              ) : (
                <p className="text-muted mb-0">
                  Selecciona un servicio para ver el detalle.
                </p>
              )}
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
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

export default ListaServicios;
