import React from "react";
import { Container } from "react-bootstrap";
import styles from "./SaberMas.module.css";

const SaberMas = () => (
  <div className={styles.SaberMas}>
    <Container className="my-3">
      <h1 className="mb-4">¿Qué es esta Web App?</h1>
      <h2>Calilíneas, generador de guías para caligrafía</h2>
      <p>
        <strong>CaliLíneas</strong> es una aplicación web desarrollada en{" "}
        <a href="https://es.reactjs.org/" target="_blank" rel="noreferrer">
          React
        </a>{" "}
        para facilitar la creación de guías (o pautas) de caligrafía.
      </p>
      <p>
        CaliLíneas permite genera guías para utilizar directamente o bajo otro
        papel, y se pueden ajustar los valores para adaptarse a distintos tipos
        de escritura.
      </p>
      <div className="highlighted-block">
        <p>
          <strong>Ejemplo:</strong>
        </p>
        <p>
          Si necesitas una guía para letra Carolina, con un ancho de plumilla de
          2mm y un ratio 3-4-3, como la aplicación toma milímetros, puedes
          configurarla con las siguientes distancias:
        </p>
        <ul>
          <li>
            Línea media: 2 * 4 = <strong>8</strong>{" "}
            <span className="text-muted">
              (2 es el ancho de la plumilla y 4 el ratio elegido)
            </span>
          </li>
          <li>
            Ascendentes y descendentes: 2 * 3 = <strong>6</strong>
          </li>
          <li>El resto de valores, como nos convenga en cada caso.</li>
        </ul>
      </div>
      <p>
        Las líneas pueden desactivarse poniendo su grosor o su distancia a 0.
      </p>
      <h2>¿Se pueden crear guías para lettering?</h2>
      <p>
        Sí! Lo que de momento no puedo generar son <em>layouts</em> pero, si te
        manejas con un programa de dibujo vectorial como Inkscape, Affinity
        Designer o Adobe Illustrator puedes abrir el PDF de las guías y montar
        el <em>layout</em> de tu composición con las guías generadas con
        CaliLíneas como piezas.
      </p>
      <h2>Quiero aprender caligrafía o lettering. ¿Cómo lo hago?</h2>
      <p>
        En internet tienes multitud de cursillos, vídeos y libros que puedes
        adquirir, aunque no hay nada como apuntarte a un taller del estilo que
        te interese en vivo y en directo.
      </p>
      <p>¡Seguro que te cruzas con alguno en tu ciudad!</p>
      <h2>Y ahora... ¿Qué demonios escribo?</h2>
      <p>
        Encuentra{" "}
        <a
          href="https://quedemoniosescribo.art"
          target="_blank"
          rel="noreferrer"
        >
          aquí
        </a>{" "}
        la respuesta.
      </p>
    </Container>
  </div>
);

export default SaberMas;
