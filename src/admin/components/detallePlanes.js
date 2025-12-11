import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";

function DetallePlan() {
  const { id } = useParams();
  const [plan, setPlan] = useState(null);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/planes")
      .then((response) => {
        const lista = response.data;
        const encontrado = lista.find((s) => s.id === Number(id));
        setPlan(encontrado);
      })
      .catch((error) => console.log("Error al cargar plan:", error));
  }, [id]);

  if (!plan) return <p>Cargando...</p>;

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
          Plan
        </div>

        <div
          className="card-body pt-0 flex-fill"
          style={{ overflowY: "auto" }}
        >
          <div className="row">
            <div className="col-7">
              <h2 className="lead">
                <b>{plan.titulo || "Plan sin nombre"}</b>
              </h2>
              <ul className="ml-4 mb-0 fa-ul text-muted">

              </ul>
              <p className="text-muted text-sm">
                <b>Rango: </b>
                {plan.rango || "Sin rango disponible"}
              </p>
              <p className="text-muted text-sm">
                <b>Tipo: </b>
                {plan.tipo || "Sin tipo disponible"}
              </p>
              <p>
                <b>Bullets:</b>
              </p>

              <ul>
                {Array.isArray(plan.bullets)
                  ? plan.bullets.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))
                  : <li>Sin bullets disponibles</li>
                }
              </ul>
            </div>
            <div className="col-5 text-center">
              <img
                src="../../assets/images/logoAndes.png"
                alt="user-avatar"
                className="img-circle img-fluid"
              />
            </div>
          </div>
        </div>

        <div className="card-footer">
          <div className="text-right">
            <a
              onClick={() => window.close()}
              className="btn-secondary btn btn-sm"
            >
              Cerrar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetallePlan;
