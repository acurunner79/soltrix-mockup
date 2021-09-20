import React from 'react' 
import { Link } from 'react-router-dom'
import '../styles/rightNav.css'


const RightNav = () => {
    return(
        <div id="rightnav-main">
            <ul>
                <Link to="/">
                    <li className="links" activeClassName="active" iscurrent="true">
                    Home
                    </li>
                </Link>
                <Link to="/events">
                    <li className="links" activeClassName="active" iscurrent="true">
                    Events
                    </li>
                </Link>
                <Link to="/music">
                    <li className="links" activeClassName="active" iscurrent="true">
                    Music
                    </li>
                </Link>
                <Link to="/news">
                    <li className="links" activeClassName="active" iscurrent="true">
                    News
                    </li>
                </Link>
                <Link to="/bio">
                    <li className="links" activeClassName="active" iscurrent="true">
                    Bio
                    </li>
                </Link>
                <Link to="/contact">
                    <li className="links" activeClassName="active" iscurrent="true">
                    Contact
                    </li>
                </Link>
            </ul>
        </div>
    )
}

export default RightNav