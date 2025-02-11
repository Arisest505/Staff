"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import axios from "axios";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaGoogle, FaGithub } from "react-icons/fa";
import Swal from "sweetalert2";
import { useGoogleAuth } from "@/src/auth/googleAuth"; // Importamos Google Auth
import styles from "@/styles/Login/LoginSection.module.css"; // Importamos el CSS
import { useRouter } from "next/navigation";

interface LoginSectionProps {
  setActiveSection: Dispatch<SetStateAction<string>>;
}

const LoginSection: React.FC<LoginSectionProps> = ({ setActiveSection }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const router = useRouter();

  // Integración de Google Login
  const googleLogin = useGoogleAuth((user) => {
    Swal.fire({
      title: "¡Inicio de sesión exitoso con Google!",
      text: `Bienvenido, ${user.nombre}`,
      icon: "success",
      confirmButtonText: "Continuar",
      confirmButtonColor: "#A000FF",
      background: "#000000",
      color: "#FFFFFF",
    });

    setTimeout(() => {
      window.dispatchEvent(new Event("storage"));
    }, 100);
  });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // Necesario para enviar cookies
        body: JSON.stringify({ email, password }),
      });
      
      
  
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Error desconocido, intente de nuevo.");
      }
  
      const data = await res.json();
  
      // Ya no guardamos el token, el backend lo almacena en la cookie
      Swal.fire({
        title: "¡Inicio Exitoso!",
        text: "Bienvenido Nuevamente",
        icon: "success",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#A000FF",
        background: "#000000",
        color: "#FFFFFF",
        timer: 3000,
      }).then(() => {
        router.push("/Preview"); // Redirige a la vista Preview
      });
    } catch (error: any) {
      console.error("Error al iniciar sesión:", error);
  
      Swal.fire({
        title: "Error al iniciar sesión",
        text: error.message || "Error desconocido, intente de nuevo.",
        icon: "error",
        confirmButtonText: "Reintentar",
        confirmButtonColor: "#FF4B4B",
        background: "#000000",
        color: "#FFFFFF",
      });
    }
  };
  
  return (
    <form onSubmit={handleLogin} className={styles.loginForm}>
      <h2 className={styles.title}>Iniciar Sesión</h2>

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
          type={showPassword ? "text" : "password"}
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className={styles.inputField}
        />
        <div className={styles.eyeIcon} onClick={() => setShowPassword((prev) => !prev)}>
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </div>
      </div>

      {/* Botón de iniciar sesión */}
      <button type="submit" className={styles.loginButton}>Iniciar Sesión</button>

      {/* Enlace para recuperar contraseña */}
      <a onClick={() => setActiveSection("forgot-password")} className={styles.forgotPassword}>
        ¿Olvidaste tu contraseña?
      </a>

      {/* Iconos sociales */}
      <div className={styles.socialIcons}>
        <FaGoogle className={styles.socialIcon} onClick={() => googleLogin()} />
        <FaGithub className={styles.socialIcon} />
      </div>
    </form>
  );
};

export default LoginSection;
