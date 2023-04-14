import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';

export default {
  title: 'CLM/Pages/A.2/A.2.3',
  component: 'A.2.3.2_LAIs',
  parameters: {
    layout: 'fullscreen',
  },
};

const content = () => <div>Place components here</div>;

const Template = () => {
  return <AppStorybook path='A.2.3.2_LAIs' components={content} />;
};

export const A_2_3_2_LAIs = Template.bind({});
