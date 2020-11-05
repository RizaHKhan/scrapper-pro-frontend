import React from "react";

// Components
import Header from "../components/Header";

// Bootstrap Components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function Dashboard() {
  return (
    <Container>
      <Header />
      <h1>Dashboard</h1>
    </Container>
  );
}

export default Dashboard;
