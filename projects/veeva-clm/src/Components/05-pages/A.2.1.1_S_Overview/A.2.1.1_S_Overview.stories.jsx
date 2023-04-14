import { AppStorybook } from '@pages/AppStorybook';

export default {
  title: 'CLM/Pages',
  component: 'A.2.1.1_S_Overview',
  parameters: {
    layout: 'fullscreen',
  },
  excludeStories: ['A_2_1_1_S_Overview_content'],
};

const content = () => <div>Place components here</div>;

const Template = () => {
  return <AppStorybook path='A.2.1.1_S_Overview' components={content} />;
};

export const A_2_1_1_S_Overview = Template.bind({});
export const A_2_1_1_S_Overview_content = content.bind({});
