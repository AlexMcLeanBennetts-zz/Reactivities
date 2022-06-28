import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { IActivity } from './models/activity';


function App() {
  const [activities, setActivities] = useState<IActivity[]>([]);

  useEffect(() => {
    axios.get<IActivity[]>('http://localhost:5000/api/activities')
      .then(res => {
        setActivities(res.data);
      })
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {activities.map((activity) => (
            <li key={activity.id}>
              {activity.title}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
