import React from 'react';
import { useAuth0} from "@auth0/auth0-react";
import './CSS/index_home.css'

const LoginButton = () => {
  const {  getAccessTokenSilently, loginWithRedirect} = useAuth0();
  
let token
  
  return (
    <a
      className='topnav'
      
      onClick={ () => {
        loginWithRedirect().then(async () => { 
          token = await getAccessTokenSilently()  
         })
        }}

     
    >
      Log In
    </a>
  );
};

export default LoginButton;