import React from 'react';
import styles from './page.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol, faDumbbell, faDog, faDesktop } from '@fortawesome/free-solid-svg-icons';

const Interests = () => {
  return (
    <div className={styles.interests}>
      <h1>Mis Intereses</h1>
      <p>Soy un apasionado programador con una profunda fascinación por la tecnología. Desde una temprana edad, me he sentido atraído por el mundo de la programación y la innovación tecnológica. Me encanta explorar nuevas herramientas y lenguajes de programación, siempre buscando formas de mejorar y optimizar mi trabajo.
      Fuera del ámbito profesional, soy un entusiasta del fútbol, disfrutando tanto de jugar como de seguir los partidos de mis equipos favoritos. El deporte me ayuda a mantenerme activo y a liberar el estrés del día a día. Además, soy un asiduo del gimnasio, donde encuentro un espacio para mantenerme en forma y cuidar de mi salud física.
      </p>
      <div className={styles.iconContainer}>
        <FontAwesomeIcon icon={faFutbol} className={styles.icon} />
        <FontAwesomeIcon icon={faDumbbell} className={styles.icon} />
        <FontAwesomeIcon icon={faDog} className={styles.icon} />
        <FontAwesomeIcon icon={faDesktop} className={styles.icon} />
      </div>
    </div>
  );
};

export default Interests;