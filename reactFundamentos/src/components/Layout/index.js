import React, { useEffect } from 'react';

import { BrowserRouter,Link, useHistory } from 'react-router-dom';

import { Nav } from './styles';

import Header from '../Header';
import Footer from '../Footer';

import Routes from '../../routes';


export default function Layout({ onToggleTheme, selectedTheme }) {
    
  const history = useHistory()
  
  return (
    <BrowserRouter>
      <Header 
        onToggleTheme={onToggleTheme}
        selectedTheme={selectedTheme}
      />

      <Nav>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/posts/id">Posts ID</Link>
      </Nav>

    <Routes />
      
      {/* <Footer 
        onToggleTheme={onToggleTheme}
        selectedTheme={selectedTheme}
      /> */}
    </BrowserRouter>
  );
}
