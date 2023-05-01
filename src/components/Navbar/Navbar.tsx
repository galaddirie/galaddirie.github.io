import React from "react";
import "./Navbar.scss";
import "@src/index.scss";
import "@assets/css/bootstrap.min.css"
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { useLocation, useNavigate } from 'react-router-dom';
//route link as RouteLink
import { NavLink as RouteLink } from "react-router-dom";

export function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();

    const handleSetActive = (to: string) => {

        console.log('goto: ', to);
        navigate(`${to}`);

    }
    return (
        <>
            <header id="header" className="fixed-top ">
                <div className="container d-flex align-items-center justify-content-lg-between">

                    <h1 className="logo me-auto me-lg-0 ">
                        <Link className="nav-item" to="" spy={true} smooth={true} duration={500} onSetActive={handleSetActive} activeClass="active">
                            GD<span>.</span>
                        </Link>
                    </h1>

                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                            <li>
                                <Link className="nav-item item-underline-container" to="projects" spy={true} smooth={true} duration={500} onSetActive={handleSetActive} activeClass="active">
                                    Projects
                                    <div className="item-hover-underline"></div>
                                </Link>

                            </li>
                            <li>
                                <Link className="nav-item item-underline-container" to="about" spy={true} smooth={true} duration={500} onSetActive={handleSetActive} activeClass="active">
                                    About
                                    <div className="item-hover-underline"></div>
                                </Link>

                            </li>
                            <li>
                                <Link className="nav-item item-underline-container" to="skills" spy={true} smooth={true} duration={500} onSetActive={handleSetActive} activeClass="active">
                                    Skills
                                    <div className="item-hover-underline"></div>

                                </Link>
                            </li>
                            <li>
                                <Link className="nav-item item-underline-container" to="cv">
                                    CV
                                </Link>
                                <div className="item-hover-underline"></div>
                            </li>
                            <li className="item-underline-container">
                                <a className="nav-item scrollto" href="https://blog.galad.ca/" download="">Blog</a>
                                <div className="item-hover-underline"></div>
                            </li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>

                    <RouteLink to={`/contact`} className="get-started-btn">
                        Contact Me
                    </RouteLink>

                </div>
            </header>
            <Link to={''} className="visually-hidden-focusable" href="#hero">Skip Navigation</Link>

        </>

    );
}