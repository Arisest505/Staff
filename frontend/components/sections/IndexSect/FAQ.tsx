"use client";
import styles from "@/styles/FAQ.module.css"; // Importar CSS Module
import { useState } from "react";
import { motion } from "framer-motion";
import { PaintBucket, Type, Layout, Settings } from "lucide-react"; // Iconos minimalistas

const faqs = [
  {
    icon: <PaintBucket size={24} />,
    question: "¿Puedo personalizar los colores y la tipografía?",
    answer:
      "Sí, puedes elegir entre una amplia gama de colores y fuentes para diseñar tu página estática a tu gusto.",
  },
  {
    icon: <Type size={24} />,
    question: "¿Necesito conocimientos de programación?",
    answer:
      "No, nuestra plataforma es fácil de usar y está diseñada para usuarios sin experiencia en desarrollo web.",
  },
  {
    icon: <Layout size={24} />,
    question: "¿Puedo cambiar el diseño después de publicarlo?",
    answer:
      "Sí, puedes modificar el diseño en cualquier momento para adaptarlo a tus necesidades sin perder información.",
  },
  {
    icon: <Settings size={24} />,
    question: "¿Qué otras opciones de personalización hay?",
    answer:
      "Puedes ajustar bordes, márgenes, fondos y sombras para crear una experiencia visual única.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className={styles.faqSection}>
      <div className="container mx-auto px-4">
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Preguntas Frecuentes
        </motion.h2>
        <div className={styles.faqGrid}>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={styles.faqItem}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onClick={() => toggleFAQ(index)}
            >
              <div className={styles.faqHeader}>
                <div className={styles.icon}>{faq.icon}</div>
                <h3 className={styles.question}>{faq.question}</h3>
              </div>
              {openIndex === index && (
                <motion.p
                  className={styles.answer}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                >
                  {faq.answer}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
