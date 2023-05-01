import React, { useState, useEffect } from "react";

import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { useLocation, useNavigate } from 'react-router-dom';
interface ScrollSpyProps {
    children: React.ReactNode;
}

export function ScrollSpy({ children }: ScrollSpyProps): JSX.Element {
    const [scrolling, setScrolling] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();



    useEffect(() => {
        Events.scrollEvent.register('begin', function (to: string, element: HTMLElement) {
            console.log("begin", to, element);
            navigate(`${to}`);
            setScrolling(true);

        });

        Events.scrollEvent.register('end', function (to: string, element: HTMLElement) {
            console.log("end", to, element);
            navigate(`${to}`);

        });

        // go to the current location
        const hash = location.pathname.replace(/^\/+/, '');;
        //remove the leading slash
        if (hash !== '') {
            console.log(hash);
            scroller.scrollTo(hash, {
                duration: 500,
                delay: 0,
                smooth: 'easeInOutQuart',
                offset: -50
            })
        }

        scrollSpy.update();

        return () => {
            Events.scrollEvent.remove('begin');
            Events.scrollEvent.remove('end');
        }
    }, [])




    return (
        <>
            {React.Children.map(children, (child: any) =>
                React.cloneElement(child)
            )}
        </>


    )
}