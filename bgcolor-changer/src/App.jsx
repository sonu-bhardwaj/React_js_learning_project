import './App.css';
import { useState } from 'react';

function App() {
  const [bgColor, setBgColor] = useState('white');

  const changeToColor = (color) => setBgColor(color);

  return (
    <div className="wrapper" style={{ backgroundColor: bgColor }}>
      <h1 style={{ color: 'white', marginBottom: '20px' }}>Background Color Changer</h1>
      <div id="container">
        <ul>
          <li><button className="red" onClick={() => changeToColor('red')}>Red</button></li>
          <li><button className="blue" onClick={() => changeToColor('blue')}>Blue</button></li>
          <li><button className="green" onClick={() => changeToColor('green')}>Green</button></li>
          <li><button className="yellow" onClick={() => changeToColor('yellow')}>Yellow</button></li>
          <li><button className="orange" onClick={() => changeToColor('orange')}>Orange</button></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
