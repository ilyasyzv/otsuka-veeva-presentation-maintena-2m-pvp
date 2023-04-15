import React from 'react';
import { Button } from '@atoms/Content/Button/button';
import { Header } from '@atoms/Content/Header/Header';
import { FootNote } from '@atoms/Content/FootNote/FootNote';
import { Modal } from '@templates/Layouts/Modal/Modal';
import { Text } from '@/Components/01-atoms/Content/Text/Text';
import List from '@/Components/01-atoms/Content/List/List';
import UnderstandingPANSS1 from './images/Understanding-PANSS-1.png?format=webp';
import UnderstandingPANSS2 from './images/Understanding-PANSS-2.png?format=webp';
import UnderstandingPANSS3 from './images/Understanding-PANSS-3.png?format=webp';
import UnderstandingCGIS1 from './images/Understanding-CGIS-1.png?format=webp';
import FullRecurrenceDefinition1 from './images/FullRecurrenceDefinition-1.png?format=webp';
import BaselineCharacteristicsImg from './images/BaselinePatient.png?format=webp';

export default {
  title: 'CLM/Templates/Modal',
  component: Modal,
};

const Template = (args) => <Modal {...args} />;
const classNames = require('classnames');

export const Default = Template.bind({});
Default.args = {
  children: <p>Some content</p>,
};

export const UnderstandPANSS = Template.bind({});

const blockName = 'modal';

UnderstandPANSS.args = {
  ...Default.args,
  customClass: `${blockName}_understanding-panss`,
  link: <Button text='Understand PANSS' custom='button__type-b' />,
  children: (
    <>
      <Header custom='mb-30'>Understanding PANSS</Header>
      <Header type='h3' custom='mb-20'>
        The PANSS is a 30-item scale that is commonly split into positive,
        negative, and general
        <br /> psychopathology subcategories that measure
        <sup>1</sup>:
      </Header>
      <img
        className={`${blockName}_understanding-panss-image-1 mb-43`}
        src={UnderstandingPANSS1}
        alt=''
      />
      <img
        className={`${blockName}_understanding-panss-image-2`}
        src={UnderstandingPANSS2}
        alt=''
      />
      <Header type='h3' custom='mb-20'>
        Each subcategory is rated on a scale of 1 (absent) to 7 (extreme)
        <sup>1</sup>:
      </Header>
      <img
        className={`${blockName}_understanding-panss-image-3`}
        src={UnderstandingPANSS3}
        alt=''
      />
    </>
  ),
  withFooter: true,
  footer: (
    <FootNote>
      <p>PANSS=Positive and Negative Syndrome Scale.</p>
      <p>
        <strong>References: 1.</strong> ABILIFY ASIMTUFII [prescribing
        information]. Rockville, MD: Otsuka America Pharmaceutical, Inc.
        <strong>2.</strong> American Psychiatric
        <br /> Association.
        https://www.psychiatry.org/patients-families/schizophrenia/what-is-schizophrenia.
        Accessed March 21, 2023.
      </p>
    </FootNote>
  ),
};

export const UnderstandCGIS = Template.bind({});
UnderstandCGIS.args = {
  ...Default.args,
  customClass: `${blockName}_understanding-cgis`,
  link: <Button text='Understand CGI-S' custom='button__type-b' />,
  children: (
    <>
      <Header custom='mb-49'>
        Understanding CGI-S<sup>1</sup>
      </Header>
      <Header type='h3' custom='mb-20'>
        The CGI-S is a 7-point scale that indicates how mentally ill a patient
        is at a given time.
      </Header>
      <img
        className={`${blockName}_understanding-cgis-image-1`}
        src={UnderstandingCGIS1}
        alt=''
      />
    </>
  ),
  withFooter: true,
  footer: (
    <FootNote>
      <p>
        CGI-S=Clinical Global Impression-Severity of Illness Scale.
        <br />
        <strong>Reference: 1.</strong> Busner J, et al. Psychiatry (Edgmont).
        2007;4(7):28-37.
      </p>
    </FootNote>
  ),
};

