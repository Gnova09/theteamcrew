import React from 'react';
import './App.css';
import Cardlist from './components/card/cardlist';
import crew from './components/card/crew';

function App() {
  return (
    <div className="App">
      <div className='text-content'>
        <div className='crew'>
          <h1>The creative crew</h1>
        </div>
        <span>
          <h2>WHO WE ARE</h2>
          <p>
            We are team of creatively diverse, driven,
            innovative individuals working in various locations
            from the world
          </p>
        </span>
      </div>
      <div className='cardcomponents'>
        <Cardlist object={crew}/>
      </div>
    </div>
  );
}

export default App;
