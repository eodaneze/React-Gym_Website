import React,{useEffect} from 'react'
import './Services.css'
// import { CgGym } from 'react-icons/cg'
// import { GiGymBag } from 'react-icons/gi'
import AOS from 'aos'
import 'aos/dist/aos.css';
const ServiceText = ({number,icon,header2,text}) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  },[])
  return (
    <div className="service-box-content flex">
    <div className="box-1" data-aos="fade-up-right">
         <h1>{number}</h1> 
         
         <div className="fit-icon">
             {icon}
         </div>
         <h2>{header2}</h2>
         <p>{text}.</p>
    </div>
    <div className="box-2" data-aos="fade-up-right">
    <h1>{number}</h1> 
         
         <div className="fit-icon">
             {icon}
         </div>
         <h2>{header2}</h2>
         <p>{text}</p>
  
    </div>
    <div className="box-1" data-aos="fade-up-right">
    <h1>{number}</h1> 
         
         <div className="fit-icon">
             {icon}
         </div>
         <h2>{header2}</h2>
         <p>{text}</p>
    </div>
</div>
  )
}

export default ServiceText