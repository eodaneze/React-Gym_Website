import React from 'react'
 import './HeroText.css'
// import { heroText } from './data'
const HeroText = ({header,header2,text}) => {
  return (
    <div className='hero-text'>
      
         <h2>
              <span>{header}</span>
              <span>{header2}</span>
         </h2>
         <p>{text}</p>
    </div>
  )
}

export default HeroText