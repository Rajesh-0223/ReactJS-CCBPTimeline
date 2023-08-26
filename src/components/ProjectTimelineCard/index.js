// Write your code here
import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {data} = props

  return (
    <div className="projects-timeline-container">
      <img src={data.imageUrl} alt="project" className="project-image" />
      <div className="heading-container">
        <h1 className="heading">{data.projectTitle}</h1>
        <div className="duration-container">
          <AiFillCalendar />
          <p className="duration">{data.duration}</p>
        </div>
      </div>
      <p className="description">{data.description}</p>
      <div className="project-link-container">
        <a href={data.projectUrl} className="project-link">
          Visit
        </a>
      </div>
    </div>
  )
}

export default ProjectTimelineCard
