import React, { useContext } from "react";
import StateContext from "../StateContext";
import DispatchContext from "../DispatchContext";

// Bootstrap Component
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import ListGroup from "react-bootstrap/ListGroup";

// 3rd party components
import Axios from "axios";

function Users(props) {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);

  async function deleteScript(user, script) {
    try {
      const response = await Axios.delete("/api/script", { user, script });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container className="pt-2 p-0 scroll-auto">
      <Table className="text-white">
        <thead>
          <th>User</th>
          <th>Scripts</th>
        </thead>
        {props.users.map((user) => {
          return (
            <tbody key={user._id}>
              <tr>
                <td className="px-0">
                  <p className="lead">{user.username}</p>
                  <p className="text-muted">{user._id}</p>
                </td>
                <td className="px-0">
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
                                onClick={() => deleteScript(user._id, script)}
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
