import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';

export default {
  title: 'CLM/Pages',
  component: 'A.2.4_Summary',
  parameters: {
    layout: 'fullscreen',
  },
  excludeStories: ['A_2_4_Summary_content'],
};

const content = () => <div>Place components here</div>;

const Template = () => {
  return <AppStorybook path='A.2.4_Summary' components={content} />;
};

export const A_2_4_Summary = Template.bind({});
export const A_2_4_Summary_content = content.bind({});
