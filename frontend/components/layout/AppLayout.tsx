"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation"; 
import Header from "@/components/layout/Header";
import NavBarLog from "@/components/layout/NavBarLog";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const checkAuth = async () => {
    try {
      const res = await fetch("/api/auth/me", { //  Ahora usamos la API interna de Next.js
        method: "GET",
        credentials: "include",
      });
  
      if (res.status === 401) {
        return; //  No mostrar error en la consola
      }
  
      if (!res.ok) {
        console.error("Error en la autenticación:", res.statusText);
        return;
      }
  
      const data = await res.json();
      setIsLoggedIn(true);
      if (pathname === "/login") {
        router.push("/Preview");
      }
    } catch (error) {
      console.error("Error verificando autenticación:", error);
    }
  };
  
  
  useEffect(() => {
    if (!isLoggedIn) {
      return; // Evita hacer la solicitud si no ha iniciado sesión
    }
    checkAuth();
  }, [pathname, isLoggedIn]);
  
  useEffect(() => {
    const authenticate = async () => {
      await checkAuth();
      
      if (isLoggedIn && pathname === "/login") {
        router.push("/Preview");
      }
    };
  
    authenticate();
  }, [isLoggedIn, pathname]);
  
  return (
    <>
      {isLoggedIn ? <NavBarLog setIsLoggedIn={setIsLoggedIn} /> : <Header />}
      {children}
    </>
  );
  
};

export default AppLayout;
