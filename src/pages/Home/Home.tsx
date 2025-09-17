import React from 'react';
import { Link } from 'react-scroll';
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
        <div className='hero-intro absolute inset-0 flex items-center justify-center px-4 z-10'>
          <div className='w-full  mx-auto'>
            <div className='text-center md:text-left w-full'>
              <div className='flex flex-col text-center md:text-left'>
                <h1
                  className="my-[30px] -mb-[15px] !font-['bd-geminis']  text-[96px] md:text-[150px] leading-[0.84] md:-tracking-[7px] text-white uppercase"
                  style={{ textShadow: '0px 5px 5px #000000' }}
                >
                  galad dirie
                  <span className='text-rose-600 hidden md:inline'>.</span>
                </h1>
                <h2
                  className="mt-2 mb-0 font-['lores-9-plus-wide'] text-2xl font-normal uppercase text-white/90"
                  style={{ textShadow: '0px 5px 5px #000000' }}
                >
                  full-stack developer
                </h2>
                <div className='mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start cursor-pointer'>
                  <Link
                    to='projects'
                    className='inline-block text-white rounded px-8 py-4 border-2 border-rose-600 bg-rose-600 transition-colors duration-300 hover:bg-black hover:text-white text-base font-semibold uppercase tracking-wide'
                  >
                    See Projects
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
