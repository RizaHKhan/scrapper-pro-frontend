import React from "react";

// Components
import Header from "../components/Header";
import Footer from "../components/Footer";

// Bootstrap Components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Dashboard() {
  return (
    <Container className="d-flex flex-column justify-content-between h-100">
      <Header />
      <Row className="h-100">
        <Col>
          <h1 className="text-white">Hello World!</h1>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
}

export default Dashboard;
