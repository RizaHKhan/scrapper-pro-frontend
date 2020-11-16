import React, { useContext, useEffect, useReducer } from "react";
import DispatchContext from "../DispatchContext";

// Boostrap Components
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// Third party Components
import Axios from "axios";

const ACTIONS = {
  UPDATE_USERNAME: "update-username",
  UPDATE_PASSWORD: "update-password",
  REQUEST: "request",
};

const initialState = {
  username: "",
  password: "",
  requestInFlight: false,
};

function reducer(draft, { type, value }) {
  switch (type) {
    case ACTIONS.UPDATE_USERNAME:
      return { ...draft, username: value };
    case ACTIONS.UPDATE_PASSWORD:
      return { ...draft, password: value };
    case ACTIONS.REQUEST:
      return { ...draft, requestInFlight: value };
    default:
      return draft;
  }
}

function FormComponent({ type }) {
  const appDispatch = useContext(DispatchContext);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (!state.requestInFlight) return;
    dispatch({ type: ACTIONS.REQUEST, value: true });
    const ourRequest = Axios.CancelToken.source();
    async function sendRequest() {
      try {
        const response = await Axios.post(`/api/${type}`, {
          username: state.username,
          password: state.password,
        });
        console.log(response);
        appDispatch({ type: "login", value: response.data });
        dispatch({ type: ACTIONS.REQUEST, value: false });
      } catch (e) {
        console.log(e);

        appDispatch({
          type: "flashMessage",
          value: "Unable to verify session state, please login again.",
        });
        dispatch({ type: ACTIONS.REQUEST, value: false });
      }
    }
    sendRequest();
    return () => ourRequest.cancel();
  }, [state.requestInFlight]);

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: ACTIONS.REQUEST, value: true });
      }}
    >
      <Form.Group controlId="formBasicEmail">
        <Form.Label className="text-muted">Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Username"
          onChange={(e) =>
            dispatch({ type: ACTIONS.UPDATE_USERNAME, value: e.target.value })
          }
        />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label className="text-muted">Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={(e) =>
            dispatch({ type: ACTIONS.UPDATE_PASSWORD, value: e.target.value })
          }
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        {type}
      </Button>
    </Form>
  );
}

export default FormComponent;
