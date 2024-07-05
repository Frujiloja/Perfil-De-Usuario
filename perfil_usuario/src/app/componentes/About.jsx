"use client";
import styles from "./About.module.css";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const About = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: "10px",
      duration: 2500,
      reset: true,
    });

    sr.reveal(".Acerca", { delay: 300, origin: "right" });
  }, []);

  return (
    <div className={styles.about}>
      <h1 className="Acerca" style={{ fontSize: "4.5vh" }} >Acerca de mi.</h1>
      <p className="Acerca" >
      Soy un apasionado programador con un estilo de vida activo. Cuando no estoy inmerso en el mundo del código, me encontrarás en el gimnasio esforzándome por superar mis límites físicos o en la cancha de fútbol disfrutando de un buen partido. Combino mi amor por la tecnología con una vida saludable y activa, buscando siempre el equilibrio entre el trabajo y el juego.
      </p>
      <div className="Acerca">
        <img className={styles.signature} src="/erik.png" alt="signature" />
      </div>
    </div>
  );
};

export default About;
