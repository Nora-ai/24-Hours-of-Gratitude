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
import { ThemeProvider, createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
body {
  background-color: ${props => props.theme.mode === 'dark' ? '#111' : '#EEE'}
  color: ${props => props.theme.mode === 'dark' ? '#EEE' : '#111'}
}
`

function App() {
  const [posts, setPosts] = useState([])
  const [toggleFetch, setToggleFetch] = useState(false)
  const [theme, setTheme] = useState({ mode: 'light'})
  
  useEffect(() => {
    const getPosts = async () => {
      const resp = await axios.get(baseUrl, config)
      setPosts(resp.data.records)
    }
    getPosts()
  },[toggleFetch])

  return (<>
  <div className="app">

    <Route exact path='/'>
      <Landing />
    </Route>
  
    <ThemeProvider theme={{theme}}>
      <>
      <GlobalStyle />
        <Route path='/home'>
          <NavBar />
          <PostButton />

          <button onClick={e => 
            setTheme(
                theme.mode === 'dark' 
                ? { mode: 'light'}
                : { mode: 'dark'}
              )
              }
            >
            Switch Mode
          </button>
      
          {posts.map((post) => (
            <Feed key={post.id} posts={post}/>
          ))}
          </Route>
          
      </>
    </ThemeProvider>

    <Route path='/new'>
      <Post setToggleFetch={setToggleFetch}/>
    </Route>
    </div>

  </>);
}

export default App;
