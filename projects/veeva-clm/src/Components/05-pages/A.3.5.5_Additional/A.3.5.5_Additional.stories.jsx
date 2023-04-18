import { AppStorybook } from '@pages/AppStorybook';
import React from "react";
import { Header } from '@atoms/Content/Header/Header';
import {
    StudyDesign1,
    Relapse,
    FullRecurrenceDefinition, BaselineCharacteristics,
} from '@templates/Layouts/Modal/Modal.stories';

import { List } from '@atoms/Content/List/List';
import Placebo_image from '@/Components/05-pages/A.3.5.5_Additional/img/Placebo_image.png';
import Primary_graphic from '@/Components/05-pages/A.3.5.5_Additional/img/Primary_graphic.png';
import { Paragraph } from '@atoms/Content/Paragraph/Paragraph';
import './style.scss';

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
      <Header custom={`${baseClass}-header-2 mb-25`}>
          ABILIFY MAINTENA<sup>®</sup> (aripiprazole) significantly reduced the<br/> risk of recurrence<sup>*</sup> of any mood episode over 1 year vs placebo
      </Header>
      <img src={Primary_graphic} alt='graphic' className='graphic' />
      <img src={Placebo_image} alt='placebo' className='placebo ml-25 mb-57' />
        <List
            content={{
                type: 'circle',
                custom: 'list',
                data: [
                    {
                        text:  (
                            <>
                              Significantly reduced the risk of recurrence of any mood episode by 55% vs placebo (HR=0.45 [95% CI, 0.30-0.68], P&#60;0.0001)<sup>†1</sup>
                            </>
                                ),
                        custom_style: 'py-0',
                    },
                    {
                        text: (
                            <>
                                Significantly delayed time to recurrence for a manic episode and mixed episode<sup>2</sup>
                            </>
                        ),
                        custom_style: 'py-0',
                    },
                    {
                        text: (
                            <>
                                No substantial difference in the time to a depressive episode<sup>1</sup>
                            </>
                        ),
                        custom_style: 'py-0',
                    },
                ],
            }}
        />
        <Paragraph size={"small"}>Adapted from Calabrese JR, et al.</Paragraph>
        <StudyDesign1 {...StudyDesign1.args} />
      <StudyDesign1 {...FullRecurrenceDefinition.args} />
      <StudyDesign1 {...BaselineCharacteristics.args} />
    </>
);

const Template = () => {
  return <AppStorybook path='A.3.5.5_Additional' components={content} />;
};

export const A_3_5_5_Additional = Template.bind({});
export const A_3_5_5_Additional_content = content.bind({});
