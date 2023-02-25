import React from 'react'
import Line from '../../components/Line'
import TeamPres from '../../components/TeamPres'

function Team() {
  return (
    <div className='team page-pd' id='team'>
        <div className="title-cont">
            <div className="title-title">Наша команда</div>
            <Line />
        </div>
        <div className="team-cont">
            <TeamPres />
        </div>
    </div>
  )
}

export default Team