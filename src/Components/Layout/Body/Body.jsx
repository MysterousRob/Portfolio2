import React from "react";
import './Body.css';
import ProgressBars from "./ProgressBars";

function Body() {
    return(
        <>
            <div className="home-Body">
            <section className="image-section">
        <h2>Image Section</h2>
        <div className="image-container">
            <img src="" alt="Your Image" />
        </div>
    </section>

    <section className="progress-section">
        <h2>Progress Bars Section</h2>
        <ProgressBars  />
    </section>
            </div>
        </>
    )
}

export default Body;