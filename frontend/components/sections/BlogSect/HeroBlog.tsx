"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "@/styles/HeroBlog.module.css";

const HeroBlog: React.FC = () => {
  const [drops, setDrops] = useState<{ id: number; x: number; y: number }[]>([]);

  useEffect(() => {
    const generateDrop = () => {
      const newDrop = {
        id: Date.now(),
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      };

      setDrops((prevDrops) => {
        if (prevDrops.length > 30) return [...prevDrops.slice(1), newDrop];
        return [...prevDrops, newDrop];
      });
    };

    const interval = setInterval(generateDrop, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.hero}>
      {/* Fondo animado */}
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

      {/* Contenido principal */}
      <div className="container mx-auto text-center text-white z-10">
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Bienvenido al <span className={styles.highlight}>Blog</span>
        </motion.h1>

        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Descubre nuestras últimas estrategias, tendencias y más.
        </motion.p>

        <motion.a
          href="#contenido"
          className={styles.cta}
          whileHover={{ scale: 1.1 }}
        >
          Explorar
        </motion.a>
      </div>
    </section>
  );
};

export default HeroBlog;
