import React from "react";
import "../UI/Button";
import "./Contact.css";
import ContactText from "./ContactText";
import { contactList } from "./data";
import contactImg from '../../assets/block-1-3.jpg'
import Button from "../UI/Button";
import '../UI/Button.css'
const Contact = () => {
  return (
   <div className="all" id="contact">
         <div className="all-contact">
      <div className="contact-content container">
        {contactList.map((contact) => (
          <ContactText
            key={contact.id}
            header={contact.header}
            text={contact.text}
          />
        ))}
      </div>
      <div className="main-contact container">
          <div className="contact-img">
              <img src={contactImg} alt='contact-img'></img>
          </div>
          <div className="form-container">
              <h1>REQUEST A QUOTE</h1>
              <div className="form">
                 <div className="input">
                    <input type="text" placeholder="Enter name" />
                    <input type="email" placeholder="Enter Email"/>
                 </div>
                 <input type="text" placeholder="Enter Subject" className="form-1"/>

                 <textarea name="" placeholder="Enter your message"></textarea>

                 <div className="contact-btn">
                    <Button href={'#'} btnClass={'btn-red'} text={'Send Message'}/>
                 </div>
              </div>
          </div>
      </div>
    </div>
   </div>
  );
};

export default Contact;
