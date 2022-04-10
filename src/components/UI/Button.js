import React from 'react'
import './Button.css'
const Button = ({href, btnClass, text}) => {
  return (
    <div>
         <a href={href} className={btnClass}>{text}</a>
    </div>
  )
}

export default Button