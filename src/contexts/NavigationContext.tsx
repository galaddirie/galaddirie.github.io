import React, { createContext, useContext, useEffect, useState } from 'react';
import { Events, scroller, scrollSpy } from 'react-scroll';
import { useLocation, useNavigate } from 'react-router-dom';

interface NavigationContextProps {
  preventNavUpdate: boolean;
  setPreventNavUpdate: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavigationContext = createContext<NavigationContextProps | undefined>(
  undefined
);

interface NavigationProviderProps {
  children: React.ReactNode;
}

export const NavigationProvider: React.FC<NavigationProviderProps> = ({
  children,
}) => {
  const [preventNavUpdate, setPreventNavUpdate] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    Events.scrollEvent.register('begin', (_to: string) => {
      setPreventNavUpdate(true);
    });

    Events.scrollEvent.register('end', (to: string) => {
      setPreventNavUpdate(false);
      if (!preventNavUpdate && to !== location.pathname.replace(/^\/+/, '')) {
        navigate(`/${to}`, { replace: true });
      }
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, [preventNavUpdate, location.pathname, navigate]);

  useEffect(() => {
    const hash = location.pathname.replace(/^\/+/, '');
    if (hash) {
      scroller.scrollTo(hash, {
        duration: 100,
        delay: 0,
        smooth: 'linear',
      });
    }
  }, [location.pathname]);

  useEffect(() => {
    console.log(`preventNavUpdate: ${preventNavUpdate}`);
  }, [preventNavUpdate]);

  return (
    <NavigationContext.Provider
      value={{ preventNavUpdate, setPreventNavUpdate }}
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
