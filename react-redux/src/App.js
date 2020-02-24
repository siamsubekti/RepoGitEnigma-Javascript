import React from 'react';
import logo from './logo.svg';
import './App.css';
import CounterContainer from './modules/counter/CounterContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
      <CounterContainer/>
    </div>
  );
}

export default App;
