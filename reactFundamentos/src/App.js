import React, { useState, useMemo, useEffect, useRef } from 'react';

import { ThemeProvider } from 'styled-components'

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import themes from './styles/themes'

function App() {

  const [theme, setTheme] = useState('dark')

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
      <button onClick={handleToggleTheme}>Toggle</button>
      {theme === 'dark' && (
        <Layout 
          onToggleTheme={handleToggleTheme}
          selectedTheme={theme}
        /> 
      )}
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </ThemeProvider>
  );
};

export default App;
