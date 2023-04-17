import React, { useContext } from 'react';
import './Layout.scss';
import Navbar from '@/Components/03-organisms/Navbar/Navbar';
import NavArrows from '@/Components/01-atoms/NavArrows/NavArrows';
import { ISIModalContext } from '@/context/ISIModalContext';
import ModalISI from '@/Components/04-templates/Layouts/Modal/ModalISI';
import { PageContext } from '@/context/PageContext';

type LayoutProps = {
  pageid?: string;
  children?: JSX.Element;
};

export const Layout = ({ pageid, children = <>Loading</> }: LayoutProps) => {
  const { currentPage } = useContext<string>(PageContext);
  const { isShowISIModal } = useContext(ISIModalContext);

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
          <NavArrows />
        </div>
      </div>
      {isShowISIModal && <ModalISI openByDefault />}
    </>
  );
};

export default Layout;
