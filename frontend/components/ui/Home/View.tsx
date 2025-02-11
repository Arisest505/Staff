"use client";

import React from "react";
import styles from "@/styles/Home/View.module.css";

interface ViewProps {
  bgColor: string;
  cardColor: string;
  textColor: string;
  buttonColor: string;
  titleFont: string;
  cardFont: string;
}

const View: React.FC<ViewProps> = ({
  bgColor,
  cardColor,
  textColor,
  buttonColor,
  titleFont,
  cardFont,
}) => {
  return (
    <div className={styles.container} style={{ backgroundColor: bgColor }}>
      {/* Contenedor de texto con fondo dinámico */}
      <div
        className={styles.textWrapper}
        style={{
          backgroundColor: cardColor, // Cambia el fondo del contenedor de texto
          padding: "2rem",
          borderRadius: "8px",
          opacity: 0.85, // Efecto de transparencia para no opacar la imagen de fondo
          transition: "background-color 0.3s ease", // Animación de cambio de color
        }}
      >
        <h1
          className={styles.title}
          style={{ fontFamily: titleFont, color: textColor }}
        >
          Dare to Live the Life You've Always Wanted
        </h1>
        <p
          className={styles.description}
          style={{ fontFamily: cardFont, color: textColor }}
        >
          Twenty years from now you will be more disappointed by the things
          that you didn’t do than by the ones you did do. So throw off the
          bowlines. Sail away from the safe harbor. Catch the trade winds in
          your sails.
        </p>

        {/* Botones dinámicos */}
        <div className={styles.buttonContainer}>
          <button
            className={styles.primaryButton}
            style={{
              backgroundColor: buttonColor, // Color del botón dinámico
              fontFamily: titleFont,
              color: textColor,
              padding: "0.75rem 1.5rem",
              borderRadius: "6px",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "background 0.3s ease",
            }}
          >
            Book Now
          </button>
          <button
            className={styles.secondaryButton}
            style={{
              backgroundColor: "transparent",
              borderColor: buttonColor,
              color: textColor,
              fontFamily: cardFont,
              padding: "0.75rem 1.5rem",
              borderRadius: "6px",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "border 0.3s ease",
            }}
          >
            Watch Intro Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default View;
