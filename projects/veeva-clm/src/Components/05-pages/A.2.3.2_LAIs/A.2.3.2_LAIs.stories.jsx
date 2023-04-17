import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';

import { Header } from '@atoms/Content/Header/Header';
import Chart1 from './img/LAIs1.png?format=webp';
import Chart2 from './img/LAIs2.png?format=webp';
import './style.scss';
import { Footer } from '@/Components/03-organisms/Footer/Footer';

export default {
  title: 'CLM/Pages',
  component: 'A.2.3.2_LAIs',
  parameters: {
    layout: 'fullscreen',
  },
  excludeStories: ['A_2_3_2_LAIs_content'],
};

const baseClass = 'page--A_2_3_2_LAIs';

const content = () => (
  <>
    <Header custom={`${baseClass}-header-1 mb-27`}>
      Longer-acting LAIs may provide an additional option to help optimize
      patient outcomes<sup>1-3</sup>
    </Header>
    <img className={`${baseClass}-chart-1 mb-46`} src={Chart1} alt='' />
    <img className={`${baseClass}-chart-2`} src={Chart2} alt='' />
    <Footer
      custom='mt-80'
      footnotes={[
        {
          innerText: 'FGA-LAI=first-generation antipsychotic long-acting injectable; LAI=long-acting injectable; SGA-LAI=second-generation antipsychotic long-acting injectable.'
        }
      ]}
      references={[
        {
          text: <span>Greene M, et al. <em>J Med Econ.</em> 2018;21(2):127-134.</span>
        },
        {
          text: <span>Pietrini F, et al. <em>Neuropsychiatr Dis Treat.</em> 2019;15:1045-1060.</span>
        },
        {
          text: <span>American Psychiatric Association. <em>Practice Guidelines for the Treatment of Patients With Schizophrenia.</em> 3rd ed. Washington, DC; 2021.</span>
        },
        {
          text: <span>Stevens GL, et al. <em>Early Interv Psychiatry.</em> 2016;10(5):365-377.</span>
        }
      ]}
      distance={'40.5px'}
      safetyInfo={[
        {
          text: 'FOR USE WITH FORMULARY DECISION-MAKERS ONLY. DO NOT DUPLICATE OR DISTRIBUTE. '
        }
      ]} />
  </>
);

const Template = () => {
  return <AppStorybook path='A.2.3.2_LAIs' components={content} />;
};

export const A_2_3_2_LAIs = Template.bind({});
export const A_2_3_2_LAIs_content = content.bind({});
