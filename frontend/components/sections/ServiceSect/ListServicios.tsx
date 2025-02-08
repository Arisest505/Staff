"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "@/styles/ListaServicios.module.css";

const ListaServicios = () => {
  const servicios = [
    {
      titulo: "Paneles y Vallas",
      tituloColor: ["text-blue-600", "text-black"],
      descripcion: "Diseños de alta calidad para captar la atención de tu público objetivo.",
      puntos: ["Alta calidad", "Durabilidad", "Diseño personalizado"],
      imagen: "/es.png",
    },
    {
      titulo: "Desarrollo de software",
      tituloColor: ["text-black", "text-blue-600"],
      descripcion: "Soluciones a medida para optimizar tus procesos y potenciar tu negocio.",
      puntos: ["Experiencia especializada", "Intuitive Dashboards", "Tecnologías de vanguardia"],
      imagen: "/es.png",
    },
    {
      titulo: "Marketing Digital",
      tituloColor: ["text-blue-600", "text-black"],
      descripcion: "Estrategias integrales para aumentar tu alcance y presencia en línea.",
      puntos: ["SEO", "Publicidad", "Gestión de redes sociales"],
      imagen: "/es.png",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-16 space-y-16">
      {servicios.map((servicio, index) => (
        <motion.div
          key={index}
          className={`${styles.card} flex flex-col md:flex-row items-center gap-6 p-6 bg-white rounded-lg shadow-lg ${
            index % 2 === 0 ? "md:flex-row-reverse" : ""
          }`}
          initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Imagen */}
          <motion.div
            className={`${styles.imageWrapper} flex-1`}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={servicio.imagen}
              alt={servicio.titulo}
              width={500}
              height={350}
              className="rounded-lg object-cover"
            />
          </motion.div>

          {/* Texto */}
          <div className="flex-1 space-y-4">
            <h3 className="text-2xl font-bold">
              <span className={servicio.tituloColor[0]}>{servicio.titulo.split(" ")[0]}</span>{" "}
              <span className={servicio.tituloColor[1]}>{servicio.titulo.split(" ")[1]}</span>{" "}
              <span className={servicio.tituloColor[2]}>{servicio.titulo.split(" ")[2]}</span>
            </h3>
            <p className="text-gray-600">{servicio.descripcion}</p>
            <ul className="list-disc ml-6 text-gray-600 space-y-2">
              {servicio.puntos.map((detalle, i) => (
                <li key={i}>{detalle}</li>
              ))}
            </ul>
            <motion.button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Ver más
            </motion.button>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ListaServicios;