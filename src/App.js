
import { Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { baseUrl, config } from './services'
import Feed from './components/Feed'
import Post from './components/Post'
import NavBar from './components/NavBar'
import PostButton from './components/PostButton'
import Landing from './Landing'
import { ThemeProvider} from 'styled-components'
import styled from 'styled-components'

const LightTheme = {
  backgroundColor: "white",
  color: "black",
  border: "1px solid #212121"
}

const DarkTheme = {
  backgroundColor: "#212121",
  color: "white",
  border: "1px solid white"
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
width: 100px;
border: 1px dotted;
background-color: ${props => props.theme.backgroundColor};
color: ${props => props.theme.color};
position: absolute;
top: 5%;
right: 10%;
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

  const icon = theme === "light" ? <p>Dark Mode</p> : <p>Light Mode</p>

  
  return (<>
  <Route exact path='/'>
      <Landing />
    </Route>
  
  <ThemeProvider theme={themes[theme]}>

  <MainBackground>

    
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
