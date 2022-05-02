import React, { useEffect } from 'react';

import Header from '../Header';
import Footer from '../Footer';

import Routes from '../../routes';

export default function Layout({ onToggleTheme, selectedTheme }) {
    
    useEffect(()=>{
      function handleScroll(){
        console.debug("scrollou")
      }

      document.addEventListener('scroll', handleScroll)
    
      return () => document.removeEventListener('scroll', handleScroll)
    })
  
  return (
    <>
      <Header 
        onToggleTheme={onToggleTheme}
        selectedTheme={selectedTheme}
      />
        
    <Routes />
      
      <Footer 
        onToggleTheme={onToggleTheme}
        selectedTheme={selectedTheme}
      />
    </>
  );
}
