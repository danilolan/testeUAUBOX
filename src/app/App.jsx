import React from 'react';

//---STYLES---
import './app.scss';

//---COMPONENTS---
import Aside from '../components/aside/Aside';

//---ROUTER---
import { BrowserRouter } from 'react-router-dom'
import Routes from '../services/Routes'

//---CONTEXT---
import DataProvider from '../context/data';

function App() {
  return (
    <DataProvider>
      <div className="app">
        <Aside/>
        <BrowserRouter>
          <Routes/>
        </BrowserRouter>
      </div>
    </DataProvider>
  );
}

export default App;
