import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';
import Header from '@/Components/01-atoms/Content/Header/Header';

import TableImg from '@/Components/05-pages/A.3.2.2_Efficacy/img/Table.png?format=webp';
import TableBannerImg from '@/Components/05-pages/A.3.2.2_Efficacy/img/TableBanner.png?format=webp';

import './A.3.2.1_Efficacy.scss';

export default {
  title: 'CLM/Pages',
  component: 'A.3.2.2_Efficacy',
  parameters: {
    layout: 'fullscreen',
  },
  excludeStories: ['A_3_2_2_Efficacy_content'],
};

const blockName = 'A_3_2_2_Efficacy';
const classNames = require('classnames');

const content = () => (
  <div className={`${blockName}_wrapper`}>
    <Header custom={classNames(`${blockName}-header`, 'mb-15')}>
      ABILIFY ASIMTUFII<sup>®</sup> (aripiprazole) and <br />
      ABILIFY MAINTENA
      <sup>®</sup> (aripiprazole) showed similar
      <br /> aripiprazole concentrations<sup>1</sup>
    </Header>
    <img src={TableImg} alt='ratio table' className='mb-50' />
    <img src={TableBannerImg} alt='banner' className='mb-20' />
  </div>
);

const Template = () => {
  return <AppStorybook path='A.3.2.2_Efficacy' components={content} />;
};

export const A_3_2_2_Efficacy = Template.bind({});
export const A_3_2_2_Efficacy_content = content.bind({});
