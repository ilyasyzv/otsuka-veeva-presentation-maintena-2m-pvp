import React, { useContext } from 'react';
import './NavArrows.scss';
import { PageContext } from '@/context/PageContext';
import { navigateLocal } from '@organisms/Routing/Link/Link';
import { mainMenu, flatLinksList } from '@/utils/processNavigation';
import { ISIModalContext } from '@/context/ISIModalContext';

const lsISIModalKey = 'isi_modal';

export const NavArrows = () => {
  const { currentPage, changePage } = useContext(PageContext);
  const { setIsiModalParams } = useContext(ISIModalContext);

  const { currentPosition, paths } = flatLinksList(
    { ...mainMenu },
    currentPage,
  );

  const moveToNext = () => {
    const lsISIModal = sessionStorage.getItem(lsISIModalKey);
    const nextPosition =
      paths.length - 1 === currentPosition ? 0 : currentPosition + 1;
    const preparedPageName = paths[nextPosition].url.replace('/', '');

    if (!lsISIModal) {
      setIsiModalParams({
        show: true,
        pageName: preparedPageName,
      });
    } else if (process.env.NODE_ENV === 'production') {
      window.com.veeva.clm.nextSlide();
    } else {
      navigateLocal(changePage, preparedPageName);
    }
  };

  const moveToPrev = () => {
    const lsISIModal = sessionStorage.getItem(lsISIModalKey);
    const prevPosition =
      currentPosition === 0 ? paths.length - 1 : currentPosition - 1;
    const preparedPageName = paths[prevPosition].url.replace('/', '');

    if (!lsISIModal) {
      setIsiModalParams({
        show: true,
        pageName: preparedPageName,
      });
    } else if (process.env.NODE_ENV === 'production') {
      window.com.veeva.clm.prevSlide();
    } else {
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
