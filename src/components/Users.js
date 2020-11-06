import React from "react";

// Bootstrap Component
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";

// Components
import ListItem from './ListItem'

function Users() {
  return (
    <Container className="pt-2 p-0 scroll-auto">
      <Table striped bordered hover className="text-white">
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Scripts</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>23443tre</td>
            <td>mastaraz</td>
            <td>example@gmail.com</td>
            <td>
              <ListItem />
              <ListItem />
            </td>
          </tr>
          <tr>
            <td>1234t435kkk2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default Users;
