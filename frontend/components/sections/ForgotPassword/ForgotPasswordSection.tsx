"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import axios from "axios";
import { FaEnvelope, FaPaperPlane } from "react-icons/fa"; // Iconos necesarios
import Swal from "sweetalert2"; // Alertas interactivas
import styles from "@/styles/Login/ForgotPasswordSection.module.css"; // Importamos el CSS

interface ForgotPasswordSectionProps {
  setActiveSection: Dispatch<SetStateAction<string>>;
}

const ForgotPasswordSection: React.FC<ForgotPasswordSectionProps> = ({ setActiveSection }) => {
  const [email, setEmail] = useState<string>("");

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/forgot-password", { email });

      // Alerta interactiva de éxito
      Swal.fire({
        title: "¡Correo enviado!",
        text: "Hemos enviado un enlace de recuperación a tu correo.",
        icon: "success",
        confirmButtonText: "Entendido",
        confirmButtonColor: "#FFA500",
        background: "#000000",
        color: "#FFFFFF",
      });
    } catch (error: any) {
      // Alerta interactiva de error
      Swal.fire({
        title: "Error al enviar el correo",
        text: error.response?.data?.error || "Error desconocido, intenta nuevamente.",
        icon: "error",
        confirmButtonText: "Reintentar",
        confirmButtonColor: "#FF4B4B",
        background: "#000000",
        color: "#FFFFFF",
      });
    }
  };

  return (
    <form onSubmit={handleForgotPassword} className={styles.forgotPasswordForm}>
      <h2 className={styles.title}>Recuperar Contraseña</h2>

      <p className={styles.subtitle}>
        Ingresa tu correo y te enviaremos un enlace para restablecer tu contraseña.
      </p>

      {/* Campo de correo */}
      <div className={styles.inputGroup}>
        <FaEnvelope className={styles.icon} />
        <input
          type="email"
          placeholder="Correo Electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={styles.inputField}
        />
      </div>

      {/* Botón de enviar correo */}
      <button type="submit" className={styles.sendButton}>
        <FaPaperPlane /> Enviar Correo
      </button>

      {/* Enlace para volver al inicio de sesión */}
      <a onClick={() => setActiveSection("login")} className={styles.backToLogin}>
        Volver al inicio de sesión
      </a>
    </form>
  );
};

export default ForgotPasswordSection;
