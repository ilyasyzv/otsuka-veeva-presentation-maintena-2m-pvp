import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';
import { Header } from '@atoms/Content/Header/Header';
import { Footer } from '@/Components/03-organisms/Footer/Footer';
import { Link } from '@/Components/03-organisms/Routing/Link/Link';
import AsimtufiiLogo from '@/assets/asimtufii-logo.png';
import PageImage from './img/page-image.png';
import './style.scss';

export default {
  title: 'CLM/Pages',
  component: 'A.1.0_Executive_summary',
  parameters: {
    layout: 'fullscreen',
  },
  excludeStories: ['A_1_0_Executive_summary_content'],
};

const baseClass = 'page--A_1_0_Executive_summary';
const content = () => (
  <>
    <Header custom={`${baseClass}-header-1 mb-30 mt-5`}>
      The efficacy and safety of ABILIFY ASIMTUFII<sup>®</sup> (aripiprazole)
      <br /> is based on the adequate and well-controlled studies of
      <br /> ABILIFY MAINTENA
      <sup>®</sup> (aripiprazole)
    </Header>
    <img className={`${baseClass}-img-1`} src={PageImage} alt='' width='852' />
    <Footer
      custom='mb-8'
      footnotes={{
        custom: 'mb-3',
        data: [
          {
            supLeftBig: '*',
            innerText: (
              <span>
                In a pharmacokinetic bridging study, the mean plasma
                concentration of ABILIFY ASIMTUFII remained within a therapeutic
                and efficacious concentration
                <br /> between 200 ng/mL and 320 ng/mL during the 56-day dosing
                interval.<sup>2</sup>
                <br /> AR=adverse reaction.
              </span>
            ),
          },
        ],
      }}
      references={{
        custom: 'mb-38 pr-20',
        data: [
          {
            text: 'Merative Micromedex. Accessed March 22, 2023. https://www.micromedexsolutions.com/',
          },
          {
            text: (
              <>
                Harlin M, et al. <i>CNS Drugs</i>. 2023;37(4):337-350.
              </>
            ),
          },
        ],
      }}
      distance='18px'
      safetyInfo={{
        custom: 'mt-9',
        data: [
          {
            text: (
              <span>
                Please see{' '}
                <Link to='A.7.0_ISI' custom='blue-500'>
                  IMPORTANT SAFETY INFORMATION
                </Link>{' '}
                in this presentation.
              </span>
            ),
          },
          {
            text: 'FOR USE WITH FORMULARY DECISION-MAKERS ONLY. DO NOT DUPLICATE OR DISTRIBUTE. ',
          },
        ],
      }}
      image={<img src={AsimtufiiLogo} alt='asimtufii-logo' width='142.5' />}
    />
  </>
);

const Template = () => {
  return <AppStorybook path='A.1.0_Executive_summary' components={content} />;
};

export const A_1_0_Executive_summary = Template.bind({});
export const A_1_0_Executive_summary_content = content.bind({});
