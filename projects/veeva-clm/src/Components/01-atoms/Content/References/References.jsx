import React from 'react';
import './References.scss'

const classNames = require('classnames');

export const References = ({ references }) => {
  return (
    <div className='references'>
      <strong>{references.length > 1 ? 'References: ' : 'Reference: '}</strong>
      {references.map((ref, index) => {
        const customClass = ref.url && 'file' || '';
        
        return (
          <span key={index}>
            <strong>{index + 1}. </strong>
            <span className={classNames(customClass)}>{ ref.text }</span>{' '}
          </span>
        )
      })}
    </div>
  );
};