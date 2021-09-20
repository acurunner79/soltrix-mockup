import React from 'react'

const Home = () => {
    return (
        <div id="home-upper-container">
            {/* <img id="main-logo" src="https://res.cloudinary.com/acurunner79/image/upload/v1631938925/xuTv__lU_400x400_aubaaf.jpg" alt="soltrix-logo"/> */}
            <img id="main-headshot" src="https://res.cloudinary.com/acurunner79/image/upload/v1631939180/soltrix-02_opu5k4.jpg" alt="soltrix-headshot"/>
            <div id="gig-chart">
                <h4 id="gig-header">UPCOMING GIGS</h4>
                <p className="gig-details">SEP 24 2021</p><p className="gig-details">DC Bachata Festival</p>
            </div>
        </div>
    )
}

export default Home
