import Image from "next/image";
import styles from "@/styles/ElectAbout.module.css";

const ElectAbout = () => {
  return (
    <div className={styles.electContainer}>
      <h2 className={styles.title}>¿Quiénes Somos?</h2>
  
      <div className={styles.contentWrapper}>
        <div className={styles.card}>
          <p className={styles.description}>
            Somos una agencia de marketing y publicidad con más de 10 años de experiencia en el mercado.
            Nos especializamos en eventos, campañas publicitarias y promociones.
            Nos comprometemos con la innovación y la mejora continua de nuestros servicios.
          </p>
        </div>
  
        <div className={styles.imageContainer}>
          <Image src="/es.png" alt="Nuestro equipo" width={400} height={300} className={styles.image} />
        </div>
      </div>
    </div>
  );
  
  
};

export default ElectAbout;
