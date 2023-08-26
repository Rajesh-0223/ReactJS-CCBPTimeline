// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {data} = props

  return (
    <div className="course-timeline-container">
      <div className="header-container">
        <h1 className="heading">{data.courseTitle}</h1>
        <div className="duration-container">
          <AiFillClockCircle />
          <p className="duration">{data.duration}</p>
        </div>
      </div>
      <p className="description">{data.description}</p>
      <div className="tags-container">
        {data.tagsList.map(eachTag => (
          <p className="tag-item">{eachTag.name}</p>
        ))}
      </div>
    </div>
  )
}

export default CourseTimelineCard
