import React, { useState, useEffect } from "react";
import Axios from "axios";

function ListaPlanes() {
  const [planes, setPlanes] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/planes")
      .then((response) => {
        const data = Array.isArray(response.data) ? response.data : [];
        setPlanes(data);
      })
      .catch((error) => console.log("Error al cargar planes:", error));
  }, []);

  const handleVerDetalle = (id) => {
    const url = `${window.location.origin}/dashboard/planes/${id}`;

    const width = 900;
    const height = 700;

    const left = window.screenX + (window.innerWidth - width) / 2;
    const top = window.screenY + (window.innerHeight - height) / 2;

    window.open(
      url,
      "detallePlanesWindow",
      `width=${width},height=${height},left=${left},top=${top},scrollbars=yes,resizable=yes`
    );
  };

  return (
    <section className="content" id="tab-planes">
      <div className="card card-primary card-outline">
        <div className="card-header">
          <h3 className="card-title">
            <i className="fas fa-tools mr-1" />
            Planes registrados
          </h3>
          <div className="card-tools">
            <span className="badge badge-primary">
              {planes.length} planes
            </span>
          </div>
        </div>

        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead className="thead-light">
                <tr>
                  <th style={{ width: 60 }}>#</th>
                  <th>Nombre Plan</th>
                  <th style={{ width: 110 }}>Detalle</th>
                </tr>
              </thead>
              <tbody>
                {planes.map((planes, index) => (
                  <tr key={planes.id || index}>
                    <td>{index + 1}</td>
                    <td>{planes.titulo}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-info"
                        onClick={() => handleVerDetalle(planes.id)}
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
  );
}

export default ListaPlanes;
