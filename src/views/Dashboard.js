import React, { useContext, useState, useEffect } from "react";
import StateContext from "../StateContext";

// Components
import Header from "../components/Header";
import Footer from "../components/Footer";
import Scripts from "../components/Scripts";
import Users from "../components/Users";

// Bootstrap Components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

// 3rd party components
import Axios from "axios";

function Dashboard() {
  const appState = useContext(StateContext);
  const [tab, setTab] = useState("scripts");
  const [data, setData] = useState([]);

  useEffect(() => {
    const ourRequest = Axios.CancelToken.source();
    async function getData() {
      try {
        const response = await Axios.get(`/api/all-${tab}`, {
          headers: {
            Authorization: `Bearer ${appState.user.token}`,
          },
        });
        console.log(response.data);
        setData(response.data);
      } catch (e) {
        console.log("unexpected error", e);
      }
    }
    getData();
    return () => ourRequest.cancel();
  }, [tab]);

  return (
    <Container className="h-100">
      <Header />
      {appState.user.admin ? (
        <Row className="py-4">
          <Col>
            {tab === "scripts" ? (
              <Button
                className="btn-primary mr-1"
                onClick={() => setTab("users")}
              >
                Users
              </Button>
            ) : (
              <Button
                className="btn-primary mr-1"
                onClick={() => setTab("scripts")}
              >
                Scripts
              </Button>
            )}
          </Col>
        </Row>
      ) : (
        ""
      )}
      <Row className="h-100 mt-4">
        <Col>
          {tab === "scripts" ? (
            <Scripts scripts={data} />
          ) : (
            <Users users={data} />
          )}
        </Col>
      </Row>
      <Footer />
    </Container>
  );
}

export default Dashboard;
