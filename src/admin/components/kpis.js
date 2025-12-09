import React from "react";

const KPIs = ({
  serviciosActivos,
  planesConfigurados,
  planesResidenciales,
  serviciosIndustria,
  onIrServicios,
  onIrPlanes,
}) => {
  return (
    <div className="row">
      {/* Servicios activos */}
      <div className="col-lg-3 col-6">
        <div className="small-box bg-teal">
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
            onClick={onIrServicios}
          >
            Ver servicios <i className="fas fa-arrow-circle-right" />
          </button>
        </div>
      </div>

      {/* Planes configurados */}
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
            onClick={onIrPlanes}
          >
            Ver planes <i className="fas fa-arrow-circle-right" />
          </button>
        </div>
      </div>

      {/* Planes residenciales */}
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
            onClick={onIrPlanes}
          >
            Ir a planes <i className="fas fa-arrow-circle-right" />
          </button>
        </div>
      </div>

      {/* Servicios industria */}
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
            onClick={onIrServicios}
          >
            Ir a servicios <i className="fas fa-arrow-circle-right" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default KPIs;
