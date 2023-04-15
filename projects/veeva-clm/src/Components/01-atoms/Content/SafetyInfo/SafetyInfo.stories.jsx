import React from 'react';
import { SafetyInfo } from './SafetyInfo';

export default {
  title: 'CLM/Atoms/SafetyInfo',
  component: SafetyInfo,
};

const Template = (args) => (
  <SafetyInfo { ...args } />
);

export const Default = Template.bind({});

Default.args = {
  distance: '0px',
  safetyInfo: [
    {
      text: <span>Please see <a href="/">IMPORTANT SAFETY INFORMATION</a> in this presentation.</span>,
    },
    {
      text: 'FOR USE WITH FORMULARY DECISION-MAKERS ONLY. DO NOT DUPLICATE OR DISTRIBUTE.',
    },
  ]
}