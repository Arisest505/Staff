import React, { useState, useEffect } from "react";
import AsideBar from "../components/AsidebBar/AsideBar";
import NavbarComponent from "../components/navbarComponent";
import "../styles/global.css";

const Home: React.FC = () => {
  const [sidebarActive, setSidebarActive] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // Inicializado en `false` para evitar SSR errors
  const [hasMounted, setHasMounted] = useState(false); // Nueva bandera para controlar la hidratación

  useEffect(() => {
    setHasMounted(true); // Marcar que el componente ya se montó
    setIsMobile(window.innerWidth < 500); // Ahora `isMobile` se configura solo en el cliente

    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 500);
    };

    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
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

  if (!hasMounted) return null;

  return (
    <div className="">
      {/* Mostrar Navbar por defecto */}
      {!sidebarActive && <NavbarComponent toggleSidebar={toggleSidebar} sidebarActive={sidebarActive} />}
      
      {/* Mostrar AsideBar solo si el Switch está activado */}
      {sidebarActive && <AsideBar sidebarActive={sidebarActive} toggleSidebar={toggleSidebar} setIsMinimized={setIsMinimized} />}

      {/* Contenido principal que se oculta cuando el Sidebar está expandido en móviles */}
      {!isMobile || (isMobile && !sidebarActive) ? (
        <main 
          className="p-4 sm:p-6 lg:p-8 transition-all duration-300"
          style={{
            marginLeft: sidebarActive && !isMobile ? (isMinimized ? "60px" : "250px") : "0px",
          }}
        >
          <h1 className="text-2xl font-bold">Bienvenido a la aplicación</h1>
        </main>
      ) : null}
    </div>
  );
};

export default Home;
