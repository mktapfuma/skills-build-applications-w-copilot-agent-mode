import React, { useEffect, useState } from 'react';
import { Table, Card } from 'react-bootstrap';

function Activities() {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    fetch('https://urban-guide-pjjxqgvqxvqq3497-8000.app.github.dev/api/activity/')
      .then(res => res.json())
      .then(data => setActivities(data));
  }, []);
  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title as="h2" className="mb-4">Activities</Card.Title>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              {activities[0] && Object.keys(activities[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {activities.map((activity, idx) => (
              <tr key={idx}>
                {Object.values(activity).map((val, i) => (
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
export default Activities;

