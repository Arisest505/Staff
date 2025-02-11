"use client";
import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { FaLock, FaTimes, FaCheck } from "react-icons/fa"; //  Iconos
import styles from "@/styles/Login/ResetPassword.module.css"; //  Importar CSS

interface ResetPasswordSectionProps {
  setActiveSection: (section: string) => void;
  email: string;
}

const ResetPasswordSection: React.FC<ResetPasswordSectionProps> = ({ setActiveSection }) => {
  const [newPassword, setNewPassword] = useState("");

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/auth/reset-password",
        { newPassword },
        { withCredentials: true } //  Enviar cookies
      );

      Swal.fire({
        title: "Contraseña actualizada",
        text: "Ahora puedes iniciar sesión con tu nueva contraseña.",
        icon: "success",
        confirmButtonText: "Iniciar Sesión",
        confirmButtonColor: "rgb(101, 0, 216)", // Morado
        background: "#000", // Negro
        color: "#FFF", // Blanco
      }).then(() => {
        setActiveSection("login");
      });

    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "No se pudo actualizar la contraseña.",
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
      title: "¿Cancelar restablecimiento?",
      text: "Si cancelas, deberás solicitar un nuevo código.",
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
        setActiveSection("forgot-password"); // rgb(216, 0, 72) Volver a la sección de recuperar contraseña
      }
    });
  };

  return (
    <form onSubmit={handleResetPassword} className={styles.resetPasswordForm}>
      <h2 className={styles.resetPasswordTitle}>
        <FaLock className={styles.lockIcon} /> Restablecer Contraseña
      </h2>

      <input
        type="password"
        placeholder="Nueva Contraseña"
        className={styles.resetPasswordInput}
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        required
      />

      <div className={styles.buttonContainer}>
        <button type="submit" className={styles.resetPasswordButton}>
          <FaCheck /> 
        </button>
        <button type="button" onClick={handleCancel} className={styles.cancelButton}>
          <FaTimes />
        </button>
      </div>
    </form>
  );
};

export default ResetPasswordSection;
