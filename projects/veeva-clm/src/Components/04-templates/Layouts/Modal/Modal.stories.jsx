import React from 'react';
import {Button} from '@atoms/Content/Button/button';
import {Header} from '@atoms/Content/Header/Header';
import {FootNote} from '@atoms/Content/FootNote/FootNote';
import {Modal} from '@templates/Layouts/Modal/Modal';
import UnderstandingPANSS1 from './images/Understanding-PANSS-1.png?format=webp';
import UnderstandingPANSS2 from './images/Understanding-PANSS-2.png?format=webp';
import UnderstandingPANSS3 from './images/Understanding-PANSS-3.png?format=webp';

export default {
  title: 'CLM/Templates/Modal',
  component: Modal,
};

const Template = (args) => <Modal {...args}/>;

export const Default = Template.bind({});
Default.args = {
  children: <p>Some content</p>,
};

export const UnderstandPANSS = Template.bind({});

const blockName = 'modal';

UnderstandPANSS.args = {
  ...Default.args,
  customClass: `${blockName}_understanding-panss`,
  link: <Button text='Understand PANSS' custom='button__type-b'/>,
  children: (
      <div>
        <Header>Understanding PANSS</Header>
        <Header type={'h3'}>
          The PANSS is a 30-item scale that is commonly split into positive,
          negative, and general<br/> psychopathology subcategories that measure
          <sup>1</sup>:
        </Header>
        <img className={`${blockName}_understanding-panss-image-1`} src={UnderstandingPANSS1} alt=""/>
        <img className={`${blockName}_understanding-panss-image-2`} src={UnderstandingPANSS2} alt=""/>
        <Header type={'h3'}>
          Each subcategory is rated on a scale of 1 (absent) to 7 (extreme)
          <sup>1</sup>:
        </Header>
        <img className={`${blockName}_understanding-panss-image-3`} src={UnderstandingPANSS3} alt=""/>
        <FootNote>
          <p>PANSS=Positive and Negative Syndrome Scale.</p>
          <p><strong>References: 1.</strong> ABILIFY ASIMTUFII [prescribing
            information]. Rockville, MD: Otsuka America Pharmaceutical, Inc.
            <strong>2.</strong> American Psychiatric<br/> Association.
            https://www.psychiatry.org/patients-families/schizophrenia/what-is-schizophrenia.
            Accessed March 21, 2023.</p>
        </FootNote>
      </div>
  ),
};


