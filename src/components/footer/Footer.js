import React from "react";
import "./Footer.css";
import "./media.css";
import Button from "../UI/Button";
import "../UI/Button.css";
import { FaEnvelopeOpenText } from "react-icons/fa";
import footerLogo from "../../assets/footer-logo.svg";
import footerMap from "../../assets/footer-map.png"
import { GiPhone } from 'react-icons/gi'
import { MdLocationPin } from 'react-icons/md'
const Footer = () => {
  return (
    <div className="all-footer">
      <div className="footer-red">
        <div className="container footer-red-content">
          <div className="footer-red-left">
            <div>
              <FaEnvelopeOpenText size={30} color={"#fff"} />
            </div>
            <div className="text-1">
              <h3>sign up to get latest update</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis, placeat!
              </p>
            </div>
          </div>
          <div className="footer-red-right">
            <div className="footer-input">
              <input type="email" placeholder="your email address" />
            </div>

            <div>
              <Button href={"#"} btnClass={"btn-dark"} text={"Sign Up"} />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-black">
        <div className="footer-back-content container">
          <div className="footer-content footer-1">
            <img src={footerLogo} alt="logo-img"></img>

            <p>Lorem Ipsum is simply dummied text of the printing and industry.</p>

            <div className="footer-contact">
                <div>
                    <p>GET US SUPPORT</p>
                    <p>+1800-208-6835</p>
                </div>
                <div className="phone-icon">
                    <GiPhone className="icon-1" size={30}/>
                </div>
            </div>
          </div>
          <div className="footer-content">
               <h3>Useful-Links</h3>
               <ul>
                 <li>Lifting Weights</li>
                 <li>Cardio classes</li>
                 <li>new to fitness</li>
                 <li>muscle builder</li>
                 <li>extra energy</li>
                 <li>Body Muscle</li>
                 <li>traning Tips</li>
               </ul>
          </div>
          <div className="footer-content footer-last">
              <h3>Contact</h3>

              <img src={footerMap} alt="logo-img"></img>

              <div className="map-icon">
                  <MdLocationPin color="rgb(227,28,37)" size={28}/>

                  <p>Themeforest, Envato HQ 24 Fifth st., Los Angeles, USA</p>
              </div>
          </div>
          <div className="footer-content">
              <h3>Gym Openning Time</h3>
              <ul>
                <li>Monday <span>8am-2pm</span></li>
                <li>Tuesday <span>8am-2pm</span></li>
                <li>Wednesday <span>8am-2pm</span></li>
                <li>Thursday <span>8am-2pm</span></li>
                <li>Friday <span>8am-2pm</span></li>
                <li>Saturday <span>8am-2pm</span></li>
                <li>On public Holiday <span>8am-2pm</span></li>
              </ul>
          </div>
        </div>


        <div className="author">
            <h3>Developed By DanCode</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
