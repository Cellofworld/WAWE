import React from 'react'
import CostItems from '../../components/CostItems'
import Line from '../../components/Line'

function Cost() {
  return (
    <div className='cost page-pd' id='cost'>
        <div className="title-cont">
            <div className="title-title">ПАКЕТЫ УСЛУГ</div>
            <Line />
        </div>
        <CostItems />
    </div>
  )
}

export default Cost