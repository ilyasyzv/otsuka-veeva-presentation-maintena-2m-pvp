import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';

export default {
  title: 'CLM/Pages/A.3',
  component: 'A.3.4_Dosing',
  parameters: {
    layout: 'fullscreen',
  },
};

const content = () => <div>Place components here</div>;

const Template = () => {
  return <AppStorybook path='A.3.4_Dosing' components={content} />;
};

export const A_3_4_Dosing = Template.bind({});
