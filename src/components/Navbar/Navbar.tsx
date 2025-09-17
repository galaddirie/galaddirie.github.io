import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-scroll';
import { useLocation, useNavigate } from 'react-router-dom';
import { useNavigation } from '@src/contexts/NavigationContext';

const SCROLL_THRESHOLD = 10;

interface DotPosition {
  left: string;
  top: string;
  width: string;
  height: string;
}

interface ActiveDotProps {
  dotPosition: DotPosition;
  dotDirection: string;
  handleAnimationEnd: () => void;
}

interface NavItemProps {
  item: {
    name: string;
    refName: string;
    path: string;
    externalLink?: string;
  };
  refs: Record<string, React.RefObject<HTMLElement>>;
  handleSetActive: (to: string) => void;
  onNavClick: () => void;
}

const NAV_ITEMS = [
  { name: 'Home', refName: 'homeRef', path: '' },
  { name: 'Projects', refName: 'projectsRef', path: 'projects' },
  //{ name: 'About', refName: 'aboutRef', path: 'about' },
  { name: 'Skills', refName: 'skillsRef', path: 'skills' },
  { name: 'Contact', refName: 'contactRef', path: 'contact' },
  // { name: 'CV', refName: 'cvRef', path: 'cv' },
  // { name: 'Blog', refName: 'blogRef', path: null, externalLink: 'https://blog.galad.ca/' },
];

function ActiveDot({ dotPosition, dotDirection, handleAnimationEnd }: ActiveDotProps) {
  return (
    <div
      className={`active-dot smear-to-${dotDirection}`}
      style={dotPosition}
      onAnimationEnd={handleAnimationEnd}
    />
  );
}

function NavItem({ item, refs, handleSetActive, onNavClick }: NavItemProps) {
  return (
    <li
      ref={refs[item.refName]}
      className='flex mr-4 px-2 py-2 h-12 items-center justify-center lg:border-b-0 border-b border-gray-400/50 lg:border-b-transparent'
    >
      {item.path !== undefined ? (
        <Link
          className="cursor-pointer flex flex-col font-semibold text-sm font-['lores-9-plus-wide'] uppercase text-black lg:text-white transition-colors duration-300 justify-center text-left hover:text-rose-600 item-underline-container"
          to={item.path}
          spy={true}
          smooth={true}
          duration={500}
          onSetActive={handleSetActive}
          onClick={onNavClick}
          delay={0}
          activeClass='text-rose-600 lg:!text-rose-600'
        >
          {item.name}
          {/* <div className="item-hover-underline"></div> */}
        </Link>
      ) : (
        <a
          className="cursor-pointer flex flex-col font-semibold text-sm font-['lores-9-plus-wide'] uppercase text-black lg:text-white transition-colors duration-300 justify-center text-left hover:text-rose-600 item-underline-container"
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
    contactRef: useRef<HTMLLIElement>(null),
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
  }, [handleSetActive, location.pathname]);

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
        className={`fixed top-0 left-0 right-0 transition-all duration-500 z-[997] pt-4 lg:pt-0 ${scrolled && !isMobileNavOpen ? 'bg-gradient-to-b from-black/0 to-black/50 mix-blend-difference' : ''}`}
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
            >
              galad
              <span
                ref={refs.logoRef}
                className={`transition-colors duration-200 ${activeLink === '' ? 'text-rose-600' : 'text-white'}`}
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
                className='text-white text-xl italic transition-colors duration-75 hover:text-rose-600'
                href='https://www.linkedin.com/in/galad-dirie/'
              >
                <i className='bi bi-linkedin'></i>
              </a>
              <a
                className='text-white text-xl italic transition-colors duration-75 hover:text-rose-600'
                href='https://github.com/galaddirie'
              >
                <i className='bi bi-github'></i>
              </a>
              <a
                className='text-white text-xl italic transition-colors duration-75 hover:text-rose-600'
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
