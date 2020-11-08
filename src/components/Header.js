import React, {useContext} from "react";
import DispatchContext from '../DispatchContext'
import StateContext from '../StateContext'

// Bootstrap Components
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

function Header() {
  const appState = useContext(StateContext)
  const appDispatch = useContext(DispatchContext)

  function handleClick() {
    appDispatch({type: 'logout'})
  }

  return (
    <Navbar className="border-bottom" collapseOnSelect expand="lg" variant="dark">
      <Navbar.Brand className="text-white">Scrapper Pro</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
        <Nav.Link className="text-white">Contact</Nav.Link>
        <Nav.Link className="text-white" onClick={handleClick}>Logout</Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
