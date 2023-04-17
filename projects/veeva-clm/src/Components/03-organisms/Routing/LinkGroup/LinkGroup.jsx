import React, { useContext } from 'react';

import { PageContext } from '@/context/PageContext';
import UpperSubNavBar from '@atoms/UpperSubNavBar/UpperSubNavBar';

import Link from '../Link/Link';
import './LinkGroup.scss';

const classNames = require('classnames');

export const LinkGroup = ({ linkGroup }) => {
  const { currentPage } = useContext(PageContext);

  const linksGroup = () => {
    const urls = [linkGroup.url.replace('/', '')];

    if (linkGroup.children) {
      linkGroup.children.forEach((child) =>
        urls.push(child.url.replace('/', '')),
      );
    }
    return urls;
  };

  const isActive = () => linksGroup().includes(currentPage);

  const { addClass } = linkGroup;

  const mainLinkClass = classNames({
    'main-nav__link': true,
    active: isActive(),
  });

  return (
    <li className={`${mainLinkClass} ${addClass || ''}`}>
      <div className='main-nav__link__wrapper'>
        <Link to={linkGroup.url}>{linkGroup.name}</Link>
        <UpperSubNavBar link={linkGroup.url} />
      </div>
    </li>
  );
};

export default LinkGroup;
