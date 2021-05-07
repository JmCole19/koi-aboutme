import React from 'react';
import Navbar from './components/navbar/navbar';
import Board from './components/appBoard/content';
function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header" />
      <Board />
    </div>
  );
}

export default App;
