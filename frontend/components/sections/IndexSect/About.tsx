"use client";
import styles from "@/styles/About.module.css"; // Importar CSS Module
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import VanillaTilt from "vanilla-tilt";
import { Paintbrush, Users, BadgeCheck, MonitorSmartphone } from "lucide-react";
import { motion } from "framer-motion";

// Deshabilitar SSR para evitar errores de hidratación
const AboutComponent = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const tiltElements = Array.from(document.querySelectorAll(".js-tilt")) as HTMLElement[];
    if (tiltElements.length > 0) {
      VanillaTilt.init(tiltElements, {
        glare: true,
        "max-glare": 0.5,
      });
    }

    return () => {
      tiltElements.forEach((el) => el.vanillaTilt?.destroy());
    };
  }, []);

  if (!isClient) return null; //  Solución SSR

  const stats = [
    {
      icon: <Paintbrush size={40} />,
      value: "+3",
      label: "Años de experiencia",
      description: "Llevamos más de 3 años desarrollando herramientas de personalización de páginas estáticas.",
    },
    {
      icon: <Users size={40} />,
      value: "+300",
      label: "Clientes satisfechos",
      description: "Nuestros clientes han logrado personalizar y lanzar sus páginas con facilidad.",
    },
    {
      icon: <MonitorSmartphone size={40} />,
      value: "100%",
      label: "Diseño adaptable",
      description: "Los diseños creados son completamente responsivos y optimizados para cualquier pantalla.",
    },
    {
      icon: <BadgeCheck size={40} />,
      value: "Excelencia",
      label: "Calidad garantizada",
      description: "Ofrecemos herramientas de alta calidad para que puedas personalizar cada detalle de tu página.",
    },
  ];

  return (
    <section id="nosotros" className={styles.aboutSection}>
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className={styles.title}>Nosotros</h2>
        <p className={styles.subtitle}>
          Brindamos una plataforma para que personalices tu página estática con facilidad, ajustando colores, tipografía y más.
        </p>
        <div className={styles.grid}>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className={`${styles.aboutCard} js-tilt`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              data-tilt
              data-tilt-glare
              data-tilt-max-glare="0.5"
            >
              <div className={styles.icon}>{stat.icon}</div>
              <h3 className={styles.value}>{stat.value}</h3>
              <h4 className={styles.label}>{stat.label}</h4>
              <p className={styles.description}>{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

//  Evitar SSR
const About = dynamic(() => Promise.resolve(AboutComponent), { ssr: false });

export default About;
