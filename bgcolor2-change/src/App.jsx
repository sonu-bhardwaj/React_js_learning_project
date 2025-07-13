import React, { useState } from 'react';
import './App.css'; // Make sure this file exists in the same folder

function App() {
  const [color, setColor] = useState('olive');

  return (
    <div
      className="app-container"
      style={{ backgroundColor: color }}
    >
      <div className="button-container">
        <div className="buttons">
          <button 
          onClick={() => setColor("red")} className="button red">Red</button>
          <button onClick={() => setColor("green")} className="button green">Green</button>
          <button onClick={() => setColor("blue")} className="button blue">Blue</button>
          <button onClick={() => setColor("orange")} className="button orange">Orange</button>
          <button onClick={() => setColor("yellow")} className="button yellow">Yellow</button>
        </div>
      </div>
    </div>
  );
}

export default App;
