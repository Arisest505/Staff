import { useState, useEffect } from "react";
import "../styles/global.css";
import Image from "next/image";
import HamburgerToggle from "../components/HamburgerButton";
import Switch from "../components/Switch";

interface NavbarProps {
  toggleSidebar: () => void;
  sidebarActive: boolean;
}

const NavbarComponent: React.FC<NavbarProps> = ({ toggleSidebar, sidebarActive }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <nav className="flex justify-between items-center w-[92%] mx-auto py-4">
        {/* Logo */}
        <div className="relative h-[50px] w-[144px] flex items-center justify-center">
          <Image
            src="/img/logo-vaya.webp"
            alt="logo-de-vaya-valla-publicidad"
            width={144}
            height={120}
            className="object-contain w-[120px] h-[120px]"
            draggable={false}
          />
        </div>

        {/* Menú de navegación */}
        <div className={`nav-links md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 
        ${menuOpen ? "top-[13%]" : "top-[-100%]"} md:w-auto w-full flex items-center px-5 transition-all duration-500 ease-in-out`}>
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            <li><a className="hover:text-sky-500" href="#">Inicio</a></li>
            <li><a className="hover:text-sky-500" href="#">Servicios</a></li>
            <li><a className="hover:text-sky-500" href="#">Nosotros</a></li>
            <li><a className="hover:text-sky-500" href="#">Clientes</a></li>
            <li><a className="hover:text-sky-500" href="#">Blog</a></li>
          </ul>
        </div>

        {/* Switch y Hamburguesa */}
        <div className="flex items-center gap-6">
          {/* Evita renderizar el Switch hasta que el componente esté montado */}
          {isMounted && <Switch isChecked={sidebarActive} onToggle={toggleSidebar} />}
          <div className="relative md:hidden flex items-center justify-center h-[50px] w-[50px]">
            <HamburgerToggle isOpen={menuOpen} onClick={toggleMenu} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavbarComponent;
