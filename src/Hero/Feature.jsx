import React from 'react'
import { features } from '../constants'
import "./Feature.css"
const Feature = () => {
  return (
    <div className='feature'>
      <h1 className='feature-heading'>Our Unique Features</h1>
      <div className='feature-container'>
      {features.map((feature, index) => (
            <div key={index} className='feature-item'>
                
                <img src={feature.img} height="50px" width="50px" alt="" />
                <div>
                  <h1>{feature.title}</h1>
                  <p>{feature.text}</p>
                  </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Feature
