import React, { useState } from 'react';
import "./UserFeedback.css";

const UserFeedback = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setSubmitted(true); 
  };

  return (
    <div className='userfeed'>
      {submitted ? (
        <div className='userfeed-thanks'>
        <h2 >THANK YOU!!</h2>
        <h2>We value your feedback</h2>
        </div>
      ) : (
        <form className='userfeed-form' onSubmit={handleSubmit}>
          <h2 className='userfeed-head'>We value your opinion</h2>
          <div className='userfeed-feedback'>
            <p className='userfeed-para'>Kindly take a moment to tell us what you think</p>
            <textarea required className='userfeed-textarea' name="" id=""></textarea>
          </div>
          <button type="submit" className='userfeed-btn'>Share your Feedback</button>
        </form>
      )}
    </div>
  );
};

export default UserFeedback;
