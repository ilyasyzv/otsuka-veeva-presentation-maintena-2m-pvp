import React from 'react';
import Header from '@/Components/01-atoms/Content/Header/Header';
import imageTable from './imgs/A.2.3.2_LAIs.png';
import styles from './A.2.3.2_LAIs.module.scss';
import { Footer } from '@/Components/03-organisms/Footer/Footer';

const PageContent = () => (<div className={styles.page}>
    <Header type="h1">
      There remains an unmet need for schizophrenia and bipolar I<br/>disorder
      (BP-I)* to improve treatment adherence and reduce<br/>health care
      resource
      utilization and costs
    </Header>
    <img src={imageTable} alt={'Table'} className={'pageImg'}/>
    <Footer
      custom="bottom-5"
      footnotes={{
        data: [
          {
            innerText: 'These studies do not differentiate between bipolar disorders.',
          }, {
            innerText: 'FDA=US Food and Drug Administration; LAI=long-acting injectable.',
          },
        ],
      }}
      references={{
        data: [
          {
            text: (
              <span>
                Treatment Advocacy Center. https://www.treatmentadvocacycenter.org/evidence-and-research/fast-facts. Accessed February 15, 2023.
              </span>
            ),
          },
          {
            text: (
              <span>
                 Ascher-Svanum H, et al. BMC Psychiatry. 2010;10:2.
              </span>
            ),
          },
          {
            text: (
              <span>
                Berk L, et al. Hum Psychopharmacol. 2010;25(1):1-16.
              </span>
            ),
          },
          {
            text: (
              <span>
                 Martin A, et al. Adv Ther. 2022;39(9):3933-3956.
              </span>
            ),
          },
          {
            text: (
              <span>
                  Broder MS, et al. J Med Econ. 2019;22(1):63-70.
              </span>
            ),
          },
          {
            text: (
              <span>
                   Goldstone LW. Am J Manag Care. 2020;26(3 suppl):S48-S54.
              </span>
            ),
          },
          {
            text: (
              <span>
                    Kadakia A, et al. J Clin Psychiatry. 2022;83(6):22m14458.
              </span>
            ),
          },
          {
            text: (
              <span>Bessonova L, et al. Clinicoecon Outcomes Res. 2020;12:481-497.</span>
            ),
          },
          {
            text: (
              <span>
                   Cloutier M, et al. J Affect Disord. 2018;226:45-51.
              </span>
            ),
          },
          {
            text: (
              <span>Zolezzi M, et al. Neuropsychiatr Dis Treat. 2021;17:1917-1926.</span>
            ),
          },
          {
            text: (
              <span>Greene M, et al. J Med Econ. 2018;21(2):127-134.</span>
            ),
          },
          {
            text: (
              <span>Lafeuille M-H, et al. BMC Psychiatry. 2013;13:221.</span>
            ),
          },
          
          {
            text: (
              <span>Pietrini F, et al. Neuropsychiatr Dis Treat. 2019;15:1045-1060.</span>
            ),
          }, {
            text: (
              <span>American Psychiatric Association. Practice Guidelines for the Treatment of Patients With Schizophrenia. 3rd ed. Washington, DC; 2021.</span>
            ),
          },
        ],
      }}
      safetyInfo={{
        custom: 'mt-50',
        data: [
          {
            text: 'FOR USE WITH FORMULARY DECISION-MAKERS ONLY. DO NOT DUPLICATE OR DISTRIBUTE. ',
          },
        ],
      }}
    />
  </div>
);
export default PageContent;
