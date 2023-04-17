import React, { useContext } from 'react';

import { PageContext } from '@/context/PageContext';

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

  const isCurrent = (url) => url.replace('/', '') === currentPage;

  const makeSubLinks = (children) => {
    if (!children) {
      return null;
    }

    return (
      <ul>
        {children.map((subLink) => (
          <li
            key={subLink.url}
            className={`main-nav__sublink ${
              isCurrent(subLink.url) ? 'current' : ''
            }`}
          >
            <Link to={subLink.url}>{subLink.name}</Link>
          </li>
        ))}
      </ul>
    );
  };

  const { addClass } = linkGroup;

  const mainLinkClass = classNames({
    'main-nav__link': true,
    active: isActive(),
  });

  return (
    <li className={`${mainLinkClass} ${addClass || ''}`}>
      <div className='main-nav__link__wrapper'>
        <Link to={linkGroup.url}>{linkGroup.name}</Link>
        {makeSubLinks(linkGroup.children)}
      </div>
    </li>
  );
};

export default LinkGroup;
