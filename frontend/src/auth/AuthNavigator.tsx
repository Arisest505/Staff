"use client";
import React, { useState, useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import styles from "@/styles/Login/AuthNavigator.module.css";
import LoginSection from "@/components/sections/Login/LoginSection";
import RegisterSection from "@/components/sections/Register/RegisterSection";
import ForgotPasswordSection from "@/components/sections/ForgotPassword/ForgotPasswordSection";
import ResetPasswordSection from "@/components/sections/ForgotPassword/ResetPasswordSection";
import VerifyCodeSection from "@/components/sections/ForgotPassword/VerifyCodeSection";

const AuthNavigator: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("login");
  const [email, setEmail] = useState<string>("");

  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className={styles["auth-container"]}>
      {/* 🎇 Partículas dentro del auth-container */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: false, // rgb(255, 255, 255) Evita que cubra toda la pantalla
          background: { color: "transparent" },
          particles: {
            number: { value: 50 },
            color: { value: ["#A000FF", "#ff004c", "#00c2ff"] },
            shape: { type: "circle" },
            opacity: {
              value: 0.6,
              random: true,
              anim: { enable: true, speed: 0.2, opacity_min: 0.1, sync: false },
            },
            size: {
              value: 2.5,
              random: true,
              anim: { enable: true, speed: 0.5, size_min: 0.3, sync: false },
            },
            move: {
              enable: true,
              speed: 0.8,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              attract: { enable: false },
            },
            line_linked: {
              enable: true,
              distance: 120,
              color: "#A000FF",
              opacity: 0.4,
              width: 1,
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onHover: { enable: true, mode: "grab" },
              onClick: { enable: true, mode: "push" },
            },
            modes: {
              grab: { distance: 120, line_linked: { opacity: 0.8 } },
              push: { particles_nb: 3 },
            },
          },
          retina_detect: true,
        }}
        className={styles.particles}
      />

      {/* Caja de autenticación */}
      <div className={styles["auth-box"]}>
        <div className={styles["auth-form"]}>
          {activeSection === "login" && <LoginSection setActiveSection={setActiveSection} />}
          {activeSection === "register" && <RegisterSection setActiveSection={setActiveSection} />}
          {activeSection === "forgot-password" && (
            <ForgotPasswordSection setActiveSection={setActiveSection} setEmail={setEmail} />
          )}
          {activeSection === "verify-code" && (
            <VerifyCodeSection setActiveSection={setActiveSection} email={email} />
          )}
          {activeSection === "reset-password" && (
            <ResetPasswordSection setActiveSection={setActiveSection} email={email} />
          )}
        </div>

        {/* Botones de navegación */}
        <div className={styles["auth-buttons"]}>
          <button
            className={`${styles["auth-button"]} ${activeSection === "login" ? styles["active-button"] : ""}`}
            onClick={() => setActiveSection("login")}
          >
            Login
          </button>
          <button
            className={`${styles["auth-button"]} ${activeSection === "register" ? styles["active-button"] : ""}`}
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
