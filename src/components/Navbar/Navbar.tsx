import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-scroll';
import { useLocation, useNavigate } from 'react-router-dom';
import { useNavigation } from '@src/contexts/NavigationContext';

// Stylesheets: library, global, component-specific
import "@assets/css/bootstrap.min.css";
import "@src/index.scss";
import "./Navbar.scss";

const SCROLL_THRESHOLD = 10;

const NAV_ITEMS = [
    { name: 'Projects', refName: 'projectsRef', path: 'projects' },
    // { name: 'About', refName: 'aboutRef', path: 'about' },
    { name: 'Skills', refName: 'skillsRef', path: 'skills' },
    { name: 'CV', refName: 'cvRef', path: 'cv' },
    { name: 'Blog', refName: 'blogRef', path: null, externalLink: 'https://blog.galad.ca/' },
];

function ActiveDot({dotPosition, dotDirection, handleAnimationEnd }: any) {
    return (
        <div  
            className={`active-dot smear-to-${dotDirection}`} 
            style={dotPosition} 
            onAnimationEnd={handleAnimationEnd}
        />
        
    )
}

function ActiveDotController({ refs, activeLink }: any) {
    const [dotPosition, setDotPosition] = useState({ left: '0%', top: '0%' });
    const [dotDirection, setDotDirection] = useState('');


    const handleAnimationEnd = () => {
        //setDotDirection(''); // Reset the direction so the class can be reapplied
    }

    const calculateHalfOfElement = (element: HTMLElement | null): string => {
        if (!element || !refs.navRef.current) return '0%';
        
        const navRect = refs.navRef.current.getBoundingClientRect();
        const rect = element.getBoundingClientRect();
        
        return `${(rect.left + rect.width / 2 - navRect.left) / navRect.width * 100}%`;
    }

    const getActivePosition = (to: string): string => {
        const foundNavItem = NAV_ITEMS.find(item => item.path === to);
        const refName = foundNavItem?.refName;
        
        return refName ? calculateHalfOfElement(refs[refName]?.current) : '0%';
    }

    const computeDotPosition = (activeLink: string) => {
        const navRect = refs.navRef.current?.getBoundingClientRect();

        if (!navRect) return;
        
        const logoTop = refs.logoRef.current?.getBoundingClientRect().top ?? 0;
        const top = logoTop + navRect.top;

        let leftPosition = '0%';
        let topPosition = `${top + 5}px`;
        
        if (activeLink !== '') {
            leftPosition = getActivePosition(activeLink);
            topPosition = `${top + 10}px`;
        } else if (refs.logoRef.current) {
            leftPosition = `${refs.logoRef.current.getBoundingClientRect().left - navRect.left}px`;
        }

        setDotPosition({ left: leftPosition, top: topPosition });

        // if dotposition.left is does not exist, set it such that dot direction is right

        
        const newDirection = parseFloat(leftPosition) > parseFloat(dotPosition.left) ? 'right' : 'left';
        if (newDirection === dotDirection) {
            setDotDirection('');
            setTimeout(() => setDotDirection(newDirection), 10);
        } else {
            setDotDirection(newDirection);
        }
    }

    useEffect(() => {
        computeDotPosition(activeLink);
    }, [activeLink]);

    return (
        <ActiveDot dotPosition={dotPosition} dotDirection={dotDirection} handleAnimationEnd={handleAnimationEnd} />
    )
}  


function NavItem ({ item, refs, handleSetActive, onNavClick }: any) {
    return (
        <li key={item.name} ref={refs[item.refName]}>
            {item.path ? (
            <Link
            className="nav-item item-underline-container"
            to={item.path}
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={handleSetActive}
            onClick={onNavClick}
            delay={0}
            activeClass="active"
            >
            {item.name}
            {/* <div className="item-hover-underline"></div> */}
            </Link>
            ) : (
            <a className="nav-item item-underline-container" href={item.externalLink} target="_blank" rel="noopener noreferrer">
                {item.name}
            </a>
            )}
        </li>
    )
}

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [resetDotAnimation, setResetDotAnimation] = useState(0);
    const [activeLink, setActiveLink] = useState('');
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);


    const { setPreventNavUpdate } = useNavigation();
    const location = useLocation();
    const navigate = useNavigate();
  
    const refs = {
      logoRef: useRef<HTMLSpanElement>(null),
      navRef: useRef<HTMLDivElement>(null),
      projectsRef: useRef<HTMLLIElement>(null),
      aboutRef: useRef<HTMLLIElement>(null),
      skillsRef: useRef<HTMLLIElement>(null),
      cvRef: useRef<HTMLLIElement>(null),
      blogRef: useRef<HTMLLIElement>(null)
    };
  
    const handleSetActive = (to: string) => {
        setPreventNavUpdate(true);
        navigate(`${to}`);
        setActiveLink(to);
    }

    const toggleMobileNav = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
    };
    
    const onNavClick = () => {
        setIsMobileNavOpen(false);
    };

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > SCROLL_THRESHOLD);
        };

        window.addEventListener('scroll', onScroll);
        handleSetActive(location.pathname.replace(/^\/+/, ''));
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    useEffect(() => {
        //check if mobile, update on resize
        const onResize = () => {
            setIsMobile(window.innerWidth <= 992);
        };
        window.addEventListener('resize', onResize);
        onResize();
        return () => {
            window.removeEventListener('resize', onResize);
        };
    }, []);
    
    return (
        <>
            <header id="header" className={`fixed-top ${scrolled ? 'sticky-navbar' : ''}`}>
            <div className="container d-flex align-items-center justify-content-lg-between">
                <h1 className="logo me-auto me-lg-0">
                <Link className="nav-item" to="" spy={true} smooth={true} duration={500} onSetActive={handleSetActive} activeClass="active">
                    GD<span ref={refs.logoRef}> 
                    {isMobile && (
                        '.'
                    )}
                    </span>
                </Link>
                </h1>

                <nav id="navbar" className={`navbar order-last order-lg-0 ${isMobileNavOpen ? 'navbar-mobile' : ''} `} ref={refs.navRef}>
                    <ul>
                        {isMobileNavOpen && (
                            <li>
                                <Link
                                className="nav-item item-underline-container"
                                to=""
                                spy={true}
                                smooth={true}
                                duration={500}
                                onSetActive={handleSetActive}
                                onClick={onNavClick}
                                delay={0}
                                activeClass="active"
                                >
                                Home
                                </Link>
                            </li>
                        )}
                        {NAV_ITEMS.map(item => (
                            <NavItem item={item} refs={refs} handleSetActive={handleSetActive} onNavClick={onNavClick} />
                        ))}
                    </ul>
                    { (!isMobile && !isMobileNavOpen) && (
                        <ActiveDotController refs={refs} activeLink={activeLink} />
                    )}
                    <i 
                        className={`bi ${isMobileNavOpen ? 'bi-x' : 'bi-list'} mobile-nav-toggle`} 
                        onClick={toggleMobileNav}
                    ></i>
                </nav>
                {/* <Link to={`/contact`} className="get-started-btn">Contact Me</Link> */}
                <a className="get-started-btn" href="mailto:galad.work@gmail.com">Contact Me</a>
            </div>
            </header>
            <Link to={''} className="visually-hidden-focusable" href="#hero">Skip Navigation</Link>
        </>
    );
}