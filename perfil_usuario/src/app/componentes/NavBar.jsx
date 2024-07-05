"use client";
import styles from "./NavBar.module.css";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const NavBar = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: "10px",
      duration: 2500,
      reset: true,
    });

    sr.reveal(".header", { delay: 300, origin: "top" });
  }, []);

  return (
    <div className={styles.header}>
      <a href="/" className={styles.navLink}>Inicio</a>
      <a href="interests" className={styles.navLink}>Intereses</a>
      <a href="contactform" className={styles.navLink}>Contacto</a>
    </div>
  );
};

export default NavBar;