export const FullRecurrenceDefinition = Template.bind({});
FullRecurrenceDefinition.args = {
  ...Default.args,
  customClass: `${blockName}_full-ecurrence-definition`,
  link: (
    <Button text='Full&nbsp;Recurrence Definition' custom='button__type-b' />
  ),
  children: (
    <>
      <Header custom='mb-29'>
        Recurrence was defined as 1 or more of the following<sup>1</sup>:
      </Header>
      <img
        className={`${blockName}_full-ecurrence-definition-image-1`}
        src={FullRecurrenceDefinition1}
        alt=''
      />
    </>
  ),
  withFooter: true,
  footer: (
    <FootNote>
      <p>
        AE=adverse event; CGI-BP-S=Clinical Global Impression-Bipolar
        Version-Severity; C-SSRS=Columbia-Suicide Severity Rating Scale;
        <br />
        MÅDRS=Montgomery-Åsberg Depression Rating Scale; YMRS=Young Mania Rating
        Scale.
        <br />
        <strong>Reference: 1.</strong> Calabrese JR, et al. J Clin Psychiatry.
        2017;78(3):324-331.
      </p>
    </FootNote>
  ),
};

export const BaselineCharacteristics = Template.bind({});
BaselineCharacteristics.args = {
  ...Default.args,
  customClass: `${blockName}_baseline-characteristics`,
  link: (
    <Button text='Baseline&nbsp; Characteristics' custom='button__type-b' />
  ),
  children: (
    <>
      <Header
        custom={classNames(
          'mb-59',
          `${blockName}_baseline-characteristics-header`,
        )}
      >
        Patients living with bipolar I disorder in the maintenance
        <br /> study had a history of manic or mixed episodes that required
        hospitalization or medication treatment<sup>1</sup>:
      </Header>
      <div className={`${blockName}_baseline-characteristics-image-wrap`}>
        <img
          className={`${blockName}_baseline-characteristics-image-1`}
          src={BaselineCharacteristicsImg}
          alt='baseline characteristics'
        />
      </div>
    </>
  ),
  withFooter: true,
  footer: (
    <FootNote>
      <p>
        *Per DSM-IV-TR criteria.
        <br />
        DSM-IV-TR=Diagnostic and Statistical Manual of Mental Disorders, Fourth
        Edition, Text Revision; YMRS=Young Mania Rating Scale.
        <br />
        <strong>Reference: 1.</strong>Calabrese JR, et al. J Clin Psychiatry.
        2017;78(3):324-331.
      </p>
    </FootNote>
  ),
};

export const Relapse = Template.bind({});
Relapse.args = {
  ...Default.args,
  // customClass: `${blockName}_study-design`,
  link: <Button text='Relapse&nbsp; Definition' custom='button__type-b' />,
  children: (
    <>
      <Header custom='mb-18'>
        Relapse was defined as 1 or more of the following<sup>1</sup>:
      </Header>
      <Text
        title='Clinical worsening'
        innerText={
          <>
            CGI-Improvement score ≥5 and an increase on any of 4 individual
            PANSS* items to a score &lt;4: with an absolute increase
            <br /> of ≥2 on that specific item since randomization or an
            increase of &lt;4 on these PANSS items and an absolute increase of
            ≥4
            <br /> on the combined score of these items since randomization.
          </>
        }
      />
      <Text
        title='Psychiatric hospitalization'
        innerText='Due to worsening of psychotic symptoms.'
      />
      <Text
        title='Risk of suicide'
        innerText={
          <>
            Clinical Global Impression – Severity of Suicidality (CGI-SS) score
            of 4 (severely suicidal) or 5 (attempted suicide) on
            <br /> part 1 or CGI-SS score of 6 (much worse) or 7 (very much
            worse) on part 2.
          </>
        }
      />
      <Text
        title='Violent behavior'
        innerText='Clinically significant self-injury, injury to another person, or property damage.'
      />
    </>
  ),
  withFooter: true,
  footer: (
    <FootNote>
      <p>
        PANSS items were conceptual disorganization, hallucinatory behavior,
        suspiciousness, or unusual thought content.
        <br /> CGI=Clinical Global Impressions; PANSS=Positive and Negative
        Syndrome Scale.
        <br />
        <strong>Reference: 1.</strong> Kane JM, et al. J Clin Psychiatry.
        2012;73(5):617-624.
      </p>
    </FootNote>
  ),
};

