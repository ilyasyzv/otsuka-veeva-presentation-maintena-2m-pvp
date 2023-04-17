import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';
import Header from '@/Components/01-atoms/Content/Header/Header';
import EfficacyDiagramImg from './img/efficacyDiagram.png?format=webp';

import './A.3.2.1_Efficacy.scss';

export default {
  title: 'CLM/Pages',
  component: 'A.3.2.1_Efficacy',
  parameters: {
    layout: 'fullscreen',
  },
  excludeStories: ['A_3_2_1_Efficacy_content'],
};

const blockName = 'A_3_2_1_Efficacy';
const classNames = require('classnames');

const content = () => (
  <div className={`${blockName}_wrapper`}>
    <Header custom={classNames(`${blockName}-header`, 'mb-30')}>
      The efficacy of ABILIFY ASIMTUFII <sup>®</sup> (aripiprazole) in adult
      patients with schizophrenia or bipolar I disorder was established in part
      on the basis of pharmacokinetic bridging study
    </Header>
    <Header type='h3' custom='mb-13'>
      Open-label, multiple-dose, randomized, parallel-arm, multicenter,
      pharmacokinetic bridging study <sup>1</sup>
    </Header>
    <img
      src={EfficacyDiagramImg}
      alt='Efficacy Diagram'
      className={classNames(`${blockName}-img`, 'mb-5')}
    />
  </div>
);

const Template = () => {
  return <AppStorybook path='A.3.2.1_Efficacy' components={content} />;
};

export const A_3_2_1_Efficacy = Template.bind({});
export const A_3_2_1_Efficacy_content = content.bind({});
