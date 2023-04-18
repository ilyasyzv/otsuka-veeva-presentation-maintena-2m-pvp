import React from "react";
import Header from "@/Components/01-atoms/Content/Header/Header";
import imageTable from "./imgs/A.2.3.2_LAIs.png";
import styles from "./A.2.3.2_LAIs.module.scss";

const PageContent = () => (<div className={styles.page}>
    <Header type="h1">
      There remains an unmet need for schizophrenia and bipolar I<br />disorder
      (BP-I)* to improve treatment adherence and reduce<br />health care
      resource
      utilization and costs
    </Header>
    <img src={imageTable} alt={"Table"} className={"pageImg"} />
  </div>
);

export default PageContent;