export const StudyDesignSup = Template.bind({});
StudyDesignSup.args = {
  ...Default.args,
  customClass: `${blockName}_study-design`,
  link: <Button text='Study design' custom='button__type-b' />,
  children: (
    <>
      <Header custom='mb-26'>
        Study design<sup>1</sup>
      </Header>
      <Text
        title='12-week, multiphase maintenance study'
        innerText='A randomized, double-blind,
        placebo-controlled clinical
        study of 340 acutely relapsed patients living with schizophrenia to determine the efficacy and safety of
        ABILIFY MAINTENA® (aripiprazole) 400 mg (n=168) vs placebo (n=172). All patients had a diagnosis of
        schizophrenia at study entry.'
      />
      <Text
        title='Patient population'
        list={{
          columns: 'columns-1',
          type: 'circle',
          data: [
            {
              text: (
                <>
                  Adults with schizophrenia who were experiencing an acute
                  psychiatric episode at the time of screening <br />
                  and baseline
                </>
              ),
            },
            {
              text: (
                <>
                  Patients with prior aripiprazole use had to undergo a 7-day
                  washout period from prior antipsychotics and other <br />
                  prohibited medications at study entry,
                </>
              ),
            },
            {
              text: (
                <>
                  Patients without prior aripiprazole use received open-label
                  treatment with oral aripiprazole 10 mg for 3 days to establish
                  tolerability prior to the 7-day washout period
                </>
              ),
            },
            {
              text: (
                <>
                  Patients were required to remain as inpatients for at least
                  the first 2 weeks of treatment, after which hospitalization
                  <br />
                  status was determined on the basis of the investigator’s
                  judgment of the patient’s clinical status. Those discharged
                  were followed with clinic visits and phone calls
                </>
              ),
            },
          ],
        }}
      />
      <Text
        title='Study endpoints'
        innerText={
          <>
            <strong className={`${blockName}_study-design__strong`}>
              Primary endpoint:&nbsp;
            </strong>
            Mean change in PANSS total score from baseline to Week 10
            <br />
            <strong className={`${blockName}_study-design__strong`}>
              Secondary endpoint: &nbsp;
            </strong>
            Mean change in CGI-S score from baseline to endpoint at Week 12.
          </>
        }
      />
    </>
  ),
  withFooter: true,
  footer: (
    <FootNote>
      <p>
        CGI-S=Clinical Global Impression-Severity of Illness Scale;
        PANSS=Positive and Negative Syndrome Scale.
        <br />
        <strong>Reference: 1.</strong> Kane JM, et al. J Clin Psychiatry.
        2014;75(11):1254-1260.
      </p>
    </FootNote>
  ),
};

