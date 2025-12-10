import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";

function DetalleServicio() {
  const { id } = useParams();
  const [servicio, setServicio] = useState(null);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/servicios")
      .then((response) => {
        const lista = response.data;
        const encontrado = lista.find((s) => s.id === Number(id));
        setServicio(encontrado);
      })
      .catch((error) => console.log("Error al cargar servicio:", error));
  }, [id]);

  if (!servicio) return <p>Cargando...</p>;

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        padding: "20px",
        boxSizing: "border-box",
        background: "#f4f6f9",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div
        className="card bg-light d-flex flex-column"
        style={{
          width: "100%",
          height: "100%",
          maxWidth: "1000px",
          maxHeight: "700px",
          margin: "0 auto"
        }}
      >
        <div className="card-header text-muted border-bottom-0">
          {servicio.titulo || "Detalle del servicio"}
        </div>

        <div
          className="card-body pt-0 flex-fill"
          style={{ overflowY: "auto" }}
        >
          <div className="row">
            <div className="col-7">
              <h2 className="lead">
                <b>{servicio.titulo || "Servicio sin nombre"}</b>
              </h2>
              <p className="text-muted text-sm">
                <b>Descripción: </b>
                {servicio.descripcion || "Sin descripción disponible"}
              </p>
              <ul className="ml-4 mb-0 fa-ul text-muted">
                <li className="small">
                  <span className="fa-li">
                    <i className="fas fa-lg fa-building" />
                  </span>
                  Dirección de ejemplo
                </li>
                <li className="small">
                  <span className="fa-li">
                    <i className="fas fa-lg fa-phone" />
                  </span>
                  Teléfono de ejemplo
                </li>
              </ul>
            </div>
            <div className="col-5 text-center">
              <img
                src="../../dist/img/user1-128x128.jpg"
                alt="user-avatar"
                className="img-circle img-fluid"
              />
            </div>
          </div>
        </div>

        <div className="card-footer">
          <div className="text-right">
            <a
              onClick={() => window.open(`/perfil/${servicio.id}`, "_blank")}
              className="btn btn-sm bg-teal"
            >
              <i className="fas fa-comments" />
            </a>
            <a
              onClick={() => window.open(`/perfil/${servicio.id}`, "_blank")}
              className="btn btn-sm btn-primary ml-2"
            >
              <i className="fas fa-user" /> View Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetalleServicio;
