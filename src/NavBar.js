import React from 'react'
import {Link} from 'react-router-dom'

function NavBar() {
    return (
        
       
        
        <ul class="topnav">
            <li><Link to="/abyzlsdev-website">Home</Link></li>
            <li><Link to="./contact">Contact</Link></li>
            <li><Link to="./about">About</Link></li>
            
        </ul>
    
    
            
    );
  }
  
  export default NavBar;

  //<li><a href="contact.asp">News</a></li>
  //<li><a href="about.asp">About</a></li>