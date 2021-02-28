
import { Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { baseUrl, config } from './services'
import Feed from './components/Feed'
import Post from './components/Post'
import NavBar from './components/NavBar'
import PostButton from './components/PostButton'
import Landing from './components/Landing/Landing'
import { ThemeProvider} from 'styled-components'
import styled from 'styled-components'
import { CgSun } from 'react-icons/cg'
import { HiMoon } from 'react-icons/hi'

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

const MainBackground = styled.div`
background-color: ${props => props.theme.backgroundColor};
`

const Toggle = styled.button`
cursor: pointer;
height: 50px;
width: 50px;
border-radius: 50%;
border: none;
background-color: ${props => props.theme.backgroundColor};
color: ${props => props.theme.color};
transition: all .5s ease;
`

function App(props) {
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


  const changeTheme = () => {
    if (theme === 'light') {
      setTheme("dark") 
    } else {
      setTheme("light")
    }
  }

  const icon = theme === "light" ? <HiMoon size={40} /> : <CgSun size={40} />

  
  return (<>
  <ThemeProvider theme={themes[theme]}>

  <MainBackground>

    <Route exact path='/'>
      <Landing />
    </Route>
  
    
      <Toggle onClick={changeTheme}>{icon}</Toggle>
        <Route path='/home'>
          <NavBar theme={theme} setTheme={setTheme}/>
          <PostButton theme={theme} setTheme={setTheme}/>
      
          {posts.map((post) => (
            <Feed key={post.id} posts={post} theme={theme} setTheme={setTheme}/>
          ))}
          </Route>

    <Route path='/new'>
      <Post setToggleFetch={setToggleFetch}/>
    </Route>
    </MainBackground>
    </ThemeProvider>
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