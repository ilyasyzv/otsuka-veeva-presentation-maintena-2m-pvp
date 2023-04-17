import React, { useContext } from 'react';
import Navbar from '@organisms/Navbar/Navbar';
import NavArrows from '@/Components/01-atoms/NavArrows/NavArrows';
import { PageContext } from '@/context/PageContext';
import UpperNavBar from '@organisms/UpperNavBar/UpperNavBar';
import { findSubMenu, mainMenu } from '@/utils/processNavigation';

import './Layout.scss';

export const Layout = ({ children = <>Loading</> }) => {
  const { currentPage } = useContext(PageContext);
  const subMenu = findSubMenu(currentPage, mainMenu.data, 0);

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
        {subMenu && <UpperNavBar tabs={subMenu} />}
        <NavArrows />
      </div>
    </div>
  );
};

export default Layout;
