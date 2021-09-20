import React from 'react'
import '../styles/home.css'

const Home = () => {
    return (
        <div id="home-upper-container">
            <div id="gig-chart">
                <h4 id="gig-header">UPCOMING GIGS</h4><br/>
                <div id="gig-labels">
                    <h4 className="labels">DATE</h4>
                    <h4 className="labels">EVENT</h4>
                    <h4 className="labels">LOCATION</h4>
                </div>
                <div className="gig-content">
                    <p className="gig-date">SEP 24th</p>
                    <p className="gig-details"> DC Bachata Festival</p>
                    <p className="gig-details">Washington D.C.</p>
                </div>
                <div className="gig-content">
                    <p className="gig-date">SEP 24th</p>
                    <p className="gig-details"> DC Bachata Festival</p>
                    <p className="gig-details">Washington D.C.</p>
                </div>
                <div className="gig-content">
                    <p className="gig-date">SEP 24th</p>
                    <p className="gig-details"> DC Bachata Festival</p>
                    <p className="gig-details">Washington D.C.</p>
                </div>
                <div className="gig-content">
                    <p className="gig-date">SEP 24th</p>
                    <p className="gig-details"> DC Bachata Festival</p>
                    <p className="gig-details">Washington D.C.</p>
                </div><br/>
                <button className="button">More Events</button>
            </div><br/>
            <h2>Latest Music</h2>
            <div id="latest-music-container">
                <div>
                    <img className="latest-music-cover" src="https://res.cloudinary.com/acurunner79/image/upload/v1632160646/hqdefault_ertjhp.webp" alt=""/>
                    <h5>Farruko - Pepas (DJ Soltrix Bachata Remix)</h5>
                </div>
                <div>
                    <img className="latest-music-cover" src="https://res.cloudinary.com/acurunner79/image/upload/v1632160659/hqdefault_1_oq1yxt.webp" alt=""/>
                    <h5>DJ Soltrix - Bachata Mix Studio Sessions</h5>
                </div>
                <div>
                    <img className="latest-music-cover" src="https://res.cloudinary.com/acurunner79/image/upload/v1632160672/hqdefault_2_pyeq28.webp" alt=""/>
                    <h5>Niall Horan - This Town (DJ Soltrix Bachata Remix)</h5>
                </div>
                <div>
                    <img className="latest-music-cover" src="https://res.cloudinary.com/acurunner79/image/upload/v1632160684/mqdefault_6s_uwabie.webp" alt=""/>
                    <h5>Farruko - Pepas (DJ Soltrix Bachata Remix)</h5>
                </div>
            </div><br/>
            <button className="button">More music</button>
        </div>
    )
}

export default Home
