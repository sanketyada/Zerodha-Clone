import React from 'react'
import Awards from './Awards'
import Hero from './Hero'
import Stats from './Stats'
import Priceing from './Priceing'
import Education from './Education'
import OpenAccout from '../OpenAccount'
import Navbar from '../Navbar'
import Footer from '../Footer'

function HomePage() {
  return (
    <div>
      <Hero/>
      <Awards/>
      <Stats/>
      <Priceing/>
      <Education/>
      <OpenAccout/>
    </div>
  )
}

export default HomePage
