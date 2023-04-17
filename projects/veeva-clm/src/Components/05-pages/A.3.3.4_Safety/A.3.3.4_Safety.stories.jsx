import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';
import Header from '@/Components/01-atoms/Content/Header/Header';

import MetabolicSafetyImg from '@/Components/05-pages/A.3.3.4_Safety/img/MetabolicSafety.png?format=webp';

import './A.3.3.4_Safety.scss';
import List from '@/Components/01-atoms/Content/List/List';

export default {
  title: 'CLM/Pages',
  component: 'A.3.3.4_Safety',
  parameters: {
    layout: 'fullscreen',
  },
  excludeStories: ['A_3_3_4_Safety_content'],
};

const blockName = 'A-3-3-4_Safety';
const classNames = require('classnames');

const content = () => (
  <div className={`${blockName}_wrapper`}>
    <Header custom='mb-22'>
      ABILIFY MAINTENA<sup>®</sup>(aripiprazole) has been evaluated for
      metabolic safety in adult patients with bipolar I disorder
      <br />
    </Header>
    <img
      src={MetabolicSafetyImg}
      alt='metabolic safety'
      className={classNames(`${blockName}-img`, 'mb-5')}
    />
  </div>
);

const Template = () => {
  return <AppStorybook path='A.3.3.4_Safety' components={content} />;
};

export const A_3_3_4_Safety = Template.bind({});
export const A_3_3_4_Safety_content = content.bind({});
