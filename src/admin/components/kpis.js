import React, { useEffect, useState } from "react";
import Axios from "axios";

function KPIsCards({ onChangeSection }) {
  const [servicios, setServicios] = useState([]);
  const [planes, setPlanes] = useState([]);


  useEffect(() => {
    Axios.get("http://localhost:3001/api/servicios")
      .then((res) => {
        const data = Array.isArray(res.data) ? res.data : [];
        setServicios(data);
      })
      .catch((err) => console.error("Error cargando servicios:", err));
  }, []);


  useEffect(() => {
    Axios.get("http://localhost:3001/api/planes")
      .then((res) => {
        const data = Array.isArray(res.data) ? res.data : [];
        setPlanes(data);
      })
      .catch((err) => console.error("Error cargando planes:", err));
  }, []);


  const serviciosActivos = servicios.length;
  const planesConfigurados = planes.length;
  
  const planesResidenciales = planes.filter(
    (p) => p.tipo === "residencial"
  ).length;

  const serviciosIndustria = servicios.filter(
    (s) => s.segmento === "industria"
  ).length;

  return (
    <div className="row">
      <div className="col-lg-3 col-6">
        <div className="small-box bg-info">
          <div className="inner">
            <h3>{serviciosActivos}</h3>
            <p>Servicios activos</p>
          </div>
          <div className="icon">
            <i className="fas fa-tools" />
          </div>
          <button
            type="button"
            className="small-box-footer btn btn-link text-white"
            onClick={() => onChangeSection && onChangeSection("servicios")}
          >
            Ver servicios <i className="fas fa-arrow-circle-right" />
          </button>
        </div>
      </div>

      <div className="col-lg-3 col-6">
        <div className="small-box bg-success">
          <div className="inner">
            <h3>{planesConfigurados}</h3>
            <p>Planes configurados</p>
          </div>
          <div className="icon">
            <i className="fas fa-solar-panel" />
          </div>
          <button
            type="button"
            className="small-box-footer btn btn-link text-white"
            onClick={() => onChangeSection && onChangeSection("planes")}
          >
            Ver planes <i className="fas fa-arrow-circle-right" />
          </button>
        </div>
      </div>

      <div className="col-lg-3 col-6">
        <div className="small-box bg-warning">
          <div className="inner">
            <h3>{planesResidenciales}</h3>
            <p>Planes residenciales</p>
          </div>
          <div className="icon">
            <i className="fas fa-home" />
          </div>
          <button
            type="button"
            className="small-box-footer btn btn-link text-white"
            onClick={() => onChangeSection && onChangeSection("planes")}
          >
            Ir a planes <i className="fas fa-arrow-circle-right" />
          </button>
        </div>
      </div>

      <div className="col-lg-3 col-6">
        <div className="small-box bg-danger">
          <div className="inner">
            <h3>{serviciosIndustria}</h3>
            <p>Servicios industria</p>
          </div>
          <div className="icon">
            <i className="fas fa-industry" />
          </div>
          <button
            type="button"
            className="small-box-footer btn btn-link text-white"
            onClick={() => onChangeSection && onChangeSection("servicios")}
          >
            Ir a servicios <i className="fas fa-arrow-circle-right" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default KPIsCards;
