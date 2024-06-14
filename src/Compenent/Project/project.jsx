import React from 'react'
import './project.css'



const project = ({ project,index }) => {
    const { id, Title, DemoLink, RepoLink, Multimedia } = project;


    return (
        
           <>
           
               <div className="card">
                <p>#{id}</p>
                <h1>{Title}</h1>
                <video src={Multimedia} autoPlay muted loop></video>
                <div className="buttons">
                <a href={DemoLink} target='_blank'>Demo</a>
                <a href={RepoLink} target='_blank'>Code</a>
                </div>
                </div>
            
            </>
    )
}

export default project