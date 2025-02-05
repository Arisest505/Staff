import React, { useState, useEffect } from "react";
import AsideBar from "../components/AsideBar";
import NavbarComponent from "../components/navbarComponent";
import "../styles/global.css";

const Home: React.FC = () => {
  const [sidebarActive, setSidebarActive] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false); // Estado para minimizar el AsideBar

  useEffect(() => {
    // Recuperar estado guardado del Sidebar
    const savedSidebarState = localStorage.getItem("sidebarActive");
    if (savedSidebarState !== null) {
      setSidebarActive(JSON.parse(savedSidebarState));
    }
  }, []);

  const toggleSidebar = () => {
    setSidebarActive((prev) => {
      const newState = !prev;
      localStorage.setItem("sidebarActive", JSON.stringify(newState));
      return newState;
    });
  };

  return (
    <>
      {/* Mostrar Navbar por defecto */}
      {!sidebarActive && <NavbarComponent toggleSidebar={toggleSidebar} sidebarActive={sidebarActive} />}
      
      {/* Mostrar AsideBar solo si el Switch está activado */}
      {sidebarActive && <AsideBar sidebarActive={sidebarActive} toggleSidebar={toggleSidebar} setIsMinimized={setIsMinimized} />}

      {/* Contenido principal que respeta el espacio del Sidebar */}
      <main 
        className="p-4 sm:p-6 lg:p-8 transition-all duration-300"
        style={{
          marginLeft: sidebarActive ? (isMinimized ? "60px" : "250px") : "0px",
        }}
      >
        <h1 className="text-2xl font-bold">Bienvenido a la aplicación</h1>
      </main>
    </>
  );
};

export default Home;
