"use client";

import React from "react";
import styles from "@/styles/Home/FooterView.module.css";

interface FooterViewProps {
    bgColor: string;
    textColor: string;
    titleFont: string;
    cardFont: string;
    cardColor: string;
    buttonColor: string; // Agregar buttonColor
  }
  
  const FooterView: React.FC<FooterViewProps> = ({
    bgColor,
    textColor,
    titleFont,
    cardFont,
    cardColor,
    buttonColor, // Recibir buttonColor como prop
  }) => {
    return (
      <footer
        className={styles.footer}
        style={{ backgroundColor: bgColor, color: textColor }}
      >
        <div
          className={styles.background}
          style={{
            backgroundColor: cardColor,
            padding: "2rem",
            borderRadius: "8px",
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2
            className={styles.title}
            style={{ fontFamily: titleFont, color: textColor }}
          >
            Subscribe to Our Newsletter
          </h2>
          <div className={styles.subscription}>
            <input
              type="email"
              placeholder="johndoe@gmail.com"
              className={styles.input}
              style={{
                fontFamily: cardFont,
                color: textColor,
                backgroundColor: "white",
                borderColor: textColor,
              }}
            />
            <button
              className={styles.subscribeButton}
              style={{
                fontFamily: cardFont, // Fuente dinámica del botón
                color: cardColor, // Color dinámico del texto del botón
                backgroundColor: buttonColor, // Fondo dinámico del botón
                transition: "background-color 0.3s ease, color 0.3s ease",
              }}
            >
              Subscribe
            </button>
          </div>
          <nav className={styles.menu}>
            {["Home", "About Us", "Facilities", "Contact Us"].map((item) => (
              <a
                key={item}
                href="#"
                className={styles.menuItem}
                style={{
                  fontFamily: cardFont,
                  color: textColor,
                  transition: "color 0.3s ease",
                }}
              >
                {item}
              </a>
            ))}
          </nav>
          <div className={styles.socialIcons}>
            {["facebook-f", "twitter", "instagram"].map((icon) => (
              <a
                key={icon}
                href="#"
                className={styles.icon}
                style={{
                  fontFamily: cardFont,
                  color: textColor,
                  transition: "color 0.3s ease",
                }}
              >
                <i className={`fab fa-${icon}`}></i>
              </a>
            ))}
          </div>
          <p
            className={styles.credits}
            style={{
              fontFamily: cardFont,
              color: textColor,
              textAlign: "center",
              marginTop: "1rem",
            }}
          >
            © 2023 Mrittika. All rights reserved.
          </p>
        </div>
      </footer>
    );
  };
  
  export default FooterView;
  