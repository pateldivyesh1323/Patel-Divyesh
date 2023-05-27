import React from 'react'
import { frontend,backend,tools } from '../Images'

export default function About({reveal}) {
  
  window.addEventListener('scroll',()=>{
    reveal();
  })

  return (
    <section className="Skills">
      {/* <div className="skillsTitle">My Skills</div> */}
      <div className='skillsContainer'>
        <div className='skillsCard'>
          <div className='skillsCardItem reveal'>
            <div className="skillsCardItemTitle">Frontend</div>
            <img className='toolsImg' src={frontend} alt="frontend" />
            <span>Html</span>
            <span>CSS</span>
            <span>Javascript</span>
            <span>ReactJS</span>
          </div>
        </div>
        <div className='skillsCard'>
          <div className='skillsCardItem reveal'>
            <div className="skillsCardItemTitle">
              Backend
            </div>
            <img className='toolsImg' src={backend} alt="backend" />
            <span>NodeJS</span>
            <span>ExpressJS</span>
            <span>MongoDB</span>
            <span>Socket.io</span>
          </div>
        </div>
        <div className='skillsCard'>
          <div className='skillsCardItem reveal'>
            <div className="skillsCardItemTitle">
              Other Languages and Tools
            </div>
            <img className='toolsImg' src={tools} alt="tools" />
            <span>CPP</span>
            <span>Java</span>
            <span>Git</span>
            <span>Github</span>
            <span>VS Code</span>
          </div>
        </div>
      </div>
    </section>
  )
}
