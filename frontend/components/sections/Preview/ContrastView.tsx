"use client";

import React, { useState, useEffect } from "react";
import styles from "@/styles/Preview/ContrastView.module.css";
import { FaRandom, FaEyeDropper } from "react-icons/fa";

interface ContrastViewProps {
  setBgColor: React.Dispatch<React.SetStateAction<string>>;
  setCardColor: React.Dispatch<React.SetStateAction<string>>;
  setTextColor: React.Dispatch<React.SetStateAction<string>>;
  setTitleFont: React.Dispatch<React.SetStateAction<string>>;
  setCardFont: React.Dispatch<React.SetStateAction<string>>;
}

const fonts = [
  "Arial",
  "Roboto",
  "Georgia",
  "Courier New",
  "Times New Roman",
  "Open Sans",
];

const ContrastView: React.FC<ContrastViewProps> = ({
  setBgColor,
  setCardColor,
  setTextColor,
  setTitleFont,
  setCardFont,
}) => {
  const [bgColor, setLocalBgColor] = useState<string>("#ffffff");
  const [cardColor, setLocalCardColor] = useState<string>("#f0f0f0");
  const [textColor, setLocalTextColor] = useState<string>("#000000");

  const handleRandomColors = () => {
    const randomColor = () =>
      `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`;
    const randomBg = randomColor();
    const randomCard = randomColor();
    const randomText = randomColor();
    setBgColor(randomBg);
    setCardColor(randomCard);
    setTextColor(randomText);
    setLocalBgColor(randomBg);
    setLocalCardColor(randomCard);
    setLocalTextColor(randomText);
  };

  return (
    <div className={styles.toolbar}>
      <h2 className={styles.title}>Personalización de Estilos</h2>

      <div className={styles.optionsContainer}>
        {/* Background Color Picker */}
        <div className={styles.colorItem}>
          <span className={styles.label}>Fondo</span>
          <FaEyeDropper className={styles.icon} />
          <input
            type="color"
            className={styles.colorPicker}
            value={bgColor}
            onChange={(e) => {
              const newColor = e.target.value;
              setLocalBgColor(newColor);
              setBgColor(newColor);
            }}
          />
          <div
            className={styles.colorCircle}
            style={{ backgroundColor: bgColor }}
          ></div>
          <span className={styles.colorCode}>{bgColor}</span>
        </div>

        {/* Card Color Picker */}
        <div className={styles.colorItem}>
          <span className={styles.label}>Tarjetas</span>
          <FaEyeDropper className={styles.icon} />
          <input
            type="color"
            className={styles.colorPicker}
            value={cardColor}
            onChange={(e) => {
              const newColor = e.target.value;
              setLocalCardColor(newColor);
              setCardColor(newColor);
            }}
          />
          <div
            className={styles.colorCircle}
            style={{ backgroundColor: cardColor }}
          ></div>
          <span className={styles.colorCode}>{cardColor}</span>
        </div>

        {/* Text Color Picker */}
        <div className={styles.colorItem}>
          <span className={styles.label}>Texto</span>
          <FaEyeDropper className={styles.icon} />
          <input
            type="color"
            className={styles.colorPicker}
            value={textColor}
            onChange={(e) => {
              const newColor = e.target.value;
              setLocalTextColor(newColor);
              setTextColor(newColor);
            }}
          />
          <div
            className={styles.colorCircle}
            style={{ backgroundColor: textColor }}
          ></div>
          <span className={styles.colorCode}>{textColor}</span>
        </div>
      </div>

      {/* Font Selectors */}
      <div className={styles.fontOptions}>
        <div className={styles.fontItem}>
          <span className={styles.label}>Fuente Títulos</span>
          <select
            className={styles.fontSelector}
            onChange={(e) => setTitleFont(e.target.value)}
          >
            {fonts.map((font, index) => (
              <option key={index} value={font}>
                {font}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.fontItem}>
          <span className={styles.label}>Fuente Tarjetas</span>
          <select
            className={styles.fontSelector}
            onChange={(e) => setCardFont(e.target.value)}
          >
            {fonts.map((font, index) => (
              <option key={index} value={font}>
                {font}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Random Button */}
      <button onClick={handleRandomColors} className={styles.randomButton}>
        <FaRandom />
        Colores Aleatorios
      </button>
    </div>
  );
};

export default ContrastView;
