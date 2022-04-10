import React,{useEffect} from "react";
import './Offers.css'
import offerImg from "../../assets/img-4.jpg";
import offerImg1 from "../../assets/img-3.jpg";
import offerImg2 from "../../assets/img-6.jpg";
import AOS from 'aos'
import 'aos/dist/aos.css';
const OfferText = ({ header, text,header2,text2,icon,cta }) => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  },[])
  return (
    <div className="offer-header">
      <h1>{header}</h1>
      <p className="text1">{text}</p>

      <div className="feature-main-content">
            <div className="feature-1" data-aos="fade-up-right">
              <img src={offerImg} alt="img"></img>
              <h3>{header2}</h3>
              <p>{text2}</p>
              <div className="feature-icon">
                   {icon}
                   <p>{cta}</p>
              </div>
            </div>
            <div className="feature-1" data-aos="fade-up-left">
              <img src={offerImg1} alt="img"></img>
              <h3>{header2}</h3>
              <p>{text2}</p>
              <div className="feature-icon">
                  {icon}
                   <p>{cta}</p>
              </div>
            </div>
            <div className="feature-1" data-aos="fade-up-right">
              <img src={offerImg2} alt="img"></img>
              <h3>{header2}</h3>
              <p>{text2}</p>
              <div className="feature-icon">
                   {icon}
                   <p>{cta}</p>
              </div>
            </div>
          </div>
      <div className="feature-main-content">
            <div className="feature-1" data-aos="fade-up-right">
              <img src={offerImg} alt="img"></img>
              <h3>{header2}</h3>
              <p>{text2}</p>
              <div className="feature-icon">
                   {icon}
                   <p>{cta}</p>
              </div>
            </div>
            <div className="feature-1" data-aos="fade-up-left">
              <img src={offerImg1} alt="img"></img>
              <h3>{header2}</h3>
              <p>{text2}</p>
              <div className="feature-icon">
                  {icon}
                   <p>{cta}</p>
              </div>
            </div>
            <div className="feature-1" data-aos="fade-up-right">
              <img src={offerImg2} alt="img"></img>
              <h3>{header2}</h3>
              <p>{text2}</p>
              <div className="feature-icon">
                   {icon}
                   <p>{cta}</p>
              </div>
            </div>
          </div>
    </div>
   
     
    
  );
};

export default OfferText;
