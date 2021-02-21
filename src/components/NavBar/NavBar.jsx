import './NavBar.css'
import { Link } from 'react-router-dom'

function NavBar() {
    return (<>
        <div className='navbar-container'>
        <h2 className="app-title">24 Hours of Gratitude</h2>
        <Link to='./new'><button className="app-post-button">Post</button></Link>
        </div>
    </>)
}

export default NavBar