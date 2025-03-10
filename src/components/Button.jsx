import React from 'react'
import {Link} from "react-router-dom"
import "./Button.css"

const Button = ({to,value}) => {
  return (
    <Link to={to} className='action-btn'>
      {value}
    </Link>
  )
}

export default Button
