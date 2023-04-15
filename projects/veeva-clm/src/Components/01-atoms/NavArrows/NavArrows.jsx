import React, { useContext } from 'react';
import './NavArrows.scss';
import { mainMenu } from '@organisms/Navbar/Navbar';
import { PageContext } from '@/context/PageContext';
import { navigateLocal } from '@organisms/Routing/Link/Link';

export const NavArrows = () => {
  const { currentPage, changePage } = useContext(PageContext);

  let links = { ...mainMenu };
  // Flat links Object to single layer structure.
  links = links.data.flatMap((elem) =>
    elem?.children?.length > 0 || false
      ? [{ name: elem.name, url: elem.url }, ...elem.children]
      : [{ name: elem.name, url: elem.url }],
  );
  // Remove duplicates from different layers.
  links = links.reduce((accumulator, current) => {
    if (!accumulator.find((item) => item.url === current.url)) {
      accumulator.push(current);
    }
    return accumulator;
  }, []);
  // Push Homepage link.
  links.unshift({ name: 'Homepage', url: '/A.0.Home' });
  let currentPosition = links.findIndex(
    (elem) => elem?.url?.includes(currentPage) || false,
  );
  currentPosition = currentPosition === -1 ? 0 : currentPosition;

  const moveToNext = () => {
    if (process.env.NODE_ENV === 'production') {
      window.com.veeva.clm.nextSlide();
    } else {
      const nextPosition =
        links.length - 1 === currentPosition ? 0 : currentPosition + 1;
      const preparedPageName = links[nextPosition].url.replace('/', '');
      navigateLocal(changePage, preparedPageName);
    }
  };

  const moveToPrev = () => {
    if (process.env.NODE_ENV === 'production') {
      window.com.veeva.clm.prevSlide();
    } else {
      const prevPosition = currentPosition == 0 ? links.length - 1 : currentPosition - 1;
      const preparedPageName = links[prevPosition].url.replace('/', '');
      navigateLocal(changePage, preparedPageName);
    }
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
