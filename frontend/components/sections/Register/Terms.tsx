"use client";

import React from "react";
import styles from "@/styles/Login/Terms.module.css"; // Importamos el CSS

interface TermsProps {
  onClose: () => void;
}

const Terms: React.FC<TermsProps> = ({ onClose }) => {
  return (
    <div className={styles.termsOverlay}>
      <div className={styles.termsContainer}>
        <h2 className={styles.title}>Términos y Condiciones</h2>
        <p className={styles.text}>
          Bienvenido a nuestra plataforma. Al registrarte y utilizar nuestros servicios, aceptas cumplir con los siguientes términos y condiciones:
        </p>

        <h3 className={styles.subtitle}>1. Uso Aceptable</h3>
        <p className={styles.text}>
          El usuario se compromete a utilizar esta plataforma de manera responsable, respetando las leyes y regulaciones aplicables. No se permite el uso indebido del sistema.
        </p>

        <h3 className={styles.subtitle}>2. Planes y Pagos</h3>
        <p className={styles.text}>
          Nuestra plataforma ofrece distintos planes de suscripción para mejorar la experiencia del usuario. Los pagos deben realizarse mediante los métodos aceptados en nuestra web.
        </p>
        <ul className={styles.list}>
          <li>Los pagos no son reembolsables después de la activación del plan.</li>
          <li>El usuario puede cambiar o cancelar su suscripción en cualquier momento.</li>
          <li>En caso de impago, se suspenderá el acceso a las funciones premium.</li>
        </ul>

        <h3 className={styles.subtitle}>3. Privacidad y Seguridad</h3>
        <p className={styles.text}>
          Respetamos tu privacidad y protegemos tu información personal. Consulta nuestra política de privacidad para más detalles sobre el almacenamiento y uso de datos.
        </p>

        <h3 className={styles.subtitle}>4. Modificaciones en los Servicios</h3>
        <p className={styles.text}>
          Nos reservamos el derecho de modificar, suspender o descontinuar cualquier funcionalidad sin previo aviso. Se notificará a los usuarios sobre cambios en los términos y condiciones.
        </p>

        <h3 className={styles.subtitle}>5. Limitación de Responsabilidad</h3>
        <p className={styles.text}>
          No somos responsables de daños directos o indirectos derivados del uso de nuestra plataforma, incluyendo fallos en el sistema o pérdida de información.
        </p>

        <h3 className={styles.subtitle}>6. Cancelación de Cuentas</h3>
        <p className={styles.text}>
          Nos reservamos el derecho de suspender o eliminar cuentas en caso de actividad fraudulenta, uso indebido o incumplimiento de los términos.
        </p>

        <h3 className={styles.subtitle}>7. Contacto</h3>
        <p className={styles.text}>
          Para más información, puedes contactarnos a través de nuestro correo de soporte o canales oficiales. Gracias por confiar en nosotros.
        </p>

        <button onClick={onClose} className={styles.closeButton}>
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default Terms;
