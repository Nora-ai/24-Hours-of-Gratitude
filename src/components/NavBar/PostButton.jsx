import'./PostButton.css'
import { Link } from 'react-router-dom'

function PostButton() {
    return (
        <div>
                <Link to='./new'>
                    <div className="post-button">
                        <p>POST</p>
                    </div>
                </Link>
        </div>
    )

}

export default PostButton