import React from 'react'
import "./Events.css"
import StateDropdown from '../components/StateDropdown.jsx'
import { events } from '../constants'

const Events = () => {
  return (
    <div className='events'>
        <StateDropdown/>
        <div className='event-container'>
      {events.map((item, index) => (
            <div key={index} className='event-item'>
                <div className='event-image-container'>
                <img src={item.img} alt="" />

                </div>
                
                  <h1>{item.title}</h1>
                  <h2>{item.location}</h2>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Events
