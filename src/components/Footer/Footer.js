import React from "react";
import { FaGithub } from "react-icons/fa";
import styles from "./Footer.module.css";
import { Button } from "react-bootstrap";

const Footer = () => (
  <div className={`${styles.Footer} main-footer`}>
    <Button
      href="https://github.com/Myddna/qdelines"
      target="_blank"
      rel="noreferrer"
      variant="outline-primary"
    >
      <FaGithub size="1.2em" /> Fork me on GitHub
    </Button>
  </div>
);

export default Footer;
