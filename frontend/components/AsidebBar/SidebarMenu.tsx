import React from "react";
import { motion } from "framer-motion";
import Switch from "../Switch";

interface SidebarMenuProps {
  sidebarActive: boolean;
  toggleSidebar: () => void;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ sidebarActive, toggleSidebar }) => {
  return (
    <nav className="mt-4">
      {/* Lista de Opciones de Navegación */}
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

      {/* Switch para alternar entre Navbar y Sidebar */}
      <div className="mt-8 flex justify-start">
        <Switch isChecked={sidebarActive} onToggle={toggleSidebar} />
      </div>
    </nav>
  );
};

export default SidebarMenu;
