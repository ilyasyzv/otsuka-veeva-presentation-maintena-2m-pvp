import { AppStorybook } from '@pages/AppStorybook';

export default {
  title: 'CLM/Pages',
  component: 'A.2.3.1_LAIs',
  parameters: {
    layout: 'fullscreen',
  },
  excludeStories: ['A_2_3_1_LAIs_content'],
};

const content = () => <div>Place components here</div>;

const Template = () => {
  return <AppStorybook path='A.2.3.1_LAIs' components={content} />;
};

export const A_2_3_1_LAIs = Template.bind({});
export const A_2_3_1_LAIs_content = content.bind({});
