import { useState, useEffect } from 'react';
import LaunchCard from './components/LaunchCard';

export default function App() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/launches')
      .then((res) => res.json())
      .then((data) => setLaunches(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold ">Upcoming Launches</h1>
      <div>
        {launches.map((launch) => (
          <LaunchCard key={launch.apiId} launch={launch} />
        ))}
      </div>
    </div>
  );
}