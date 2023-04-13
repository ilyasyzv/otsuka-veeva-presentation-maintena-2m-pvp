import React, { useContext } from 'react';
import Navbar from '@/Components/03-organisms/Navbar/Navbar';
import NavArrows from '@/Components/01-atoms/NavArrows/NavArrows';
import { PageContext } from '@/context/PageContext';

import './Layout.scss';

const Layout = ({ children = <>Loading</> }) => {
  const { currentPage } = useContext(PageContext);

  return (
    <div
      className={`page page--${String(currentPage)
        .replace(/\./g, '')
        .toLowerCase()}`}
      data-currentpage={String(currentPage)}
    >
      <div className='page__wrapper'>
        <div className='left-pane'>
          <span className='left-pane__pager' />
          <Navbar />
        </div>
        <div className='right-pane'>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
