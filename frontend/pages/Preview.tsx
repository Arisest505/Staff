"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ContrastView from "@/components/sections/Preview/ContrastView";
import View from "@/components/sections/Preview/View";


const Preview: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token"); // Obtiene el token del usuario
    if (!token) {
      router.push("/Login"); // 🔹 Si no hay token, redirige a Login
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  if (isAuthenticated === null) {
    return <p className="text-center text-white">Verificando acceso...</p>; // 🔹 Mientras se verifica
  }

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl font-bold text-center mb-5">Vista Protegida</h1>
      <ContrastView />
      <View />
    </div>
  );
};

export default Preview;
