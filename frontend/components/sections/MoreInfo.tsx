"use client";
import styles from "@/styles/MoreInfo.module.css"; // Importar CSS Module
import { motion } from "framer-motion";
import { Mail, MapPin, BookOpenText, LayoutTemplate } from "lucide-react"; // Iconos minimalistas

const infoItems = [
  {
    icon: <LayoutTemplate size={28} />,
    title: "Nuestros Servicios",
    description:
      "Explora nuestras opciones de personalización para diseñar tu página estática ideal.",
    linkText: "Ver Servicios",
    link: "#",
  },
  {
    icon: <Mail size={28} />,
    title: "Contáctanos",
    description:
      "Si tienes dudas o necesitas ayuda, envíanos un mensaje y te responderemos pronto.",
    linkText: "Enviar Email",
    link: "arisescrp@gmail.com",
  },
  {
    icon: <MapPin size={28} />,
    title: "Visítanos",
    description:
      "Lima, Perú",
  },
  {
    icon: <BookOpenText size={28} />,
    title: "Nuestro Blog",
    description:
      "Descubre los últimos avances en diseño we, parches, actualizaciones y personalización en nuestro blog.",
    linkText: "Leer Blog",
    link: "#",
  },
];

const MoreInfo = () => {
  return (
    <section id="more-info" className={styles.moreInfoSection}>
      <div className="container mx-auto px-4">
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Más Información
        </motion.h2>
        <p className={styles.subtitle}>
          Contáctanos o visítanos para descubrir cómo nuestro servicio de diseño de páginas estáticas puede adaptarse a tus necesidades.
        </p>
        <div className={styles.infoGrid}>
          {infoItems.map((item, index) => (
            <motion.div
              key={index}
              className={styles.infoCard}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className={styles.icon}>{item.icon}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.description}</p>
              {item.link && (
                <a href={item.link} className={styles.cardLink}>
                  {item.linkText} <span>&rarr;</span>
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreInfo;
