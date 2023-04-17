import React, { useContext } from 'react';
import { PageContext } from '@/context/PageContext';
import { ISIModalContext } from '@/context/ISIModalContext';

const lsISIModalKey = 'isi_modal';

export const Link = ({ custom, to, children }) => {
  const [context, setContext] = useContext(PageContext);
  const { showModalHandler } = useContext(ISIModalContext);

  const showISIModal = () => {
    const lsISIModal = sessionStorage.getItem(lsISIModalKey);
    if (!lsISIModal) {
      showModalHandler(true);
    }
  };

  const preventReload = (event) => {
    event.preventDefault();

    showISIModal();

    // Remove first and last slash
    const preparedPageName = to.replace(/^\/|\/$/g, '');

    if (process.env.NODE_ENV === 'production') {
      if (preparedPageName === 'previous') {
        window.com.veeva.clm.prevSlide();
      } else if (preparedPageName === 'next') {
        window.com.veeva.clm.nextSlide();
      } else {
        window.com.veeva.clm.gotoSlide(`${preparedPageName}.zip`, '');
      }
    } else {
      window.history.pushState({}, '', preparedPageName);

      const navigationEvent = new PopStateEvent('navigate');
      window.dispatchEvent(navigationEvent);

      setContext(preparedPageName);
      // @todo this should be removed in future it redirect to page instead of
      // showing page.
      // window.location.replace(`veeva-vision/${preparedPageName}/index.html`);
    }
  };

  return (
    <a className={custom} href={to} onClick={preventReload}>
      {children}
    </a>
  );
};

export default Link;
