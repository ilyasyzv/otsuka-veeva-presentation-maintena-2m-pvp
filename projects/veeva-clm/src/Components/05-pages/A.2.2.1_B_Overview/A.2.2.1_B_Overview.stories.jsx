import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';

import { Header } from '@atoms/Content/Header/Header';
import B_Overview from './img/B_Overview.png?format=webp';
import './style.scss';

export default {
  title: 'CLM/Pages',
  component: 'A.2.2.1_B_Overview',
  parameters: {
    layout: 'fullscreen',
  },
  excludeStories: ['A_2_2_1_B_Overview_content'],
};

const baseClass = 'page--A_2_2_1_B_Overview';

const content = () => (
  <>
    <Header custom='mb-22'>
      Bipolar I disorder (BP-I) is a recurrent episodic mood disorder affecting
      ~2.3% of US adults<sup>1-3</sup>
    </Header>
    <img className={`${baseClass}-chart-1`} src={B_Overview} alt='' />
  </>
);

const Template = () => {
  return <AppStorybook path='A.2.2.1_B_Overview' components={content} />;
};

export const A_2_2_1_B_Overview = Template.bind({});
export const A_2_2_1_B_Overview_content = content.bind({});
