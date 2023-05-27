import React from 'react'
import projectsData from '../Data/data'
import './style.css'
import { enjoymovies, heatlevels } from '../Images'
// import path from 'path';
export default function Projects() {

  return (
    <section className='Projects'>
      <div className="projectsCont">
        {projectsData.map((item, index) => {
          return (<div key={index}>
            <div className="projectImageCont"><img src={item.image} alt={item.title}/></div>
          </div>)
        })}
      </div>
    </section>
  )
}
