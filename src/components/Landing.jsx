import './Landing.css'
import { Link } from 'react-router-dom'

function Landing() {
    return(
        <div className="landing-page">
            <h2 className="landing-title">24 Hours of Gratitude</h2>
           <Link to='/home'><button className="landing-enter">ENTER</button></Link>
        </div>
    )
}

export default Landing

// Photo by Morvanic Lee on Unsplash