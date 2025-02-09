"use client";

import React from "react";
import styles from "@/styles/Preview/HeroView.module.css"; // Importamos el CSS

const HeroView: React.FC = () => {
  return (
    <div className={styles.heroContainer}>
      {/* Fondo animado */}
      <div className={styles.background}>
        <div className={`${styles.wave} ${styles.wave1}`}></div>
        <div className={`${styles.wave} ${styles.wave2}`}></div>
        <div className={`${styles.wave} ${styles.wave3}`}></div>
      </div>

      {/* Contenido principal */}
      <div className={styles.content}>
        <h1 className={styles.title}>Combina tu Creatividad</h1>
        <p className={styles.subtitle}>Selecciona cada color y fusiona tus ideas enun diseño único.
        </p>
      </div>
    </div>
  );
};

export default HeroView;
