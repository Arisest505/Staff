import React, { useState, useEffect } from "react";
import AsideBar from "../components/AsidebBar/AsideBar";
import NavbarComponent from "../components/navbarComponent";
import MainContentNavbar from "../components/mainContentNavbar/MainContentNavbar";
import MainContentAsidebar from "../components/mianContenteAsidebar/MainContentAsidebar";
import "../styles/global.css";

const Home: React.FC = () => {
  const [sidebarActive, setSidebarActive] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    // Prevenir errores de SSR
    setHasMounted(true);
    
    // Manejar el tamaño de pantalla
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 500);
    };

    checkScreenSize();
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

  // Evitar renderizado en SSR para evitar `hydration mismatch`
  if (!hasMounted) return null;

  return (
    <div className="">
      {/* Sidebar activado */}
      {sidebarActive && <AsideBar sidebarActive={sidebarActive} toggleSidebar={toggleSidebar} setIsMinimized={setIsMinimized} />}
      
      {/* Navbar cuando el Sidebar está desactivado */}
      {!sidebarActive && <NavbarComponent toggleSidebar={toggleSidebar} sidebarActive={sidebarActive} />}

      <div
        className="flex-1 transition-all duration-300"
        style={{
          marginLeft: sidebarActive ? (isMobile ? "60px" : isMinimized ? "60px" : "250px") : "0px",
        }}
      >
        {sidebarActive ? <MainContentAsidebar /> : <MainContentNavbar />}
      </div>
    </div>
  );
};

export default Home;
