import React, { useEffect, useState } from 'react';
import { Table, Card } from 'react-bootstrap';

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://urban-guide-pjjxqgvqxvqq3497-8000.app.github.dev/api/users/')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);
  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title as="h2" className="mb-4">Users</Card.Title>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              {users[0] && Object.keys(users[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={idx}>
                {Object.values(user).map((val, i) => (
                  <td key={i}>{val}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}
export default Users;
