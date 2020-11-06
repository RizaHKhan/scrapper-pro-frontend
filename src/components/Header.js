import React, {useContext} from "react";
import DispatchContext from '../DispatchContext'

// Bootstrap Components
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

function Header() {
  const appDispatch = useContext(DispatchContext)

  function handleClick() {
    appDispatch({type: 'logout'})
  }

  return (
    <Navbar className="border-bottom">
      <Navbar.Brand className="text-white">Scrapper Pro</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
        <Nav.Link className="text-white" to="/">Home</Nav.Link>
        <Nav.Link className="text-white" onClick={handleClick}>Logout</Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
