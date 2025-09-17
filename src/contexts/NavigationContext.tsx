import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface NavigationContextProps {
  activeSection: string;
  isScrolling: boolean;
  scrollToSection: (section: string) => void;
}

const NavigationContext = createContext<NavigationContextProps | undefined>(
  undefined
);

interface NavigationProviderProps {
  children: React.ReactNode;
}

// Section IDs that correspond to your navigation
const SECTIONS = ['', 'projects', 'skills', 'contact'];

export const NavigationProvider: React.FC<NavigationProviderProps> = ({
  children,
}) => {
  const [activeSection, setActiveSection] = useState('');
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const isManualScrollRef = useRef(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Function to scroll to a section
  const scrollToSection = (section: string) => {
    isManualScrollRef.current = true;
    const element = document.getElementById(section || 'hero');

    if (element) {
      const navbarHeight = 80; // Adjust based on your navbar height
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition =
        section === '' ? 0 : elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      // Update URL without triggering scroll
      navigate(`/${section}`, { replace: true });
      setActiveSection(section);

      // Reset manual scroll flag after animation completes
      setTimeout(() => {
        isManualScrollRef.current = false;
      }, 800);
    }
  };

  // Handle scroll events to update active section
  useEffect(() => {
    const handleScroll = () => {
      // Skip if we're in a manual scroll
      if (isManualScrollRef.current) return;

      setIsScrolling(true);

      // Clear existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Set scrolling to false after scroll ends
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 150);

      // Find the current section based on scroll position
      const scrollPosition = window.scrollY + 100; // Offset for detection
      let currentSection = '';

      for (const sectionId of SECTIONS) {
        const element = document.getElementById(sectionId || 'hero');
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const elementTop = top + window.scrollY;
          const elementBottom = bottom + window.scrollY;

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            currentSection = sectionId;
            break;
          }
        }
      }

      // Update active section and URL if changed
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
        navigate(`/${currentSection}`, { replace: true });
      }
    };

    // Throttle scroll handler
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', throttledScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [activeSection, navigate]);

  // Handle browser back/forward navigation
  useEffect(() => {
    const section = location.pathname.replace(/^\/+/, '');
    if (section !== activeSection && !isManualScrollRef.current) {
      scrollToSection(section);
    }
  }, [location.pathname, scrollToSection, activeSection]);

  return (
    <NavigationContext.Provider
      value={{ activeSection, isScrolling, scrollToSection }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
