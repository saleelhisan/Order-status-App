import React, { useState, useEffect } from 'react';
import WidgetOrderStats from './components/WidgetOrderStats';
import data from './data/data.json';

function App() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    setStats(data);
  }, []);

  return (
    <div className="App">
      <WidgetOrderStats data={stats} />
    </div>
  );
}

export default App;
