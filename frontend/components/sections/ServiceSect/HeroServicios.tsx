"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "@/styles/HeroServicios.module.css";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

const HeroServicios = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generateParticles = () => {
      const numParticles = 55;
      const newParticles: Particle[] = Array.from({ length: numParticles }, (_, i) => ({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight * 0.5,
        size: Math.random() * 10,
        delay: Math.random() * 5,
        duration: Math.random() * 2 + 1,
      }));
      setParticles(newParticles);
    };

    generateParticles();
    window.addEventListener("resize", generateParticles);

    return () => window.removeEventListener("resize", generateParticles);
  }, []);

  return (
    <section className={styles.hero}>
      {/* Fondo animado */}
      <motion.div className={styles.heroBackground} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} />

      {/* Partículas flotantes (Estrellas Fugaces) */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={styles.particle}
          style={{
            top: particle.y,
            left: particle.x,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            x: [particle.x, particle.x + Math.random() * 200],
            y: [particle.y, particle.y + Math.random() * 200],
            opacity: [3, 0],
          }}
          transition={{
            delay: particle.delay,
            duration: particle.duration,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Contenido del Hero */}
      <div className={styles.heroContent}>
        <motion.h1 className={styles.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          Nuestros <span className={styles.highlight}>Servicios</span>
        </motion.h1>

        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Descubre nuestras soluciones integrales en marketing, publicidad y desarrollo de software, diseñadas para impulsar tu marca y conectar con tu audiencia en todo Perú.
        </motion.p>

        <motion.a href="#servicios" className={styles.cta} whileHover={{ scale: 1.1 }}>
          Ver Servicios
        </motion.a>
      </div>
    </section>
  );
};

export default HeroServicios;
