"use client";

import React, { useState } from "react";
import LoginSection from "../../components/sections/Login/LoginSection";
import RegisterSection from "../../components/sections/Register/RegisterSection";
import ForgotPasswordSection from "../../components/sections/ForgotPassword/ForgotPasswordSection";

const AuthNavigator: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("login");

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "black", // Fondo exterior más limpio
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          maxWidth: "700px", // Tamaño más compacto
          minHeight: "80vh",
          background: "black", // Fondo interior
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
          borderRadius: "20px",
          padding: "2rem",
          textAlign: "center",
          color: "white",
        }}
      >
        {/* Texto dinámico */}
        <div
          style={{
            marginBottom: "2rem",
            borderBottom: "2px solid #A000FF",
            paddingBottom: "1rem",
            width: "100%",
          }}
        >
          {activeSection === "login" && (
            <>
              <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: "#FFFFFF" }}>
                ¡Bienvenido de nuevo!
              </h1>
              <p style={{ fontSize: "1.1rem", color: "#E0E0E0" }}>
                Inicia sesión y continúa tu viaje con nosotros.
              </p>
            </>
          )}

          {activeSection === "register" && (
            <>
              <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: "#FFFFFF" }}>
                ¡Únete a nosotros hoy!
              </h1>
              <p style={{ fontSize: "1.1rem", color: "#E0E0E0" }}>
                Crea una cuenta y comienza a explorar las posibilidades.
              </p>
            </>
          )}

          {activeSection === "forgot-password" && (
            <>
              <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: "#FFFFFF" }}>
                ¿Olvidaste tu contraseña?
              </h1>
              <p style={{ fontSize: "1.1rem", color: "#E0E0E0" }}>
                No te preocupes, te ayudaremos a recuperarla.
              </p>
            </>
          )}
        </div>

        {/* Formulario dinámico */}
        <div
          style={{
            width: "100%",
            maxWidth: "400px",
            padding: "1rem",
            background: "rgba(0, 0, 0, 0.8)", // Fondo del formulario
            borderRadius: "10px",
          }}
        >
          {activeSection === "login" && <LoginSection setActiveSection={setActiveSection} />}
          {activeSection === "register" && <RegisterSection setActiveSection={setActiveSection} />}
          {activeSection === "forgot-password" && <ForgotPasswordSection setActiveSection={setActiveSection} />}
        </div>

        {/* Botones de navegación */}
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <button
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: activeSection === "login" ? "#A000FF" : "transparent",
              color: "white",
              border: "2px solid #A000FF",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "0.9rem",
              fontWeight: "bold",
              transition: "background-color 0.3s ease, transform 0.3s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            onClick={() => setActiveSection("login")}
          >
            Login
          </button>
          <button
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: activeSection === "register" ? "#A000FF" : "transparent",
              color: "white",
              border: "2px solid #A000FF",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "0.9rem",
              fontWeight: "bold",
              transition: "background-color 0.3s ease, transform 0.3s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            onClick={() => setActiveSection("register")}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthNavigator;
