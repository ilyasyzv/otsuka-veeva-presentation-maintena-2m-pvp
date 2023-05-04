import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';
import { Header } from '@atoms/Content/Header/Header';
import { Footer } from '@/Components/03-organisms/Footer/Footer';
import { Link } from '@/Components/03-organisms/Routing/Link/Link';
import Paragraph from '@/Components/01-atoms/Content/Paragraph/Paragraph';
import AsimtufiiLogo from '@/assets/asimtufii-logo.png';
import PageImage1 from './img/page-image-1.png';
import PageIcon1 from './img/page-icon-1.svg';
import PageIcon2 from './img/page-icon-2.svg';
import PageIcon3 from './img/page-icon-3.svg';
import PageIcon4 from './img/page-icon-4.svg';
import './style.scss';

export default {
  title: 'CLM/Pages',
  component: 'A.3.4.2_Dosing',
  parameters: {
    layout: 'fullscreen',
  },
  excludeStories: ['A_3_4_2_Dosing_content'],
};

const baseClass = 'page--A_3_4_2_Dosing';
const content = () => (
  <>
    <Header custom={`${baseClass}-header-1 mb-40`}>
      With Otsuka DoseView, see how variations in dose mix <br /> and WAC price
      may impact your LAI expenditures
    </Header>

    <div className={`${baseClass}-section`}>
      <div className={`${baseClass}-section-block-1`}>
        <div className={`${baseClass}-section-item`}>
          <img src={PageIcon1} alt='' />
          <div>
            <Header custom={`${baseClass}-header-2 mb-6 blue-500`} type='h2'>
              Dose Mix
            </Header>
            <Paragraph>
              Compare your plan’s dose <br /> mix against the nation
            </Paragraph>
          </div>
        </div>
        <div className={`${baseClass}-section-item`}>
          <img src={PageIcon2} alt='' />
          <div>
            <Header custom={`${baseClass}-header-2 mb-6 blue-500`} type='h2'>
              Weighted Average Dose
            </Header>
            <Paragraph>Calculate weighted average doses</Paragraph>
          </div>
        </div>
        <div className={`${baseClass}-section-item`}>
          <img src={PageIcon3} alt='' />
          <div>
            <Header custom={`${baseClass}-header-2 mb-6 blue-500`} type='h2'>
              Cost Utilization Analysis
            </Header>
            <Paragraph>Daily cost utilization</Paragraph>
          </div>
        </div>
        <div className={`${baseClass}-section-item`}>
          <img src={PageIcon4} alt='' />
          <div>
            <Header custom={`${baseClass}-header-2 mb-6 blue-500`} type='h2'>
              Weighted Wholesale Acquisition Cost (WAC)
            </Header>
            <Paragraph>Calculate weighted average doses</Paragraph>
          </div>
        </div>
      </div>

      <div className={`${baseClass}-section-block-2 text-center`}>
        <div className={`${baseClass}-section-item-2`}>
          <img className={`${baseClass}-image-1`} src={PageImage1} alt='' />
          <Paragraph custom={`${baseClass}-paragraph-1 p-0`}>
            NATIONAL BENCHMARK DATA <br />
            <strong>
              representing 12 months of LAI utilization at a national level with
              privacy protection to keep your plan information safe
            </strong>
          </Paragraph>
        </div>
        <Paragraph custom={`${baseClass}-paragraph-2 p-0`}>
          Get the details at Otsuka DoseView <br />
          <strong>
            <a
              href='https://www.doseview.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              www.doseview.com
            </a>
          </strong>
        </Paragraph>
      </div>
    </div>

    <Footer
      custom='mb-7'
      footnotes={{
        custom: 'mb-4',
        data: [
          {
            innerText: <span>LAI= long-acting injectable.</span>,
          },
          {
            innerText: (
              <span>
                WAC is Otsuka’s price to its wholesaler/distributors without
                regard to customary prompt pay discounts, bona fide service
                fees, credits, rebates, <br /> chargebacks, or other
                concessions. It is a list price.
              </span>
            ),
          },
        ],
      }}
      safetyInfo={{
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
            text: 'FOR USE WITH FORMULARY DECISION-MAKERS ONLY. DO NOT DUPLICATE OR DISTRIBUTE.',
          },
        ],
      }}
      image={<img src={AsimtufiiLogo} alt='asimtufii-logo' width='142.5' />}
    />
  </>
);

const Template = () => {
  return <AppStorybook path='A.3.4.2_Dosing' components={content} />;
};

export const A_3_4_2_Dosing = Template.bind({});
export const A_3_4_2_Dosing_content = content.bind({});
