import React from 'react';
import { SafetyInfo } from './SafetyInfo';
import { Link } from '@/Components/03-organisms/Routing/Link/Link';

export default {
  title: 'CLM/Atoms/SafetyInfo',
  component: SafetyInfo,
};

const Template = (args) => <SafetyInfo {...args} />;

export const Default = Template.bind({});

Default.args = {
  distance: '0px',
  safetyInfo: [
    {
      text: (
        <span>
          Please see{' '}
          <Link to='A.7.0_ISI' custom='blue-500'>
          IMPORTANT SAFETY INFORMATION
          </Link>
          {' '}, in this presentation
        </span>
      ),
    },
    {
      text: 'FOR USE WITH FORMULARY DECISION-MAKERS ONLY. DO NOT DUPLICATE OR DISTRIBUTE.',
    },
  ],
};
