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
      url: '/R.1.0_Executive_summary',
    },
    {
      name: 'Schizophrenia & Bipolar I Disorder Overview',
      url: '/R.2.0_AAD_overview',
      children: [],
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
    }
  ]
};

export const Navbar = () => {
  const [currentPage] = useContext(PageContext);
  const isHomepage = currentPage == '01_Launch_screen' || currentPage == 'R.0.0_Home' ? 'navigation__homepage--active' : 'navigation__homepage';

  return (
    <div className='navigation'>
      <div className='navigation__head'>
        <Link to='R.0.0_Home' custom='navigation__homepage-link'></Link>
        <Link to='R.0.0_Home'><img src={HomeIcon.src} alt="home icon" className/></Link>
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
