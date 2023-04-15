import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';

import { Header } from '@atoms/Content/Header/Header';
import Chart1 from './img/LAIs1.png?format=webp';
import Chart2 from './img/LAIs2.png?format=webp';
import './style.scss';

export default {
  title: 'CLM/Pages',
  component: 'A.2.3.2_LAIs',
  parameters: {
    layout: 'fullscreen',
  },
  excludeStories: ['A_2_3_2_LAIs_content'],
};

const baseClass = 'page--A_2_3_2_LAIs';

const content = () => (
  <>
    <Header custom={`${baseClass}-header-1 mb-27`}>
      Longer-acting LAIs may provide an additional option to help optimize
      patient outcomes<sup>1-3</sup>
    </Header>
    <img className={`${baseClass}-chart-1 mb-46`} src={Chart1} alt='' />
    <img className={`${baseClass}-chart-2`} src={Chart2} alt='' />
  </>
);

const Template = () => {
  return <AppStorybook path='A.2.3.2_LAIs' components={content} />;
};

export const A_2_3_2_LAIs = Template.bind({});
export const A_2_3_2_LAIs_content = content.bind({});
