import React from "react";

function ContentHeader() {
  return (
    <div className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1 className="m-0">Panel de control – HelioAndes</h1>
            <small className="text-muted">
              Resumen de servicios y planes fotovoltaicos.
            </small>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item">
                <a href="/">Inicio</a>
              </li>
              <li className="breadcrumb-item active">Panel administración</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentHeader;
