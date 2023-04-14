import { AppStorybook } from '@pages/AppStorybook';

export default {
  title: 'CLM/Pages',
  component: 'A.4.0_Economic_value',
  parameters: {
    layout: 'fullscreen',
  },
  excludeStories: ['A_4_0_Economic_value_content'],
};

const content = () => <div>Place components here</div>;

const Template = () => {
  return <AppStorybook path='A.4.0_Economic_value' components={content} />;
};

export const A_4_0_Economic_value = Template.bind({});
export const A_4_0_Economic_value_content = content.bind({});