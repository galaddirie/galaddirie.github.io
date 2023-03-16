import React from "react";
import "./Navbar.scss";
import "@src/index.scss";
import "@assets/css/bootstrap.min.css"
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


export function Navbar() {
    const handleSetActive = (to) => {
        // set active class to navbar item
        // const navItems = document.querySelectorAll(".nav-item");
        // navItems.forEach((item) => {
        //     item.classList.remove("active");
        // }
        // );
        // const activeItem = document.querySelector(`.nav-item[href="#${to}"]`);
        // console.log(activeItem);
        // if (activeItem) {
        //     // set active class to parent
        //     activeItem.parentElement.classList.add("active");
        // }

    }
    return (
        <header id="header" className="fixed-top ">
            <div className="container d-flex align-items-center justify-content-lg-between">

                <h1 className="logo me-auto me-lg-0 ">
                    <Link className="scrollto" to="hero" spy={true} smooth={true} offset={-50} duration={500} onSetActive={handleSetActive} activeClass="active">
                        GD
                    </Link>
                </h1>

                <nav id="navbar" className="navbar order-last order-lg-0">
                    <ul>
                        <li >
                            <Link className="nav-item item-underline-container" to="projects" spy={true} smooth={true} offset={-150} duration={500} onSetActive={handleSetActive} activeClass="active">
                                Projects
                                <div className="item-hover-underline"></div>
                            </Link>

                        </li>
                        <li className="item-underline-container">
                            <Link className="nav-item scrollto" to="about" spy={true} smooth={true} offset={-150} duration={500} onSetActive={handleSetActive} activeClass="active">
                                About
                            </Link>
                            <div className="item-hover-underline"></div>
                        </li>
                        <li className="item-underline-container">
                            <Link className="nav-item scrollto" to="skills" spy={true} smooth={true} offset={50} duration={500} onSetActive={handleSetActive} activeClass="active">
                                Skills
                            </Link>
                            <div className="item-hover-underline"></div>
                        </li>
                        <li className="item-underline-container">
                            <a className="nav-item scrollto" href="#cv" download="">CV</a>
                            <div className="item-hover-underline"></div>
                        </li>
                        <li className="item-underline-container">
                            <a className="nav-item scrollto" href="https://blog.galad.ca/" download="">Blog</a>
                            <div className="item-hover-underline"></div>
                        </li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>

                <a href="mailto:galad.work@gmail.com" className="get-started-btn scrollto">Contact Me</a>

            </div>
        </header>

    );
}