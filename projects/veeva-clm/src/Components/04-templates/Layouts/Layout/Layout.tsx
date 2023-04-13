import React, { useContext } from 'react';
import './Layout.scss';
import PageContext from '../../../../context/PageContext';
import Navbar from "@/Components/03-organisms/Navbar/Navbar";
import EndIcon from './img/end-icon.png?format=webp';
import StartIcon from './img/start-icon.png?format=webp';
import NavArrows from "@/Components/01-atoms/NavArrows/NavArrows";

type LayoutProps = {
  pageid?: string;
  children?: JSX.Element;
};

export const Layout = ({ pageid, children = <>Loading</> }: LayoutProps) => {
  const [currentPage] = useContext<string>(PageContext);

  return (
    <div
      className={`page page--${currentPage.replace(/\./g, '_')}`}
      data-currentpage={currentPage}
    >
      <div className='page__wrapper'>
        <div className='left-pane'>
          <span className="left-pane__pager"/>
          <Navbar />
        </div>
        <div className='right-pane'>{children}</div>
        <NavArrows />
      </div>
    </div>
  )
};

export default Layout;
