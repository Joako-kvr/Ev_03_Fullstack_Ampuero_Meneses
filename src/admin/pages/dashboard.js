import React from "react";

import NavBarPrincipal from "../components/navbar";
import Sidebar from "../components/sidebar";
import ContentHeader from "../components/contentheader";
import KpisPrincipal from "../components/kpis";
import ListaServicios from "../components/lista_servicios";
import ListaPlanes from "../components/lista_planes";
import FooterPrincipal from "../components/footer";
import AdminLayout from "../components/adminLayout";

function Dashboard() {
  return (
    <AdminLayout>
      <NavBarPrincipal />
      <Sidebar />


      <div className="content-wrapper">
        <ContentHeader />
        <section className="content">
          <div className="container-fluid">

            <KpisPrincipal />
            <ListaServicios />
            <ListaPlanes />
          </div>
        </section>
      </div>
      <FooterPrincipal />
    </AdminLayout>
  );
}

export default Dashboard;
