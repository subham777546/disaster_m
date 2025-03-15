import React from 'react';
import ReportDisaster from './ReportDisaster';
import DisasterList from './DisasterList';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Disaster Management System</h1>
        <ReportDisaster />
        <DisasterList />
      
      </header>
    </div>
  );
}

export default App;
