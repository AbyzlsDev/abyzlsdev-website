import { render, screen, fireEvent} from '@testing-library/react';
import Home from '../pages/Home';
import Contact from '../pages/Contacts';
import React from 'react'
import App from '../App'
import About from '../pages/About';
import { BrowserRouter as Router, MemoryRouter, useLocation, Navigate, useNavigate } from 'react-router-dom';




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




