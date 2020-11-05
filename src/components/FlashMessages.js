import React, { useEffect, useState } from "react";

// Bootstrap Components
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

function FlashMessages(props) {
  const [show, setShow] = useState(true);

  return (
    <Alert variant="success">
      <Alert.Heading>{props.message}</Alert.Heading>
    </Alert>
  );
}

export default FlashMessages;
