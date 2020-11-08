import React, { useEffect, useState } from "react";

// Bootstrap Component
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// Component
import ListGroup from "react-bootstrap/ListGroup";

function ListItem(props) {
  const [script, setScript] = useState(props.script);

  return (
    <ListGroup.Item className="bg-dark border-bottom">
      <pre>{script}</pre>
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
                      <Form.Label className="text-muted text-uppercase">{input}</Form.Label>
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
      <button className="btn btn-primary btn-sm mr-1">Run</button>
      <button className="btn btn-warning btn-sm mr-1">Remove</button>
      <button className="btn btn-danger btn-sm mr-1">Delete</button>
    </ListGroup.Item>
  );
}

export default ListItem;
