import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SidebarHeader from "../AsidebBar/SidebarHeader";
import SidebarMenu from "../AsidebBar/SidebarMenu";

interface AsideBarProps {
  sidebarActive: boolean;
  toggleSidebar: () => void;
  setIsMinimized: (state: boolean) => void;
}

const AsideBar: React.FC<AsideBarProps> = ({ sidebarActive, toggleSidebar, setIsMinimized }) => {
  const [isMinimized, setIsMinimizedLocal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 500);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const toggleMinimize = () => {
    const newState = !isMinimized;
    setIsMinimizedLocal(newState);
    setIsMinimized(newState);
  };

  return (
    <motion.aside
      animate={{
        width: isMobile && !isMinimized ? "100%" : isMinimized ? "60px" : "250px"
      }}
      transition={{ duration: 0.3 }}
      className="fixed left-0 top-0 h-full bg-white shadow-lg z-40 p-5 flex flex-col"
    >
      {/* Contenedor de la Imagen y Botón de Hamburguesa */}
      <SidebarHeader isMinimized={isMinimized} toggleMinimize={toggleMinimize} />

      {/* Contenedor de las Opciones de Navegación y Switch (Solo si no está minimizado) */}
      {!isMinimized && <SidebarMenu sidebarActive={sidebarActive} toggleSidebar={toggleSidebar} />}
    </motion.aside>
  );
};

export default AsideBar;
