import React from "react";
import './CV.scss';
import "@src/index.scss";
import "@assets/css/bootstrap.min.css"

export function CV() {
    return (
        <section id="cv-container" className="cv text-light" style={{ paddingTop: "100px", paddingBottom: "50px" }}>
            <div id="cv" className="container text-light">
                <h2>Circum Vitae</h2>
                <iframe src="https://drive.google.com/file/d/1Oda7Mn6opOcIzEATI0ycTREoPM9epVn4/preview" width="100%" height="800" allow="autoplay"></iframe>        
            </div>
        </section>

    );
}