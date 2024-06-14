import React from 'react'
import './banner.css'
import Banner from '../../images/banner.png'

const index = () => {
  return (
    <>
      <div className="container">
        <div className="bannerContent">
          <h1 className='name'>ELNUR KAZIMOV</h1>
          <h3>Front-End Developer</h3>
          <p>As a Front-End Developer, I create interactive, user-friendly, and visually appealing web experiences using modern technologies</p>
         
          
          <a href='https://wa.me/+994705820708' target='_blank'>
          <button className="actionBtn" >Contact Me</button>
        </a>
         

        </div>

        <img src={Banner} alt="" />
      </div>

    </>
  )
}

export default index