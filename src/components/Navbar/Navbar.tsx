import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-scroll';
import { useLocation, useNavigate } from 'react-router-dom';
import { useNavigation } from '@src/contexts/NavigationContext';

// Custom animations CSS
import './navbar-animations.css';

const SCROLL_THRESHOLD = 10;

const NAV_ITEMS = [
  { name: 'Home', refName: 'homeRef', path: '' },
  { name: 'Projects', refName: 'projectsRef', path: 'projects' },
  { name: 'About', refName: 'aboutRef', path: 'about' },
  { name: 'Skills', refName: 'skillsRef', path: 'skills' },
  { name: 'Contact', refName: 'contactRef', path: 'contact' },
  // { name: 'CV', refName: 'cvRef', path: 'cv' },
  // { name: 'Blog', refName: 'blogRef', path: null, externalLink: 'https://blog.galad.ca/' },
];

function ActiveDot({ dotPosition, dotDirection, handleAnimationEnd }: any) {
  return (
    <div
      className={`active-dot smear-to-${dotDirection}`}
      style={dotPosition}
      onAnimationEnd={handleAnimationEnd}
    />
  );
}

function ActiveDotController({ refs, activeLink }: any) {
  const [dotPosition, setDotPosition] = useState({
    left: '-0',
    top: '32px',
    width: '2px',
    height: '2px',
  });
  const [dotDirection, setDotDirection] = useState('');

  const handleAnimationEnd = () => {
    //setDotDirection(''); // Reset the direction so the class can be reapplied
  };

  const calculateHalfOfElement = (element: HTMLElement | null): string => {
    if (!element || !refs.navRef.current) return '0%';

    const navRect = refs.navRef.current.getBoundingClientRect();
    const rect = element.getBoundingClientRect();

    return `${((rect.left + rect.width / 2 - navRect.left) / navRect.width) * 100}%`;
  };

  const getActivePosition = (to: string): string => {
    const foundNavItem = NAV_ITEMS.find(item => item.path === to);
    const refName = foundNavItem?.refName;

    return refName ? calculateHalfOfElement(refs[refName]?.current) : '0%';
  };

  const computeDotPosition = (activeLink: string) => {
    const navRect = refs.navRef.current?.getBoundingClientRect();

    if (!navRect) return;

    const logoTop = refs.logoRef.current?.getBoundingClientRect().top ?? 0;
    const top = logoTop + navRect.top;

    let leftPosition = '0%';
    let topPosition = `${top + 2}px`;
    let dotSize = '4px';

    if (activeLink !== '') {
      leftPosition = getActivePosition(activeLink);
      topPosition = `${top + 10}px`;
      dotSize = '5px';
    } else if (refs.logoRef.current) {
      leftPosition = `${refs.logoRef.current.getBoundingClientRect().left - navRect.left + 5}px`;
    }

    setDotPosition({
      left: leftPosition,
      top: topPosition,
      width: dotSize,
      height: dotSize,
    });

    // if dotposition.left is does not exist, set it such that dot direction is right

    const newDirection =
      parseFloat(leftPosition) > parseFloat(dotPosition.left)
        ? 'right'
        : 'left';
    if (newDirection === dotDirection) {
      setDotDirection('');
      setTimeout(() => setDotDirection(newDirection), 10);
    } else {
      setDotDirection(newDirection);
    }
  };

  useEffect(() => {
    computeDotPosition(activeLink);
  }, [activeLink]);

  return (
    <ActiveDot
      dotPosition={dotPosition}
      dotDirection={dotDirection}
      handleAnimationEnd={handleAnimationEnd}
    />
  );
}

