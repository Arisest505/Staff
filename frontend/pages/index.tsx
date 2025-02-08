import React from "react";
import AppLayout from "@/components/layout/AppLayout"; // Importamos el layout que maneja el navbar
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/IndexSect/Hero";
import Services from "@/components/sections/IndexSect/Services";
import About from "@/components/sections/IndexSect/About";
import Blog from "@/components/sections/IndexSect/Blog";
import FAQ from "@/components/sections/IndexSect/FAQ";
import MoreInfo from "@/components/sections/IndexSect/MoreInfo";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Home() {
  return (
    <AppLayout>
      <div className="bg-white text-gray-900">
        <main>
          <Hero />
          <Services />
          <About />
          <Blog />
          <FAQ />
          <MoreInfo />
        </main>
        <Footer />
      </div>
    </AppLayout>
  );
}
