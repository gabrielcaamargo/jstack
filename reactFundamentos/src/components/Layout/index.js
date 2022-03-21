import React, { useEffect } from 'react';

import Header from '../Header';
import PostsList from '../PostsList';
import Footer from '../Footer';

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
        
      <PostsList />
      <Footer 
        onToggleTheme={onToggleTheme}
        selectedTheme={selectedTheme}
      />
    </>
  );
}
