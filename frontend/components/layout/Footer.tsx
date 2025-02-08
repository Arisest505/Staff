"use client";
import { motion } from "framer-motion";
import { Facebook, Instagram, Youtube, Home, Layers, Users, FileText, Globe } from "lucide-react";
import Image from "next/image"; // ✅ Importa la imagen correctamente

const menuItems = [
  { title: "Inicio", icon: <Home size={18} />, link: "#inicio" },
  { title: "Servicios", icon: <Layers size={18} />, link: "#servicios" },
  { title: "Nosotros", icon: <Users size={18} />, link: "#nosotros" },
 // { title: "Clientes", icon: <FileText size={18} />, link: "#clientes" },
  { title: "Blog", icon: <Globe size={18} />, link: "#blog" },
];

const socialLinks = [
  { icon: <Facebook size={24} />, link: "#", color: "text-blue-500" },
  { icon: <Youtube size={24} />, link: "#", color: "text-red-500" },
  { icon: <Instagram size={24} />, link: "#", color: "text-pink-500" },
];

const Footer = () => {
  return (
    <footer className="relative bg-black text-white text-center py-12 ">
      <div className="container mx-auto px-4">
        {/* Logo con Animación */}
        <motion.div 
        className="mb-6 flex justify-center items-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        
      >
       <Image
         src="/logo.svg"
         alt="Arise"
         width={180}  // 
         height={95}  // 
         className="cursor-pointer hover:scale-110 transition-transform h-[200px]" //  Aumenta un poco más la altura con Tailwind
         style={{ color:"#ffffff" ,filter: "drop-shadow(0px 0px 5px)" }}
       />
      </motion.div>


        {/* Menú de Navegación */}
        <motion.ul
          className="flex justify-center space-x-6 mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {menuItems.map((item, index) => (
            <li key={index} className="flex items-center">
              <a href={item.link} className="text-gray-300 hover:text-blue-400 flex items-center space-x-2 transition">
                {item.icon}
                <span>{item.title}</span>
              </a>
            </li>
          ))}
        </motion.ul>

        {/* Redes Sociales */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-400 mb-2">Síguenos en nuestras redes:</p>
          <div className="flex justify-center space-x-4">
            {socialLinks.map((social, index) => (
              <a key={index} href={social.link} className={`${social.color} hover:scale-110 transition-transform`}>
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Derechos Reservados */}
        <motion.div
          className="border-t border-gray-600 pt-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-gray-400">&copy; Arise 2024. Todos los derechos reservados.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
