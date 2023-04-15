import React, { Fragment, useContext } from 'react';

import { LinkGroup } from '@organisms/Routing/LinkGroup/LinkGroup';
import './Navbar.scss';
import Link from '@organisms/Routing/Link/Link';
import { PageContext } from '@/context/PageContext';

export const mainMenu = {
  type: 'main',
  data: [
    {
      name: 'Executive Summary',
      url: '/A.1.0_Executive_summary',
    },
    {
      name: 'Schizophrenia & Bipolar I Disorder Overview',
      url: '/A.2.1.1_S_Overview',
      children: [
        {
          name: 'Schizophrenia Overview',
          url: '/A.2.1.1_S_Overview',
        },
        {
          name: 'Bipolar I Overview',
          url: '/A.2.2.1_B_Overview',
        },
        {
          name: 'LAIs',
          url: '/A.2.3.1_LAIs',
        },
        {
          name: 'Summary',
          url: '/A.2.4_Summary',
        },
      ],
    },
    {
      name: 'Clinical Profile for ABILIFY ASIMTUFII®',
      url: '/A.3.1.1_Overview',
      children: [
        {
          name: 'Overview',
          url: '/A.3.1.1_Overview',
        },
        {
          name: 'PK Study',
          url: '/A.3.2.1_Strudy',
        },
        {
          name: 'Safety Data',
          url: '/A.3.3.1_Safety',
        },
        {
          name: 'Dosing & Administration',
          url: '/A.3.4.1_Dosing',
        },
        {
          name: 'ABILIFY MAINTENA® Pivotal Studies',
          url: '/A.3.5.1_Additional',
        },
      ],
    },
    {
      name: 'Economic Value of ABILIFY ASIMTUFII®',
      url: '/A.4.0_Economic_value',
      children: [],
    },
    {
      name: 'Otsuka Patient Support™',
      url: '/A.5.1_Patients_support_providers',
    },
    {
      name: 'Appendix',
      url: '/A.6.1.1_Appendix_Safety',
      children: [
        {
          name: 'ABILIFY MAINTENA Real-world Evidence',
          url: '/A.6.1.1_Appendix_Safety',
        },
        {
          name: 'MOA',
          url: '/A.6.2.1_Apendix_MOA',
        },
        {
          name: 'ABILIFY MAINTENA Safety Profile',
          url: '/A.6.3.1_Appendix_Safety',
        },
      ],
    },
  ],
};

export const bottomMenu = {
  data: [
    {
      name: 'ISI',
      url: '/A.7.0_ISI',
    },
    {
      name: 'PI',
      url: '/A.7.0_ISI', // Replace after creating page.
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
        <Link to='A.0.Home' custom='navigation__homepage-link' />
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
