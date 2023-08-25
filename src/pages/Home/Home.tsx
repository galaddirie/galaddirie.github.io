import React from "react";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import "./Home.scss";
import "@src/index.scss";
import "@assets/css/bootstrap.min.css"

import HeroVideo from "@src/assets/video/video.mp4";
import HeroImage from "@src/assets/img/hero.jpg";

export function Home() {
    // while video is loading, show the image
    const [isVideoLoaded, setIsVideoLoaded] = React.useState(false);

    const onLoadedData = () => {
        setIsVideoLoaded(true);
    };

    const setThumbnailStye = () => {
        return isVideoLoaded ? { display: "none" } : { display: "block" };
    }


    return (
        <section id="hero">
            <div className="hero-container" style={{ height: '100vh' }}>
                <div className="video-container">
                    <img src={HeroImage} alt="hero" className="lozad heroVideo video-thumbnail" style={setThumbnailStye()} />
                    <video autoPlay muted loop playsInline className="lozad heroVideo" onLoadedData={onLoadedData} poster={HeroImage}>
                        <source src={HeroVideo}type="video/mp4" />
                    </video>
                </div>


            </div>
            <div className="hero-intro container d-flex align-items-center" style={{ height: '100%' }}>
                <div className="row">
                    <div className="mx-lg-auto text-lg-start text-center col-12 d-flex align-items-center">
                        <div className="d-flex flex-column text-lg-start text-center ">
                            <h1 style={{ textShadow: "0px 5px 5px #000000" }}>Galad Dirie<span>.</span></h1>
                            <h2 style={{ fontStyle: "" }}>Full Stack Developer<span>.</span>
                            </h2>
                            <div className="social-links d-flex text-lg-start text-center mx-auto mx-lg-0 ">

                                <a className="pe-4 text-lg" href="https://www.linkedin.com/in/galad-dirie/" style={{ fontSize: "2rem", fontStyle: "italic", color: "crimsion" }}>
                                    <i className="bi bi-linkedin"></i>
                                </a>
                                <a className="text-lg" href="https://github.com/galaddirie" style={{ fontSize: "2rem", fontStyle: "italic", color: "crimsion" }}>
                                    <i className="bi bi-github"></i>
                                </a>

                            </div>
                            <p style={{ fontStyle: "italic", color: "rgb(163, 163, 163)" }}>
                                galad.work@gmail.com</p>
                            <div style={{ width: "100%" }}>
                                <Link to="projects" spy={true} smooth={true} offset={0} duration={500}>
                                    <button className="btn btn-outline-danger  get-started-btn" >
                                        See Projects <i className="bi bi-arrow-down-circle-fill"></i>
                                    </button>
                                </Link>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}