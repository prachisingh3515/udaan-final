import React from 'react'
import { donate } from '../constants'
import "./Donate.css"

const Donate = () => {

  return (
    <div className='donate'>
      <h1 className='donate-head'>Support a Cause, Make a Difference</h1>
      <p className='donate-para'>
        Your donations can help underprivileged communities access essential resources.
        <br />Whether it's food, clothes, books, or medical aid, every contribution counts.
      </p>

      <div className='donate-container'>
        {donate.map((item, index) => (
          <div key={index} className='donate-item'>
            <img src={item.img} height="80px" width="80px" alt={item.title} className="donate-icon" />
            <div>
              <h1>{item.title}</h1>
              <div className="donate-actions">
                <button 
                  
                  className="donate-btn"
                >
                  Add to Donation
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Donate
