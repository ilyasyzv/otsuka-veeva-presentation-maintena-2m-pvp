import React from 'react';
import './FootNote.scss';
import SupLeft from '../SupLeft/SupLeft';
import { References } from '../References/References';
import { SafetyInfo } from '../SafetyInfo/SafetyInfo';

const classNames = require('classnames');

export const FootNote = ({ custom, footnotes }) => {
  const customClass = custom || '';

  return (
    <div className={classNames('footnote', customClass)}>
      {footnotes && (
        <ul className='footnote__list'>
          {footnotes.map((footnote, index) => {
            const supLeftClass = (footnote.supLeft || footnote.supLeftBig) && 'transform' || ''
            const supRightClass = footnote.supRight && 'lineHeight' || ''

            return (
              <li className={classNames(supLeftClass, supRightClass)} key={ index }>
                { footnote.supLeftBig && <SupLeft big text={ footnote.supLeftBig } /> }
                { footnote.supLeft && <SupLeft text={ footnote.supLeft } /> }
                { footnote.innerText }
                { footnote.supRight && <sup>{ footnote.supRight }</sup> }
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
