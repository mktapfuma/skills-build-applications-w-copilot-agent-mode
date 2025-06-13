import React, { useEffect, useState } from 'react';
import { Table, Card } from 'react-bootstrap';

function Teams() {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    fetch('https://urban-guide-pjjxqgvqxvqq3497-8000.app.github.dev/api/teams/')
      .then(res => res.json())
      .then(data => setTeams(data));
  }, []);
  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title as="h2" className="mb-4">Teams</Card.Title>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              {teams[0] && Object.keys(teams[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {teams.map((team, idx) => (
              <tr key={idx}>
                {Object.values(team).map((val, i) => (
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
export default Teams;
