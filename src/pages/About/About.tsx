import React from "react";
import './About.scss';
import "@src/index.scss";
import "@assets/css/bootstrap.min.css"

import aboutImage from "@src/assets/img/about-me.png";


export function About() {
    return (
        <section id="about-container" className="about text-light" style={{ paddingTop: "150px", paddingBottom: "50px" }}>
            <div id="about" className="container">
                <h2>About</h2>
                
                <div className="row">
                    <div className="col-lg-6 col-12 order-last order-lg-0">
                        <div className="about-image-container">
                            <img src={aboutImage} alt="About Me" className="about-image" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <p className="about-text">Re</p>
                    </div>
                    
                </div>
                
            </div>
        </section>

    );
};