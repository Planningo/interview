import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  //TODO: Change the header background color with this function
  // Dark Theme : #282c34, Light Theme #f2f5f8
  function handleOnClick() {

  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button
          className="App-link"
          onClick={handleOnClick}
        >
          Change Mode
        </button>
      </header>
    </div>
  );
}

export default App;
