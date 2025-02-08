"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "@/styles/HeroAbout.module.css";

const HeroAbout: React.FC = () => {
  const [drops, setDrops] = useState<{ id: number; x: number; y: number }[]>([]);

  useEffect(() => {
    const generateDrop = () => {
      const newDrop = {
        id: Date.now(),
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      };

      setDrops((prevDrops) => {
        if (prevDrops.length > 30) return [...prevDrops.slice(1), newDrop]; // Mantiene el límite de gotas activas
        return [...prevDrops, newDrop];
      });
    };

    const interval = setInterval(generateDrop, 1000); // Genera una nueva gota cada segundo

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.hero}>
      {/* Fondo animado con ondas de lluvia */}
      <div className={styles.rainContainer}>
        {drops.map((drop) => (
          <motion.div
            key={drop.id}
            className={styles.drop}
            style={{ left: drop.x, top: drop.y }}
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 2, opacity: 0 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
          />
        ))}
      </div>

      {/* Contenido del Hero */}
      <div className="container mx-auto text-center text-white z-10">
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Sobre <span className={styles.highlight}> Nosotros</span>
        </motion.h1>

        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Somos una agencia de marketing y publicidad especializada en eventos, campañas publicitarias y promociones.

        </motion.p>

        <motion.a
          href="#servicios"
          className={styles.cta}
          whileHover={{ scale: 1.1 }}
        >
          Descubre más
        </motion.a>
      </div>
    </section>
  );
};

export default HeroAbout;
