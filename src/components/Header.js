import React, { useContext } from "react";
import { Link } from "react-router-dom";

// Components
import DispatchContext from "../DispatchContext";
import StateContext from "../StateContext";

// Bootstrap Components
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Header() {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);

  function handleClick() {
    appDispatch({ type: "logout" });
  }

  return (
    <Navbar
      className="border-bottom px-0"
      collapseOnSelect
      expand="lg"
      variant="dark"
    >
      <Navbar.Brand className="text-white">
        <Link to="/">Scrapper Pro</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        className="justify-content-end p-0"
        id="responsive-navbar-nav"
      >
        <Link to="/contact" className="nav-link p-0 ml-2">
          Contact
        </Link>
        <Nav.Link className="text-white p-0 ml-2" onClick={handleClick}>
          Logout
        </Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
