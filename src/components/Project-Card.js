import React from 'react';
import {v4 as uuid} from 'uuid'
function ProjectCard(props) {

  return(
    <div className='project-card' id = {props.id} key={uuid()}>
      {/* <img src = {props.url} alt = {props.alt} /> */}
      <h1 className="project">{props.name}</h1>
    </div>
  )
}

export default ProjectCard;