import React from 'react'
import './skill.css'
import Html from '../../images/html.png'
import Css from '../../images/css.png'
import Js from '../../images/js.png'
import Bootstrap from '../../images/bootstrap.png'
import react from '../../images/react.png'
import Git from '../../images/git.png'



const index = () => {
    return (
        <>
            <h1 className='heading'>My Top Skills</h1>
            <div  id="skills">
                <div className="box" ><img src={Html} alt="" /></div>
                <div className="box"><img src={Css} alt="" /></div>
                <div className="box"><img src={Js} alt="" /></div>
                <div className="box"><img src={Bootstrap} alt="" /></div>
                <div className="box"><img src={react} alt="" /></div>
                <div className="box"><img src={Git} alt="" /></div>
            </div>
            
        </>
    )
}

export default index