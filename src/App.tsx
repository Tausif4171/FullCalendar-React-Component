import React from 'react';
import './App.css';
import Calendar from './Calendar';

function App() {
  return (
    <div className='app-container'>
      <div className='left-column'>
        Left Sidebar
      </div>
      <div className='right-column'>
        <Calendar />
      </div>
    </div>
  );
}

export default App;
