"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import styles from "@/styles/Login/NavBarLog.module.css"; // Archivo CSS específico para esta barra

// 🔹 Agregamos Preview a las opciones del menú
const menuItems = [
  { name: "Inicio", link: "/" },
  { name: "Preview", link: "/Preview" }, // Ahora aparece en la navbar
];

const NavBarLog: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Función de Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    console.log("Sesión cerrada"); // Depuración

    // 🔹 Forzar actualización de estado en AppLayout
    setTimeout(() => {
      window.dispatchEvent(new Event("storage"));
    }, 100);

    router.push("/Login");
  };

  return (
    <header className={`${styles.navbar} ${isScrolled ? styles.scrolled : styles.default}`}>
      <div className={styles.navContainer}>
        {/* Logo */}
        <div>
          <Link href="/">
            <Image src="/logo.svg" alt="Noir.02" width={140} height={50} priority className={styles.logo} />
          </Link>
        </div>

        {/* Menú en pantallas grandes */}
        <nav className={styles.desktopMenu}>
          {menuItems.map((item, index) => (
            <div key={index}>
              <Link href={item.link} className={styles.menuItem}>
                {item.name}
                <div className={styles.underline}></div>
              </Link>
            </div>
          ))}
          {/* Botón de Logout */}
          <button onClick={handleLogout} className={styles.logoutButton}>
            Logout
          </button>
        </nav>

        {/* Menú Hamburguesa en móviles */}
        <div className={styles.mobileMenuIcon}>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={styles.menuToggle}>
            {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Menú Móvil */}
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          {menuItems.map((item, index) => (
            <div key={index}>
              <Link href={item.link} className={styles.mobileMenuItem} onClick={() => setIsMenuOpen(false)}>
                {item.name}
                <div className={styles.underline}></div>
              </Link>
            </div>
          ))}
          {/* Botón de Logout en el menú móvil */}
          <button onClick={handleLogout} className={styles.logoutButtonMobile}>
            Logout
          </button>
        </div>
      )}
    </header>
  );
};

export default NavBarLog;
