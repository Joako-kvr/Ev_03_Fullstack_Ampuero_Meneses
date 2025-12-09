import React from 'react';
import { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';


function NavbarHelioAndes() {
  const [expanded, setExpanded] = useState(false);

  const handleNavClick = () => setExpanded(false);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      bg="light"
      data-bs-theme="light"
      expanded={expanded}
      onToggle={setExpanded}
      className="shadow-sm border-bottom"
    >
      <Container>
      
       <Navbar.Brand href="#inicio" className="fw-bold d-flex align-items-center">
  <img
    src="/assets/images/logoAndes.png"
    alt="HelioAndes Logo"
    height="36"
    className="me-2"
  />
  HelioAndes
</Navbar.Brand>
       
        <Navbar.Toggle aria-controls="helioandes-navbar" />
     
        <Navbar.Collapse id="helioandes-navbar">
          <Nav className="mx-auto gap-lg-3" onSelect={handleNavClick}>
            <Nav.Link href="#hero">Inicio</Nav.Link>
            <Nav.Link href="#servicios">Servicios</Nav.Link>
            <Nav.Link href="#soluciones">Soluciones</Nav.Link>
            <Nav.Link href="#demo-calculadora">DEMO</Nav.Link>
            <Nav.Link href="#planes">Planes</Nav.Link>
            <Nav.Link href="#testimonios">Testimonios</Nav.Link>
            <Nav.Link href="#faq">FAQ</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarHelioAndes;
