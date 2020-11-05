import React, { useContext, useEffect } from "react";
import { useImmerReducer } from "use-immer";
import DispatchContext from "../DispatchContext";

// Boostrap Components
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// Third party Components
import Axios from "axios";

function Register(props) {
  const appDispatch = useContext(DispatchContext);

  const initialState = {
    username: {
      value: "",
    },
    password: {
      value: "",
    },
    isLoggingIn: false,
    isRegistering: false,
  };

  function useReducer(draft, action) {
    switch (action.type) {
      case "Login":
        draft.isLoggingIn = true;
        return;
      case "Register":
        draft.isRegistering = action.value;
        return;
      case "updateUsername":
        draft.username.value = action.value;
        return;
      case "updatePassword":
        draft.password.value = action.value;
        return;
    }
  }

  const [state, dispatch] = useImmerReducer(useReducer, initialState);

  useEffect(() => {
    console.log(state.username.value);
    console.log(state.password.value);
    dispatch({ type: props.type, value: false });
  }, [state.isRegistering]);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: props.type, value: true });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Username"
          onChange={(e) =>
            dispatch({ type: "updateUsername", value: e.target.value })
          }
        />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={(e) =>
            dispatch({ type: "updatePassword", value: e.target.value })
          }
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        {props.type}
      </Button>
    </Form>
  );
}

export default Register;
