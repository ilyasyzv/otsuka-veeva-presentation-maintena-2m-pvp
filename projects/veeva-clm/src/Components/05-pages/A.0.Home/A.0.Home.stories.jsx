import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';
import Header from '@/Components/01-atoms/Content/Header/Header';
import HorizontalLine from '@/Components/01-atoms/Content/HorizontalLine/HorizontalLine';
import '@/Components/00-base/variables.scss';

import OtsukaSignature from './img/Signature.svg?format=webp';
import LogoAdilify from './img/Abilify.svg?format=webp';

import './style.scss';
import { Link } from '@/Components/03-organisms/Routing/Link/Link';
import { Footer } from '@/Components/03-organisms/Footer/Footer';

export default {
  title: 'CLM/Pages',
  component: 'A.0.Home',
  parameters: {
    layout: 'fullscreen',
  },
  excludeStories: ['A_0_Home_content'],
};

const blockName = 'A-0-Home';
const classNames = require('classnames');

const content = () => (
  <div className={`${blockName}_wrapper`}>
    <Header type='h1' custom={classNames('mb-22', `${blockName}-header`)}>
      ABILIFY ASIMTUFII<sup className={`${blockName}-sup`}>®</sup>
      (aripiprazole) Extended-
      <br />
      Release Injectable Suspension for the Treatment
      <br /> of Schizophrenia and Maintenance Monotherapy <br />
      Treatment of Bipolar I Disorder in Adults
    </Header>
    <HorizontalLine
      color='warning'
      custom={classNames(`${blockName}-underline`, 'mb-16')}
    />
    <Header
      type='h2'
      custom={classNames(`${blockName}-secondary-header`, 'mb-10')}
    >
      The First and Only Once-Every-2-Months Long-Acting
      <br /> Injectable Suspension Indicated for Treatment of
      <br /> Schizophrenia and Maintenance Treatment of Bipolar I<br /> Disorder
      in Adults
    </Header>
    <p className={classNames(`${blockName}-trademark`, ' mb-8')}>
      © 2023 Otsuka America Pharmaceutical, Inc. All rights reserved.
      <br /> April 2023 23US23EXY0006 <br />
      Trademarks used are property of their respective owners.
    </p>
    <div className={classNames(`${blockName}-sign__wrapper`, ' mb-8')}>
      <img src={OtsukaSignature} alt='signature' width='214' />
    </div>
    <div className={classNames(`${blockName}-logo__wrapper`, ' mb-35')}>
      <img src={LogoAdilify} alt='logo' width='246' />
    </div>
    <Footer
      custom={classNames(`${blockName}-footer`, 'bottom-29')}
      safetyInfo={{
        data: [
          {
            text: (
              <span
                className={classNames(
                  `${blockName}-footer_uppercase`,
                  'height font-blue',
                )}
              >
                WARNING: INCREASED MORTALITY IN ELDERLY PATIENTS WITH
                DEMENTIA-RELATED PSYCHOSIS
              </span>
            ),
          },
          {
            text: (
              <span>
                Elderly patients with dementia-related psychosis treated with
                antipsychotic drugs are at increased risk of death (1.6 to
                <br /> 1.7 times) compared to placebo-treated patients. ABILIFY
                ASIMTUFII and ABILIFY MAINTENA are not approved for the
                <br /> treatment of patients with dementia-related psychosis.
              </span>
            ),
          },
          {
            text: (
              <div className='isi-info'>
                Please see{' '}
                <Link to='A.7.0_ISI' custom='font-blue'>
                  <span className={`${blockName}-footer_uppercase`}>
                    IMPORTANT SAFETY INFORMATION
                  </span>
                </Link>{' '}
                in this presentation.
              </div>
            ),
          },
          {
            text: (
              <span
                className={classNames(`${blockName}-footer_uppercase, height`)}
                style={{ letterSpacing: 0 }}
              >
                FOR USE WITH FORMULARY DECISION-MAKERS ONLY. DO NOT DUPLICATE OR
                DISTRIBUTE
              </span>
            ),
          },
        ],
      }}
    />
  </div>
);

const Template = () => {
  return <AppStorybook path='A.0.Home' background='b' components={content} />;
};

export const A_0_Home = Template.bind({});
export const A_0_Home_content = content.bind({});
