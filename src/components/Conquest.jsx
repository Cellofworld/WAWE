import React from 'react'
import Line from './Line';
import rectangle88 from '../img/image/rectangle88.png'

function Conquest() {
  return (
    <div className='conquest page-pd'>
        <div className="conquest-title-cont">
            <div className="title-cont">
                <div className="title-title">ПОКОРЯЙ ВЕРШИНЫ</div>
                <Line />
            </div>
            <div className="conquest-desc-cont">
                <div className="conquest-desc-item">
                    Преподаватели нашей школы серфинга в числе лучших серферов на Канарских островах. Среди них - чемпион Европы по лонгборду, который с радостью поделится опытом как с новичками, так и более опытными серферами. 
                    Все члены преподавательского состава являются сертифицированными членами Федерации серфинга Канарских островов. Некоторые из них знают русский язык, что определенно позиционирует нас как русскую школу серфинга за границей!
                </div>
                <div className="conquest-desc-item">
                    Весь тренерский состав регулярно участвует в семинарах и курсах повышения квалификации, которые проводятся по всему миру различными известными серф-клубами и федерациями. Поэтому в нашей школе серфинга вы можете быть спокойны: вас обучают лучшие тренеры!
                </div>
                <div className="conquest-desc-item">
                    Методика обучения серфингу рассчитана как на новичков, на серферов среднего уровня, так и на серферов уровня ТОП. Тренеры находят подход к каждому, несмотря на то, что обучение серфингу в нашей школе производится в группах. Однако, мы предлагаем персональные уроки серфинга - только вы и тренер! П
                </div>
            </div>
        </div>
        <div className="conquest-img-cont">
            <img className='conquest-img' src={rectangle88} alt='img' />
        </div>
    </div>
  )
}

export default Conquest