

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/IndexSect/Hero";
import Services from "@/components/sections/IndexSect/Services";
import About from "@/components/sections/IndexSect/About";
import Blog from "@/components/sections/IndexSect/Blog";
import FAQ from "@/components/sections/IndexSect/FAQ";
import MoreInfo from '@/components/sections/IndexSect/MoreInfo';
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
