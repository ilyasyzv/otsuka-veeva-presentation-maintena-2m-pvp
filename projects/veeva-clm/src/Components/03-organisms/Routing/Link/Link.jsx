import React, { useContext } from 'react';
import { PageContext } from '@/context/PageContext';
import useShowModalISI from '@/hooks/useShowModalISI';

export const navigateLocal = (changePage, preparedPageName) => {
  window.history.pushState({}, '', preparedPageName);

  const navigationEvent = new PopStateEvent('navigate');
  window.dispatchEvent(navigationEvent);

  changePage(preparedPageName);
};

export const navigateVeeva = (preparedPageName) => {
  if (preparedPageName === 'previous') {
    window.com.veeva.clm.prevSlide();
  } else if (preparedPageName === 'next') {
    window.com.veeva.clm.nextSlide();
  } else {
    window.com.veeva.clm.gotoSlide(`${preparedPageName}.zip`, '');
  }
};

export const Link = ({ custom, to, children }) => {
  const { changePage } = useContext(PageContext);
  const setIsShowISIModal = useShowModalISI();

  const preventReload = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsShowISIModal(true);

    // Remove first and last slash
    const preparedPageName = to.replace(/^\/|\/$/g, '');

    if (process.env.NODE_ENV === 'production') {
      navigateVeeva(preparedPageName);
    } else {
      navigateLocal(changePage, preparedPageName);
      // @todo this should be removed in future it redirect to page instead of
      // showing page.
      // window.location.replace(`veeva-vision/${preparedPageName}/index.html`);
    }
  };

  return (
    <a onClick={preventReload} className={custom} href={to}>
      {children}
    </a>
  );
};

export default Link;
