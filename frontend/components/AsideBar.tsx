import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HamburgerToggle from "../components/HamburgerButton";
import Switch from "../components/Switch";

interface AsideBarProps {
  sidebarActive: boolean;
  toggleSidebar: () => void;
  setIsMinimized: (state: boolean) => void; // Nueva prop para actualizar el estado en Home.tsx
}

const AsideBar: React.FC<AsideBarProps> = ({ sidebarActive, toggleSidebar, setIsMinimized }) => {
  const [isMinimized, setIsMinimizedLocal] = useState(false);

  const toggleMinimize = () => {
    const newState = !isMinimized;
    setIsMinimizedLocal(newState);
    setIsMinimized(newState); // Actualiza el estado global en Home.tsx
  };

  return (
    <motion.aside
      animate={{ width: isMinimized ? "60px" : "250px" }} // Cambia el ancho dinámicamente
      transition={{ duration: 0.3 }}
      className="fixed left-0 top-0 h-full bg-white shadow-lg z-40 p-5 flex flex-col"
    >
      {/* Botón de Hamburguesa para minimizar */}
      <div className="flex justify-center mb-4">
        <HamburgerToggle isOpen={!isMinimized} onClick={toggleMinimize} />
      </div>

      {/* Si está minimizado, oculta opciones */}
      {!isMinimized && (
        <nav className="mt-4">
          <ul className="space-y-4">
            {["Inicio", "Perfil", "Configuración", "Ayuda"].map((item) => (
              <motion.li key={item} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="#"
                  className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-md transition-colors duration-200"
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Switch dentro del Sidebar */}
          <div className="mt-8 flex justify-center">
            <Switch isChecked={sidebarActive} onToggle={toggleSidebar} />
          </div>
        </nav>
      )}
    </motion.aside>
  );
};

export default AsideBar;
