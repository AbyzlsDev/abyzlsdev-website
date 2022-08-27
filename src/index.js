import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './CSS/index_home.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';
import Profile from './profile';


import { BrowserRouter } from 'react-router-dom';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
    <Auth0ProviderWithHistory >
            
    <App />
    
    </Auth0ProviderWithHistory>
    </BrowserRouter>
            
   
    
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
