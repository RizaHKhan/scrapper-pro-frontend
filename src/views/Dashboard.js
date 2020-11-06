import React from "react";

// Components
import Header from "../components/Header";
import Footer from "../components/Footer";
import Scripts from "../components/Scripts";
import Users from "../components/Users";

// Bootstrap Components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

function Dashboard() {
  return (
    <Container className="d-flex flex-column justify-content-between h-100">
      <Header />
      <Row className="h-100 mt-4">
        <Col>
          <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="scripts" title="Scripts">
              <Scripts />
            </Tab>
            <Tab eventKey="users" title="Users">
              <Users />
            </Tab>
          </Tabs>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
}

export default Dashboard;
