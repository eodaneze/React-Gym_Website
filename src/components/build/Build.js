import React from "react";
import "./Build.css";
import BuildText from "./BuildText";
import { buildList } from "./data";

const Build = () => {
  return (
    <div className="all-build">
      {
         buildList.map((build) => (
            <BuildText key={build.id} icon={build.icon} header={build.header} header2={build.header2} text={build.text}/>
         ))
      }
    </div>
  );
};

export default Build;
