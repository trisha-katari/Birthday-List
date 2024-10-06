import React, { useState } from 'react';
import db from './db';
import './App.css';

const App = () => {
  let [data, setData] = useState(db);
  
  return (
    <div className="container">
      <h1>{data.length} birthdays today</h1>
      {data.map((x) => (
        <div className="birthday-card" key={x.name}>
          <img src={x.image} alt={x.name} />
          <span>{x.name}</span>
          <b>{x.age}</b>
        </div>
      ))}
      <button onClick={() => setData([])}>Clear Images</button>
    </div>
  );
};

export default App;
