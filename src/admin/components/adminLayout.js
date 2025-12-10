import { useEffect } from "react";

export default function AdminLayout({ children }) {
  useEffect(() => {
    document.body.classList.add("hold-transition", "sidebar-mini", "layout-fixed");
    return () => {
      document.body.classList.remove(
        "hold-transition",
        "sidebar-mini",
        "layout-fixed"
      );
    };
  }, []);

  return <div className="wrapper">{children}</div>;
}
