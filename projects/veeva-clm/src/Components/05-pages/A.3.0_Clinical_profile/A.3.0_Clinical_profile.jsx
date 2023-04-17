import Header from "@/Components/01-atoms/Content/Header/Header";
import React from "react";
import styles from "./A.3.0_Clinical_profile.module.scss";

const PageContent = () => {
  return (
    <div className={styles.page}>
      <Header type="h1">
        ABILIFY ASIMTUFII® (aripiprazole): The<br /> First and Only
        Once-Every-2-Months Long-<br />Acting Injectable Suspension Indicated
        for<br />Treatment of Both Schizophrenia and<br />Bipolar I Disorder in
        Adults
      </Header>
      <div className={"buttons-group"}>
        <div className={"buttons-group-row"}>
          <Link to={"A.3.0_Clinical_profile"}
                custom={"button__type-c button__type-c-large button__type-c-large-blue"}>Overview</Link>
          <Link to={"A.3.1_Clinical_overview"}
                custom={"button__type-c button__type-c-large button__type-c-large-blue"}>PK
            Study</Link>
          <Link to={"A.3.2.1_Efficacy"}
                custom={"button__type-c button__type-c-large button__type-c-large-blue"}>ABILIFY
            MAINTENA® Pivotal Studies</Link>
        </div>
        <div className={"buttons-group-row"}>
          <Link to={"A.3.4_Dosing"}
                custom={"button__type-c button__type-c-large button__type-c-large-blue"}>Dosing
            & Administration</Link>
          <Link to={"A.3.5.1_Additional"}
                custom={"button__type-c button__type-c-large button__type-c-large-blue"}>ABILIFY
            MAINTENA RWE</Link>
        </div>
      </div>
    </div>);
};
export default PageContent;
