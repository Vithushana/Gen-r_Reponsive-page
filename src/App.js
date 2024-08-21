// src/App.js
import React from 'react';
import Header from './components/Header';
import MainSections from './components/MainSections';
import Industries_Ideas from './components/Industries_Ideas';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <MainSections />
      <Industries_Ideas />
    </div>
  );
}

export default App;
