import React, { useContext, useEffect, useState } from 'react';
import './Layout.scss';
import Navbar from '@/Components/03-organisms/Navbar/Navbar';
import NavArrows from '@/Components/01-atoms/NavArrows/NavArrows';
import UpperNavBar from '@/Components/03-organisms/UpperNavBar/UpperNavBar';
import { findSubMenu, mainMenu } from '@/utils/processNavigation';
// import { ISIModalContext } from '@/context/ISIModalContext';
import ModalISI from '@/Components/04-templates/Layouts/Modal/ModalISI';
import { PageContext } from '@/context/PageContext';

type LayoutProps = {
  pageid?: string;
  children?: JSX.Element;
};

const lsISIModalKey = 'isi_modal';
const noISIModalPages = ['01_Launch_screen', 'A.0.Home'];

export const Layout = ({ pageid, children = <>Loading</> }: LayoutProps) => {
  const { currentPage } = useContext<string>(PageContext);
  // const { isShowISIModal } = useContext(ISIModalContext);
  const [isShowISIModal, setIsShowISIModal] = useState(false);
  const subMenu = findSubMenu(currentPage, mainMenu.data, 0);

  useEffect(() => {
    setTimeout(() => {
      const lsISIModal = sessionStorage.getItem(lsISIModalKey);
      console.log('lsISIModal', lsISIModal);
      console.log('currentPage', currentPage);
      if (!lsISIModal && !noISIModalPages.includes(currentPage)) {
        setIsShowISIModal(true);
        console.log('setIsShowISIModal true');
      }
    }, 1000);
  }, [currentPage]);

  const closePopUpHandler = () => {
    setIsShowISIModal(false);
    sessionStorage.setItem(lsISIModalKey, '1');
  };

  return (
    <>
      <div
        className={`page page--${currentPage.replace(/\./g, '_')}`}
        data-currentpage={currentPage}
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
      <ModalISI isOpen={isShowISIModal} onClose={closePopUpHandler} />
    </>
  );
};

export default Layout;
