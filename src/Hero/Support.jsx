import React from 'react'
import "./Support.css"
import { slider } from '../constants'

const Support = () => {
  return (
    <div className='support'>
      <h1 className='support-heading'>Organizations We Support</h1>
      <div className='slider'>
        {
            slider.map((slide)=>(
                <div key={slide.id} className='slide'>
                    <img src={slide.img} alt="" />
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Support
