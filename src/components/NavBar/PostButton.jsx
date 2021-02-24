import'./PostButton.css'
import { Link } from 'react-router-dom'

function PostButton() {
    return (
        <div>
            <img className="app-post-button" src="https://res.cloudinary.com/alienora/image/upload/v1614128338/barcode-laser-code-vector-graphic-pixabay-3_swf6pz.png" alt="barcode">
                </img>
                <Link to='./new'><p className="barcode-post">POST</p></Link>
                </div>
    )

}

export default PostButton