import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="layout">
      <Header />
      <div className="main">
        <Sidebar isOpen={sidebarOpen} onToggle={toggleSidebar} />
        <div className="content" onClick={closeSidebar}>
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}
