import React from 'react'
import './banner.css'
import Banner from '../../images/banner.png'

const banner = () => {
  return (
   <div>
      <div className="banneSection">
        
        <div className="bannerContent">
          <h1 className='name'>ELNUR KAZIMOV</h1>
          <h3>Front-End Developer</h3>
          <p>As a Front-End Developer, I create interactive, user-friendly, and visually appealing web experiences using modern technologies</p>
          <a href="mailto:ekazimov009@gmail.com" target='_blank' className="actionBtn">
          Contact Me
        </a>
        </div>

        <img src={Banner} alt="" />
      </div>
      </div>
      
  )
}

export default banner