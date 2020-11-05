import React from "react";

// Boostrap Components
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Register(props) {
  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter Username" />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        {props.type}
      </Button>
    </Form>
  );
}

export default Register;
