import React from 'react'
import Navbar from './Partials/Navbar'
import Home from './Partials/Home2'
import Home2 from './Partials/Home'
import Feature from './Partials/Feature'
import Partners from './Partials/Partners'
import Benefits from './Partials/Benefits'

const Main = () => {
  return (
    <div className="select-none flex flex-col gap-4 relative bg-white"
    style={{
    backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3cline x1='10' x2='10' y1='0' y2='100%25' stroke='%23EBEEF0' stroke-width='1.5' stroke-dasharray='8 8'/%3e%3c/svg%3e")`,
    backgroundRepeat: "repeat",
    backgroundSize: "130px 100%",
  }}>
      <Navbar />
      <Home />
      {/* <Home2 /> */}
      <div id="feature-section">
        <Feature />
      </div>
      <div id="benefit-section">
        <Benefits />
      </div>
      <div id="partner-section">
        <Partners />
      </div>
    </div>
  )
}

export default Main
