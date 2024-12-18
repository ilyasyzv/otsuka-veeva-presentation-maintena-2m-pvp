import { AppStorybook } from '@pages/AppStorybook';
import React from 'react';
import { Header } from '@atoms/Content/Header/Header';
import {
  FullRecurrenceDefinition,
  BaselineCharacteristics,
  StudyDesign2,
} from '@templates/Layouts/Modal/Modal.stories';

import { List } from '@atoms/Content/List/List';
import PlaceboImage from '@/Components/05-pages/A.3.5.5_Additional/img/Placebo_image.png';
import PrimaryGraphic from '@/Components/05-pages/A.3.5.5_Additional/img/Primary_graphic.png';
import { Paragraph } from '@atoms/Content/Paragraph/Paragraph';
import './style.scss';
import { Footer } from '@/Components/03-organisms/Footer/Footer';
import AsimtufiiLogo from '@/assets/maintena-logo.png';
import { Link } from '@organisms';

export default {
  title: 'CLM/Pages',
  component: 'A.3.5.5_Additional',
  parameters: {
    layout: 'fullscreen',
  },
  excludeStories: ['A_3_5_5_Additional_content'],
};

const baseClass = 'page--A_3_5_5_Additional';
const content = () => (
  <>
    <Header type='h3' custom={`${baseClass}-header-1 heading-alter`}>
      PIVOTAL 52-WEEK BIPOLAR I DISORDER STUDY
    </Header>
    <Header custom={`${baseClass}-header-2 mb-28`}>
      ABILIFY MAINTENA<sup>®</sup> (aripiprazole) significantly reduced the
      <br /> risk of recurrence* of any mood episode over 1 year vs placebo
      <sup>1</sup>
    </Header>
    <img src={PrimaryGraphic} alt='graphic' className='graphic' />
    <img src={PlaceboImage} alt='placebo' className='placebo' />
    <List
      content={{
        type: 'circle',
        custom: `${baseClass}-list`,
        data: [
          {
            text: (
              <>
                Significantly reduced the risk of recurrence of any mood episode
                by 55% vs placebo (HR=0.45 [95% CI, 0.30-0.68], P&#60;0.0001)
                <sup>†1</sup>
              </>
            ),
            custom_style: 'py-0',
          },
          {
            text: (
              <>
                Significantly delayed time to recurrence for a manic episode and
                mixed episode<sup>2</sup>
              </>
            ),
            custom_style: 'py-0',
          },
          {
            text: (
              <>
                No substantial difference in the time to a depressive episode
                <sup>1</sup>
              </>
            ),
            custom_style: 'py-0',
          },
        ],
      }}
    />
    <Paragraph size='small'>Adapted from Calabrese JR, et al.</Paragraph>
    <StudyDesign2 {...StudyDesign2.args} />
    <FullRecurrenceDefinition {...FullRecurrenceDefinition.args} />
    <BaselineCharacteristics {...BaselineCharacteristics.args} />
    <Footer
      custom='mb-6'
      footnotes={{
        custom: `${baseClass}-footnotes`,
        data: [
          {
            supLeft: '*',
            innerText: (
              <>
                Recurrence was defined as clinical worsening, psychiatric
                hospitalization, or increased risk of suicide.
              </>
            ),

            supRight: '1',
          },
          {
            supLeft: '†',
            innerText: (
              <>
                The HR was used to calculate the reduction in risk of recurrence
                for patients on ABILIFY MAINTENA vs <br />
                placebo. This figure is based on a total of 102 recurrences.
              </>
            ),
            supRight: '1',
          },
          {
            innerText: (
              <>
                BP-I=bipolar I disorder; CI=confidence interval; HR=hazard
                ratio.
              </>
            ),
          },
        ],
      }}
      references={{
        data: [
          {
            text: (
              <span>
                Calabrese JR, et al. <em>J Clin Psychiatry.</em>
                2017;78(3):324-331.
              </span>
            ),
          },
          {
            text: <span>Data on file. ABIMAI-178.</span>,
          },
        ],
      }}
      safetyInfo={{
        custom: 'mt-6',
        data: [
          {
            text: (
              <span>
                {' '}
                Please see{' '}
                <Link to='A.7.0_ISI' custom='blue-500'>
                  IMPORTANT SAFETY INFORMATION
                </Link>{' '}
                in this presentation.
              </span>
            ),
          },
          {
            text: (
              <span>
                FOR USE WITH FORMULARY DECISION-MAKERS ONLY. DO NOT DUPLICATE OR
                DISTRIBUTE.
              </span>
            ),
          },
        ],
      }}
      image={<img src={AsimtufiiLogo} alt='asimtufii-logo' width='142.5' />}
    />
  </>
);

const Template = () => {
  return <AppStorybook path='A.3.5.5_Additional' components={content} />;
};

export const A_3_5_5_Additional = Template.bind({});
export const A_3_5_5_Additional_content = content.bind({});
