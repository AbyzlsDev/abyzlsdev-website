import React, { useRef, useState } from 'react'

    

    var text = ["Abyzls", "Code enthusiast", "Copywriter"]
    var index = 0;
    var time = 4000; // in ms
   
    
    function changeText(){

        var el = document.getElementById("abyzlstext")

  
        if(el != null)  {
            
            index++;
    
            if(index > text.length - 1){
           
               index = 0;
               
           
           }

        el.innerHTML = text[index];
 } 

    
    
    
    }
    
    setInterval(changeText, time);
    

    

function Home() {

    
   
    return (
        
        <div>
      
        <div class="background">
            <p id="abyzlstext">Abyzls</p>
            
            
        </div>
    
       
    
        <div id="page-gradient-home" class="text">
    
            <div data-aos="fade-up" data-aos-delay="2050" id="aboutText">
                <p style={{position: 'relative'}}>Hello! <br/>I'm Abyzls! <br/>Welcome to my page! <span>😁</span></p>
                
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
  

  export default Home;
  