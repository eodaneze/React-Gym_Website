import React from 'react'
import "./Pricing.css";
import Button from "../UI/Button";
import "../UI/Button";
const PricingText = ({header,text,header2,icon,price,month,fit1,fit2,fit3}) => {
  return (
    <div className="pricing-content container">
        <div className="header">
          <h1>{header}</h1>
          <p>
            {text}
          </p>
        </div>
        <div className="price-main">
          <div className="price-1">
            <p className="title">{header2}</p>
            <div className="icon">
             {icon}
            </div>
            <h5 className="amount">
             {price}<sub>{month}</sub>
            </h5>
            <div className="fitness">
              <p>{fit1}</p>
              <p>{fit2}</p>
              <p>{fit3}</p>
            </div>
            <div className="btn-price">
              <Button
                href={"#faq"}
                btnClass={"btn-dark"}
                text={"Purchase Plan"}
              />
            </div>
          </div>
          <div className="price-1">
            <p className="title">{header2}</p>
            <div className="icon">
                 {icon}
            </div>
            <h5 className="amount">
             {price}<sub>{month}</sub>
            </h5>
            <div className="fitness">
              <p>{fit1}</p>
              <p>{fit2}</p>
              <p>{fit3}</p>
            </div>
            <div className="btn-price">
              <Button
                href={"#faq"}
                btnClass={"btn-dark"}
                text={"Purchase Plan"}
              />
            </div>
          </div>
          <div className="price-1">
            <p className="title">{header2}</p>
            <div className="icon">
                 {icon}
            </div>
            <h5 className="amount">
             {price}<sub>{month}</sub>
            </h5>
            <div className="fitness">
              <p>{fit1}</p>
              <p>{fit2}</p>
              <p>{fit3}</p>
            </div>
            <div className="btn-price">
              <Button
                href={"#faq"}
                btnClass={"btn-dark"}
                text={"Purchase Plan"}
              />
            </div>
          </div>
         
        </div>
      </div>
  )
}

export default PricingText