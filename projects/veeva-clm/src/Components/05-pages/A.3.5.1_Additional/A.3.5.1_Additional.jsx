import React from "react";
import Header from "@/Components/01-atoms/Content/Header/Header";
import styles from "./A.3.5.1_Additional.module.scss";
import Button from "@/Components/01-atoms/Content/Button/button";
const PageContent = () => (<div classname={styles.page}>
    <Header type="h1">The clinical profile of ABILIFY
      ASIMTUFII<sup>®</sup> (aripiprazole) in the treatment of schizophrenia and
      bipolar I disorder is supported in part by the established efficacy and
      safety of ABILIFY MAINTENA® (aripiprazole)</Header>
    <div className={"buttons-group"}>
      <div className={"card"}>
        
        <h2>ABILIFY MAINTENA Efficacy in Schizophrenia and Bipolar I
          Disorder</h2>
        <Button to={"A.3.0_Clinical_profile"}
                custom={"button__type-c button__type-c-large button__type-c-large-blue"}
                text={"Clinical Profile"} />
        <Button to={"A.3.2.1_Efficacy"}
                custom={"button__type-c button__type-c-large button__type-c-large-blue"}
                text={"ABILIFY MAINTENA® Pivotal Studies"} />
      </div>
      <div className={"buttons-group-row"}>
        <Button to={"A.3.2.1_Efficacy"}
                custom={"button__type-c button__type-c-large button__type-c-large-blue"}
                text={"ABILIFY MAINTENA® Pivotal Studies"}
        />
      </div>
    </div>
  </div>
);
export default PageContent;
