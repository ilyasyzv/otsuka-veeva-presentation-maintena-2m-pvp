import React from 'react';
import './Footer.scss'
import { FootNote } from '@/Components/01-atoms/Content/FootNote/FootNote';
import { References } from '@/Components/01-atoms/Content/References/References';
import { SafetyInfo } from '@/Components/01-atoms/Content/SafetyInfo/SafetyInfo';
import { Logo } from '@/Components/01-atoms/Content/Logo/Logo';

const classNames = require('classnames');

export const Footer = ({ custom, footnotes, references, distance, safetyInfo, image }) => {
  const customClass = custom || '';
  const logoClass = image && 'logo' || '';

  return (
    <footer className={classNames('footer', customClass, logoClass)}>
      <div>
        { footnotes && <FootNote footnotes={ footnotes } /> }
        { references && <References references={ references } /> }
        { safetyInfo && <SafetyInfo distance={ distance } safetyInfo={ safetyInfo } /> }
      </div>
      { image && <Logo image={ image } /> }
    </footer>
  );
};