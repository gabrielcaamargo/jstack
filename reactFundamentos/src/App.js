import React, { useState, useMemo, useEffect, useRef } from 'react';

import { ThemeProvider } from 'styled-components'

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import themes from './styles/themes'

function App() {

  const [theme, setTheme] = useState('light')

  const firstRender = useRef(true)
  console.debug(firstRender.current)

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark
  }, [theme])

  function handleToggleTheme(){
    setTheme(prevState => 
      prevState === 'dark' 
      ? 'light' 
      : 'dark')
  }

  useEffect(()=>{
    if(firstRender.current) {
      firstRender.current = false
      return
    } else {

    }

    console.debug( {theme} )
  }, [theme])

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      {theme === 'dark' && (
        <Layout 
          onToggleTheme={handleToggleTheme}
          selectedTheme={theme}
        /> 
      )}
      {theme === 'light' && (
        <Layout 
          onToggleTheme={handleToggleTheme}
          selectedTheme={theme}
        /> 
      )}
    </ThemeProvider>
  );
};

export default App;
