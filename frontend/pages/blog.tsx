import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroBlog from "@/components/sections/BlogSect/HeroBlog";
import InformationBlog from "@/components/sections/BlogSect/InformationBlog";
import MoreServicios from "@/components/sections/ServiceSect/MoreServicios";

const servicios = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <main>
        <HeroBlog />
        <InformationBlog />
        <MoreServicios />
      </main>
      <Footer />
    </div>
  );
};

export default servicios;
