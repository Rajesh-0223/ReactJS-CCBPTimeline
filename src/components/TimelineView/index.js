// Write your code here
import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  return (
    <div className="app-container">
      <h1 className="heading">
        MY JOURNEY OF <span className="ccbp-heading"> CCBP 4.0 </span>
      </h1>
      <div className="chrono-container">
        <Chrono
          mode="VERTICAL"
          items={timelineItemsList}
          theme={{secondary: 'white'}}
        >
          {timelineItemsList.map(eachItem => {
            if (eachItem.categoryId === 'COURSE') {
              return <CourseTimelineCard data={eachItem} />
            }
            return <ProjectTimelineCard data={eachItem} />
          })}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
