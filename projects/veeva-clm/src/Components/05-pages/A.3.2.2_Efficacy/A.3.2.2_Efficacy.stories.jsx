import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';
import Header from '@/Components/01-atoms/Content/Header/Header';

import TableImg from '@/Components/05-pages/A.3.2.2_Efficacy/img/Table.png?format=webp';
import TableBannerImg from '@/Components/05-pages/A.3.2.2_Efficacy/img/TableBanner.png?format=webp';

import './A.3.2.1_Efficacy.scss';
import { Footer } from '@/Components/03-organisms/Footer/Footer';

export default {
  title: 'CLM/Pages',
  component: 'A.3.2.2_Efficacy',
  parameters: {
    layout: 'fullscreen',
  },
  excludeStories: ['A_3_2_2_Efficacy_content'],
};

const blockName = 'A_3_2_2_Efficacy';
const classNames = require('classnames');

const content = () => (
  <div className={`${blockName}_wrapper`}>
    <Header custom={classNames(`${blockName}-header`, 'mb-15')}>
      ABILIFY ASIMTUFII<sup>®</sup> (aripiprazole) and <br />
      ABILIFY MAINTENA
      <sup>®</sup> (aripiprazole) showed similar
      <br /> aripiprazole concentrations<sup>1</sup>
    </Header>
    <img src={TableImg} alt='ratio table' className='mb-50' />
    <img src={TableBannerImg} alt='banner' className='mb-20' />
    <Footer
      footnotes={{
        data: [
          {
            supLeft: '*',
            innerText: (
              <span>
                AUC<sup>0-56</sup> following the fourth administration of
                ABILIFY ASIMTUFII 960 mg or the sum of AUC<sup>0-28</sup>{' '}
                following the seventh and eighth administrations of ABILIFY
                MAINTENA 400 mg.
              </span>
            ),
          },
          {
            supLeft: '†',
            innerText: (
              <span>
                Aripiprazole plasma concentrations following the fourth
                administration of ABILIFY ASIMTUFII 960 mg (C<sup>56</sup>) or
                the eighth administration of ABILIFY MAINTENA 400 mg (C
                <sup>28</sup>).
              </span>
            ),
          },
          {
            supLeft: '‡',
            innerText: (
              <span>
                ABILIFY ASIMTUFII 960 mg (n=34), ABILIFY MAINTENA 400 mg (n=32).
              </span>
            ),
          },
          {
            supLeft: '§',
            innerText: (
              <span>
                ABILIFY ASIMTUFII 960 mg (n=96), ABILIFY MAINTENA 400 mg (n=82).
              </span>
            ),
          },
          {
            innerText: (
              <span>
                AUC=area under curve; C=concentration; CI=confidence interval; C
                <sup>max</sup>=maximum concentration.
              </span>
            ),
          },
        ],
      }}
      safetyInfo={{
        custom: 'mt-25',
        data: [
          {
            text: (
              <span>
                Please see{' '}
                <a href='/' className='blue-500'>
                  IMPORTANT SAFETY INFORMATION
                </a>{' '}
                in this presentation.
              </span>
            ),
          },
          {
            text: 'FOR USE WITH FORMULARY DECISION-MAKERS ONLY. DO NOT DUPLICATE OR DISTRIBUTE. ',
          },
        ],
      }}
    />
  </div>
);

const Template = () => {
  return <AppStorybook path='A.3.2.2_Efficacy' components={content} />;
};

export const A_3_2_2_Efficacy = Template.bind({});
export const A_3_2_2_Efficacy_content = content.bind({});
