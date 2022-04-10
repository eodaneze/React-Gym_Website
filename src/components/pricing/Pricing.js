import React from "react";
import { priceList } from "./data";
import PricingText from "./PricingText";
const Pricing = () => {
  return (
    <div className="all-pricing">
    {
      priceList.map((price) => (
        <PricingText key={price.id} header={price.header} text={price.text} header2={price.header2} icon={price.icon} price={price.price} month={price.month} fit1={price.fit1} fit2={price.fit2} fit3={price.fit3}/>
      ))
    }
     
    </div>
  );
};

export default Pricing;
