import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';

import { Header } from '@atoms/Content/Header/Header';
import {
  StudyDesignSup,
  UnderstandPANSS,
} from '@templates/Layouts/Modal/Modal.stories';
import { Default } from '@organisms/CollapsibleGroup/CollapsibleGroup.stories';
import './style.scss';

export default {
  title: 'CLM/Pages',
  component: 'A.3.5.2_Additional',
  parameters: {
    layout: 'fullscreen',
  },
  excludeStories: ['A_3_5_2_Additional_content'],
};

const baseClass = 'page--A_3_5_2_Additional';

const content = () => (
  <>
    <Header type='h3' custom={`${baseClass}-header-1 heading-alter`}>
      PIVOTAL 12-WEEK SCHIZOPHRENIA SHORT-TERM STUDY
    </Header>
    <Header custom={`${baseClass}-header-2 mb-19`}>
      ABILIFY MAINTENA<sup>®</sup> (aripiprazole) demonstrated early
      <br /> and continued symptom improvement<sup>1</sup>
    </Header>
    <StudyDesignSup {...StudyDesignSup.args} />
    <Default {...Default.args} />
    <UnderstandPANSS {...UnderstandPANSS.args} />
  </>
);

const Template = () => {
  return <AppStorybook path='A.3.5.2_Additional' components={content} />;
};

export const A_3_5_2_Additional = Template.bind({});
export const A_3_5_2_Additional_content = content.bind({});
