import React from "react";

// Bootstrap Components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

// Components
import Form from "../components/Form";

function LandingPage() {
  return (
    <Container className="text-white h-100 d-flex flex-column justify-content-between my-auto">
      <Row className="mb-4">
        <h1 className="display-1 mx-auto">Scrapper-Pro</h1>
      </Row>
      <Row className="my-auto">
        <Col md={12} lg={6}>
          <p className="display-4">Your data just a click away</p>
          <p className="lead">
            At <strong className="text-danger">Scrapper-Pro</strong> we take
            pride in building fast running, efficient scrapping scripts that
            allow the user to get the information when they want, where they
            want.
          </p>
          <hr />
          <p className="lead">
            Feel free to contact us and request a script. We would love to build
            you a tool that will make your job easier.
          </p>
        </Col>
        <Col lg={2}></Col>
        <Col md={12} lg={4} className="p-4 rounded border bg-light">
          <Tabs defaultActiveKey="login">
            <Tab eventKey="login" title="Login">
              <Form type={"Login"} />
            </Tab>
            <Tab eventKey="register" title="Register">
              <Form type={"Register"} />
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
}

export default LandingPage;
