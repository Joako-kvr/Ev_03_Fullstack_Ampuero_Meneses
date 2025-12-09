import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginAdmin() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (usuario === "Admin" && clave === "1234") {
      localStorage.setItem("helioAndesAuth", "yes");
      navigate("/dashboard");
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  };

  const year = new Date().getFullYear();

  return (
    <div>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>AdminLTE 3 | Log in</title>
      {/* Google Font: Source Sans Pro */}
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback" />
      {/* Font Awesome */}
      <link rel="stylesheet" href="../../plugins/fontawesome-free/css/all.min.css" />
      {/* icheck bootstrap */}
      <link rel="stylesheet" href="../../plugins/icheck-bootstrap/icheck-bootstrap.min.css" />
      {/* Theme style */}
      <link rel="stylesheet" href="../../dist/css/adminlte.min.css" />

      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
        <div className="login-box">
          <div className="login-logo">
            <a href="../../index2.html"><b>Acceso Administradores</b></a>
          </div>
          {/* /.login-logo */}
          <div className="card">
            <div className="card-body login-card-body">
              <p className="login-box-msg">Ingresa para iniciar sesión</p>

              <form onSubmit={handleLogin}>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Id"
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-user" />
                    </div>
                  </div>
                </div>

                <div className="input-group mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Contraseña"
                    value={clave}
                    onChange={(e) => setClave(e.target.value)}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock" />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-5">
                    <button type="button" className="btn btn-primary btn-block" onClick={() => navigate("/")}>
                      Retroceder
                    </button>
                  </div>

                  <div className="col-3"></div>

                  <div className="col-4">
                    <button type="button" className="btn btn-primary btn-block" onClick={() => navigate("/dashboard")}>
                      Ingresar
                    </button>
                  </div>
                </div>
              </form>

              {/* /.social-auth-links */}

            </div>
            {/* /.login-card-body */}
          </div>
        </div>
        {/* /.login-box */}
        {/* jQuery */}
        {/* Bootstrap 4 */}
        {/* AdminLTE App */}
        
      </div>

    </div>
  );
}

export default LoginAdmin;
