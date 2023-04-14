import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';

export default {
  title: 'CLM/Pages/A.3/A.3.2',
  component: 'A.3.2.2_Efficacy',
  parameters: {
    layout: 'fullscreen',
  },
};

const content = () => <div>Place components here</div>;

const Template = () => {
  return <AppStorybook path='A.3.2.2_Efficacy' components={content} />;
};

export const A_3_2_2_Efficacy = Template.bind({});
