"use client";
import { Dispatch, SetStateAction, useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import styles from "@/styles/Login/NavBarLog.module.css";

interface NavBarLogProps {
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}

const menuItems = [{ name: "Preview", link: "/Preview" }];

const NavBarLog: React.FC<NavBarLogProps> = ({ setIsLoggedIn }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //  Nueva Función para Logout usando Cookies y actualizando estado global
  const handleLogout = async () => {
    try {
      await fetch("http://localhost:5000/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });
  
      setIsLoggedIn(false);
      router.push("/login");
      window.location.reload();
    } catch (error) {
      console.error(" Error al cerrar sesión:", error);
    }
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
