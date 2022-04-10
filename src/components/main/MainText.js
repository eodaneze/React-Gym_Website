import React from "react";
import "./Main.css";
import "../UI/Button.css";
import Button from "../UI/Button";
const MainText = ({header,text,icon,header2,text1}) => {
  return (
    <div className="main-right">
      <h1>{header}</h1>
      <p className="text">
        {text}
      </p>

      <div className="main-sub-content">
        <div className="content-1">
          {icon}
          <h2>{header2}</h2>
          <p>
           {text1}
          </p>
        </div>
        <div className="content-1 content-2">
          {icon}
          <h2>{header2}</h2>
          <p>
           {text1}
          </p>
        </div>
      </div>

      <div className="main-btn">
        <Button href={"#faq"} btnClass={"btn-dark"} text={"Read More"} />
      </div>
    </div>
  );
};

export default MainText;
