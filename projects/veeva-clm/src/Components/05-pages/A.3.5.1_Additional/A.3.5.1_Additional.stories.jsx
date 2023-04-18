import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';
import './style.scss';

import { Header } from '@atoms/Content/Header/Header';
import MaintenaLogo from '@/assets/maintena-logo.png';
import { Footer } from '@/Components/03-organisms/Footer/Footer';

export default {
  title: 'CLM/Pages',
  component: 'A.3.5.1_Additional',
  parameters: {
    layout: 'fullscreen',
  },
  excludeStories: ['A_3_5_1_Additional_content'],
};

const baseClass = 'page--A_3_5_1_Additional';

const content = () => <div>Place components here</div>;

const Template = () => {
  return <AppStorybook path='A.3.5.1_Additional' components={content} />;
};

export const A_3_5_1_Additional = Template.bind({});
export const A_3_5_1_Additional_content = content.bind({});
