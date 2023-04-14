import { AppStorybook } from '@pages/AppStorybook';

export default {
  title: 'CLM/Pages',
  component: 'A.3.2.2_Efficacy',
  parameters: {
    layout: 'fullscreen',
  },
  excludeStories: ['A_3_2_2_Efficacy_content'],
};

const content = () => <div>Place components here</div>;

const Template = () => {
  return <AppStorybook path='A.3.2.2_Efficacy' components={content} />;
};

export const A_3_2_2_Efficacy = Template.bind({});
export const A_3_2_2_Efficacy_content = content.bind({});