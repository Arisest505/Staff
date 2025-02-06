"use client";
import styles from "@/styles/Blog.module.css"; // Importar CSS Module
import { useEffect, useState } from "react";
import VanillaTilt from "vanilla-tilt";
import { Sparkles, Globe, Megaphone } from "lucide-react"; // Importar iconos minimalistas

const blogPosts = [
  {
    title: "Cómo la Publicidad Creativa Puede Impulsar tu Marca",
    tags: ["#Publicidad", "#Creatividad", "#Branding", "#Marketing"],
    author: "Arise",
    date: "21 de agosto de 2024",
    icon: <Sparkles size={40} />,
    link: "#",
  },
  {
    title: "Estrategias de Marketing Digital para Aumentar tu Presencia en Línea",
    tags: ["#Marketing Digital", "#SEO", "#Redes Sociales", "#Publicidad"],
    author: "Arise",
    date: "17 de agosto de 2024",
    icon: <Globe size={40} />,
    link: "#",
  },
  {
    title: "Beneficios de los Paneles Publicitarios",
    tags: ["#Publicidad Exterior", "#Marketing", "#Paneles Publicitarios"],
    author: "Arise",
    date: "29 de agosto de 2023",
    icon: <Megaphone size={40} />,
    link: "#",
  },
];

const Blog = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const tiltElements = Array.from(document.querySelectorAll(".js-tilt")) as HTMLElement[];
    if (tiltElements.length > 0) {
      VanillaTilt.init(tiltElements, {
        glare: true,
        "max-glare": 0.5,
      });
    }
  }, []);

  if (!isClient) return null; // 🔹 Solución para evitar errores en SSR

  return (
    <section id="blog" className={styles.blogSection}>
      <h2 className={styles.title}>BLOG</h2>
      <p className={styles.subtitle}>
        Lee las últimas noticias y actualizaciones sobre el diseño web y personalización de páginas estáticas.
      </p>
      <div className={styles.grid}>
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className={`${styles.blogCard} js-tilt`}
            data-tilt
            data-tilt-glare
            data-tilt-max-glare="0.5"
          >
            <div className={styles.icon}>{post.icon}</div>
            <div className={styles.blogContent}>
              <div className={styles.tags}>
                {post.tags.map((tag, idx) => (
                  <span key={idx} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className={styles.blogTitle}>{post.title}</h3>
              <p className={styles.blogMeta}>
                {post.author} <span className={styles.date}>{post.date}</span>
              </p>
              <a href={post.link} className={styles.readMore}>
                Leer más &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.buttonContainer}>
        <a href="#" className={styles.btnPrimary}>
          Ver más artículos
        </a>
      </div>
    </section>
  );
};

export default Blog;
