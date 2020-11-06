import React from "react";

// Bootstrap Component
import Spinner from "react-bootstrap/Spinner";

function LoadingIcon() {
  return (
    <div className="spinner-container">
      <Spinner animation="border" role="status" variant="light">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
}

export default LoadingIcon;
