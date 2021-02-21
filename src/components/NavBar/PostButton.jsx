import'./PostButton.css'
import { Link } from 'react-router-dom'

function PostButton() {
    return (
        <Link to='./new'><button className="app-post-button">Post</button></Link>
    )
}

export default PostButton