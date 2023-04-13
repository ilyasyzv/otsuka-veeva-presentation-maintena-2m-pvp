import React, { Fragment, useContext } from 'react';
import { LinkGroup } from '@organisms/Routing/LinkGroup/LinkGroup';
// eslint-disable-next-line import/order
import HomeIcon from './img/home-icon.png?format=webp';
import './Navbar.scss';
import Link from '@organisms/Routing/Link/Link';
import { PageContext } from '@/context/PageContext';

export const mainMenu = {
  type: 'main',
  data: [
    {
      name: 'Executive Summary',
      url: '/R.1.0_Executive_summary',
    },
    {
      name: 'Schizophrenia & Bipolar I Disorder Overview',
      url: '/R.2.1_Schizophrenia_Overview',
      children: [
        {
          name: (
            <>
              Schizophrenia
              <br />
              Overview
            </>
          ),
          url: '/R.2.1_Schizophrenia_Overview',
        },
        {
          name: (
            <>
              Bipolar I<br />
              Overview
            </>
          ),
          url: '/R.2.2_Bipolar_I_Overview',
        },
        {
          name: 'LAIs',
          url: '/R.2.3_LAIs',
        },
        {
          name: 'Summary',
          url: '/R.2.3_Summary',
        },
      ],
    },
    {
      name: 'Clinical Profile for ABILIFY ASIMTUFII®',
      url: '/R.3.0_Efficacy',
      children: [],
    },
    {
      name: 'Economic Value of ABILIFY ASIMTUFII®',
      url: '/R.4.1_Adverse_reactions',
      children: [],
    },
    {
      name: 'Otsuka Patient Support™',
      url: '/R.5.0_Dosing',
    },
    {
      name: 'Appendix',
      url: '/R.6.0_Saving_and_coverage',
      children: [],
    },
  ],
};

export const bottomMenu = {
  data: [
    {
      name: 'ISI',
      url: '/R.1.0_Executive_summary',
    },
    {
      name: 'PI',
      url: '/R.2.0_AAD_overview',
      children: [],
    },
  ],
};

export const Navbar = () => {
  const { currentPage } = useContext(PageContext);
  const isHomepage =
    currentPage === '01_Launch_screen' || currentPage === 'R.0.0_Home'
      ? 'navigation__homepage--active'
      : 'navigation__homepage';

  return (
    <div className='navigation'>
      <div className='navigation__head'>
        <Link to='R.0.0_Home' custom='navigation__homepage-link' />
        <Link to='R.0.0_Home'>
          <img src={HomeIcon.src} alt='home icon' />
        </Link>
        <span className={isHomepage} />
      </div>
      <ul className='main-nav'>
        {mainMenu.data.map((link, i) => (
          <LinkGroup linkGroup={link} key={link.url} />
        ))}
      </ul>
      <ul className='main-bottom-nav'>
        {bottomMenu.data.map((link, i) => (
          <Fragment key={link.url}>
            <LinkGroup linkGroup={link} />
            <span className='main-bottom-nav__splitter' />
          </Fragment>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
