import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd'
import Header from './components/header';


function App() {
  return (
    <>
      <Header />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
            TESTING KENNY WAS HERE ZZZZZZZZ
            TESTING CAMBAILEY WAS HERE ZZZZZZZZ
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </>
  );
}

export default App;
