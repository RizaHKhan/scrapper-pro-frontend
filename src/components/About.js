import React from "react";

// Bootstrap Components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function About() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h4 className="text-white text-light">About Page</h4>
            <p className="text-white">lorem ipsum</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About;
