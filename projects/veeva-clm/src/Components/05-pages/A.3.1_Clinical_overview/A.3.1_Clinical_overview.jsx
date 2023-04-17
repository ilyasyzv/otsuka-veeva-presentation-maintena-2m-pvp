import React from "react";

import Header from "@/Components/01-atoms/Content/Header/Header.jsx";
import imageTable from "./imgs/A.3.1_Clinical_overview.png";

export const PageContent = () => (
  <div>
    <Header type="h1">Building on the pharmacokinetic bridging and
      2<br /> maintenance studies of ABILIFY MAINTENA<sup>®</sup>
      (aripiprazole),<br /> ABILIFY ASIMTUFII<sup>®</sup> (aripiprazole) offers
      comparable<br />safety, tolerability, and efficacy in adult patients
      with<br />schizophrenia or bipolar I disorder
    </Header>
    <img src={imageTable} alt={"Table"} className={"mt-40"} />
  </div>
);

export default PageContent;
