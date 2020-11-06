import React from "react";

// Bootstrap Component
import Spinner from "react-bootstrap/Spinner";

function LoadingIcon() {
  return (
    <Spinner animate="border" role="status">
      <span className="sr-only"></span>
    </Spinner>
  );
}

export default LoadingIcon;
