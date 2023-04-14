import { AppStorybook } from '@pages/AppStorybook';

export default {
  title: 'CLM/Pages',
  component: 'A.3.1_Clinical_overview',
  parameters: {
    layout: 'fullscreen',
  },
  excludeStories: ['A_3_1_Clinical_overview_content'],
};

const content = () => <div>Place components here</div>;

const Template = () => {
  return <AppStorybook path='A.3.1_Clinical_overview' components={content} />;
};

export const A_3_1_Clinical_overview = Template.bind({});
export const A_3_1_Clinical_overview_content = content.bind({});