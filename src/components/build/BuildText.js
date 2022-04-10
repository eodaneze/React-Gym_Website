import React from 'react'
import Button from "../UI/Button";
import "../UI/Button.css";
const BuildText = ({icon, header, header2,text}) => {
  return (
    <div className="build-content container">
    {icon}
    <h1>
      {header} <span>{header2}</span>
    </h1>
    <p>
     {text}
    </p>

    <div className="build-btn">
      <Button href={"#faq"} btnClass={"btn-red"} text={"Book A Class"} />
      <Button href={"#faq"} btnClass={"btn-white"} text={"Call Us: 000000"} />
    </div>
  </div>
  )
}

export default BuildText