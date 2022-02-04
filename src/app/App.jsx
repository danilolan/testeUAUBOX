import React from 'react';

//---STYLES---
import './app.scss';

//---COMPONENTS---

//---Others---
import { BrowserRouter } from 'react-router-dom'
import Routes from '../services/Routes'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
