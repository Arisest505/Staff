"use client";

import React, { useState, useEffect } from "react"; // 🛠 Agregar useEffect aquí
import styles from "@/styles/Preview/ContrastView.module.css";
import { FaRandom, FaEyeDropper } from "react-icons/fa";

interface ContrastViewProps {
  setBgColor: React.Dispatch<React.SetStateAction<string>>;
  setCardColor: React.Dispatch<React.SetStateAction<string>>;
  setTextColor: React.Dispatch<React.SetStateAction<string>>;
  setButtonColor: React.Dispatch<React.SetStateAction<string>>;
  setTitleFont: React.Dispatch<React.SetStateAction<string>>;
  setCardFont: React.Dispatch<React.SetStateAction<string>>;
}

const fonts = ["Arial", "Roboto", "Georgia", "Courier New", "Times New Roman", "Open Sans"];

const ContrastView: React.FC<ContrastViewProps> = ({
  setBgColor,
  setCardColor,
  setTextColor,
  setButtonColor,
  setTitleFont,
  setCardFont,
}) => {
  const [bgColor, setLocalBgColor] = useState<string>("#ffffff");
  const [cardColor, setLocalCardColor] = useState<string>("#f0f0f0");
  const [textColor, setLocalTextColor] = useState<string>("#000000");
  const [buttonColor, setLocalButtonColor] = useState<string>("#A000FF");
  const [selectedTitleFont, setSelectedTitleFont] = useState<string>("Arial");
  const [selectedCardFont, setSelectedCardFont] = useState<string>("Arial");

  // Genera colores aleatorios
  const handleRandomColors = () => {
    const randomColor = () =>
      `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`;
    const randomBg = randomColor();
    const randomCard = randomColor();
    const randomText = randomColor();
    const randomButton = randomColor();
    
    setBgColor(randomBg);
    setCardColor(randomCard);
    setTextColor(randomText);
    setButtonColor(randomButton);
    
    setLocalBgColor(randomBg);
    setLocalCardColor(randomCard);
    setLocalTextColor(randomText);
    setLocalButtonColor(randomButton);
  };

  // Genera fuentes aleatorias
  const handleRandomFonts = () => {
    const randomFont = () => fonts[Math.floor(Math.random() * fonts.length)];
    const newTitleFont = randomFont();
    const newCardFont = randomFont();

    setTitleFont(newTitleFont);
    setCardFont(newCardFont);
    setSelectedTitleFont(newTitleFont);
    setSelectedCardFont(newCardFont);
  };
  
  
  
  return (
    <div className={`${styles.toolbar}  ""}`}>
      <h2 className={styles.title}>Personalización de Estilos</h2>

      <div className={styles.optionsContainer}>
        {/* Sección de Colores */}
        <div className={styles.section}>
          <h3 className={styles.title}>Colores</h3>

          {/* Fondo */}
          <div className={styles.colorItem}>
            <span className={styles.label}>Fondo</span>
            <FaEyeDropper className={styles.icon} />
            <input
              type="color"
              className={styles.colorPicker}
              value={bgColor}
              onChange={(e) => {
                setLocalBgColor(e.target.value);
                setBgColor(e.target.value);
              }}
            />
            <div className={styles.colorCircle} style={{ backgroundColor: bgColor }}></div>
          </div>

          {/* Tarjetas */}
          <div className={styles.colorItem}>
            <span className={styles.label}>Tarjetas</span>
            <FaEyeDropper className={styles.icon} />
            <input
              type="color"
              className={styles.colorPicker}
              value={cardColor}
              onChange={(e) => {
                setLocalCardColor(e.target.value);
                setCardColor(e.target.value);
              }}
            />
            <div className={styles.colorCircle} style={{ backgroundColor: cardColor }}></div>
          </div>

          {/* Texto */}
          <div className={styles.colorItem}>
            <span className={styles.label}>Texto</span>
            <FaEyeDropper className={styles.icon} />
            <input
              type="color"
              className={styles.colorPicker}
              value={textColor}
              onChange={(e) => {
                setLocalTextColor(e.target.value);
                setTextColor(e.target.value);
              }}
            />
            <div className={styles.colorCircle} style={{ backgroundColor: textColor }}></div>
          </div>

          {/* Botones */}
          <div className={styles.colorItem}>
            <span className={styles.label}>Botones</span>
            <FaEyeDropper className={styles.icon} />
            <input
              type="color"
              className={styles.colorPicker}
              value={buttonColor}
              onChange={(e) => {
                setLocalButtonColor(e.target.value);
                setButtonColor(e.target.value);
              }}
            />
            <div className={styles.colorCircle} style={{ backgroundColor: buttonColor }}></div>
          </div>

          <button onClick={handleRandomColors} className={styles.randomButton}>
            <FaRandom /> 
          </button>
        </div>

        <div className={styles.divider}></div>

        {/* Sección de Fuentes */}
        <div className={styles.section}>
          <h3 className={styles.title}>Fuentes</h3>
          <div className={styles.fontOptions}>
            <div className={styles.fontItem}>
              <span className={styles.label}>Fuente Títulos</span>
              <select
                className={styles.fontSelector}
                value={selectedTitleFont}
                onChange={(e) => {
                  setSelectedTitleFont(e.target.value);
                  setTitleFont(e.target.value);
                }}
              >
                {fonts.map((font) => (
                  <option key={font}>{font}</option>
                ))}
              </select>
            </div>
            <div className={styles.fontItem}>
              <span className={styles.label}>Fuente Tarjetas</span>
              <select
                className={styles.fontSelector}
                value={selectedCardFont}
                onChange={(e) => {
                  setSelectedCardFont(e.target.value);
                  setCardFont(e.target.value);
                }}
              >
                {fonts.map((font) => (
                  <option key={font}>{font}</option>
                ))}
              </select>
            </div>
          </div>
          <button onClick={handleRandomFonts} className={styles.randomButton}>
            <FaRandom /> 
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContrastView;
