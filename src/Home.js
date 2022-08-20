import React from 'react'
import switchText from './switchtext';
import NavBar from './NavBar';


function Home() {
    return (
        
        <div>
      
        <div class="background">
            <p id="abyzlstext">Abyzls</p>
            
            
        </div>
    
       
    
        <div id="page-gradient" class="text">
    
            <div data-aos="fade-up" data-aos-delay="2050" id="aboutText">
                <p style={{position: 'relative', top: 100}}>Hello! <br/>I'm Abyzls! <br/>Welcome to my page! <span>😁</span></p>
                
            </div>
    
            <div data-aos="fade-up"  data-aos-offset="1000" data-aos-delay="150">
                <p style={{position: 'relative', top: 700}}>Please, check my page out! <span>😊</span></p>
            
            </div>

           
    
        </div>
    
        <footer class="footer">
            <p>Denislav Stoyanov©<br /></p>
            
          </footer>
          
    <script href= {switchText()} />
      
       
       
      
    </div>
            
    );
  }
  
  export default Home;
  