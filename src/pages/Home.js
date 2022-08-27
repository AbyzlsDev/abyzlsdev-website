import React, { useRef, useState } from 'react'
import { useAuth0} from "@auth0/auth0-react";



    

    var text = ["Abyzls", "Code enthusiast", "Copywriter"]
    var index = 0;
    var time = 4000; // in ms
   
    
    function changeText(){

        var el = document.getElementById("abyzlstext1")

  
        if(el != null)  {
            
            index++;
    
            if(index > text.length - 1){
           
               index = 0;
               
           
           }

        el.innerHTML = text[index];
 } 

    
    
    
    }
    
   
    

    

function Home() {

    setInterval(changeText, time);                                           
    
    const { user, isAuthenticated} = useAuth0();
    
    if(isAuthenticated){

    
   
    return (
       
        <div>
      
        <div data-aos="fade" data-aos-duration="1500"  id="aboutText"class="background">
            <p id="abyzlstext1">Abyzls</p>
            
            
        </div>
    
       
    
        <div data-aos="zoom-in"  id="page-gradient" class="text">
    
            <div data-aos="fade-up" data-aos-delay="250" id="aboutText">
                <p style={{position: 'relative'}}>Hello, {user.name}! <br/>I'm Abyzls! <br/>Welcome to my page! <span>😁</span></p>
                
            </div>
    
            <div data-aos="fade-up"  data-aos-offset="1000" data-aos-delay="150">
                <p style={{position: 'relative', top: 700}}>Please, check my page out! <span>😊</span></p>
            
            </div>

           
    
        </div>
    
        <footer class="footer">
            <p>Denislav Stoyanov©<br /></p>
            
          </footer>

        
            
        
    
   
       
       
      
    </div>
         
    );
        }
    
    
}
  

  export default Home;
  