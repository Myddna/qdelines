import React from "react";
import styles from "./Header.module.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

const Header = () => {
  const { t } = useTranslation();
  return (
    <Navbar className={`${styles.Header} main-nav`} bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          CaliLíneas <span className="text-muted fs-6">(beta)</span>
        </Navbar.Brand>
        <div className="navigation">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link to="/saber-mas" as={Link}>
                {t("page.knowmore.title")}
              </Nav.Link>
              <Nav.Link
                href="https://martam.dev/"
                target="_blank"
                rel="noreferrer"
              >
                {t("page.author.title")}
              </Nav.Link>
              <LanguageSwitcher />
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
