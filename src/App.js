import './App.css';
import { Route, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { baseUrl, config } from './services'
import Feed from './components/Feed/Feed'
import Post from './components/Post/Post'
import NavBar from './components/NavBar/NavBar'

function App() {
  const [posts, setPosts] = useState([])
  const [toggleFetch, setToggleFetch] = useState(false)
  
  useEffect(() => {
    const getPosts = async () => {
      const resp = await axios.get(baseUrl, config)
      setPosts(resp.data.records)
    }
    getPosts()
  },[toggleFetch])

  return (<>
    <NavBar />
    <Route exact path='/'>
  
      {posts.map((post) => (
        <Feed key={post.id} posts={post}/>
      ))}
    </Route>
    <Route path='/new'>
      <Post setToggleFetch={setToggleFetch}/>
    </Route>

  </>);
}

export default App;