export const StudyDesign1 = Template.bind({});
StudyDesign1.args = {
  ...Default.args,
  customClass: `${blockName}_study-design`,
  link: <Button text='Study design' custom='button__type-b' />,
  children: (
    <>
      <Header custom='mb-18'>Study design</Header>
      <Text
        title={
          <>
            52-Week, Multiphase Maintenance Study<sup>1</sup>
          </>
        }
        innerText='A 52-week, placebo-controlled maintenance study evaluated the time to relapse for adult patients
         living with schizophrenia.'
      />
      <Text
        title={
          <>
            Patient Population<sup>1</sup>
          </>
        }
        innerText='Patients living with schizophrenia diagnosed ≥3 years with a history of symptom exacerbation or
         relapse when not receiving antipsychotic treatment.*'
      />
      <Text
        title={
          <>
            4 Phases of Study<sup>1,2</sup>
          </>
        }
        list={{
          columns: 'columns-1',
          type: 'circle',
          data: [
            {
              text: (
                <>
                  <strong>Phase 1: </strong>an open-label phase of 4 to 6 weeks
                  in which patients were converted to oral aripiprazole (n=633)
                </>
              ),
            },
            {
              text: (
                <>
                  <strong>Phase 2: </strong>an open-label phase of 4 to 12 weeks
                  in which patients were stabilized on oral aripiprazole 10 mg
                  to 30 mg once daily (n=710)
                </>
              ),
            },
            {
              text: (
                <>
                  <strong>Phase 3: </strong>a single-blind phase of 12 to 36
                  weeks in which patients were converted to and stabilized on
                  <br />
                  ABILIFY MAINTENA<sup>®</sup> (aripiprazole) 400 mg (n=576)
                  <List
                    content={{
                      columns: 'columns-1',
                      type: 'rectangle',
                      data: [
                        {
                          text: (
                            <>
                              Patients continued on oral aripiprazole 10 mg to
                              20 mg for the first 14 days following the initial
                              ABILIFY MAINTENA dose
                            </>
                          ),
                        },
                      ],
                    }}
                  />
                </>
              ),
            },
            {
              text: (
                <>
                  <strong>Phase 4: </strong>a double-blind, placebo-controlled,
                  randomized phase for up to 52 weeks in which patients received
                  either intramuscular ABILIFY MAINTENA (n=269) or placebo
                  intramuscular depot (n=134) once monthly
                </>
              ),
            },
          ],
        }}
      />
    </>
  ),
  withFooter: true,
  footer: (
    <FootNote>
      <p>
        <sup>*</sup>Diagnostic and Statistical Manual of Mental Disorders,
        Fourth Edition, Text Revision (DSM-IV-TR).
        <br />
        <strong>Reference: 1.</strong> Kane JM, et al. J Clin Psychiatry.
        2012;73(5):617-624. 2. ABILIFY ASIMTUFII [prescribing information].
        Rockville, MD: Otsuka America Pharmaceutical, Inc.
      </p>
    </FootNote>
  ),
};

