"use client";

import React, { useState, useEffect } from "react";
import styles from "@/styles/Home/Experience.module.css";

interface ExperienceProps {
  bgColor: string;
  cardColor: string;
  textColor: string;
  buttonColor: string;
  titleFont: string;
  cardFont: string;
}

const Experience: React.FC<ExperienceProps> = ({
  bgColor,
  cardColor,
  textColor,
  buttonColor,
  titleFont,
  cardFont,
}) => {
  const testimonials = [
    {
      name: "Jonathon Doe",
      role: "CEO, Jigsawlab",
      text: "Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna. Ut laoreet sodales nisi, quis iaculis nulla iaculis vitae.",
      cssClass: styles.avatar1,
    },
    {
      name: "Kazi Erfan",
      role: "Lead Designer, Kickstart",
      text: "Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna. Ut laoreet sodales nisi, quis iaculis nulla iaculis vitae.",
      cssClass: styles.avatar2,
    },
    {
      name: "Jane Doe",
      role: "Product Manager, Innovate",
      text: "Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna. Ut laoreet sodales nisi, quis iaculis nulla iaculis vitae.",
      cssClass: styles.avatar3,
    },
    {
      name: "Robert Smith",
      role: "Freelancer",
      text: "Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna. Ut laoreet sodales nisi, quis iaculis nulla iaculis vitae.",
      cssClass: styles.avatar4,
    },
    {
      name: "Emma Wilson",
      role: "UX Designer, Techify",
      text: "Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna. Ut laoreet sodales nisi, quis iaculis nulla iaculis vitae.",
      cssClass: styles.avatar5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Cambia cada 3 segundos automáticamente
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={styles.container}
      style={{
        backgroundColor: bgColor, // Ahora el fondo del container cambiará dinámicamente
        transition: "background-color 0.3s ease",
        padding: "3rem 0",
      }}
    >
      <h2
        className={styles.title}
        style={{ fontFamily: titleFont, color: textColor }}
      >
        Traveller's Experiences
      </h2>
      <p
        className={styles.subtitle}
        style={{ fontFamily: cardFont, color: textColor }}
      >
        Here're some awesome feedback from our travellers.
      </p>

      <div className={styles.carousel}>
        {testimonials.map((testimonial, index) => {
          const position =
            (index - currentIndex + testimonials.length) % testimonials.length;

          let className;
          if (position === 0) className = styles.center;
          else if (position === 1) className = styles.right1;
          else if (position === 2) className = styles.right2;
          else if (position === testimonials.length - 1) className = styles.left1;
          else if (position === testimonials.length - 2) className = styles.left2;
          else className = styles.hidden;

          return (
            <div
              key={index}
              className={`${styles.card} ${className}`}
              style={{
                backgroundColor: cardColor,
                color: textColor,
                fontFamily: cardFont,
                transition: "background-color 0.3s ease, color 0.3s ease",
              }}
            >
              <div className={`${styles.avatar} ${testimonial.cssClass}`}></div>
              <p className={styles.text}>{testimonial.text}</p>
              <h3
                className={styles.name}
                style={{ fontFamily: titleFont, color: textColor }}
              >
                {testimonial.name}
              </h3>
              <p
                className={styles.role}
                style={{ fontFamily: cardFont, color: textColor }}
              >
                {testimonial.role}
              </p>
            </div>
          );
        })}
      </div>

      <div className={styles.navigation}>
        <button
          className={styles.navButton}
          onClick={handlePrev}
          style={{
            fontFamily: cardFont,
            backgroundColor: buttonColor,
            color: textColor,
            transition: "background-color 0.3s ease, color 0.3s ease",
          }}
        >
          &lt;
        </button>
        <button
          className={styles.navButton}
          onClick={handleNext}
          style={{
            fontFamily: cardFont,
            backgroundColor: buttonColor,
            color: textColor,
            transition: "background-color 0.3s ease, color 0.3s ease",
          }}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Experience;
