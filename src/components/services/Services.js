import React from 'react'
import ServiceHeader from './ServiceHeader'
import './Services.css'
import { serviceHeader } from './data1'
import ServiceText from './ServiceText'
import { serviceContent } from './data'

const Services = () => {
  return (
    <div className='all-service' id='blog'>
       <div className='service-content container'>
             <div className="service-header">

               {
                   serviceHeader.map((headerservice) => (
                    <ServiceHeader  key={headerservice.id} header={headerservice.header} text={headerservice.text}/>
                   ))
               }
                
             </div>

             <div className="service-box">

                {
                    serviceContent.map((content) => (
                        <ServiceText key={content.id} number={content.number} icon={content.icon} header2={content.header2} text={content.text}/>
                    ))
                }
                 
             </div>
       </div>
    </div>
  )
}

export default Services