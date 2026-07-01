import React from 'react';
import './about.css';

import img1 from '../assets/heidi.jpeg';

function About() {

    return(
        <div className = "about-page">

            <div className = "mission-container">
                <h3> Our Mission</h3>
                <p> words words words words</p>

            </div>

            <div className = "team-container">

             {/*Lists members + brief intros*/}
            <div className = "card">
                <img src = {img1} alt = "Avatar"/>
                <div class = "container">
                    <h4>Heidi Goethert</h4>
                    <p> description</p>
                </div>
            </div>
            </div>

        </div>
    )
    
}

export default About;