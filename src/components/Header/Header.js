import React from "react";
import styles from "./Header.module.css";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar className={styles.Header} bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand>QDE Guidelines</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Qué es esto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

// Header.propTypes = {};

// Header.defaultProps = {};

export default Header;
