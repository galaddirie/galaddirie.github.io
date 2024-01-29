import React from "react";

import './Footer.scss';
import "@src/index.scss";
import "@assets/css/bootstrap.min.css"



export function Footer() {


    return (
        <footer id="footer" className="container text-light" style={{ paddingTop: "50px", paddingBottom: "50px" }}>
            <div  className="break" style={{height: "1px", backgroundColor: "rgba(255, 255, 255, 0.0)"}}></div>
            <div className="container">
            <div className="copyright">
                <span>2024</span> &copy; <strong><span>Galad Dirie</span></strong>.
                {/* <div>
                Original 3d model and Animation by <a href="https://sketchfab.com/3d-models/space-ame-camping-amelia-watson-hololive-56ede5352988499d92892fed6061388e">Seafoam</a>
                </div> */}
            </div>
            <div className="credits">
            </div>
            </div>
        </footer>
    )
}