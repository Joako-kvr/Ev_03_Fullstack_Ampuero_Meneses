import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

function ListaServicios() {
  const [servicios, setServicios] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    Axios.get("http://localhost:3001/api/servicios")
      .then((response) => {
        const data = Array.isArray(response.data) ? response.data : [];
        setServicios(data);
      })
      .catch((error) => console.log("Error al cargar servicios:", error));
  }, []);

  const handleVerDetalle = (id) => {
    navigate(`/dashboard/servicios/${id}`);
  };

  return (
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
                        onClick={() => handleVerDetalle(servicio.id)}
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
  );
}

export default ListaServicios;
