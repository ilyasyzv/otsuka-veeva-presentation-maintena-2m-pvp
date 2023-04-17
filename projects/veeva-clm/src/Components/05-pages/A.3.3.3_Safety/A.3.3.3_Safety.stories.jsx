import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';
import Header from '@/Components/01-atoms/Content/Header/Header';

import MetabolicTableImg from '@/Components/05-pages/A.3.3.3_Safety/img/MetabolicTable.png?format=webp';

import './A.3.3.3_Safety.scss';
import List from '@/Components/01-atoms/Content/List/List';

export default {
  title: 'CLM/Pages',
  component: 'A.3.3.3_Safety',
  parameters: {
    layout: 'fullscreen',
  },
  excludeStories: ['A_3_3_3_Safety_content'],
};

const blockName = 'A-3-3-3_Safety';
const classNames = require('classnames');

const content = () => (
  <div className={`${blockName}_wrapper`}>
    <Header custom='mb-30'>
      Metabolic profile for patients receiving ABILIFY MAINTENA<sup>®</sup>
      <br />
      (aripiprazole) vs placebo in a 12-week, double-blind study in patients
      with schizophrenia
    </Header>
    <img
      src={MetabolicTableImg}
      alt='prolactin table'
      className={classNames(`${blockName}-img`, 'mb-5')}
    />
  </div>
);

const Template = () => {
  return <AppStorybook path='A.3.2.2_Efficacy' components={content} />;
};

export const A_3_3_3_Safety = Template.bind({});
export const A_3_3_3_Safety_content = content.bind({});
