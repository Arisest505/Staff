"use client";
import styles from "@/styles/Services.module.css"; // Importar CSS Module
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import VanillaTilt from "vanilla-tilt";
import { LayoutGrid } from "lucide-react"; // Importar icono minimalista

const services = [
  {
    title: "Diseño de Páginas Estáticas",
    icon: <LayoutGrid size={50} />, // Ícono moderno
    description: "Personaliza colores, fuentes y más para diseñar páginas estáticas únicas.",
  },
];

export const ServicesComponent = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const tiltElements = Array.from(document.querySelectorAll(".js-tilt")) as HTMLElement[];
    VanillaTilt.init(tiltElements, {
      glare: true,
      "max-glare": 0.5,
    });
  }, []);

  if (!isClient) return null; // 🔹 Evita errores en SSR

  return (
    <section id="servicios" className={styles.servicesSection}>
      <div className="container mx-auto px-4">
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Nuestros Servicios
        </motion.h2>
        <p className={styles.description}>
          Diseña páginas estáticas interactivas con opciones avanzadas de personalización.
        </p>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className={`js-tilt ${styles.serviceCard}`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={styles.iconWrapper}>{service.icon}</div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = dynamic(() => Promise.resolve(ServicesComponent), { ssr: false });
export default Services;
