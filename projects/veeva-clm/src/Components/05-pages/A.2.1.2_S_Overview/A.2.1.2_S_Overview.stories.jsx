import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';

export default {
  title: 'CLM/Pages/A.2/A.2.1',
  component: 'A.2.1.2_S_Overview',
  parameters: {
    layout: 'fullscreen',
  },
};

const content = () => <div>Place components here</div>;

const Template = () => {
  return <AppStorybook path='A.2.1.2_S_Overview' components={content} />;
};

export const A_2_1_2_S_Overview = Template.bind({});
