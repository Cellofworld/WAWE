import React from 'react'
import Conquest from '../../components/Conquest'
import Gallery from '../../components/Gallery'
import Line from '../../components/Line'
import Quote from '../../components/Quote'
import Receiving from '../../components/Receiving'
import Video from '../../components/Video'
import WaweIcon from '../../components/WaweIcon'

function Services() {
  return (
    <div className='services' id='services'>
        <div className="title-cont">
            <div className="title-title">В  ШКОЛЕ ВЫ ПОЛУЧИТЕ</div>
            <Line />
        </div>
        <div className="receiving-services-cont">
            <Receiving />
            <div className="services-wawe-cont">
                <div className="services-wawe"> 
                    <WaweIcon data={ {widthIcon: 200, percent: '85', title: 'Приехали второй раз'}} />
                    <WaweIcon data={{widthIcon: 250, percent:'95',title: 'Научились кататься'}} />
                    <WaweIcon data={{widthIcon: 300, percent:'99', title:'Довольных клиентов'}} />

                </div>
                <div className="services-wawe-desc-cont">
                    <div className="services-wawe-desc">
                        Огромным преимуществом нашей школы является собственная методика обучения. Мы разработали собственный стиль обучения серфингу, который позволяет новичкам максимально быстро встать на доску. 
                    </div>
                    <div className="services-wawe-desc">
                        Именно наша методика и наши преподаватели позволили нам пройти аттестацию Федерации серфинга Канарских островов - FEDERACIÓN CANARIA DE SURF. Это означает, что наша школа соответствует всем мировым стандартам. Переаттестация производится ежегодно и это позволяет нам всегда стремиться к улучшению обучения.
                    </div>
                </div>
            </div>
        </div>
        <Conquest />
        <Gallery />
        <Quote />
        <Video />
        
    </div>
  )
}

export default Services