export const StudyDesign2 = Template.bind({});
StudyDesign2.args = {
  ...Default.args,
  customClass: `${blockName}_study-design`,
  link: <Button text='Study design' custom='button__type-b' />,
  children: (
    <>
      <Header custom='mb-18'>Study design</Header>
      <Text
        title={
          <>
            52-Week, Multiphase Maintenance Study<sup>1</sup>
          </>
        }
        innerText={
          <>
            A 52-week, placebo-controlled maintenance study that evaluated the
            time to recurrence of any mood episode in
            <br /> adult patients with bipolar I disorder.
          </>
        }
      />
      <Text
        title={
          <>
            Patient Population<sup>1</sup>
          </>
        }
        list={{
          columns: 'columns-1',
          type: 'circle',
          data: [
            {
              text: (
                <>
                  Patients with bipolar I disorder with a history of ≥1 manic or
                  mixed episode(s) that required hospitalization or treatment
                  with either a mood stabilizer or antipsychotic
                </>
              ),
            },
            {
              text: (
                <>
                  Baseline patient characteristics included patients currently
                  experiencing a manic episode and ≥20 YMRS total score
                </>
              ),
            },
            {
              text: (
                <>
                  Patients were excluded if they experienced ≥9 episodes (rapid
                  cycling) in the past year
                </>
              ),
            },
          ],
        }}
      />
      <Text
        title={
          <>
            4 Phases of Study<sup>1</sup>
          </>
        }
        list={{
          columns: 'columns-1',
          type: 'circle',
          data: [
            {
              text: (
                <>
                  <strong>Phase 1: </strong>an open-label phase of 4 to 6 weeks
                  in which patients were converted to oral aripiprazole (n=466)
                </>
              ),
            },
            {
              text: (
                <>
                  <strong>Phase 2: </strong>an open-label phase of 2 to 8 weeks
                  in which patients were stabilized on oral aripiprazole 15 mg
                  to 30 mg once daily (n=632)
                  <List
                    content={{
                      columns: 'columns-1',
                      type: 'rectangle',
                      data: [
                        {
                          text: (
                            <>
                              This phase included patients who entered the trial
                              on oral aripiprazole
                            </>
                          ),
                        },
                      ],
                    }}
                  />
                </>
              ),
            },
            {
              text: (
                <>
                  <strong>Phase 3: </strong>a single-blind phase of 12 to 28
                  weeks in which patients were converted to and stabilized on
                  ABILIFY MAINTENA<sup>®</sup> (aripiprazole) 400 mg (n=425)
                  <List
                    content={{
                      columns: 'columns-1',
                      type: 'rectangle',
                      data: [
                        {
                          text: (
                            <>
                              Patients continued on oral aripiprazole 10 mg to
                              20 mg for the first 14 days following the initial
                              <br />
                              ABILIFY MAINTENA dose
                            </>
                          ),
                        },
                      ],
                    }}
                  />
                </>
              ),
            },
            {
              text: (
                <>
                  <strong>Phase 4: </strong>a double-blind, placebo-controlled,
                  randomized phase for up to 52 weeks in which patients received
                  either intramuscular ABILIFY MAINTENA (n=133) or placebo
                  intramuscular depot (n=133) once monthly
                </>
              ),
            },
          ],
        }}
      />
    </>
  ),
  withFooter: true,
  footer: (
    <FootNote>
      <p>
        YMRS=Young Mania Rating Scale.
        <br />
        <strong>Reference: 1.</strong> Calabrese JR, et al. J Clin Psychiatry.
        2017;78(3):324-331.
      </p>
    </FootNote>
  ),
};

