import React from 'react';
import {Button} from '@atoms/Content/Button/button';
import {Header} from '@atoms/Content/Header/Header';
import {FootNote} from '@atoms/Content/FootNote/FootNote';
import {Modal} from '@templates/Layouts/Modal/Modal';
import UnderstandingPANSS1 from './images/Understanding-PANSS-1.png?format=webp';
import UnderstandingPANSS2 from './images/Understanding-PANSS-2.png?format=webp';
import UnderstandingPANSS3 from './images/Understanding-PANSS-3.png?format=webp';
import UnderstandingCGIS1 from './images/Understanding-CGIS-1.png?format=webp';

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
      <>
        <Header custom={'mb-30'}>Understanding PANSS</Header>
        <Header type={'h3'} custom={'mb-20'}>
          The PANSS is a 30-item scale that is commonly split into positive,
          negative, and general<br/> psychopathology subcategories that measure
          <sup>1</sup>:
        </Header>
        <img className={`${blockName}_understanding-panss-image-1 mb-43`} src={UnderstandingPANSS1} alt=""/>
        <img className={`${blockName}_understanding-panss-image-2`} src={UnderstandingPANSS2} alt=""/>
        <Header type={'h3'} custom={'mb-20'}>
          Each subcategory is rated on a scale of 1 (absent) to 7 (extreme)
          <sup>1</sup>:
        </Header>
        <img className={`${blockName}_understanding-panss-image-3`} src={UnderstandingPANSS3} alt=""/>
      </>
  ),
  withFooter: true,
  footer: (
      <FootNote>
        <p>PANSS=Positive and Negative Syndrome Scale.</p>
        <p><strong>References: 1.</strong> ABILIFY ASIMTUFII [prescribing
          information]. Rockville, MD: Otsuka America Pharmaceutical, Inc.
          <strong>2.</strong> American Psychiatric<br/> Association.
          https://www.psychiatry.org/patients-families/schizophrenia/what-is-schizophrenia.
          Accessed March 21, 2023.</p>
      </FootNote>
  )
};

export const StudyDesign = Template.bind({});
StudyDesign.args = {
  ...Default.args,
  customClass: `${blockName}_study-design`,
  link: <Button text='Study Design' custom='button__type-b'/>,
  children: (
      <>
        <Header>Study Design<sup>1</sup></Header>
      </>
  ),
  withFooter: true,
  footer: (
      <FootNote>
        <p>CGI-S=Clinical Global Impression-Severity of Illness Scale;
          PANSS=Positive and Negative Syndrome Scale.<br/>
          <strong>Reference: 1.</strong> Kane JM, et al. J Clin Psychiatry.
          2014;75(11):1254-1260.</p>
      </FootNote>
  )
};

export const UnderstandCGIS = Template.bind({});
UnderstandCGIS.args = {
  ...Default.args,
  customClass: `${blockName}_understanding-cgis`,
  link: <Button text='Understand CGI-S' custom='button__type-b'/>,
  children: (
      <>
        <Header custom={'mb-49'} >Understanding CGI-S<sup>1</sup></Header>
        <Header type={'h3'} custom={'mb-20'}>
          The CGI-S is a 7-point scale that indicates how mentally ill a patient is at a given time.
        </Header>
        <img className={`${blockName}_understanding-cgis-image-1`} src={UnderstandingCGIS1} alt=""/>
      </>
  ),
  withFooter: true,
  footer: (
      <FootNote>
        <p>CGI-S=Clinical Global Impression-Severity of Illness Scale.<br/>
          <strong>Reference: 1.</strong> Busner J, et al. Psychiatry (Edgmont).
          2007;4(7):28-37.</p>
      </FootNote>
  )
};


