"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "@/styles/Hero.module.css";

const Hero: React.FC = () => {
  // Estado para la animación de partículas en el fondo
  const [particles, setParticles] = useState<{ id: number; x: number; y: number }[]>([]);

  useEffect(() => {
    const generateParticles = () => {
      const numParticles = 50;
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
    <section className={styles.hero}>
      {/* Fondo Animado */}
      <motion.div className={styles.heroBackground} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} />

      {/* Partículas flotantes */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={styles.particle}
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

      {/* Contenido del Hero */}
      <div className={styles.heroContent}>
        <motion.h1 className={styles.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          Diseño de <span className={styles.highlight}>Páginas Estáticas</span> Personalizadas
        </motion.h1>

        <motion.p className={styles.description} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
          Crea tu propio diseño con colores, fuentes y estilos únicos. Eleva tu identidad digital con personalización total.
        </motion.p>

        <motion.a href="#servicios" className={styles.cta} whileHover={{ scale: 1.1 }}>
          Explorar Servicios
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
