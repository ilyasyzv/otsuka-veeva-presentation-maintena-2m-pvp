import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';

export default {
  title: 'CLM/Pages/A.2/A.2.2',
  component: 'A.2.2.3_B_Overview',
  parameters: {
    layout: 'fullscreen',
  },
};

const content = () => <div>Place components here</div>;

const Template = () => {
  return <AppStorybook path='A.2.2.3_B_Overview' components={content} />;
};

export const A_2_2_3_B_Overview = Template.bind({});
