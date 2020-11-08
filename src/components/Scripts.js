import React, { useEffect, useContext, useState } from "react";
import StateContext from "../StateContext";

// Bootstrap Component
import Container from "react-bootstrap/Container";

// Components
import ListItem from "./ListItem";

// Import 3rd part components
import Axios from "axios";

function Scripts() {
  const [scripts, setScripts] = useState([]);
  const appState = useContext(StateContext);

  useEffect(() => {
    const ourRequest = Axios.CancelToken.source();
    async function getAllScripts() {
      try {
        const response = await Axios.get("/api/all-scripts", {
          headers: {
            Authorization: `Bearer ${appState.user.token}`,
          },
        });
        setScripts(response.data);
      } catch (e) {
        // Deal with catch error here
      }
    }
    getAllScripts();
    return () => ourRequest.cancel();
  }, []);

  return (
    <Container className="py-4 px-0 text-white">
      {scripts.map((script) => {
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
