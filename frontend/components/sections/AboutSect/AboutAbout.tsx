import { motion } from 'framer-motion';
import styles from "@/styles/AboutNosotros.module.css"; // Importar CSS Module

const features = [
  { title: 'Innovación', description: 'Creamos experiencias únicas que conectan tu marca con su objetivo.' },
  { title: 'Creatividad', description: 'Generando ideas y soluciones prácticas para tus proyectos.' },
  { title: 'Compromiso', description: 'Nos comprometemos totalmente con nuestros clientes, comprendiendo sus metas y necesidades.' },
  { title: 'Visión', description: 'Ser una de las principales agencias de marketing y publicidad exterior a nivel nacional.' },
  { title: 'Misión', description: 'Transformar la manera en que las empresas se conectan con su audiencia.' }
];

const AboutAbout = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Sobre Nosotros</h2>
      <p className={styles.description}>
        Somos una agencia de marketing y publicidad especializada en eventos, campañas publicitarias y promociones.
      </p>

      <div className={styles.grid}>
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className={styles.card}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3 className={styles.cardTitle}>{feature.title}</h3>
            <p className={styles.cardDescription}>{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutAbout;