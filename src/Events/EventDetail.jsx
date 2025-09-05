import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { events } from '../constants';
import './EventDetail.css';

const EventDetail = () => {
  const { id } = useParams();
  const event = events.find((event) => event.id === parseInt(id));
  const [joined, setJoined] = useState(false);
  const [donationAmount, setDonationAmount] = useState('');
  const [donated, setDonated] = useState(false);

  if (!event) {
    return <h2 className="event-not-found">Event not found</h2>;
  }

  const handleJoin = () => {
    setJoined(true);
  };

  const handleDonate = () => {
    if (donationAmount && !isNaN(donationAmount) && parseFloat(donationAmount) > 0) {
      setDonated(true);
    } else {
      alert('Please enter a valid donation amount');
    }
  };

  const progressPercentage = (event.donationRaised / event.donationGoal) * 100;

  return (
    <div className="event-detail">
      <div className="event-detail-container">
        <div className="event-detail-image-container">
          <img src={event.img} alt={event.title} />
        </div>
        
        <div className="event-detail-content">
          <h1 className="event-detail-title">{event.title}</h1>
          <div className="event-detail-info">
            <p><span>Organization:</span> {event.organization}</p>
            <p><span>Location:</span> {event.location}</p>
            <p><span>Date:</span> {event.date}</p>
            <p><span>Time:</span> {event.time}</p>
            <p><span>Attendees:</span> {event.attendees}</p>
          </div>
          
          <div className="event-detail-description">
            <h2>About This Event</h2>
            <p>{event.description}</p>
          </div>
          
          <div className="event-detail-donation">
            <h2>Support This Event</h2>
            <div className="donation-progress">
              <div className="donation-bar">
                <div 
                  className="donation-filled" 
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
              <p className="donation-text">
                ₹{event.donationRaised} raised of ₹{event.donationGoal} goal
              </p>
            </div>
            
            {!donated ? (
              <div className="donation-input-container">
                <input
                  type="number"
                  placeholder="Enter donation amount"
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(e.target.value)}
                  className="donation-input"
                />
                <button onClick={handleDonate} className="donate-button">Donate Now</button>
              </div>
            ) : (
              <p className="donation-success">Thank you for your donation of ₹{donationAmount}!</p>
            )}
          </div>
          
          <div className="event-detail-actions">
            {!joined ? (
              <button onClick={handleJoin} className="join-button">Join Event</button>
            ) : (
              <p className="join-success">You've successfully joined this event!</p>
            )}
            <Link to="/events" className="back-button">Back to Events</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;