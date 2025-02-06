"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero: React.FC = () => {
  // Estado para la animación de partículas en el fondo
  const [particles, setParticles] = useState<{ id: number; x: number; y: number }[]>([]);

  useEffect(() => {
    // Generar partículas aleatorias
    const generateParticles = () => {
      const numParticles = 20; // Cantidad de partículas
      const newParticles = Array.from({ length: numParticles }, (_, i) => ({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      }));
      setParticles(newParticles);
    };

    generateParticles();
    window.addEventListener("resize", generateParticles);
    return () => window.removeEventListener("resize", generateParticles);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/*  Fondo Animado */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-black via-[#ffffffd5] to-black opacity-60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      ></motion.div>

      {/*  Partículas flotantes */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-2 h-2 rounded-full bg-white opacity-50"
          style={{ top: particle.y, left: particle.x }}
          animate={{
            y: [particle.y, particle.y - 50, particle.y],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/*  Contenido del Hero */}
      <div className="container mx-auto text-center text-white z-10">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Diseño de <span className="text-[#000000]">Páginas Estáticas</span> Personalizadas
        </motion.h1>

        <motion.p
          className="text-xl mb-8 max-w-2xl mx-auto opacity-80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Crea tu propio diseño con colores, fuentes y estilos únicos. Eleva tu identidad digital con personalización total.
        </motion.p>

        <motion.a
          href="#servicios"
          className="bg-[#9c39d6] px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition"
          whileHover={{ scale: 1.1 }}
        >
          Explorar Servicios
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
