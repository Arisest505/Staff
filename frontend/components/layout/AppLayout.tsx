"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import Header from "@/components/layout/Header";
import NavBarLog from "@/components/layout/NavBarLog";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Función para verificar autenticación
  const checkAuth = () => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user);
  };

  useEffect(() => {
    checkAuth(); // Llamamos la verificación al cargar

    //  Detectar cambios en localStorage
    const handleStorageChange = () => {
      checkAuth();
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [pathname]); // Se ejecuta cuando cambia la ruta

  return (
    <>
      {isLoggedIn ? <NavBarLog /> : <Header />}
      {children}
    </>
  );
};

export default AppLayout;
