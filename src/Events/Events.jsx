import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Events.css"
import StateDropdown from '../components/StateDropdown.jsx'
import { events } from '../constants'

const Events = () => {
  const navigate = useNavigate();

  const handleEventClick = (eventId) => {
    navigate(`/event/${eventId}`);
  };

  return (
    <div className='events'>
      <h1 className='events-head'>Upcoming Events</h1>
      <p className='events-subhead'>Join us in making a difference through these community events</p>
      <StateDropdown/>
      <div className='event-container'>
        {events.map((item) => (
          <div key={item.id} className='event-item' onClick={() => handleEventClick(item.id)}>
            <div className='event-image-container'>
              <img src={item.img} alt={item.title} />
              <div className="event-date-badge">{item.date}</div>
            </div>
            <div className="event-content">
              <h1>{item.title}</h1>
              <div className="event-meta">
                <p className="event-location"><i className="fa fa-map-marker"></i> {item.location}</p>
                <p className="event-time"><i className="fa fa-clock-o"></i> {item.time}</p>
              </div>
              <p className="event-organization">{item.organization}</p>
              <button className="view-event-btn">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Events
