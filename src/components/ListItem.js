import React from "react";

// Bootstrap Component
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";

function ListItem() {
  return (
    <ListGroup.Item className="bg-dark border-bottom">
      <p className="mb-0">Amazong Scrapper</p>
      <p className="text-muted">ID: 12342134124</p>
      <button className="btn btn-primary btn-sm mr-1">Run</button>
      <button className="btn btn-warning btn-sm mr-1">Remove</button>
      <button className="btn btn-danger btn-sm mr-1">Delete</button>
    </ListGroup.Item>
  );
}

export default ListItem;
