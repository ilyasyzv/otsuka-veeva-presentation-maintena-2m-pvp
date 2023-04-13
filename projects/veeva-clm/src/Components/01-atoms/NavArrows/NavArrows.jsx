import React from 'react';
import './NavArrows.scss';

export const NavArrows = () => {
  const moveToNext = () => {
    console.log('move to next');
    window.com.veeva.clm.nextSlide();
  };

  const moveToPrev = () => {
    console.log('move to prev');
    window.com.veeva.clm.prevSlide();
  };

  return (
    <div className='arrows-nav'>
      <button type='button' onClick={moveToPrev} className='arrows-nav__prev'>
        Prev
      </button>
      <button type='button' onClick={moveToNext} className='arrows-nav__next'>
        Next
      </button>
    </div>
  );
};

export default NavArrows;
