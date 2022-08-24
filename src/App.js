

import Home from './pages/Home';
import React from 'react';
import { Routes, Route, Navigate} from "react-router-dom";
import NavBar from './NavBar'
import Contact from './pages/Contacts';
import About from './pages/About'

function App() {
  return (
    <div>
    
      <NavBar />
      <Routes><Route exact path='/abyzlsdev-website' element={<Home />}/></Routes>
      <Routes><Route exact path='/contact' element={<Contact />}/></Routes>
      <Routes><Route exact path='/about' element={<About />}/></Routes>
    </div>
  );
}

export default App;
