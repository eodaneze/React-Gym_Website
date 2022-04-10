import React, {useEffect} from "react";
import HeroText from "./HeroText";
import "./Hero.css";
import { heroText } from "./data.js";
import Button from "../UI/Button";
import "../UI/Button.css";
import AOS from 'aos'
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  },[])
  return (
    <div className="all-hero">
      <div className="hero-content container" data-aos="fade-right" >
        {heroText.map((hero) => (
          <HeroText
            key={hero.id}
            header={hero.header}
            header2={hero.header2}
            text={hero.text}
          />
        ))}

        <div className="hero-cta flex">
          <Button href={"#faq"} btnClass={"btn-red"} text={"Explore More"} />
          <Button href={"#faq"} btnClass={"btn-white"} text={"Get In Touch"} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
