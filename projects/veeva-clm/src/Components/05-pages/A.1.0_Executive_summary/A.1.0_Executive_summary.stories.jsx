import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';

export default {
  title: 'CLM/Pages',
  component: 'A.1.0_Executive_summary',
  parameters: {
    layout: 'fullscreen',
  },
};

const content = () => <div>Place components here</div>;

const Template = () => {
  return <AppStorybook path='A.1.0_Executive_summary' components={content} />;
};

export const A_1_0_Executive_summary = Template.bind({});
