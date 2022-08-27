import React from 'react'
import {Link} from 'react-router-dom'
import AuthNav from './auth-nav';
import AuthenticationButton from './authentication-button';
import Profile from './profile';

import { useAuth0} from "@auth0/auth0-react";


function NavBar() {

    const { isAuthenticated} = useAuth0();
    
    if(isAuthenticated){

    return (
        
       
        
        <ul class="topnav" style={{flex: 1, position: 'relative'}} >
           
            <li><Link to="/abyzlsdev-website">Home</Link></li>
            <li><Link to="./contact">Contact</Link></li>
            <li><Link to="./about">About</Link></li>
            <li style={{float: 'right'}}><AuthNav></AuthNav></li>
            <li style={{float: 'right'}}><Profile /></li>
           
         
            
        </ul>
    
    
            
    );
    } else {   return (
        
       
        
        <ul class="topnav" style={{flex: 1, position: 'relative'}} >
           
            
            <li style={{float: 'right'}}><AuthNav></AuthNav></li>
         
           
         
            
        </ul>
    
    
            
    );
    }
  }
  
  export default NavBar;

  //<li><a href="contact.asp">News</a></li>
  //<li><a href="about.asp">About</a></li>