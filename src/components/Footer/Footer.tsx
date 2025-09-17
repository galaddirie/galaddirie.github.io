import React from 'react';

export function Footer() {
  return (
    <footer
      id='footer'
      className='relative bg-black text-white text-sm pt-12 pb-12'
    >
      <div className='h-px bg-transparent'></div>
      <div className='mx-auto px-4'>
        <div className='copyright text-center pt-8'>
          <span>{new Date().getFullYear()}</span> &copy;{' '}
          <strong>
            <span>Galad Dirie</span>
          </strong>
          .
          {/* <div>
                    Original 3d model and Animation by <a href="https://sketchfab.com/3d-models/space-ame-camping-amelia-watson-hololive-56ede5352988499d92892fed6061388e">Seafoam</a>
                    </div> */}
        </div>
        <div className='credits pt-2.5 text-center text-xs text-white'></div>
      </div>
    </footer>
  );
}
