import React, { FC, MouseEvent } from 'react';

interface ScrollingLinkProps {
  to: string;
  children: React.ReactNode;
}

const smoothScrollTo = (elementId: string): void => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const ScrollingLink: FC<ScrollingLinkProps> = ({ to, children }) => {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>): void => {
    event.preventDefault();
    window.history.replaceState({}, '', to);
    smoothScrollTo(to.slice(1)); // Remove the leading "/"
  };

  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  );
};

export default ScrollingLink;
