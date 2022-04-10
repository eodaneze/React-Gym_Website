import React,{useEffect} from "react";
import "./Gallery.css";
import Img1 from "../../assets/img-9.jpg";
import Img2 from "../../assets/img-10.jpg";
import Img3 from "../../assets/img-11.jpg";
import Img4 from "../../assets/img-12.jpg";
import Img5 from "../../assets/img-13.jpg";
import Img6 from "../../assets/img-14.jpg";
import AOS from 'aos'
import 'aos/dist/aos.css';
const Gallery = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  },[])
  return (
    <div className="all-gallery" id="gallery">
      <div className="galery-content">
          <div className="header">
               <h1>Photo Gallery</h1>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum rerum illo dolorem, voluptas veniam odit similique dolore nesciunt libero ducimus?</p>
          </div>
        <div className="img-content">
          <div className="img-1 inner" data-aos="fade-up-right">
            <img src={Img1} alt="img-1" ></img>
          </div>
          <div className="img-2 inner" data-aos="fade-up-left">
            <img src={Img2} alt="img-1"></img>
          </div>
          <div className="img-3 inner" data-aos="fade-down-right">
            <img src={Img3} alt="img-1"></img>
          </div>
        </div>
        <div className="img-content">
          <div className="img-1 inner" data-aos="fade-down-left">
            <img src={Img4} alt="img-1"></img>
          </div>
          <div className="img-2 inner" data-aos="fade-up-left">
            <img src={Img5} alt="img-1"></img>
          </div>
          <div className="img-3 inner" data-aos="fade-up-right">
            <img src={Img6} alt="img-1"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
