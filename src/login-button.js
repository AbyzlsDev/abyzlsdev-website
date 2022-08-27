import React from 'react';
import { useAuth0} from "@auth0/auth0-react";
import './CSS/index_home.css'

const LoginButton = () => {
  const { loginWithRedirect} = useAuth0();

  
  return (
    <a
      className='topnav'
      
      onClick={() =>  loginWithRedirect() }
    >
      Log In
    </a>
  );
};

export default LoginButton;