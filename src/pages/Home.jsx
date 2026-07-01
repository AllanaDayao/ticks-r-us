import React, { useState, useEffect } from 'react';
import './home.css';

import img1 from '../assets/ixodes.jpg';
import img2 from '../assets/lawn-tick-control.jpg';
import img3 from '../assets/ticks-close.jpg';

const images = [img1, img2, img3 ];

function Slideshow() {

    const [currentIndex, setCurrentIndex] = useState(0);


    {/* setting up componenets*/}

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        }, 4000);

        return () => clearInterval(timer);
    }, []);

    return (

        <div className = "slideshow-container">
            <img
            src = {images[currentIndex]}
            alt = {`Slide ${currentIndex + 1}`}
            />

        </div>
    );

}

function Home() {

    return (
        <div className = "homepage">
            <Slideshow />

            {/* INTROUDCTION */}

            <div className = "intro-strip-container">
                <p> intro words words words</p>
            </div> 

            <div className = "intro-container">
            {[
                {
                    title: "Why Ticks Matter",
                    body: "words words"
                    
                },
                {
                    title: "Our Research",
                    body: "words words"
                    
                },
                {
                    title: "Get Involved",
                    body: "words words"
                    
                },
            ].map((card)=> (
                <div key={card.title} className="info-card">
                <h3>{card.title}</h3>
                <p>{card.body}</p>
                </div>
            ))
            }

            </div>


            {/* Recent Lab publications*/}



        </div>
            
    );
    
}
export default Home


