import React, { useState, useEffect } from "react";

import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

interface ScrollSpyProps {
    children: React.ReactNode;
}
export function ScrollSpy({ children }: ScrollSpyProps): JSX.Element {

    useEffect(() => {
        console.log("scrollspy init");
        Events.scrollEvent.register('begin', function (to: string, element: HTMLElement) {
            console.log("begin", to, element);
        });

        Events.scrollEvent.register('end', function (to: string, element: HTMLElement) {
            console.log("end", to, element);
        });

        scrollSpy.update();

        return () => {
            Events.scrollEvent.remove('begin');
            Events.scrollEvent.remove('end');
        }
    }, [])




    return (
        <>
            {React.Children.map(children, (child: any) =>
                React.cloneElement(child),
            )}
        </>


    )
}