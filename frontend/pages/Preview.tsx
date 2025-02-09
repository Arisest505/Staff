"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ContrastView from "@/components/sections/Preview/ContrastView";
import View from "@/components/sections/Preview/View";
import HeroView from "@/components/sections/Preview/HeroView";

const Preview: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const router = useRouter();

  // Estados de colores dinámicos para View
  const [bgColor, setBgColor] = useState("#000000");
  const [cardColor, setCardColor] = useState("#1a1a1a");
  const [textColor, setTextColor] = useState("#ffffff");

  // Estados de fuentes dinámicas
  const [titleFont, setTitleFont] = useState<string>("Arial");
  const [cardFont, setCardFont] = useState<string>("Verdana");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/Login");
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  if (isAuthenticated === null) {
    return <p className="text-center text-black">Verificando acceso...</p>;
  }

  return (
    //  El fondo de Preview SIEMPRE es blanco
    <div className="min-h-screen bg-white text-black">
      {/* HeroView en su propio fondo blanco */}
      <section>
        <HeroView />
      </section>

      {/* Contenido protegido con ContrastView y View */}
      <div className="p-10">
        <main>
          {/* ContrastView controla los cambios de color, pero no afecta Preview */}
          <ContrastView
            setBgColor={setBgColor}
            setCardColor={setCardColor}
            setTextColor={setTextColor}
            setTitleFont={setTitleFont}
            setCardFont={setCardFont}
          />

          {/* View con colores y fuentes personalizadas */}
          <View
            bgColor={bgColor}
            cardColor={cardColor}
            textColor={textColor}
            titleFont={titleFont}
            cardFont={cardFont}
          />
        </main>
      </div>
    </div>
  );
};

export default Preview;
