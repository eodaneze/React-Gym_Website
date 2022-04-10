import React from "react";
import "./Offers.css";
import OfferText from "./OfferText";
import { offerList } from "./data";


const Offers = () => {
  return (
    <div className="all-offer" id="services">
      <div className="offer-content container">
        <div className="offer-header">
          {offerList.map((offer) => (
            <OfferText key={offer.id} header={offer.header} text={offer.text} header2={offer.header2} text2={offer.text2} icon={offer.icon} cta={offer.cta}/>
          ))}
        </div>

        <div className="feature-main">
                
        </div>
      </div>
    </div>
  );
};

export default Offers;
