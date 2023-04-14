import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';

export default {
  title: 'CLM/Pages/A.3/A.3.5',
  component: 'A.3.5.3_Additional',
  parameters: {
    layout: 'fullscreen',
  },
};

const content = () => <div>Place components here</div>;

const Template = () => {
  return <AppStorybook path='A.3.5.3_Additional' components={content} />;
};

export const A_3_5_3_Additional = Template.bind({});
