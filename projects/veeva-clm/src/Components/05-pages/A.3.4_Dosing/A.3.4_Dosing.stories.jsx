import { AppStorybook } from '@pages/AppStorybook';

export default {
  title: 'CLM/Pages',
  component: 'A.3.4_Dosing',
  parameters: {
    layout: 'fullscreen',
  },
  excludeStories: ['A_3_4_Dosing_content'],
};

const content = () => <div>Place components here</div>;

const Template = () => {
  return <AppStorybook path='A.3.4_Dosing' components={content} />;
};

export const A_3_4_Dosing = Template.bind({});
export const A_3_4_Dosing_content = content.bind({});
