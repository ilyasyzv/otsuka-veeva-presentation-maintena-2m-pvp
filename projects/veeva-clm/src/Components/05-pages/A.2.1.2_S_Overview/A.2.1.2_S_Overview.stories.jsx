import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';
import Header from '@/Components/01-atoms/Content/Header/Header';
import { FootNote } from '@/Components/01-atoms/Content/FootNote/FootNote';
import SchizophreniaImg1 from './img/Component 40 – 12.png?format=webp';
import SchizophreniaImg2 from './img/Component 41 – 13.png?format=webp';

import './A.2.1.2_S_Overview.scss';

export default {
  title: 'CLM/Pages',
  component: 'A.2.1.2_S_Overview',
  parameters: {
    layout: 'fullscreen',
  },
  excludeStories: ['A_2_1_2_S_Overview_content'],
};

const blockName = 'A-2-1-2_S_Overview';

const content = () => (
  <div className={`${blockName}_wrapper`}>
    <Header custom='mb-18'>
      In schizophrenia, relapses and nonadherence are common and lead to higher
      costs of care <sup>1-3</sup>
    </Header>
    <Header type='h3' custom='mb-10'>
      Patients with schizophrenia experience relapsing episodes of psychosis
      <sup>1-3</sup>
    </Header>
    <img src={SchizophreniaImg1} alt='' className='mb-40' />
    <Header type='h3' custom='mb-6'>
      Fewer than 50% of patients took their antipsychotic medication 80% or more
      of the time
      <sup>*2</sup>
    </Header>
    <p className={`${blockName}-text`}>
      Those who were not adherent to antipsychotic treatment had nearly:
    </p>
    <img src={SchizophreniaImg2} alt='' className={`${blockName}-img2`} />
  </div>
);

const Template = () => {
  return <AppStorybook path='A.2.1.2_S_Overview' components={content} />;
};

export const A_2_1_2_S_Overview = Template.bind({});

export const A_2_1_2_S_Overview_content = content.bind({});
