import React, { useContext } from "react";
import StateContext from "../StateContext";

// Bootstrap Component
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// Component
import ListGroup from "react-bootstrap/ListGroup";

function ListItem(props) {
  const appState = useContext(StateContext);

  return (
    <ListGroup.Item className="bg-dark border-bottom">
      <p className="mb-0 lead">{props.title}</p>
      <p className="text-muted">{props.id}</p>
      <p>{props.description}</p>
      <Row>
        <Col lg={4} md={6} sm={12}>
          {props.inputs
            ? props.inputs.map((input) => {
                return (
                  <Form>
                    <Form.Group>
                      <Form.Label className="text-muted text-uppercase">
                        {input}
                      </Form.Label>
                      <Form.Control
                        className="text-uppercase"
                        type="text"
                        placeholder={input}
                      />
                    </Form.Group>
                  </Form>
                );
              })
            : ""}
        </Col>
      </Row>
      <Button className="btn-primary btn-sm mr-1">Run</Button>
      {appState.user.admin ? (
        <>
          <Button className="btn-warning btn-sm mr-1">Remove</Button>
          <Button className="btn-danger btn-sm mr-1">Delete</Button>
        </>
      ) : (
        ""
      )}
    </ListGroup.Item>
  );
}

export default ListItem;
