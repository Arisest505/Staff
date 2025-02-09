"use client";

import React from "react";
import styles from "@/styles/Preview/View.module.css";
import { FaMagic, FaStar, FaSave } from "react-icons/fa";

interface ViewProps {
  bgColor: string;
  cardColor: string;
  textColor: string;
  titleFont: string;
  cardFont: string;
}

const View: React.FC<ViewProps> = ({
  bgColor,
  cardColor,
  textColor,
  titleFont,
  cardFont,
}) => {
  return (
    <div className={styles["view-container"]} style={{ backgroundColor: bgColor }}>
      {/* Encabezado */}
      <h1
        className={styles.title}
        style={{ color: textColor, fontFamily: titleFont }}
      >
        🌌 Noir.02 - Bienvenido
      </h1>
      <p
        className={styles.description}
        style={{ color: textColor, fontFamily: titleFont }}
      >
        Explora el diseño minimalista y personaliza tu experiencia.
      </p>

      {/* Sección de Tarjetas */}
      <div className={styles["card-container"]}>
        <div
          className={styles.card}
          style={{ backgroundColor: cardColor, fontFamily: cardFont }}
        >
          <FaMagic size={30} color={textColor} />
          <h3 style={{ color: textColor }}>🎨 Personalización</h3>
        </div>

        <div
          className={styles.card}
          style={{ backgroundColor: cardColor, fontFamily: cardFont }}
        >
          <FaStar size={30} color={textColor} />
          <h3 style={{ color: textColor }}>🌟 Explora</h3>
        </div>

        <div
          className={styles.card}
          style={{ backgroundColor: cardColor, fontFamily: cardFont }}
        >
          <FaSave size={30} color={textColor} />
          <h3 style={{ color: textColor }}>📌 Guarda</h3>
        </div>
      </div>

      {/* Pie de página estático */}
      <footer className={styles.footer} style={{ color: textColor, fontFamily: cardFont }}>
        © {new Date().getFullYear()} Noir.02 - Todos los derechos reservados.
      </footer>
    </div>
  );
};

export default View;
