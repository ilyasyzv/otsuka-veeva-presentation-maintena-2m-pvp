import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';

export default {
  title: 'CLM/Pages/A.6',
  component: 'A.6.3.X_Apendix_Safety',
  parameters: {
    layout: 'fullscreen',
  },
};

const content = () => <div>Place components here</div>;

const Template = () => {
  return <AppStorybook path='A.6.3.X_Apendix_Safety' components={content} />;
};

export const A_6_3_X_Apendix_Safety = Template.bind({});
