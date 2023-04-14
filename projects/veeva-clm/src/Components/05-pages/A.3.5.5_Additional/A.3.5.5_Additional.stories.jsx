import { AppStorybook } from '@pages/AppStorybook';

export default {
  title: 'CLM/Pages',
  component: 'A.3.5.5_Additional',
  parameters: {
    layout: 'fullscreen',
  },
  excludeStories: ['A_3_5_5_Additional_content'],
};

const content = () => <div>Place components here</div>;

const Template = () => {
  return <AppStorybook path='A.3.5.5_Additional' components={content} />;
};

export const A_3_5_5_Additional = Template.bind({});
export const A_3_5_5_Additional_content = content.bind({});