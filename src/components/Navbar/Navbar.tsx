import React, { useState, useEffect } from 'react';
import { useNavigation } from '@src/contexts/NavigationContext';

const SCROLL_THRESHOLD = 10;

interface NavItemProps {
  item: {
    name: string;
    path: string;
    externalLink?: string;
  };
  isActive: boolean;
  onNavClick: (path: string) => void;
  closeMobileNav: () => void;
}

const NAV_ITEMS = [
  { name: 'Home', path: '' },
  { name: 'Projects', path: 'projects' },
  { name: 'Skills', path: 'skills' },
  { name: 'Contact', path: 'contact' },
];

function NavItem({ item, isActive, onNavClick, closeMobileNav }: NavItemProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (item.externalLink) {
      window.open(item.externalLink, '_blank');
    } else {
      onNavClick(item.path);
      closeMobileNav();
    }
  };

  return (
    <li className='flex mr-4 px-2 py-2 h-12 items-center justify-center lg:border-b-0 border-b border-gray-400/50 lg:border-b-transparent'>
      <a
        className={`cursor-pointer flex flex-col font-semibold text-sm font-['lores-9-plus-wide'] uppercase transition-colors duration-300 justify-center text-left hover:text-rose-600 item-underline-container ${
          isActive
            ? 'text-rose-600 lg:!text-rose-600'
            : 'text-black lg:text-white'
        }`}
        href={`#${item.path || 'hero'}`}
        onClick={handleClick}
      >
        {item.name}
      </a>
    </li>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { activeSection, scrollToSection } = useNavigation();

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
  };

  const handleNavClick = (path: string) => {
    scrollToSection(path);
  };

  // Handle scroll effect for navbar styling
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  // Handle responsive behavior
  useEffect(() => {
    const onResize = () => {
      setIsMobile(window.innerWidth <= 992);
    };

    window.addEventListener('resize', onResize);
    onResize();

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  // Close mobile nav when screen becomes desktop size
  useEffect(() => {
    if (!isMobile && isMobileNavOpen) {
      setIsMobileNavOpen(false);
    }
  }, [isMobile, isMobileNavOpen]);

  return (
    <>
      <header
        id='header'
        className={`fixed top-0 left-0 right-0 transition-all duration-500 z-[997] pt-4 lg:pt-0 ${
          scrolled && !isMobileNavOpen
            ? 'bg-gradient-to-b from-black/0 to-black/50 mix-blend-difference'
            : ''
        }`}
      >
        <div className='mx-auto px-4 flex items-center justify-between lg:justify-between'>
          <h1 className='text-2xl font-bold tracking-wider leading-none mr-auto lg:mr-0 lowercase'>
            <a
              className='cursor-pointer text-white transition-colors duration-200'
              href='#hero'
              onClick={e => {
                e.preventDefault();
                handleNavClick('');
              }}
            >
              galad
              <span
                className={`transition-colors duration-200 ${
                  activeSection === '' ? 'text-rose-600' : 'text-white'
                }`}
              >
                {isMobile && '.'}
              </span>
            </a>
          </h1>

          <nav
            id='navbar'
            className={`${
              isMobileNavOpen
                ? 'fixed inset-0 bg-black z-[999] transition-all duration-300'
                : 'relative'
            } order-last lg:order-none`}
          >
            <ul
              className={`${
                isMobileNavOpen
                  ? 'block absolute top-14 right-4 bottom-4 left-4 p-2 bg-white overflow-y-auto transition-all duration-300'
                  : 'hidden lg:flex'
              } m-0 p-0 list-none items-center`}
            >
              {NAV_ITEMS.map(item => (
                <NavItem
                  key={item.name}
                  item={item}
                  isActive={activeSection === item.path}
                  onNavClick={handleNavClick}
                  closeMobileNav={closeMobileNav}
                />
              ))}
            </ul>

            <i
              className={`bi ${
                isMobileNavOpen ? 'bi-x' : 'bi-list'
              } text-white text-3xl cursor-pointer leading-none transition-all duration-500 lg:hidden ${
                isMobileNavOpen ? 'absolute top-4 right-4' : 'block'
              }`}
              onClick={toggleMobileNav}
            ></i>
          </nav>

          {!isMobile && (
            <div className='flex items-center justify-center lg:justify-end gap-3'>
              <a
                className='text-white text-xl italic transition-colors duration-75 hover:text-rose-600'
                href='https://www.linkedin.com/in/galad-dirie/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='bi bi-linkedin'></i>
              </a>
              <a
                className='text-white text-xl italic transition-colors duration-75 hover:text-rose-600'
                href='https://github.com/galaddirie'
                target='_blank'
                rel='noopener noreferrer'
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

      <a
        className='sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[1000] focus:bg-blue-600 focus:text-white focus:px-3 focus:py-2 focus:rounded'
        href='#hero'
        onClick={e => {
          e.preventDefault();
          handleNavClick('');
        }}
      >
        Skip Navigation
      </a>
    </>
  );
}
