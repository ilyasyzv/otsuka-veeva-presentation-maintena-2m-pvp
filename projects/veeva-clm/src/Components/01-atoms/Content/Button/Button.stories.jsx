import React from 'react';
import { Button } from './button';

export default {
  title: 'CLM/Atoms/Button',
  component: Button,
};

const Template = () => <Button text='Check In Now' />;

export const Default = Template.bind({});

export const Primary = {
  args: {
    custom: 'test1',
    text: 'Button',
  },
};

export const Secondary = {
  args: {
    ...Primary.args,
    text: '😄👍😍💯',
    custom: 'test2',
  },
};

export const Tertiary = {
  args: {
    ...Primary.args,
    text: '📚📕📈🤓',
    custom: 'test3',
  },
};
