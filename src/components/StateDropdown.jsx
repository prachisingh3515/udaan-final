import React, { useState } from 'react';
import "./StateDropdown.css";

const StateDropdown = () => {
  const [selectedState, setSelectedState] = useState(''); 

  const states = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal',
  ];

  const handleChange = (event) => {
    setSelectedState(event.target.value);
  };

  return (
    <div className='events-head-div'>
      <h1 className='events-head'>
        Events in {selectedState || "'Choose Location'"}
      </h1>
      <div className='menu-div'>
        <select
          value={selectedState}
          onChange={handleChange}
          className='events-menu'
        >
          <option value="" disabled>
            -- Select a State --
          </option>
          {states.map((state, index) => (
            <option key={index} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default StateDropdown;
