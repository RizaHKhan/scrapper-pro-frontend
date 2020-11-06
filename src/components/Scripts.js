import React from "react";

// Bootstrap Component
import Container from "react-bootstrap/Container";

// Components
import ListItem from './ListItem'

function Scripts() {
  return (
    <Container className="p-4 text-white">
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
    </Container>
  );
}

export default Scripts;
