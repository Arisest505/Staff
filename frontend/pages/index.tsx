

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Blog from "@/components/sections/Blog";
import FAQ from "@/components/sections/FAQ";
import MoreInfo from '@/components/sections/MoreInfo';
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Home() {
  return (
    <div className="bg-white text-gray-900">
      <Header />
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
  );
}
