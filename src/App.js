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
  <div className="app">

    <Route exact path='/'>
      <Landing 
      />
    </Route>
  
    <Route path='/home'>
      <NavBar />
    <PostButton />
    
      {posts.map((post) => (
        <Feed key={post.id} posts={post}/>
      ))}
    </Route>
    <Route path='/new'>
      <Post setToggleFetch={setToggleFetch}/>
    </Route>
    </div>

  </>);
}

export default App;
