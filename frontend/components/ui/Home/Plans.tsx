"use client";

import React from "react";
import styles from "@/styles/Home/Plans.module.css";

interface PlansProps {
  bgColor: string;
  cardColor: string;
  textColor: string;
  buttonColor: string;
  titleFont: string;
  cardFont: string;
}

const Plans: React.FC<PlansProps> = ({
  bgColor,
  cardColor,
  textColor,
  buttonColor,
  titleFont,
  cardFont,
}) => {
  return (
    <div
      className={styles.container}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {/* Sección de texto */}
      <div className={styles.textSection}>
        <h2 className={styles.title} style={{ fontFamily: titleFont, color: textColor }}>
          Trip Planner
        </h2>
        <p className={styles.description} style={{ fontFamily: cardFont, color: textColor }}>
          Twenty years from now you will be more disappointed by the things
          that you didn’t do than by the ones you did do. So throw off the
          bowlines. Sail away from the safe harbor. Catch the trade winds in
          your sails.
        </p>
        <button
          className={styles.button}
          style={{
            backgroundColor: buttonColor,
            color: textColor,
            fontFamily: titleFont,
            padding: "0.75rem 1.5rem",
            borderRadius: "6px",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "background 0.3s ease",
          }}
        >
          View All Trip Plans
        </button>
      </div>

      {/* Sección de tarjetas */}
      <div className={styles.cardsSection}>
        {[  
          { title: "New York City Tour", label: "Guided Tours", price: "$99/day", duration: "7 days tour", imageClass: styles.cardImage1 },
          { title: "Moscow City Lights", label: "Night Tours", price: "$150/day", duration: "5 days tour", imageClass: styles.cardImage2 },
          { title: "Dubai Skyline Tour", label: "Luxury Tours", price: "$200/day", duration: "3 days tour", imageClass: styles.cardImage3 },
        ].map((card, index) => (
          <div
            key={index}
            className={styles.card}
            style={{ backgroundColor: cardColor, color: textColor }}
          >
            <div className={`${styles.cardImage} ${card.imageClass}`}></div>
            <div className={styles.cardContent}>
              <p className={styles.cardLabel} style={{ fontFamily: cardFont, color: textColor }}>
                {card.label}
              </p>
              <h3 className={styles.cardTitle} style={{ fontFamily: titleFont, color: textColor }}>
                {card.title}
              </h3>
              <p className={styles.cardPrice} style={{ fontFamily: cardFont, color: textColor }}>
                {card.price}
              </p>
              <p className={styles.cardDuration} style={{ fontFamily: cardFont, color: textColor }}>
                {card.duration}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
