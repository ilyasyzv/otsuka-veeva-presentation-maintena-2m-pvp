import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';

import {
  StudyDesign,
  UnderstandPANSS,
} from '@templates/Layouts/Modal/Modal.stories';
import { Default as ButtonDefault } from '@atoms/Content/Button/Button.stories';

export default {
  title: 'CLM/Pages',
  component: 'A.0.Home',
  parameters: {
    layout: 'fullscreen',
  },
  excludeStories: ['A_0_Home_content'],
};

const content = () => (
  <div>
    <UnderstandPANSS {...UnderstandPANSS.args} />
    <StudyDesign {...StudyDesign.args} />
    <ButtonDefault {...ButtonDefault.args} />
  </div>
);

const Template = () => {
  return <AppStorybook path='A.0.Home' background='b' components={content} />;
};

export const A_0_Home = Template.bind({});
export const A_0_Home_content = content.bind({});
