import React, { useEffect, useContext, useState } from "react";
import StateContext from "../StateContext";

// Bootstrap Component
import Container from "react-bootstrap/Container";

// Components
import ListItem from "./ListItem";

// Import 3rd part components
import Axios from "axios";

function Scripts(props) {
  const appState = useContext(StateContext);

  return (
    <Container className="py-4 px-0 text-white">
      {props.scripts.map((script) => {
        return (
          <ListItem
            title={script.title}
            id={script._id}
            description={script.description}
            inputs={script.inputs}
            key={script._id}
          />
        );
      })}
    </Container>
  );
}

export default Scripts;
