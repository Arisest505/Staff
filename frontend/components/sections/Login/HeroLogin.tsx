"use client";

import React from "react";
import styles from "@/styles/Login/HeroLogin.module.css"; // Importamos el CSS

const HeroLogin: React.FC = () => {
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
        <h1 className={styles.title}>Bienvenido de nuevo</h1>
        <p className={styles.subtitle}>
          Inicia sesión y descubre un mundo de posibilidades con un diseño único.
        </p>
      </div>
    </div>
  );
};

export default HeroLogin;
