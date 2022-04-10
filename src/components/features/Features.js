import React from "react";
import FeatureImg from "../../assets/img-2.jpg";
import Feature from "../features/Feature";

import "./Features.css";
import { featureList } from "./data";

const Features = () => {
  return (
    <div className="all-features">
      <div className="all-features-content container">
        {
          featureList.map((feature) =>(
            <Feature key={feature.id} header={feature.header} header2={feature.header2} text={feature.text} subtext={feature.subtext} icon={feature.icon}/>
          ))
        }
         
        
        <div className="feature-right">
          <img src={FeatureImg} alt="feature-img"></img>
        </div>
      </div>
    </div>
  );
};

export default Features;
