import React from 'react'
import {Link} from 'react-router-dom'

function NavBar() {
    return (
        
       
        
        <ul class="topnav">
            <li><Link to="/">Home</Link></li>
            <li><a href="news.asp">News</a></li>
            <li><a href="contact.asp">Contact</a></li>
            <li><a href="about.asp">About</a></li>
        </ul>
    
    
            
    );
  }
  
  export default NavBar;