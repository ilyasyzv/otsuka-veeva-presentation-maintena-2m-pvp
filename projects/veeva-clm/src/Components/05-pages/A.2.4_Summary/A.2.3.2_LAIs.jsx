import Header from "@/Components/01-atoms/Content/Header/Header";
import imageTable from "./imgs/A.2.3.2_LAIs.png";
import React from "react";

const PageContent = () => (<div>
    <Header type="h1">
      There remains an unmet need for schizophrenia and bipolar I<br/>disorder
      (BP-I)* to improve treatment adherence and reduce<br/>health care resource
      utilization and costs
    </Header>
    <img src={imageTable} alt={"Table"} className={"mt-40"} />
  </div>
);
export default PageContent;
