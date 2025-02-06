"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const menuItems = [
  { name: "Inicio", link: "#inicio" },
  { name: "Servicios", link: "#servicios" },
  { name: "Nosotros", link: "#nosotros" },
  { name: "Clientes", link: "#clientes" },
  { name: "Blog", link: "#blog" },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md ${
        isScrolled ? "bg-white/90 shadow-md" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center px-6 py-1 h-14">

        {/*  Logo con animación */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
<Image
  src="/logo.svg"
  alt="Arise"
  width={160}  // Aumenta el ancho un poco más
  height={55}  // Aumenta la altura ligeramente
  priority
  className="cursor-pointer hover:scale-110 transition-transform h-[100px]" // 🔹 Aumenta un poco más la altura con Tailwind
/>




        </motion.div>

        {/* Menú en pantallas grandes */}
        <motion.nav
          className="hidden md:flex space-x-6 text-lg font-semibold"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {menuItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              className="hover:text-blue-500 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              {item.name}
            </motion.a>
          ))}
        </motion.nav>

        {/*  Menú Hamburguesa en móviles */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800">
            {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/*  Menú Móvil */}
        {isMenuOpen && (
          <motion.div
            className="absolute top-16 right-6 bg-white shadow-lg rounded-lg p-4 flex flex-col space-y-4 md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {menuItems.map((item, index) => (
              <a key={index} href={item.link} className="text-gray-800 hover:text-blue-500 transition">
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
