import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';

export default {
  title: 'CLM/Pages/A.6/A.6.1',
  component: 'A.6.1.2_Appendix_Safety',
  parameters: {
    layout: 'fullscreen',
  },
};

const content = () => <div>Place components here</div>;

const Template = () => {
  return <AppStorybook path='A.6.1.2_Appendix_Safety' components={content} />;
};

export const A_6_1_2_Appendix_Safety = Template.bind({});
