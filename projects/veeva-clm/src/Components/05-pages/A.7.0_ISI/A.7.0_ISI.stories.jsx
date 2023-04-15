import { AppStorybook } from '@pages/AppStorybook';

export default {
  title: 'CLM/Pages',
  component: 'A.7.0_ISI',
  parameters: {
    layout: 'fullscreen',
  },
  excludeStories: ['A_7_0_ISI_content'],
};

const content = () => <div>Place components here</div>;

const Template = () => {
  return <AppStorybook path='A.7.0_ISI' components={content} />;
};

export const A_7_0_ISI = Template.bind({});
export const A_7_0_ISI_content = content.bind({});