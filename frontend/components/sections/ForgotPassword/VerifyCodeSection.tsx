"use client";
import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { FaLock, FaTimes, FaCheckCircle } from "react-icons/fa"; //  Iconos
import styles from "@/styles/Login/VerifyCode.module.css"; //  Importar CSS

interface VerifyCodeSectionProps {
  setActiveSection: (section: string) => void;
  email: string;
}

const VerifyCodeSection: React.FC<VerifyCodeSectionProps> = ({ setActiveSection }) => {
  const [code, setCode] = useState("");
  const [token, setToken] = useState("");

  const handleVerifyCode = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      //  Obtener el token desde el backend
      const responseToken = await axios.get("http://localhost:5000/api/auth/get-token", {
        withCredentials: true, //  Enviar cookies al backend
      });

      const token = responseToken.data.token;
      console.log("📌 Token recibido:", token);

      if (!token) {
        Swal.fire({
          title: "Error",
          text: "No se encontró un token válido. Solicita un nuevo código.",
          icon: "error",
          confirmButtonColor: "rgb(101, 0, 216)", // Morado del logo
          background: "#000", // Negro
          color: "#FFF", // Blanco
        });
        return;
      }

      //  Enviar código de verificación
      const response = await axios.post(
        "http://localhost:5000/api/auth/verify-code",
        { code, token },
        { withCredentials: true } //  Enviar cookies
      );

      console.log(" Respuesta del backend:", response.data);

      Swal.fire({
        title: "Código válido",
        text: "Ahora puedes ingresar una nueva contraseña.",
        icon: "success",
        confirmButtonColor: "rgb(101, 0, 216)", // Morado
        background: "#000", // Negro
        color: "#FFF", // Blanco
      }).then(() => {
        setActiveSection("reset-password");
      });

    } catch (error: any) {
      console.error("rgb(216, 0, 72) Error al verificar código:", error.response?.data || error);

      Swal.fire({
        title: "Código incorrecto",
        text: "El código es incorrecto o ha expirado.",
        icon: "error",
        confirmButtonColor: "#ff4b4b", // Rojo de advertencia
        background: "#000", // Negro
        color: "#FFF", // Blanco
      });
    }
  };

  const handleCancel = () => {
    Swal.fire({
      title: "¿Cancelar verificación?",
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
    <form onSubmit={handleVerifyCode} className={styles.verifyCodeForm}>
      <h2 className={styles.verifyCodeTitle}>
        <FaLock className={styles.lockIcon} /> 
      </h2>
      <p className={styles.verifyCodeSubtitle}>Ingresa el código de 6 dígitos que enviamos a tu correo.</p>

      <input
        type="text"
        placeholder="Código de verificación"
        className={styles.verifyCodeInput}
        value={code}
        onChange={(e) => setCode(e.target.value)}
        required
      />

      <div className={styles.buttonContainer}>
        <button type="submit" className={styles.verifyCodeButton}>
          <FaCheckCircle /> 
        </button>
        <button type="button" onClick={handleCancel} className={styles.cancelButton}>
          <FaTimes /> 
        </button>
      </div>
    </form>
  );
};

export default VerifyCodeSection;
