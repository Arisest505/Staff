"use client";
import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { FaEnvelope, FaTimes, FaPaperPlane } from "react-icons/fa"; //  Iconos
import styles from "@/styles/Login/ForgotPasswordSection.module.css"; //  Importar CSS

interface ForgotPasswordSectionProps {
  setActiveSection: (section: string) => void;
  setEmail: (email: string) => void;
}

const ForgotPasswordSection: React.FC<ForgotPasswordSectionProps> = ({ setActiveSection }) => {
  const [email, setLocalEmail] = useState("");

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:5000/api/auth/forgot-password",
        { email },
        { withCredentials: true } //  Permitir envío de cookies
      );

      Swal.fire({
        title: "Código enviado",
        text: "Revisa tu correo y escribe el código de verificación.",
        icon: "success",
        confirmButtonText: "Continuar",
        confirmButtonColor: "rgb(101, 0, 216)", // Morado del logo
        background: "#000", // Negro
        color: "#FFF", // Blanco
      }).then(() => {
        setActiveSection("verify-code");
      });

    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "No se pudo enviar el correo. Verifica que tu email es correcto.",
        icon: "error",
        confirmButtonText: "Intentar de nuevo",
        confirmButtonColor: "#ff4b4b", // Rojo
        background: "#000", // Negro
        color: "#FFF", // Blanco
      });
    }
  };

  const handleCancel = () => {
    Swal.fire({
      title: "¿Cancelar solicitud?",
      text: "Si cancelas, no recibirás el código de verificación.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ff4b4b", // Rojo para confirmar cancelación
      cancelButtonColor: "rgb(101, 0, 216)", // Morado para cancelar
      confirmButtonText: "Sí, cancelar",
      cancelButtonText: "No, seguir",
      background: "#000",
      color: "#FFF",
    }).then((result) => {
      if (result.isConfirmed) {
        setActiveSection("login"); // rgb(216, 0, 72) Volver a la sección de login
      }
    });
  };

  return (
    <form onSubmit={handleForgotPassword} className={styles.forgotPasswordForm}>
      <h2 className={styles.forgotPasswordTitle}>
        <FaEnvelope className={styles.emailIcon} /> Recuperar Contraseña
      </h2>

      <input
        type="email"
        placeholder="Correo Electrónico"
        className={styles.forgotPasswordInput}
        value={email}
        onChange={(e) => setLocalEmail(e.target.value)}
        required
      />

      <div className={styles.buttonContainer}>
        <button type="submit" className={styles.forgotPasswordButton}>
          <FaPaperPlane /> 
        </button>
        <button type="button" onClick={handleCancel} className={styles.cancelButton}>
          <FaTimes /> 
        </button>
      </div>
    </form>
  );
};

export default ForgotPasswordSection;
