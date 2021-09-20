import React from 'react' 
import { Link } from 'react-router-dom'
import '../styles/topNav.css'


const TopNav = () => {
    return(
        <div id="nav-container">
            <nav id="navbar">
                <ul id="nav-links">
                <Link to="/" className="topnav-link" activeClassName="active" isCurrent="true">
                    <li>
                    Home
                    </li>
                </Link>
                <Link to="/events" className="topnav-link" activeClassName="active" isCurrent="true">
                    <li>
                    Events
                    </li>
                </Link>
                <Link to="/music" className="topnav-link" activeClassName="active" isCurrent="true">
                    <li>
                    Music
                    </li>
                </Link>
                <Link>
                <img id="main-logo" src="https://res.cloudinary.com/acurunner79/image/upload/v1631938925/xuTv__lU_400x400_aubaaf.jpg" alt="soltrix-logo"/>
                </Link>
                <Link to="/news" className="topnav-link" activeClassName="active" isCurrent="true">
                    <li>
                    News
                    </li>
                </Link>
                <Link to="/bio" className="topnav-link" activeClassName="active" isCurrent="true">
                    <li>
                    Bio
                    </li>
                </Link>
                <Link to="/contact" className="topnav-link" activeClassName="active" isCurrent="true">
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