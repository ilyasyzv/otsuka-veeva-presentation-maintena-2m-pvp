import Header from "@/Components/01-atoms/Content/Header/Header";
import React from "react";
import styles from "./A.3.0_Clinical_profile.module.scss";
import Button from "@/Components/01-atoms/Content/Button/button";

const PageContent = () => {
  return (
    <div className={styles.page}>
        <Header type="h1">
          ABILIFY ASIMTUFII<sup>®</sup> (aripiprazole): The<br /> First and Only
          Once-Every-2-Months Long-<br />Acting Injectable Suspension Indicated
          for<br />Treatment of Both Schizophrenia and<br />Bipolar I Disorder
          in
          Adults
        </Header>
        <div className={"buttons-group"}>
          <div className={"buttons-group-row"}>
            <Button
              custom={"button__type-c button__type-c-large button__type-c-large-blue"}
              text={"Overview"} />
            <Button to={"A.3.1_Clinical_overview"}
                    custom={"button__type-c button__type-c-large button__type-c-large-blue"}
                    text={"PK Study"}
            />
            <Button to={"A.3.2.1_Efficacy"}
                    custom={"button__type-c button__type-c-large button__type-c-large-blue"}
                    text={"ABILIFY MAINTENA® Pivotal Studies"}
            />
          </div>
          <div className={"buttons-group-row"}>
            <Button to={"A.3.4_Dosing"}
                    custom={"button__type-c button__type-c-large button__type-c-large-blue"}
                    text={"Dosing & Administration"}
            />
            <Button to={"A.3.5.1_Additional"}
                    custom={"button__type-c button__type-c-large button__type-c-large-blue"}
                    text={"ABILIFY MAINTENA RWE"}
            />
          </div>
        </div>

    </div>
  );
};
export default PageContent;
