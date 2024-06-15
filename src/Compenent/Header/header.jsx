import React from 'react';
import './header.css';

import Logo from '../../images/logo.png'

const showMenu = () =>{
  document.querySelector('.links').classList.toggle('active')
}

const header = () => {
  return (
    <>
      <div className='navbar'>

        <div className='title'>
          <div className='logo'> <img src={Logo} alt="" /></div>
          <h3>Elnur <br /> Kazimov</h3>
        </div>
        <div className="links ">
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="#projects">My Works</a></li>
            <li><a href="#skills">Skills</a></li>
          </ul>
         
        </div>
        <i className="fa-solid fa-bars menuBtn " onClick={showMenu}></i>
         
       
      </div>
      </>
    
  )
}

export default header