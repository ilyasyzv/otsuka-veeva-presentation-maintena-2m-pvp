import React, { Fragment, useContext } from 'react';
import './UpperSubNavBar.scss';
import { PageContext } from '@/context/PageContext';
import { mainMenu } from '@organisms/Navbar/Navbar';

export const UpperSubNavBar = ({ tabs }) => {
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
  const isAppropriateLink = currentPage === 'A.2.1.1_S_Overview';

  return (
    <></>
    // { isAppropriateLink && 
    //   <ul className='upper_nav_bar__submenu'>
    //     <li key='1' />
    //     <li key='2' className='active' />
    //     <li key='3' />
    //     {/* {tabs.map((link) => (
    //       <li key={link.url} className='active' />
    //     ))} */}
    //   </ul>
    // }
  );
};

export default UpperSubNavBar;
