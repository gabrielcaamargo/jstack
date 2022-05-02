import React from 'react';

import { Container } from './styles';

import { useHistory } from 'react-router-dom'

export default function Header({onToggleTheme, selectedTheme}) {
  const history = useHistory()

  function handleNavigate(){
    history.push('./posts')
  }

  return (
    <Container>
      <h1>JStack's Blog</h1>
      <button 
        type="button" 
        onClick={onToggleTheme}
        >
          {selectedTheme === 'dark' ? '🌞' : '🌚'}
      </button>
      <button onClick={handleNavigate} style={{color: "#FFF"}}>Navegar</button>
    </Container>
  );
}