function NavItem({ item, refs, handleSetActive, onNavClick }: any) {
  return (
    <li
      ref={refs[item.refName]}
      className='flex mr-4 px-2 py-2 h-12 items-center justify-center lg:border-b-0 border-b border-gray-400/50 lg:border-b-transparent'
    >
      {item.path !== undefined ? (
        <Link
          className="cursor-pointer flex flex-col font-semibold text-sm font-['lores-9-plus-wide'] uppercase text-black lg:text-white transition-colors duration-300 justify-center text-left hover:text-red-600 item-underline-container"
          to={item.path}
          spy={true}
          smooth={true}
          duration={500}
          onSetActive={handleSetActive}
          onClick={onNavClick}
          delay={0}
          activeClass='text-red-600'
        >
          {item.name}
          {/* <div className="item-hover-underline"></div> */}
        </Link>
      ) : (
        <a
          className="cursor-pointer flex flex-col font-semibold text-sm font-['lores-9-plus-wide'] uppercase text-black lg:text-white transition-colors duration-300 justify-center text-left hover:text-red-600 item-underline-container"
          href={item.externalLink}
          target='_blank'
          rel='noopener noreferrer'
        >
          {item.name}
        </a>
      )}
    </li>
  );
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
    homeRef: useRef<HTMLLIElement>(null),
    projectsRef: useRef<HTMLLIElement>(null),
    aboutRef: useRef<HTMLLIElement>(null),
    skillsRef: useRef<HTMLLIElement>(null),
    cvRef: useRef<HTMLLIElement>(null),
    blogRef: useRef<HTMLLIElement>(null),
  };

  const handleSetActive = (to: string) => {
    setPreventNavUpdate(true);
    navigate(`${to}`, { replace: true });
    setActiveLink(to);
  };

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
      <header
        id='header'
        className={`fixed top-0 left-0 right-0 transition-all duration-500 z-[997] ${scrolled ? 'bg-gradient-to-b from-black/0 to-black/50 mix-blend-difference' : ''}`}
      >
        <div className=' mx-auto px-4 flex items-center justify-between lg:justify-between'>
          <h1 className='text-2xl font-bold tracking-wider leading-none mr-auto lg:mr-0 lowercase'>
            <Link
              className='cursor-pointer text-white transition-colors duration-200'
              to=''
              spy={true}
              smooth={true}
              duration={500}
              onSetActive={handleSetActive}
              activeClass='text-red-600'
            >
              galad
              <span
                ref={refs.logoRef}
                className={`transition-colors duration-200 ${activeLink === '' ? 'text-red-600' : 'text-white'}`}
              >
                {isMobile && '.'}
              </span>
            </Link>
          </h1>

          <nav
            id='navbar'
            className={`${isMobileNavOpen ? 'fixed inset-0 bg-black z-[999] transition-all duration-300' : 'relative'} order-last lg:order-none`}
            ref={refs.navRef}
          >
            <ul
              className={`${isMobileNavOpen ? 'block absolute top-14 right-4 bottom-4 left-4 p-2 bg-white overflow-y-auto transition-all duration-300' : 'hidden lg:flex'} m-0 p-0 list-none items-center`}
            >
              {isMobileNavOpen && (
                <li className='flex mr-4 px-2 py-2 h-12 items-center justify-center lg:border-b lg:border-gray-400/50'>
                  <Link
                    className="cursor-pointer flex font-semibold text-sm font-['lores-9-plus-wide'] uppercase text-black lg:text-white transition-colors duration-300 justify-center text-left hover:text-red-600"
                    to=''
                    spy={true}
                    smooth={true}
                    duration={500}
                    onSetActive={handleSetActive}
                    onClick={onNavClick}
                    delay={0}
                    activeClass='text-red-600'
                  >
                    Home
                  </Link>
                </li>
              )}
              {NAV_ITEMS.map(item => (
                <NavItem
                  key={item.name}
                  item={item}
                  refs={refs}
                  handleSetActive={handleSetActive}
                  onNavClick={onNavClick}
                />
              ))}
            </ul>
            {/* {(!isMobile && !isMobileNavOpen) && (
                            <ActiveDotController refs={refs} activeLink={activeLink} />
                        )} */}
            <i
              className={`bi ${isMobileNavOpen ? 'bi-x' : 'bi-list'} text-white text-3xl cursor-pointer leading-none transition-all duration-500 lg:hidden ${isMobileNavOpen ? 'absolute top-4 right-4' : 'block'}`}
              onClick={toggleMobileNav}
            ></i>
          </nav>
          {!isMobile && (
            <div className='flex items-center justify-center lg:justify-end gap-3'>
              <a
                className='text-white text-xl italic transition-colors duration-75 hover:text-red-600'
                href='https://www.linkedin.com/in/galad-dirie/'
              >
                <i className='bi bi-linkedin'></i>
              </a>
              <a
                className='text-white text-xl italic transition-colors duration-75 hover:text-red-600'
                href='https://github.com/galaddirie'
              >
                <i className='bi bi-github'></i>
              </a>
              <a
                className='text-white text-xl italic transition-colors duration-75 hover:text-red-600'
                href='mailto:hello@galad.ca'
              >
                <i className='bi bi-envelope'></i>
              </a>
            </div>
          )}
        </div>
      </header>
      <Link
        to={''}
        className='sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[1000] focus:bg-blue-600 focus:text-white focus:px-3 focus:py-2 focus:rounded'
        href='#hero'
      >
        Skip Navigation
      </Link>
    </>
  );
}
