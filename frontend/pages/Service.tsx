
import Footer from "@/components/layout/Footer";
import HeroServicios from "@/components/sections/ServiceSect/HeroServicios";
import ListServicios from "@/components/sections/ServiceSect/ListServicios";
import MoreServicios from "@/components/sections/ServiceSect/MoreServicios";
import MoreInfo from "@/components/sections/IndexSect/MoreInfo";
const servicios = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

      <main>
        <HeroServicios />
        <ListServicios />
        <MoreServicios />
        <MoreInfo />
      </main>
      <Footer />
    </div>
  );
};

export default servicios;
