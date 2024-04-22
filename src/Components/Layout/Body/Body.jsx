import React from "react";
import './Body.css';

function Body() {
    return(
        <>
            <div className="home-Body">
            <section className="image-section">
        <h2>Image Section</h2>
        <div className="image-container">
            <img src="your-image-url.jpg" alt="Your Image" />
        </div>
    </section>

    <section className="progress-section">
        <h2>Progress Bars Section</h2>
        <div className="progress-container">
            <div className="progress-item">
                <div className="progress-bar" style={{ "--value": "70" }} role="progressbar">
                    <div className="progress-label">
                        <br />
                        <br />
                        <br />
                        <p className="percentage">
                            70
                        </p>
                        <p className="label">
                            HTML
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
            </div>
        </>
    )
}

export default Body;