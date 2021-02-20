import './App.css';
import { Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { baseUrl, config } from './services'
import Feed from './components/Feed/Feed'
import Post from './components/Post/Post'

function App() {
  const [posts, setPosts] = useState([])
  
  useEffect(() => {
    const getPosts = async () => {
      const resp = await axios.get(baseUrl, config)
      setPosts(resp.data.records)
    }
    getPosts()
  },[])

  return (<>
    <h2>24 Hours of Gratitude</h2>
    <Route exact path='/'>
      <p>Feed goes here</p>
    </Route>
    <Route path='/new'>
      <p>new post goes here</p>
    </Route>

  </>);
}

export default App;
