import React from 'react';
import './Background.scss';

export type TBackgroundType = 'default' | 'a' | 'b' | 'c';

export type TBackground = {
  children: React.ReactNode;
  type: TBackgroundType;
};

const Background = ({ type, children }: TBackground) => {
  return <div className={`content-background ${type}`}>{children}</div>;
};

export default Background;
