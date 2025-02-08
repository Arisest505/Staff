"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import axios from "axios";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import Swal from "sweetalert2";
import Terms from "./Terms"; // Importar el componente de términos
import styles from "@/styles/Login/RegisterSection.module.css"; // Importamos el CSS

interface RegisterSectionProps {
  setActiveSection: Dispatch<SetStateAction<string>>;
}

const RegisterSection: React.FC<RegisterSectionProps> = ({ setActiveSection }) => {
  const [nombre, setNombre] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showTerms, setShowTerms] = useState<boolean>(false); // Controlar el modal de términos

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/register", { nombre, email, password });

      Swal.fire({
        title: "¡Registro exitoso!",
        text: "Tu cuenta ha sido creada. Ahora puedes iniciar sesión.",
        icon: "success",
        confirmButtonText: "Iniciar sesión",
        confirmButtonColor: "#A000FF",
        background: "#000000",
        color: "#FFFFFF",
      });

      setActiveSection("login");
    } catch (error: any) {
      Swal.fire({
        title: "Error al registrar",
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
    <>
      <form onSubmit={handleRegister} className={styles.registerForm}>
        <h2 className={styles.title}>Crear Cuenta</h2>

        {/* Campo de nombre */}
        <div className={styles.inputGroup}>
          <FaUser className={styles.icon} />
          <input
            type="text"
            placeholder="Nombre Completo"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            className={styles.inputField}
          />
        </div>

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

        {/* Campo de contraseña */}
        <div className={styles.inputGroup}>
          <FaLock className={styles.icon} />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className={styles.inputField}
          />
        </div>

        {/* Checkbox de términos */}
        <div className={styles.terms}>
          <input type="checkbox" required />
          <span>
            Acepto los{" "}
            <a onClick={() => setShowTerms(true)} className={styles.termsLink}>
              términos y condiciones
            </a>
          </span>
        </div>

        {/* Botón de registrar */}
        <button type="submit" className={styles.registerButton}>
          Registrar
        </button>
      </form>

      {/* Modal de términos */}
      {showTerms && <Terms onClose={() => setShowTerms(false)} />}
    </>
  );
};

export default RegisterSection;
