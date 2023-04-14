import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';

export default {
  title: 'CLM/Pages/A.3',
  component: 'A.3.1_Clinical_overview',
  parameters: {
    layout: 'fullscreen',
  },
};

const content = () => <div>Place components here</div>;

const Template = () => {
  return <AppStorybook path='A.3.1_Clinical_overview' components={content} />;
};

export const A_3_1_Clinical_overview = Template.bind({});
