import React, { useContext } from 'react';
import Navbar from '@/Components/03-organisms/Navbar/Navbar';
import NavArrows from '@/Components/01-atoms/NavArrows/NavArrows';
import { PageContext } from '@/context/PageContext';
import UpperNavBar from '@organisms/UpperNavBar/UpperNavBar';
import { mainMenu } from '@organisms/Navbar/Navbar';

import './Layout.scss';

export const Layout = ({ children = <>Loading</> }) => {
  const { currentPage } = useContext(PageContext);
  const filterLink = (link) => {
    if (link?.url?.includes(currentPage) || false) {
      return true;
    }
    if (link?.children?.length > 0 || false) {
      const found = link.children.filter(filterLink);
      return found.length > 0;
    }
    return false;
  };
  let subMenu = mainMenu.data.find(filterLink);
  subMenu = subMenu?.children || false;

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
