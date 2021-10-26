import React from "react";
import styles from "./Header.module.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar className={styles.Header} bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          CaliLíneas <span className="text-muted fs-6">(beta)</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/saber-mas" as={Link}>
              Saber más
            </Nav.Link>
            <Nav.Link to="/la-autora" as={Link}>
              La autora
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

// Header.propTypes = {};

// Header.defaultProps = {};

export default Header;
