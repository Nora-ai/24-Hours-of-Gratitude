import './App.css';
import { Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { baseUrl, config } from './services'
import Feed from './components/Feed/Feed'
import Post from './components/Post/Post'
import NavBar from './components/NavBar/NavBar'
import PostButton from './components/NavBar/PostButton'
import Landing from './components/Landing/Landing'
import { ThemeProvider} from 'styled-components'

const LightTheme = {
  backgroundColor: "white",
  color: "black"
}

const DarkTheme = {
  backgroundColor: "black",
  color: "white"
}

const themes = {
  light: LightTheme,
  dark: DarkTheme
}

function App() {
  const [posts, setPosts] = useState([])
  const [toggleFetch, setToggleFetch] = useState(false)
  const [theme, setTheme] = useState('light')
  
  useEffect(() => {
    const getPosts = async () => {
      const resp = await axios.get(baseUrl, config)
      setPosts(resp.data.records)
    }
    getPosts()
  },[toggleFetch])


  
  return (<>

    <Route exact path='/'>
      <Landing />
    </Route>
  
    <ThemeProvider theme={themes[theme]}>
      <>
        
        <Route path='/home'>
          <NavBar theme={theme} setTheme={setTheme}/>
          <PostButton theme={theme} setTheme={setTheme}/>
      
          {posts.map((post) => (
            <Feed key={post.id} posts={post} theme={theme} setTheme={setTheme}/>
          ))}
          </Route>
          
      </>
    </ThemeProvider>

    <Route path='/new'>
      <Post setToggleFetch={setToggleFetch}/>
    </Route>

  </>);
}

export default App;


// {/* <button onClick={e => 
//   setTheme(
//       theme.mode === 'dark' 
//       ? { mode: 'light'}
//       : { mode: 'dark'}
//     )
//     }
//   >
//   Switch Mode
// </button> */}