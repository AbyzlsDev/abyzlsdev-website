

import Home from './pages/Home';
import React from 'react';
import { Routes, Route, Navigate} from "react-router-dom";
import NavBar from './NavBar';
import Contact from './pages/Contacts';
import About from './pages/About';
import AuthNav from './auth-nav';
import PleaseLogin from './PleaseLogin';
import { useAuth0} from "@auth0/auth0-react";

function App() {
  const {isAuthenticated} = useAuth0();
    
  if(isAuthenticated){
  return (
    
    <div>
      
      
      <NavBar />
      <Routes><Route exact path='/abyzlsdev-website' element={<Home />}/></Routes>
      <Routes><Route exact path='/contact' element={<Contact />}/></Routes>
      <Routes><Route exact path='/about' element={<About />}/></Routes>
      
    </div>
  );
  } else {
    return(
      <div>
    <NavBar />
    <PleaseLogin />
    </div>
    )
  }
}

export default App;
