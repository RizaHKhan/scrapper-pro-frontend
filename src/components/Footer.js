import React from "react";

// Bootstrap Components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"

function Footer() {
  return (
    <Container className="border-top p-4">
      <Row>
        <Col className="bg-dark">1</Col>
        <Col className="bg-light">2</Col>
      </Row>
    </Container>
  );
}

export default Footer;
