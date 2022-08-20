

import Home from './Home';
import React from 'react';
import { Routes, Route} from "react-router-dom";
import NavBar from './NavBar'

function App() {
  return (
    <div>
      <NavBar />
      <Routes><Route exact path='/' element={<Home />}/></Routes>
    </div>
  );
}

export default App;
