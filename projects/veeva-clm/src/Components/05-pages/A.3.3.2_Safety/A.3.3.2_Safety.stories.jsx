import React from 'react';
import { AppStorybook } from '@pages/AppStorybook';
import Header from '@/Components/01-atoms/Content/Header/Header';

import ProlactinTableImg from '@/Components/05-pages/A.3.3.2_Safety/img/ProlactinTable.png?format=webp';
import { Button } from '@/Components/01-atoms/Content/Button/button';

import './A.3.3.2_Safety.scss';
import List from '@/Components/01-atoms/Content/List/List';

export default {
  title: 'CLM/Pages',
  component: 'A.3.3.2_Safety',
  parameters: {
    layout: 'fullscreen',
  },
  excludeStories: ['A_3_3_2_Safety_content'],
};

const blockName = 'A-3-3-2_Safety';
const classNames = require('classnames');

const content = () => (
  <div className={`${blockName}_wrapper`}>
    <Header custom='mb-3'>
      Prolactin and extrapyramidal symptom-related <br /> events in patients
      with schizophrenia receiving <br /> ABILIFY MAINTENA<sup>®</sup>
      (aripiprazole)
    </Header>
    <List
      content={{
        columns: 'columns-1',
        type: 'circle',
        custom: 'mb-5',
        data: [
          {
            text: (
              <>
                Prolactin levels and extrapyramidal symptoms<sup>1</sup>
              </>
            ),
          },
          {
            text: (
              <>
                Prolactin levels and incidence of an extrapyramidal
                symptom–related event among patients with schizophrenia
                receiving ABILIFY MAINTENA vs those taking placebo<sup>1</sup>
              </>
            ),
          },
        ],
      }}
    />
    <img
      src={ProlactinTableImg}
      alt='prolactin table'
      className={classNames(`${blockName}-img`, 'mb-5')}
    />
    <Button
      text={
        <>
          ABILIFY ASIMTUFII<sup>®</sup> (aripiprazole) Safety
        </>
      }
      custom={classNames(
        `${blockName}-btn`,
        'button__type-c',
        ' button__type-c-large',
      )}
    />
  </div>
);

const Template = () => {
  return <AppStorybook path='A.3.3.2_Safety' components={content} />;
};

export const A_3_3_2_Safety = Template.bind({});
export const A_3_3_2_Safety_content = content.bind({});
