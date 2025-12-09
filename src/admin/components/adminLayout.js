import React, { useEffect } from "react";

const AdminLayout = ({ children }) => {
  // Aplica las clases globales de AdminLTE al body
  useEffect(() => {
    document.body.classList.add("hold-transition", "sidebar-mini", "layout-fixed");

    return () => {
      document.body.classList.remove("hold-transition", "sidebar-mini", "layout-fixed");
    };
  }, []);

  return <div className="wrapper">{children}</div>;
};

export default AdminLayout;
