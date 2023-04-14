import { AppStorybook } from '@pages/AppStorybook';

export default {
  title: 'CLM/Pages',
  component: 'A.3.2.3_Efficacy',
  parameters: {
    layout: 'fullscreen',
  },
  excludeStories: ['A_3_2_3_Efficacy_content'],
};

const content = () => <div>Place components here</div>;

const Template = () => {
  return <AppStorybook path='A.3.2.3_Efficacy' components={content} />;
};

export const A_3_2_3_Efficacy = Template.bind({});
export const A_3_2_3_Efficacy_content = content.bind({});