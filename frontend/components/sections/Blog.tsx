"use client";
import styles from "@/styles/Blog.module.css"; // Importar CSS Module
import { useEffect, useState } from "react";
import VanillaTilt from "vanilla-tilt";
import { Sparkles, Globe, Megaphone } from "lucide-react"; // Importar iconos minimalistas

const blogPosts = [
  {
    title: "Cómo Mejorar tu Diseño",
    tags: ["#Personalizaciòn", "#Creatividad", "#Shared", "#Marketing"],
    author: "Arise",
    date: "05 de febrero de 2025",
    icon: <Sparkles size={40} />,
    link: "#",
  },
  {
    title: "Parche 0.01",
    tags: ["#Mejora", "#SEO", "#Vista", "#Experiencia"],
    author: "Arise",
    date: "03 de febrero de 2025",
    icon: <Globe size={40} />,
    link: "#",
  },
  {
    title: "Beneficios del Servicio",
    tags: ["#Ayuda Especializada", "#Diseños", "#Personalizacion"],
    author: "Arise",
    date: "05 de febrero de 2025",
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
