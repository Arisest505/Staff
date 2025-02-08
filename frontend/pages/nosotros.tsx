import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AboutAbout from "@/components/sections/AboutSect/AboutAbout";
import HeroAbout from "@/components/sections/AboutSect/HeroAbout";
import ElectAbout from "@/components/sections/AboutSect/ElectAbout";
import MoreInfo from "@/components/sections/IndexSect/MoreInfo";
const servicios = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <main>
        <HeroAbout />
        <ElectAbout />
        <AboutAbout/>
        <MoreInfo />
      </main>
      <Footer />
    </div>
  );
};

export default servicios;
