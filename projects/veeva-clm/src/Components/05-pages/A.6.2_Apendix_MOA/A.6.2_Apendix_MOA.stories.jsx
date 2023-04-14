import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';

export default {
  title: 'CLM/Pages/A.6',
  component: 'A.6.2_Apendix_MOAy',
  parameters: {
    layout: 'fullscreen',
  },
};

const content = () => <div>Place components here</div>;

const Template = () => {
  return <AppStorybook path='A.6.2_Apendix_MOA' components={content} />;
};

export const A_6_2_Apendix_MOA = Template.bind({});
