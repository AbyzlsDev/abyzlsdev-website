import { render, screen, fireEvent} from '@testing-library/react';
import Home from './pages/Home';
import Contact from './pages/Contacts';
import React from 'react'
import NavBar from './NavBar'
import { BrowserRouter as Router} from 'react-router-dom';
import { createMemoryHistory } from 'history';

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




