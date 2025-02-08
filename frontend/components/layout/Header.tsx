"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const menuItems = [
  { name: "Inicio", link: "/" },
  { name: "Servicios", link: "/servicios" },
  { name: "Nosotros", link: "/nosotros" },
 // { name: "Clientes", link: "/clientes" },
  { name: "Blog", link: "/blog" },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md ${
        isScrolled ? "bg-black/90 text-white shadow-md" : "bg-transparent text-black"
      }`}
      style={{ filter: "drop-shadow(0px 0px 1px white)" }} // Estilos en línea correctamente aplicados
    >
      <div className="container mx-auto flex justify-between items-center px-6 py-3 h-16">
        {/* Logo */}
        <div>
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Noir.02"
              width={140}
              height={50}
              priority
              className="cursor-pointer hover:scale-110 transition-transform"
              style={{ filter: "drop-shadow(0px 0px 5px white)" }}
            />
          </Link>
        </div>

        {/* Menú en pantallas grandes */}
        <nav className="hidden md:flex space-x-6 text-lg font-semibold">
          {menuItems.map((item, index) => (
            <div key={index}>
              <Link
                href={item.link}
                className={`relative group transition-colors duration-300 ${
                  isScrolled ? "text-white hover:text-gray-300" : "text-black hover:text-gray-700"
                }`}
              >
                {item.name}
                <div className="absolute bottom-[-3px] left-0 w-full h-1 bg-current scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </Link>
            </div>
          ))}
        </nav>

        {/* Menú Hamburguesa en móviles */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`transition-colors duration-300 ${
              isScrolled ? "text-white" : "text-black"
            }`}
          >
            {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Menú Móvil */}
      {isMenuOpen && (
        <div className="absolute top-16 right-0 left-0 bg-white shadow-lg p-6 flex flex-col space-y-4 md:hidden">
          {menuItems.map((item, index) => (
            <div key={index}>
              <Link
                href={item.link}
                className="relative group text-gray-800 hover:text-purple-500 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
                <div className="absolute bottom-[-3px] left-0 w-full h-1 bg-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </Link>
            </div>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
