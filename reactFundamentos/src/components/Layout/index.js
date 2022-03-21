import React, { useEffect } from 'react';

import Header from '../Header';
import PostsList from '../PostsList';
import Footer from '../Footer';

export default function Layout({ onToggleTheme, selectedTheme }) {

  useEffect(()=>{
    console.debug({ selectedTheme })

    return ()=>{
      console.debug('<Layout /> saiu da tela')
    }
  }, [selectedTheme])

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
