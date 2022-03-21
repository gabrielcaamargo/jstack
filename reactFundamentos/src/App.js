import React, { useState, useMemo, useEffect, useLayoutEffect} from 'react';

import { ThemeProvider } from 'styled-components'

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import themes from './styles/themes'

function App() {

  const [theme, setTheme] = useState('dark')

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
    for (let i = 0; i <= 15000; i++){
      console.debug(i)
    }
  }, [theme])

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <button onClick={handleToggleTheme}>Toggle</button>
      <Layout 
          onToggleTheme={handleToggleTheme}
          selectedTheme={theme}
        /> 
    </ThemeProvider>
  );
};

export default App;
