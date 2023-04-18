import React from "react";
import Header from "@/Components/01-atoms/Content/Header/Header";
import Button from "@/Components/01-atoms/Content/Button/button";
import styles from "./A.3.5.1_Additional.module.scss";

const PageContent = () => (
  <div className={styles.page}>
    <Header type="h1">The clinical profile of ABILIFY
      ASIMTUFII<sup>®</sup> (aripiprazole) in<br /> the treatment of
      schizophrenia and
      bipolar I disorder is<br /> supported in part by the established efficacy
      and
      safety of<br /> ABILIFY MAINTENA® (aripiprazole)</Header>
    
    <div className={"card"}>
      
      <Header type="h2">ABILIFY MAINTENA Efficacy in Schizophrenia and Bipolar I
        Disorder</Header>
      <div className={"buttons-group"}>
        <div className={"buttons-group-row"}>
          <Button to={"A.3.0_Clinical_profile"}
                  custom={"button__type-c button__type-c-large button__type-c-large-blue"}
                  text={"Clinical Profile"} />
          <Button to={"A.3.2.1_Efficacy"}
                  custom={"button__type-c button__type-c-large button__type-c-large-blue"}
                  text={"ABILIFY MAINTENA® Pivotal Studies"} />
          <Button to={"A.3.2.1_Efficacy"}
                  custom={"button__type-c button__type-c-large button__type-c-large-gray"}
                  text={"Long-term Study: Bipolar I Disorder"} />
        </div>
      </div>
    
    </div>
    <div className={"buttons-group-row-center"}>
      <Button to={"A.3.2.1_Efficacy"}
              custom={"button__type-c button__type-c-large button__type-c-large-blue"}
              text={"ABILIFY MAINTENA Safety"}
      />
    </div>
  </div>
);
export default PageContent;
