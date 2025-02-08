import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "@/styles/InformationBlog.module.css";

const InformationBlog: React.FC = () => {
  const blogs = [
    {
      image: "/es.png",
      title: "Cómo la Publicidad Creativa Puede Impulsar tu Marca",
      tags: ["Publicidad", "Creatividad", "Branding", "Marketing"],
      author: "Arise",
      date: "21 de agosto de 2024",
    },
    {
      image: "/es.png",
      title: "Estrategias de Marketing Digital para Aumentar tu Presencia en Línea",
      tags: ["Marketing Digital", "SEO", "Redes Sociales", "Publicidad"],
      author: "Arise",
      date: "17 de agosto de 2024",
    },
    {
      image: "/es.png",
      title: "Beneficios de los Paneles Publicitarios",
      tags: ["Publicidad Exterior", "Marketing", "Paneles Publicitarios"],
      author: "Arise",
      date: "29 de agosto de 2023",
    },
    {
      image: "/es.png",
      title: "Tendencias de Diseño para Campañas Publicitarias",
      tags: ["Diseño", "Creatividad", "Marketing"],
      author: "Arise",
      date: "12 de agosto de 2024",
    },
    {
      image: "/es.png",
      title: "Cómo Optimizar tu Estrategia de Contenidos",
      tags: ["Contenido", "Estrategia", "SEO"],
      author: "Arise",
      date: "15 de agosto de 2024",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.informationBlog}>
      <Slider {...settings}>
        {blogs.map((blog, index) => (
          <div key={index} className={styles.blogCard}>
            <div className={styles.blogCardContent}>
              <img src={blog.image} alt={blog.title} className={styles.blogImage} />
              <h2 className={styles.blogTitle}>{blog.title}</h2>
              <p className={styles.blogAuthor}>{blog.author}</p>
              <p className={styles.blogDate}>{blog.date}</p>
              <div className={styles.blogTags}>
                {blog.tags.map((tag, idx) => (
                  <span key={idx} className={styles.blogTag}>#{tag}</span>
                ))}
              </div>
              <a href="#" className={styles.blogReadMore}>Leer más</a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default InformationBlog;
