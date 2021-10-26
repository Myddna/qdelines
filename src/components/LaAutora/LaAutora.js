import React from "react";
import { Container, ButtonGroup, Button } from "react-bootstrap";
import styles from "./LaAutora.module.css";
import {
  FaBlog,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const LaAutora = () => (
  <div className={styles.LaAutora}>
    <Container className="my-3">
      <h1 className="mb-4">Hola, soy Marta 🙋‍♀️</h1>
      <p>
        Soy una desarrolladora web que, tras muchos años trabajando en
        arquitecturas{" "}
        <a
          href="https://es.wikipedia.org/wiki/LAMP"
          target="_blank"
          rel="noreferrer"
        >
          LAMP
        </a>{" "}
        me estoy reorientando hacia el desarrollo en arquitectura{" "}
        <a
          href="https://en.wikipedia.org/wiki/Jamstack"
          target="_blank"
          rel="noreferrer"
        >
          Jamstack
        </a>{" "}
        .
      </p>
      <p>
        El objetivo de este proyecto es tener una toma de contacto con{" "}
        <a href="https://es.reactjs.org/" target="_blank" rel="noreferrer">
          React
        </a>{" "}
        en un entorno controlado y en un proyecto donde pongo yo las reglas (o
        bueno, en este caso, la escritura caligráfica 🤣).
      </p>
      <p>
        Aparte de aprender tecnologías nuevas, me gusta aprender sobre temas más
        manuales como este de la{" "}
        <a
          href="https://dispersion.es/la-caligrafia-y-yo-5-anos-desde-las-v-jornadas-calotipo-campestres/"
          target="_blank"
          rel="noreferrer"
        >
          caligrafía
        </a>
        , pintura (acuarela, gouache), flores de papel, creación de sellos de
        goma, cuidado de plantas tropicales, y... básicamente lo que se me ponga
        por delante.{" "}
      </p>
      <p>Puedes saber más sobre mí en: </p>
      <ButtonGroup aria-label="Mis enlaces" className="mb-3">
        <Button
          href="https://twitter.com/myddna"
          variant="outline-secondary"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter /> Twitter
        </Button>
        <Button
          href="https://instagram.com/myddna"
          variant="outline-secondary"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram /> Instagram
        </Button>
        <Button
          href="https://github.com/Myddna"
          variant="outline-secondary"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub /> GitHub
        </Button>
        <Button
          href="https://www.linkedin.com/in/marta-moros-batlle/"
          variant="outline-secondary"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin /> LinkedIn
        </Button>
      </ButtonGroup>
      <p>Además, tengo un par de blogs:</p>
      <ButtonGroup aria-label="Blogs" className="mb-3">
        <Button
          href="https://dispersion.es"
          variant="outline-secondary"
          target="_blank"
          rel="noreferrer"
        >
          <FaBlog /> Blog personal
        </Button>
        <Button
          href="https://desvania.es"
          variant="outline-secondary"
          target="_blank"
          rel="noreferrer"
        >
          <FaBlog /> Blog colaborativo de recetas
        </Button>
      </ButtonGroup>
    </Container>
  </div>
);

export default LaAutora;
