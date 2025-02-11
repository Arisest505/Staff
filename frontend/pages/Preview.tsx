"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ContrastView from "@/components/sections/Preview/ContrastView";
import View from "@/components/ui/Home/View";
import Plans from "@/components/ui/Home/Plans";
import Experience from "@/components/ui/Home/Experience";
import FooterView from "@/components/ui/Home/FooterView";
import HeroView from "@/components/sections/Preview/HeroView";

const Preview: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const router = useRouter();

  // Estados de colores dinámicos
  const [bgColor, setBgColor] = useState("#000000");
  const [cardColor, setCardColor] = useState("#1a1a1a");
  const [textColor, setTextColor] = useState("#ffffff");
  const [buttonColor, setButtonColor] = useState("#A000FF");

  // Estados de fuentes dinámicas
  const [titleFont, setTitleFont] = useState<string>("Arial");
  const [cardFont, setCardFont] = useState<string>("Verdana");

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("/api/auth/me", {
          credentials: "include",
        });
  
        //  Verificar si la respuesta es JSON válida antes de procesarla
        let data;
        try {
          data = await res.json();
        } catch (jsonError) {
          console.error("Error procesando JSON:", jsonError);
          setIsAuthenticated(false);
          router.push("/Login");
          return;
        }
  
        if (res.ok && data) {
          setIsAuthenticated(true);
        } else {
          console.warn("Usuario no autenticado. Redirigiendo a Login.");
          setIsAuthenticated(false);
          router.push("/Login");
        }
      } catch (error) {
        console.error("Error verificando autenticación:", error);
        setIsAuthenticated(false);
        router.push("/Login");
      }
    };
  
    checkAuth();
  }, [router]);
  
  
  if (isAuthenticated === null) {
    return <p className="text-center text-black">Verificando acceso...</p>;
  }
  
  return (
    <div className="min-h-screen bg-white text-black">
      {/* HeroView en la parte superior */}
      <section>
        <HeroView />
      </section>

      {/* Personalización de colores y fuentes */}
      <section className="p-10">
        <ContrastView
          setBgColor={setBgColor}
          setCardColor={setCardColor}
          setTextColor={setTextColor}
          setButtonColor={setButtonColor}
          setTitleFont={setTitleFont}
          setCardFont={setCardFont}
        />
      </section>

      {/* Secciones afectadas por los cambios */}
      <section className="py-10">
        <View
          bgColor={bgColor}
          cardColor={cardColor}
          textColor={textColor}
          titleFont={titleFont}
          cardFont={cardFont}
          buttonColor={buttonColor}
        />
      </section>

      <section className="py-10">
        <Plans
          bgColor={bgColor}
          cardColor={cardColor}
          textColor={textColor}
          titleFont={titleFont}
          cardFont={cardFont}
          buttonColor={buttonColor}
        />
      </section>

      <section className="py-10">
        <Experience
          bgColor={bgColor}
          cardColor={cardColor}
          textColor={textColor}
          titleFont={titleFont}
          cardFont={cardFont}
          buttonColor={buttonColor}
        />
      </section>

      <footer>
        <FooterView
          bgColor={bgColor}
          cardColor={cardColor}
          textColor={textColor}
          titleFont={titleFont}
          cardFont={cardFont}
          buttonColor={buttonColor}
        />
      </footer>
    </div>
  );
};

export default Preview;
