import React from 'react'
import Button from "../UI/Button";
import "../UI/Button";
import './Contact.css'
const ContactText = ({header,text}) => {
  return (
    <div className="header-content">
          <div className="left-header">
            <h1>{header}</h1>
            <p>
             {text}
            </p>
          </div>
          <div className="btn-contact">
            <Button
              href={"#faq"}
              btnClass={"btn-red"}
              text={"Contact Us"}
            />
          </div>
        </div>
  )
}

export default ContactText