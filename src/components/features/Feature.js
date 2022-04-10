import React from 'react'
// import { featureList } from './data'
import './Features.css'
import Button from "../UI/Button"
import "../UI/Button.css"

const Feature = ({header, text, subtext, icon, header2}) => {
  return (
    <div className='feature-text'>
          <div className='feature-left'>
                  <h1>{header} <span>{header2}</span></h1>
                  <p className='feature-text'>{text}</p>

                  <div className="check">
                      <div className="check-1">
                          <i>{icon}</i>
                          <p>{subtext}</p>
                      </div>
                      <div className="check-1">
                          <i>{icon}</i>
                          <p>{subtext}</p>
                      </div>
                      <div className="check-1">
                          <i>{icon}</i>
                          <p>{subtext}</p>
                      </div>
                      <div className="check-1">
                          <i>{icon}</i>
                          <p>{subtext}</p>
                      </div>
                      <div className="check-1">
                          <i>{icon}</i>
                          <p>{subtext}</p>
                      </div>
                      
                  </div>

                  <Button  href={"#faq"} btnClass={"btn-red"} text={"Read More"}/>
             </div>
    </div>
  )
}

export default Feature