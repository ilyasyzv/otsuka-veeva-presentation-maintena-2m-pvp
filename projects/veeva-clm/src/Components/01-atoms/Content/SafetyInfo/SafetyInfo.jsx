import React from 'react';
import './SafetyInfo.scss'

export const SafetyInfo = ({ distance, safetyInfo }) => {
  return (
    <div style={{ marginTop: distance }} className='safetyInfo'>
      {safetyInfo.map((info, index) => (
        <p key={ index }>
          { info.text }
        </p>
      ))}
    </div>
  );
};