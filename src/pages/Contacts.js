import ReactTooltip from 'react-tooltip';
import React from 'react'





function Contact() {
    return (
        
        <div >
      
      <ReactTooltip style={{place: 'bottom'}} />
    
        <div id="page-gradient" class="text">
    
            <div data-aos="fade-up"  id="aboutText">
                <p style={{position: 'relative', top: 100}}>You can find me here! <span>😁</span></p>
                
            </div>

            <div data-aos="fade-up" data-aos-offset="100" data-aos-delay="150" id="aboutText" style={{display: 'flex', position: 'relative', top: 100, justifyContent: 'center', }}>
                <a data-tip="@abyzlsneverdies" href="https://twitter.com/abyzlsneverdies">
                    <img role="twitter" class="icons" src="https://media.discordapp.net/attachments/1010834278839484426/1010834305892761660/png.monster-7.png" />
                </a>
                <a data-tip="@abyzlsfr" href="https://www.instagram.com/abyzlsfr/">
                    <img role="instagram"  class="icons" src="https://media.discordapp.net/attachments/1010834278839484426/1010835058199908403/instagramlogologowebsiteicon-1320190502826859478.png" />
                </a>
                <a data-tip="twitch.tv/abyzlsfr" href="https://www.twitch.tv/abyzlsfr">
                    <img role="twitch"  class="icons" src="https://cdn.icon-icons.com/icons2/2992/PNG/512/twitch_logo_icon_187308.png" />
                </a>
                <a data-tip="@AbyzlsDev" href="https://github.com/AbyzlsDev">
                    <img role="github" class="icons" src="https://media.discordapp.net/attachments/1010834278839484426/1011368310799085679/25231.png" />
                </a>
                
               
                
            </div>

            

            <div data-aos="fade-up" data-aos-offset="200" data-aos-delay="250">

            <a data-tip="abyzls.business@gmail.com" class="links" style={{position: 'relative', top: 100}} href="mailto:abyzls.business@gmail.com">Business email</a>

            </div>
            
    
          

           
    
        </div>
    
        <footer class="footer">
            <p>Denislav Stoyanov©<br /></p>
            
          </footer>
          
    
      
       
       
      
    </div>
    
            
    );
  }
  
  export default Contact;
  