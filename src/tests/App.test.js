import { render, screen, fireEvent} from '@testing-library/react';
import Home from '../pages/Home';
import Contact from '../pages/Contacts';
import React from 'react'
import App from '../App'
import About from '../pages/About';
import { BrowserRouter as Router, MemoryRouter, useLocation, Navigate, useNavigate } from 'react-router-dom';
import Profile from '../profile'
import Auth0ProviderWithHistory from '../auth/auth0-provider-with-history'
import {useAuth0} from '@auth0/auth0-react'



test('Home render', () => {
  render(<Home/>);
  const linkElement = screen.getByText(/I'm Abyzls!/i);
  expect(linkElement).toBeInTheDocument();
});

test('Contact render', () => {
  render(<Contact/>);
  const linkElement = screen.getByText(/You can find me here!/i);
  expect(linkElement).toBeInTheDocument();





});

test('About render', () => {
  render(<About/>);
  const linkElement = screen.getByText(/I'm 16 years old/i);
  expect(linkElement).toBeInTheDocument();





});

const user = {
  email: '727cookiezibluezenith@727pp.com',
  email_verified: true,
  sub: 'google-oauth2|1234567891234',
};

jest.mock('@auth0/auth0-react');

beforeEach(() => {
  // Mock the Auth0 hook and make it return a logged in state
  useAuth0.mockReturnValue({
    isAuthenticated: true,
    user,
    logout: jest.fn(),
    loginWithRedirect: jest.fn(),
  });
});

test('Full Navigation test', () => {
  
 

  render(<Router><App/></Router>)
 
  fireEvent.click(screen.getByText(/Home/i))
  

  // verify page content for default route
  expect(window.location.pathname).toBe('/abyzlsdev-website')

  // verify page content for expected route after navigating
  fireEvent.click(screen.getByText(/Contact/i))
  

  expect(window.location.pathname).toBe('/contact')

  fireEvent.click(screen.getByText(/About/i))

  expect(window.location.pathname).toBe('/about')


 
});




