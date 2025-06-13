import React, { useEffect, useState } from 'react';
import { Table, Card } from 'react-bootstrap';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  useEffect(() => {
    fetch('https://urban-guide-pjjxqgvqxvqq3497-8000.app.github.dev/api/workouts/')
      .then(res => res.json())
      .then(data => setWorkouts(data));
  }, []);
  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title as="h2" className="mb-4">Workouts</Card.Title>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              {workouts[0] && Object.keys(workouts[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {workouts.map((workout, idx) => (
              <tr key={idx}>
                {Object.values(workout).map((val, i) => (
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
export default Workouts;
