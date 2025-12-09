import React from "react";

const ListaServicios = ({ servicios, onVerDetalle }) => {
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
            <table className="table table-hover table-striped">
              <thead className="thead-light">
                <tr>
                  <th style={{ width: 60 }}>#</th>
                  <th>Nombre Servicio</th>
                  <th style={{ width: 110 }}>Detalle</th>
                </tr>
              </thead>
              <tbody>
                {servicios.map((s, index) => (
                  <tr key={s.id || index}>
                    <td>{index + 1}</td>
                    <td>{s.titulo}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-info"
                        onClick={() => onVerDetalle(s)}
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
};

export default ListaServicios;
