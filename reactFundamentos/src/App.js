import React, { useState } from "react"

import Post from './Post'
import Header from './Header'


function App(){

  const [posts, setPosts] = useState([
    { id: Math.random(), title: 'Title#01', subtitle: 'Sub#01', likes: 20 },
    { id: Math.random(), title: 'Title#02', subtitle: 'Sub#02', likes: 10 },
    { id: Math.random(), title: 'Title#03', subtitle: 'Sub#03', likes: 50 },
    { id: Math.random(), title: 'Title#04', subtitle: 'Sub#04', likes: 50 },
  ])

  function handleRefresh(){
    setTimeout(()=>{
      setPosts((prevState)=>[
          ...prevState, 
          {
            id: Math.random(),
            title: `Title#0${prevState.length +1}`,
            subtitle: `Sub#0${prevState.length +1}`,
            likes: 50
          }
      ])
    },500)
  }

  return (
    <>
    <Header title="Blog do JStack">
      <h2>Posts da semana 
        <button onClick={handleRefresh}>Atualizar</button>
      </h2>
    </Header>
    
    <hr />
    
    {posts.map(post => (
      <Post 
        key={post.id}
        likes={post.likes}
        post={{
          title: post.title,
          subtitle: post.subtitle
        }}
      />
    ))}
    </>
    )
}

export default App