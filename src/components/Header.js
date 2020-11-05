import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Header() {
  return (
    <Navbar bg="light">
      <Navbar.Brand>Scrapper Pro</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link to="/">Home</Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
