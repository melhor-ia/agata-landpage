import React from 'react';
import Topfold from './assets/views/Topfold';
import Header from './assets/views/Header';
import TransformSection from './assets/views/TransformSection';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Topfold />
      <TransformSection />
    </div>
  );
}

export default App;