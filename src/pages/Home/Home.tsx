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
                        <div className="d-flex flex-column text-md-start text-center ">
                            <h1 style={{ textShadow: "0px 5px 5px #000000", fontSize:"150px" }}>galad dirie<span>.</span></h1>
                            <h2 style={{ textShadow: "0px 5px 5px #000000" }}>full-stack developer</h2>


                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}