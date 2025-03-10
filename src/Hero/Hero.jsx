import React, { useState, useEffect } from 'react'
import Landing from "./Landing"
import DYN from './Dyn'
import About from './About'
import Feature from './Feature'
import Support from './Support'
import Contact from './Contact'
const Hero = () => {
 
  return (
    <div>
      <Landing/>
      <DYN/>
      <About/>
      <Feature/>
      <Support/>
      <Contact/>
    </div>
  )
}

export default Hero
