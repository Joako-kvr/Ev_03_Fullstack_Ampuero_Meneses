import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";

function DetalleServicio() {
  const { id } = useParams();  
  const [servicio, setServicio] = useState(null);

  useEffect(() => {
    Axios.get(`http://localhost:3001/api/servicios/${id}`)
      .then((response) => setServicio(response.data))
      .catch((error) => console.log("Error al cargar servicio:", error));
  }, [id]);

  if (!servicio) return <p>Cargando...</p>;

  return (
    <div>
      <h1>{servicio.titulo}</h1>
      <p>{servicio.descripcion}</p>
    </div>
  );
}

export default DetalleServicio;
