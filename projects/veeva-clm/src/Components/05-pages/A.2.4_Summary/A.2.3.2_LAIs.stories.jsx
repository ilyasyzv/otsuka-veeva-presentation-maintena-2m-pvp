import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';
import PageContent from './A.2.3.2_LAIs'
export default {
  title: 'CLM/Pages/A.2',
  component: 'A.2.4_Summary',
  parameters: {
    layout: 'fullscreen',
  },
};

const content = () => PageContent;

const Template = () => {
  return <AppStorybook path='A.2.4_Summary' components={content} />;
};

export const A_2_4_Summary = Template.bind({});
