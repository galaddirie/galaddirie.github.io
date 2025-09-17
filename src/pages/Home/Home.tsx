import React from 'react';
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import './home-effects.css';

import HeroVideo from '@src/assets/video/video.mp4';
import HeroImage from '@src/assets/img/hero.jpg';

export function Home() {
  // while video is loading, show the image
  const [isVideoLoaded, setIsVideoLoaded] = React.useState(false);

  const onLoadedData = () => {
    setIsVideoLoaded(true);
  };

  const setThumbnailStye = () => {
    return isVideoLoaded ? { display: 'none' } : { display: 'block' };
  };

  return (
    <section id='hero' className='w-full overflow-hidden'>
      <div className='hero-container relative text-center h-screen'>
        <div className='video-container relative overflow-hidden w-full h-full bg-black'>
          <img
            src={HeroImage}
            alt='hero'
            className='lozad heroVideo video-thumbnail'
            style={setThumbnailStye()}
          />
          <video
            autoPlay
            muted
            loop
            playsInline
            className='lozad heroVideo'
            onLoadedData={onLoadedData}
            poster={HeroImage}
          >
            <source src={HeroVideo} type='video/mp4' />
          </video>
        </div>
      </div>
      <div className='hero-intro mx-auto px-4 flex items-center h-0 relative -top-[65vh] md:-top-[90vh]'>
        <div className='w-full'>
          <div className='lg:mx-auto text-center lg:text-left w-full flex items-center'>
            <div className='flex flex-col text-center md:text-left'>
              <h1
                className="m-0 font-['bd-geminis'] font-normal text-[96px] md:text-[150px] leading-[0.84] -mb-4 mt-8 -tracking-[7px] text-white uppercase"
                style={{ textShadow: '0px 5px 5px #000000' }}
              >
                galad dirie
                <span className='text-red-600 hidden md:inline'>.</span>
              </h1>
              <h2
                className="mt-2 mb-0 font-['lores-9-plus-wide'] text-2xl font-normal uppercase text-white/90"
                style={{ textShadow: '0px 5px 5px #000000' }}
              >
                full-stack developer
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
