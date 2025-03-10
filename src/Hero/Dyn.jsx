import React from 'react'
import "./Dyn.css"
const DYN = () => {
  return (
    <div className='dyn'>
      <h1 className='dyn-heading'>Do You Know?</h1>
      <div className='container'>
        <div className='container1'><img src="src\assets\dyn.png" alt=""/></div>
        <div className='container2'>
            <p className="para">Every year, thousands of children from underprivileged communities miss out on basic education and healthcare due to the lack of resources and support from organizations working on the ground.
                 Many of these organizations, including NGOs near you, struggle to find volunteers and resources to continue their life-changing work.
                 Their efforts often go unnoticed because of fragmented communication channels and a lack of centralized information.
                 </p>
        </div>
      </div>
    </div>
  )
}

export default DYN
