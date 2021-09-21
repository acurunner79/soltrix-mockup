import React from 'react' 
import { Link } from 'react-router-dom'
import '../styles/topNav.css'


const TopNav = () => {
    return(
        <div id="nav-container">
            <nav id="navbar">
                <ul id="nav-links">
                <Link to="/" className="topnav-link" activeclassname="active" iscurrent="true">
                    <li>
                    Home
                    </li>
                </Link>
                <Link to="/events" className="topnav-link" activeclassname="active" iscurrent="true">
                    <li>
                    Events
                    </li>
                </Link>
                <Link to="/music" className="topnav-link" activeclassname="active" iscurrent="true">
                    <li>
                    Music
                    </li>
                </Link>
                <Link to="/">
                <img id="main-logo" src="https://res.cloudinary.com/acurunner79/image/upload/v1632184643/Untitled_anlsoi.png" alt="soltrix-logo"/>
                </Link>
                <Link to="/news" className="topnav-link" activeclassname="active" iscurrent="true">
                    <li>
                    News
                    </li>
                </Link>
                <Link to="/bio" className="topnav-link" activeclassname="active" iscurrent="true">
                    <li>
                    Bio
                    </li>
                </Link>
                <Link to="/contact" className="topnav-link" activeclassname="active" iscurrent="true">
                    <li>
                    Contact
                    </li>
                </Link>
                </ul>
            </nav>
        </div>
    )
}

export default TopNav