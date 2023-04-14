import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';

import { Header } from '@atoms/Content/Header/Header';
import {
  StudyDesignScroll1,
  StudyDesignScroll2,
} from '@templates/Layouts/Modal/Modal.stories';
import { SplitScreen } from '@templates/Layouts/Grid/TwoColumns';
import Chart1 from './img/LAIs.png?format=webp';
import './style.scss';

export default {
  title: 'CLM/Pages',
  component: 'A.2.3.1_LAIs',
  parameters: {
    layout: 'fullscreen',
  },
  excludeStories: ['A_2_3_1_LAIs_content'],
};

const baseClass = 'page--A_2_3_1_LAIs';

const modalOne = () => <StudyDesignScroll1 {...StudyDesignScroll1.args} />;
const modalTwo = () => <StudyDesignScroll2 {...StudyDesignScroll2.args} />;

const content = () => (
  <>
    <Header custom={`${baseClass}-header-1 mb-27`}>
      Long-acting injectables (LAIs) may help address relapse and
      adherence/persistence in schizophrenia and bipolar disorder<sup>1-3</sup>
    </Header>
    <Header type='h3' custom={`${baseClass}-header-3 mb-32 text-center`}>
      LAIs are concentrated injections formulated to slowly release
      antipsychotic medications over specific periods
      <br /> of time, allowing for an effective maintenance dose to be delivered
      with each injection<sup>1</sup>
    </Header>
    <img className={`${baseClass}-chart-1`} src={Chart1} alt='' />
    <SplitScreen
      className={`${baseClass}-grid-1`}
      left={modalOne}
      right={modalTwo}
    />
  </>
);

const Template = () => {
  return <AppStorybook path='A.2.3.1_LAIs' components={content} />;
};

export const A_2_3_1_LAIs = Template.bind({});
export const A_2_3_1_LAIs_content = content.bind({});
