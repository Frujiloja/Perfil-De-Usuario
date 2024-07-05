"use client";
import React, { useEffect } from 'react';
import styles from './page.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol, faDumbbell, faDog, faDesktop, faBook, faPlane, faHeadphones } from '@fortawesome/free-solid-svg-icons';
import ScrollReveal from 'scrollreveal';

const Interests = () => {

  useEffect(() => {
    const sr = ScrollReveal({
      distance: "10px",
      duration: 2500,
      reset: true,
    });

    sr.reveal(".interests", { delay: 300, origin: "left" });
  }, []);

  return (
    <div className={styles.interests}>
      <div className={styles.interestscontainer}>
      <h1 className='interests' style={{fontSize:'6vh'}}>Mis Intereses.</h1>
      <p className='interests' style={{ marginBottom: "5vh"}}>
        Soy un apasionado programador con una profunda fascinación por la tecnología. Desde una temprana edad, me he sentido atraído por el mundo de la programación y la innovación tecnológica. Me encanta explorar nuevas herramientas y lenguajes de programación, siempre buscando formas de mejorar y optimizar mi trabajo.
        Fuera del ámbito profesional, soy un entusiasta del fútbol, disfrutando tanto de jugar como de seguir los partidos de mis equipos favoritos. El deporte me ayuda a mantenerme activo y a liberar el estrés del día a día. Además, soy un asiduo del gimnasio, donde encuentro un espacio para mantenerme en forma y cuidar de mi salud física.
      </p>
      <div className={styles.iconContainer}>
        <div className={`${styles.iconItem} interests`}>
          <FontAwesomeIcon icon={faFutbol} className={styles.icon} />
          <span>Fútbol</span>
        </div>
        <div className={`${styles.iconItem} interests`}>
          <FontAwesomeIcon icon={faDumbbell} className={styles.icon} />
          <span>Gimnasio</span>
        </div>
        <div className={`${styles.iconItem} interests`}>
          <FontAwesomeIcon icon={faDog} className={styles.icon} />
          <span>Mascotas</span>
        </div>
        <div className={`${styles.iconItem} interests`}>
          <FontAwesomeIcon icon={faDesktop} className={styles.icon} />
          <span>Tecnología</span>
        </div>
        <div className={`${styles.iconItem} interests`}>
          <FontAwesomeIcon icon={faBook} className={styles.icon} />
          <span>Lectura</span>
        </div>
        <div className={`${styles.iconItem} interests`}>
          <FontAwesomeIcon icon={faPlane} className={styles.icon} />
          <span>Viajes</span>
        </div>
        <div className={`${styles.iconItem} interests`}>
          <FontAwesomeIcon icon={faHeadphones} className={styles.icon} />
          <span>Música</span>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Interests;