export const StudyDesignScroll1 = Template.bind({});
StudyDesignScroll1.args = {
  ...Default.args,
  customClass: `${blockName}_study-design`,
  withHeader: true,
  link: <Button text='Study Design' custom='button__type-b' />,
  header: <Header custom='mb-18'>Study design</Header>,
  children: (
    <>
      <Text
        title='Objective'
        list={{
          columns: 'columns-1',
          type: 'circle',
          data: [
            {
              text: (
                <>
                  To compare differences in medication adherence and
                  discontinuation between patients who initiated an
                  <br /> LAI and patients who changed from one oral
                  antipsychotic monotherapy to another
                </>
              ),
            },
          ],
        }}
      />
      <Text
        title={
          <>
            Patient Population<sup>1</sup>
          </>
        }
        list={{
          columns: 'columns-1',
          type: 'circle',
          data: [
            {
              text: (
                <>
                  To compare differences in medication adherence and
                  discontinuation between patients who initiated an
                  <br /> LAI and patients who changed from one oral
                  antipsychotic monotherapy to another
                </>
              ),
            },
          ],
        }}
      />
      <Text
        title='Indices'
        list={{
          columns: 'columns-1',
          type: 'circle',
          data: [
            {
              text: (
                <>
                  The index date was defined as the earliest occurrence (the
                  first date) of a claim for one of the available LAI <br />
                  therapies of interest during the identification (ID) period
                  between January 1, 2013, and June 30, 2014
                </>
              ),
            },
            {
              text: (
                <>
                  The index therapy was identified as the therapy observed on
                  the index date
                </>
              ),
            },
          ],
        }}
      />
      <Text
        title='Data Source'
        list={{
          columns: 'columns-1',
          type: 'circle',
          data: [
            {
              text: (
                <>
                  Truven MarketScan Commercial and Medicaid Databases (January
                  1, 2012, through June 30, 2015)
                </>
              ),
            },
          ],
        }}
      />
      <Text
        title='Inclusion Criteria'
        list={{
          columns: 'columns-1',
          type: 'circle',
          data: [
            {
              text: (
                <>
                  Patients with existing or newly diagnosed bipolar disorder
                  were identified as having at least 1 inpatient claim or at
                  <br />
                  least 2 outpatient claims for bipolar disorder (manic, mixed,
                  or hypomanic) in any diagnosis field for a claim during the
                  entire study period
                </>
              ),
            },
            {
              text: (
                <>
                  Among patients with bipolar disorder identified, the following
                  2 mutually exclusive cohorts were included: 1) LAI
                  <br /> cohort and 2) oral antipsychotic cohort
                </>
              ),
            },
            {
              text: (
                <>
                  For the LAI cohort, patients with bipolar disorder had at
                  least 1 claim for an LAI therapy (aripiprazole <br />
                  monohydrate, fluphenazine decanoate, haloperidol decanoate,
                  olanzapine pamoate, paliperidone palmitate <br />
                  [4-week], or risperidone microspheres) during the ID period
                  <List
                    content={{
                      columns: 'columns-1',
                      type: 'rectangle',
                      data: [
                        {
                          text: (
                            <>
                              The index date was defined as the earliest
                              occurrence (the first date) of a claim for 1 of
                              the LAI therapies of <br />
                              interest during the ID period
                            </>
                          ),
                        },
                      ],
                    }}
                  />
                </>
              ),
            },
            {
              text: (
                <>
                  For the oral antipsychotic cohort, patients with bipolar
                  disorder had changed from 1 oral antipsychotic therapy to
                  <br />
                  another oral antipsychotic monotherapy during the ID period
                  <List
                    content={{
                      columns: 'columns-1',
                      type: 'rectangle',
                      data: [
                        {
                          text: (
                            <>
                              The index date for this cohort was identified as
                              the earliest date of the new oral antipsychotic
                              prescription
                            </>
                          ),
                        },
                      ],
                    }}
                  />
                </>
              ),
            },
          ],
        }}
      />
      <Text
        title='Exclusion Criteria'
        list={{
          columns: 'columns-1',
          type: 'circle',
          data: [
            {
              text: (
                <>
                  Since the approval dates for aripiprazole lauroxil and
                  paliperidone palmitate (12-week) were beyond the study
                  <br /> end date, patients with claims for these 2 LAI
                  therapies were not included in the study
                </>
              ),
            },
            {
              text: (
                <>
                  Patients without 1-year continuous enrollment prior to and
                  after the ID period
                </>
              ),
            },
            {
              text: (
                <>
                  Patients having occurrence of first bipolar diagnosis after
                  the index date
                </>
              ),
            },
          ],
        }}
      />
      <Text
        title='Limitations'
        list={{
          columns: 'columns-1',
          type: 'circle',
          data: [
            {
              text: (
                <>
                  Clinical differences that were not measurable by analysis of
                  this claims database may have existed and may be
                  <br /> responsible for adherence advantages observed
                  <List
                    content={{
                      columns: 'columns-1',
                      type: 'rectangle',
                      data: [
                        {
                          text: (
                            <>
                              These differences may include attitudes of
                              clinicians and patients about LAIs or disease
                              severity, leading to the
                              <br /> choice of LAI vs oral antipsychotics
                            </>
                          ),
                        },
                      ],
                    }}
                  />
                </>
              ),
            },
            {
              text: (
                <>
                  A diagnosis of bipolar disorder was identified from health
                  care claims coded for reimbursement. Coding errors are
                  <br />
                  possible and were not accounted for in this study
                </>
              ),
            },
            {
              text: (
                <>
                  Medication use cannot be wholly determined by claims analysis
                  because a prescription fill does not verify that a<br />
                  medication was used or taken as prescribed
                </>
              ),
            },
            {
              text: (
                <>
                  If intended dosing intervals differ from the prescribing
                  label, estimates of adherence may not be accurate
                </>
              ),
            },
          ],
        }}
      />
    </>
  ),
  withFooter: true,
  footer: (
    <FootNote>
      <p>ID=identification; LAI=long-acting injectable.</p>
    </FootNote>
  ),
};

