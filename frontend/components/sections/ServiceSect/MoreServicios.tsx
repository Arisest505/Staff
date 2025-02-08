import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import styles from "@/styles/MoreServicios.module.css";

const MoreServicios = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const servicios = [
    {
      titulo: "Marketing digital",
      tituloColor: "text-blue-600",
      descripcion: "Estrategias personalizadas para alcanzar tus objetivos comerciales.",
      detalles: [
        "Experiencia y Enfoque Personalizado",
        "Amplia Gama de Servicios",
        "Resultados Tangibles",
      ],
      imagen: "/es.png",
    },
    {
      titulo: "Producción audiovisual",
      tituloColor: "text-green-600",
      descripcion: "Creación de contenido visual para cautivar a tu audiencia.",
      detalles: ["Alta calidad", "Postproducción profesional", "Resultados impactantes"],
      imagen: "/es.png",
    },
    {
      titulo: "Impresiones",
      tituloColor: "text-red-600",
      descripcion: "Soluciones de impresión adaptadas a tus necesidades.",
      detalles: ["Gran formato", "Calidad premium", "Entrega rápida"],
      imagen: "/es.png",
    },
  ];

  const toggleServicio = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className={`${styles.container} py-16 px-6`}>
      <motion.h2
        className={`${styles.title} text-4xl font-bold text-center text-gray-800 mb-8`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Más Servicios
      </motion.h2>
      <div className="space-y-12">
        {servicios.map((servicio, index) => (
          <div
            key={index}
            className={`${styles.card} p-6 rounded-xl ${
              expandedIndex === index ? styles.activeCard : "bg-white shadow-md"
            } flex flex-col md:flex-row ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            } items-center gap-6`}
          >
            {/* Encabezado */}
            <div
              className={`${styles.header} flex-1 cursor-pointer`}
              onClick={() => toggleServicio(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className={`text-xl font-semibold ${servicio.tituloColor}`}>
                  {servicio.titulo}
                </h3>
                <div
                  className={`w-8 h-8 rounded-full flex justify-center items-center ${
                    expandedIndex === index ? "bg-blue-500 text-white" : "bg-gray-300 text-black"
                  }`}
                >
                  {expandedIndex === index ? "−" : "+"}
                </div>
              </div>
              <p className="text-gray-600 mt-2">{servicio.descripcion}</p>
            </div>

            {/* Contenido Expandible */}
            <AnimatePresence>
              {expandedIndex === index && (
                <motion.div
                  className={`${styles.content} mt-4`}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="flex-1">
                      {servicio.detalles.map((detalle, i) => (
                        <p
                          key={i}
                          className={`${styles.detalle} text-gray-700 mb-2 selectable`}
                        >
                          {detalle}
                        </p>
                      ))}
                      <motion.button
                        className={`${styles.button} mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        Ver más
                      </motion.button>
                    </div>
                    {/* Imagen animada */}
                    <motion.div
                      className={`${styles.imageWrapper} flex-1 rounded-lg overflow-hidden`}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={servicio.imagen}
                        alt={servicio.titulo}
                        width={400}
                        height={300}
                        className="w-full h-auto object-cover"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreServicios;
