import React, { useEffect, useContext, useState } from "react";
import StateContext from "../StateContext";
import DispatchContext from "../DispatchContext";

// Bootstrap Component
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import ListGroup from "react-bootstrap/ListGroup";

// 3rd party components
import Axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);

  useEffect(() => {
    if (!appState.user.admin) return;
    const ourRequest = Axios.CancelToken.source();
    async function fetchAllUsers() {
      try {
        const response = await Axios.get("/api/all-users", {
          headers: {
            Authorization: `Bearer ${appState.user.token}`,
          },
        });
        console.log("sup", response.data);
        setUsers(response.data);
        if (response.status === 400) {
          appDispatch({
            type: "flashMessage",
            value: "Your session has expired, please login again!",
          });
          return;
        }
      } catch (e) {
        appDispatch({
          type: "flashMessage",
          value: "Unable to verify session state, please login again.",
        });
        appDispatch({ type: "isLoading", value: false });
      }
    }
    fetchAllUsers();
    return () => ourRequest.cancel();
  }, []);

  function handleClick() {
    console.log("called");
  }

  return (
    <Container className="pt-2 p-0 scroll-auto">
      <Table className="text-white">
        <thead>
          <th>User</th>
          <th>Scripts</th>
        </thead>
        {users.map((user) => {
          return (
            <tbody key={user._id}>
              <tr>
                <td>
                  <p className="lead">{user.username}</p>
                  <p className="text-muted">{user._id}</p>
                </td>
                <td>
                  <ListGroup>
                    {user.scripts
                      ? user.scripts.map((script) => {
                          return (
                            <ListGroup.Item
                              key={script}
                              className="text-dark d-flex justify-content-between"
                            >
                              <p className="my-auto">{script}</p>
                              <button
                                className="btn btn-warning btn-sm"
                                onClick={handleClick}
                              >
                                Remove
                              </button>
                            </ListGroup.Item>
                          );
                        })
                      : ""}
                  </ListGroup>
                </td>
              </tr>
            </tbody>
          );
        })}
      </Table>
    </Container>
  );
}

export default Users;