export const StudyDesignScroll2 = Template.bind({});
StudyDesignScroll2.args = {
  ...Default.args,
  customClass: `${blockName}_study-design`,
  withHeader: true,
  link: <Button text='Study Design' custom='button__type-b' />,
  header: <Header custom='mb-18'>Study design</Header>,
  children: (
    <>
      <Text
        title='Objective'
        list={{
          columns: 'columns-1',
          type: 'circle',
          data: [
            {
              text: (
                <>
                  To compare the impact of switching to long-acting injectables
                  (LAIs) versus continuation of oral
                  <br /> antipsychotics on the recurrence of hospitalizations
                  and emergency room (ER) visits among patients
                  <br /> with schizophrenia
                </>
              ),
            },
          ],
        }}
      />
      <Text
        title='Endpoints'
        list={{
          columns: 'columns-1',
          type: 'circle',
          data: [
            {
              text: (
                <>
                  The number of rehospitalizations and the number of ER visits
                  occurring after the index hospitalization
                </>
              ),
            },
            {
              text: <>The number of days in the hospital</>,
            },
            {
              text: (
                <>
                  The time to first rehospitalization or ER visit (defined as
                  the number of months between the index hospitalization
                  <br /> and the first rehospitalization or ER visit during
                  follow-up)
                </>
              ),
            },
            {
              text: (
                <>
                  The frequency of events within the same month or within 1, 3,
                  and 6 months after the index hospitalization
                  <br /> (ie, relapse)
                </>
              ),
            },
          ],
        }}
      />
      <Text
        title='Data Source'
        list={{
          columns: 'columns-1',
          type: 'circle',
          data: [
            {
              text: (
                <>
                  Premier Perspective Comparative Hospital Database (first
                  quarter of 2006 to the fourth quarter of 2010)
                </>
              ),
            },
          ],
        }}
      />
      <Text
        title='Patient Population'
        list={{
          columns: 'columns-1',
          type: 'circle',
          data: [
            {
              text: (
                <>
                  Adult patients with schizophrenia aged ≥18 years who were
                  treated with oral antipsychotics during a first
                  <br />
                  schizophrenia-related hospitalization
                </>
              ),
            },
          ],
        }}
      />
      <Text
        title='Indices'
        list={{
          columns: 'columns-1',
          type: 'circle',
          data: [
            {
              text: (
                <>
                  The index hospitalization had to occur at least 3 months
                  before December 2010
                </>
              ),
            },
          ],
        }}
      />
      <Text
        title='Limitations'
        list={{
          columns: 'columns-1',
          type: 'circle',
          data: [
            {
              text: (
                <>
                  The data were subject to billing inaccuracies and missing
                  data. The history of rehospitalizations and ER visits for a
                  given
                  <br /> patient in the databases may have been incomplete
                </>
              ),
            },
            {
              text: (
                <>
                  Rehospitalizations recorded in the database were based only on
                  information available during hospitalizations occurring at
                  <br /> the same hospital
                </>
              ),
            },
            {
              text: (
                <>
                  Patients’ disease severity and the occurrence of a relapse
                  event could not be assessed due to a lack of clinical data
                </>
              ),
            },
          ],
        }}
      />
    </>
  ),
  withFooter: true,
  footer: (
    <FootNote>
      <p>ER=emergency room.</p>
    </FootNote>
  ),
};
