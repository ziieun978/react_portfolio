import React from 'react'
import CardList from './Card/CardList'
import {projectData} from '../data/ProjectData'

const Project = () => {
  return (
    <div className='project_wrapper'>
      <h3>프로젝트</h3>
      <div className='card_view'>
        <CardList carditem={projectData} />

      </div>

    </div>
  )
}

export default Project