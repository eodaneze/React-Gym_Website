import React from 'react'
import MainImg from '../../assets/img-1.jpg'
import { MainList } from './data'
import './Main.css'

import MainText from './MainText'
const Main = () => {
  return (
    <div className='all-main'>
        <div className="main-content container">
             <div className="main-left">
                 <img src={MainImg} alt='main-img'></img>
             </div>
             <div className="main-right">
                {
                    MainList.map((main) => (
                        <MainText key={main.id} header={main.header} text={main.text} icon={main.icon} header2={main.header2} text1={main.text1}/>
                    ))
                }
                  
             </div>
        </div>
    </div>
  )
}

export default Main