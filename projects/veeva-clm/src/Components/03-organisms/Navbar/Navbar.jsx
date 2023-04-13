import React, { useContext } from 'react';
import { LinkGroup } from '@organisms/Routing/LinkGroup/LinkGroup';
import HomeIcon from './img/home-icon.png?format=webp';
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
      children: [],
    },
    {
      name: 'Clinical Profile for ABILIFY ASIMTUFII®',
      url: '/A.3.0_Clinical_profile',
      children: [],
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
      children: [],
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
    }
  ]
};

export const Navbar = () => {
  const [currentPage] = useContext(PageContext);
  const isHomepage = currentPage == '01_Launch_screen' || currentPage == 'R.0.0_Home' ? 'navigation__homepage--active' : 'navigation__homepage';

  return (
    <div className='navigation'>
      <div className='navigation__head'>
        <Link to='/A.0.Home' custom='navigation__homepage-link'></Link>
        <Link to='/A.0.Home'><img src={HomeIcon.src} alt="home icon" className/></Link>
        <span className={isHomepage}></span>
      </div>
      <ul className='main-nav'>
        {mainMenu.data.map((link, i) => (
            <LinkGroup linkGroup={link} key={i} />
        ))}
      </ul>
      <ul className='main-bottom-nav'>
        {bottomMenu.data.map((link, i) => (
          <><LinkGroup linkGroup={link} key={i} /><span className='main-bottom-nav__splitter'></span></>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
