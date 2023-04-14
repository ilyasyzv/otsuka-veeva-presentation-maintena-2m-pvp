import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';

export default {
  title: 'CLM/Pages/A.5',
  component: 'A.5.2_Patients_support_providers',
  parameters: {
    layout: 'fullscreen',
  },
};

const content = () => <div>Place components here</div>;

const Template = () => {
  return (
    <AppStorybook
      path='A.5.2_Patients_support_providers'
      components={content}
    />
  );
};

export const A_5_2_Patients_support_providers = Template.bind({});
