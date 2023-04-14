import { AppStorybook } from '@pages/AppStorybook';

export default {
  title: 'CLM/Pages',
  component: 'A.3.0_Clinical_profile',
  parameters: {
    layout: 'fullscreen',
  },
  excludeStories: ['A_3_0_Clinical_profile_content'],
};

const content = () => <div>Place components here</div>;

const Template = () => {
  return (
    <AppStorybook
      path='A.3.0_Clinical_profile'
      background='a'
      components={content}
    />
  );
};

export const A_3_0_Clinical_profile = Template.bind({});
export const A_3_0_Clinical_profile_content = content.bind({});
